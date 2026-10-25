// Scheduled and draft posts are left out of the build (src/lib/posts.ts),
// but a live post can already link to one. After the build, any link to a
// /blog/ page that wasn't built is unwrapped to its text, and the daily
// rebuild that publishes the target brings the link back. Checking the
// output rather than frontmatter dates means the content cache can't keep
// a stale unwrap around.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const BLOG_LINK = /<a\b[^>]*\bhref="(\/blog\/[^"#?]*)[^"]*"[^>]*>([\s\S]*?)<\/a>/g;

export function unwrapMissingBlogLinks(html, isBuilt) {
    const missing = [];
    const out = html.replace(BLOG_LINK, (link, path, text) => {
        if (isBuilt(path)) return link;
        missing.push(path);
        return text;
    });
    return { html: out, missing };
}

export default function unpublishedLinks() {
    return {
        name: "unpublished-links",
        hooks: {
            "astro:build:done": async ({ dir, logger }) => {
                const root = fileURLToPath(dir);
                const isBuilt = (path) => existsSync(join(root, path, "index.html"));
                for (const file of await readdir(root, { recursive: true })) {
                    if (!file.endsWith(".html")) continue;
                    const html = await readFile(join(root, file), "utf8");
                    const result = unwrapMissingBlogLinks(html, isBuilt);
                    if (!result.missing.length) continue;
                    await writeFile(join(root, file), result.html);
                    logger.info(`${file}: unlinked ${result.missing.join(", ")} (not published yet)`);
                }
            },
        },
    };
}
