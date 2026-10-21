// Renders a 1200x630 title card for a blog post and points the post's
// frontmatter at it. Run once when a post is created (or retitled):
//   node scripts/title-card.mjs <slug>
// Output is committed; nothing here runs during `astro build`.
import { readFile, writeFile } from "node:fs/promises";
import { C, el, contourLayer, renderPng } from "./render.mjs";

const slug = process.argv[2];
if (!slug) throw new Error("usage: node scripts/title-card.mjs <slug>");

const postPath = `src/content/blog/${slug}.md`;
const post = await readFile(postPath, "utf8");
const title = post.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1];
if (!title) throw new Error(`no title in ${postPath}`);

const size = title.length <= 40 ? 84 : title.length <= 70 ? 68 : 54;

const tree = el("div", { width: 1200, height: 630, display: "flex", position: "relative", background: C.paper, borderBottom: `14px solid ${C.ink}` }, [
    contourLayer(slug, 1200, 630),
    el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "64px 72px" }, [
        el("div", { display: "flex", alignItems: "center", gap: 16, fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: 3.5, color: C.muted }, [
            el("div", { width: 40, height: 2, background: C.ink }),
            "MOTOWN SOLUTIONS / BLOG",
        ]),
        el("div", { display: "flex", fontFamily: "Space Grotesk", fontSize: size, lineHeight: 1.02, letterSpacing: -size * 0.015, color: C.ink, maxWidth: 1000 }, title),
        el("div", { display: "flex", alignItems: "center", gap: 20, fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: 3, color: C.ink }, [
            el("div", { width: 72, height: 8, background: C.accent }),
            "MOTOWNTECH.COM",
        ]),
    ]),
]);

const out = `src/assets/blog/${slug}.png`;
await writeFile(out, await renderPng(tree, 1200, 630));

// Frontmatter paths are relative to the post file.
if (!/^cover:/m.test(post)) {
    await writeFile(postPath, post.replace(/^(title:.*)$/m, `$1\ncover: ../../assets/blog/${slug}.png`));
}
console.log(`wrote ${out}`);
