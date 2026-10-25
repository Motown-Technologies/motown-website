// Renders a 1200x630 social card for an .astro page from its H1 and points
// the page's BaseLayout at it. Run once per page (again if the H1 changes):
//   node scripts/page-card.mjs <src/pages/....astro> "<EYEBROW>"
// Output is committed to public/og/; nothing here runs during `astro build`.
import { readFile, writeFile } from "node:fs/promises";
import { titleCard, renderPng } from "./render.mjs";

const [pagePath, eyebrow] = process.argv.slice(2);
if (!pagePath || !eyebrow) throw new Error('usage: node scripts/page-card.mjs <page.astro> "<EYEBROW>"');

const page = await readFile(pagePath, "utf8");
const h1 = page.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
if (!h1) throw new Error(`no <h1> in ${pagePath}`);
const title = h1.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replace(/\s+([.,])/g, "$1").trim();

const name = pagePath.replace(/^src\/pages\//, "").replace(/(\/index)?\.astro$/, "").replaceAll("/", "-");
const out = `public/og/${name}.png`;
await writeFile(out, await renderPng(titleCard({ eyebrow, title, seed: name }), 1200, 630));

if (!page.includes("og_image=")) {
    await writeFile(pagePath, page.replace("<BaseLayout", `<BaseLayout\n    og_image="/og/${name}.png"`));
}
console.log(`wrote ${out}: ${title}`);
