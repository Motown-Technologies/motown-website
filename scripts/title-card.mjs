// Renders a 1200x630 title card for a blog post and points the post's
// frontmatter at it. Run once when a post is created (or retitled):
//   node scripts/title-card.mjs <slug>
// Output is committed; nothing here runs during `astro build`.
import { readFile, writeFile } from "node:fs/promises";
import { titleCard, renderPng } from "./render.mjs";

const slug = process.argv[2];
if (!slug) throw new Error("usage: node scripts/title-card.mjs <slug>");

const postPath = `src/content/blog/${slug}.md`;
const post = await readFile(postPath, "utf8");
const title = post.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1];
if (!title) throw new Error(`no title in ${postPath}`);

const tree = titleCard({ eyebrow: "MOTOWN SOLUTIONS / BLOG", title, seed: slug });

const out = `src/assets/blog/${slug}.png`;
await writeFile(out, await renderPng(tree, 1200, 630));

// Frontmatter paths are relative to the post file.
if (!/^cover:/m.test(post)) {
    await writeFile(postPath, post.replace(/^(title:.*)$/m, `$1\ncover: ../../assets/blog/${slug}.png`));
}
console.log(`wrote ${out}`);
