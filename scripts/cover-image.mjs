// Saves the text-free image at the top of a blog post and points the post's
// frontmatter at it. Run once when a post is created. Two ways in:
//
// 1. Image already generated (e.g. through the Higgsfield MCP connector):
//      node scripts/cover-image.mjs <slug> --url <image url> "<alt text>"
//    Generate it with the prompt from --dry-run below, at 21:9.
//
// 2. Generate with the Higgsfield API (costs credits):
//      node scripts/cover-image.mjs <slug> "<scene>" "<alt text>" [--dry-run]
//    .env: HIGGSFIELD_KEY=<key id>:<key secret>
//          HIGGSFIELD_MODEL=marketing-studio/image   (optional)
//
// <scene> is what to show; scripts/cover-style.txt wraps it in the house
// style. Output is committed; nothing here runs during `astro build`.
import { readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const args = process.argv.slice(2).filter((a) => a !== "--dry-run");
const dryRun = process.argv.includes("--dry-run");
const urlAt = args.indexOf("--url");
const givenUrl = urlAt > 0 ? args.splice(urlAt, 2)[1] : null;
const [slug, scene, alt] = givenUrl ? [args[0], null, args[1]] : args;
if (!slug || !alt || (!scene && !givenUrl)) {
    throw new Error('usage: node scripts/cover-image.mjs <slug> ("<scene>" | --url <image url>) "<alt text>" [--dry-run]');
}

const postPath = `src/content/blog/${slug}.md`;
const post = await readFile(postPath, "utf8");

async function generate() {
    const style = await readFile(new URL("./cover-style.txt", import.meta.url), "utf8");
    const body = {
        prompt: style.replace("{{scene}}", scene).trim(),
        aspect_ratio: "21:9", // cropped to the post page's 12:5 below
        resolution: "2k",
        quality: "high",
    };
    if (dryRun) {
        console.log(JSON.stringify(body, null, 2));
        process.exit(0);
    }

    try {
        process.loadEnvFile();
    } catch {}
    const key = process.env.HIGGSFIELD_KEY;
    if (!key?.includes(":")) throw new Error("set HIGGSFIELD_KEY=<key id>:<key secret> in .env");
    const model = process.env.HIGGSFIELD_MODEL ?? "marketing-studio/image";
    const headers = { Authorization: `Key ${key}`, "Content-Type": "application/json" };

    async function api(url, init) {
        const res = await fetch(url, { ...init, headers: { ...headers, ...init?.headers } });
        const text = await res.text();
        if (!res.ok) throw new Error(`${res.status} from ${url}: ${text}`);
        return JSON.parse(text);
    }

    // The Idempotency-Key means a retried submit can't be charged twice.
    let job = await api(`https://api.higgsfield.ai/${model}`, {
        method: "POST",
        headers: { "Idempotency-Key": randomUUID() },
        body: JSON.stringify(body),
    });
    console.log(`submitted ${job.request_id}`);

    const deadline = Date.now() + 5 * 60_000;
    while (job.status !== "completed") {
        if (["failed", "nsfw", "canceled", "cancelled"].includes(job.status)) {
            throw new Error(`generation ${job.status}: ${JSON.stringify(job)}`);
        }
        if (Date.now() > deadline) throw new Error(`timed out; check ${job.status_url}`);
        await new Promise((r) => setTimeout(r, 3000));
        job = await api(job.status_url ?? `https://api.higgsfield.ai/requests/${job.request_id}/status`);
    }

    const url = job.images?.[0]?.url;
    if (!url) throw new Error(`completed without an image: ${JSON.stringify(job)}`);
    return url;
}

const url = givenUrl ?? (await generate());
const res = await fetch(url);
if (!res.ok) throw new Error(`${res.status} downloading ${url}`);
const img = Buffer.from(await res.arrayBuffer());

const out = `src/assets/blog/${slug}-image.jpg`;
await sharp(img).resize(1800, 750, { fit: "cover", position: "attention" }).jpeg({ quality: 88 }).toFile(out);

// Frontmatter paths are relative to the post file. Replace any earlier image.
const fm = `image: ../../assets/blog/${slug}-image.jpg\nimageAlt: ${JSON.stringify(alt)}`;
const updated = post.replace(/^image:.*\n(imageAlt:.*\n)?/m, "").replace(/^(title:.*)$/m, `$1\n${fm}`);
await writeFile(postPath, updated);
console.log(`wrote ${out}`);
