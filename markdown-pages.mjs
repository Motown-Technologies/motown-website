// Writes an index.md next to every built index.html so middleware.js can
// answer `Accept: text/markdown` requests with the same page content.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import TurndownService from "turndown";

export function htmlToMarkdown(html) {
    const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-" });
    td.remove(["script", "style", "svg", "noscript", "nav", "footer", "form"]);
    td.remove((node) => node.hasAttribute?.("aria-hidden"));
    // Card-style links wrap whole blocks; emit the block, then a plain link.
    td.addRule("blockLink", {
        filter: (node) => node.nodeName === "A" && node.querySelector("h1,h2,h3,h4,h5,h6,p,div"),
        replacement: (content, node) =>
            `\n\n${content.trim()}\n\n[${node.querySelector("h1,h2,h3,h4,h5,h6")?.textContent.trim() || "More"}](${node.getAttribute("href")})\n\n`,
    });
    const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? html;
    return td.turndown(body).replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export default function markdownPages() {
    return {
        name: "markdown-pages",
        hooks: {
            "astro:build:done": async ({ dir }) => {
                const root = fileURLToPath(dir);
                for (const file of await readdir(root, { recursive: true })) {
                    if (!file.endsWith("index.html")) continue;
                    const html = await readFile(join(root, file), "utf8");
                    await writeFile(join(root, file.replace(/html$/, "md")), htmlToMarkdown(html));
                }
            },
        },
    };
}
