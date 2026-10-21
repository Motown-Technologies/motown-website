// Renders a LinkedIn carousel (PDF document post) for a blog post from
// linkedin/<slug>/carousel.json:
//   { "cover": "hook headline", "slides": [{ "title": "...", "body": "..." }] }
// The cover uses the post's header image when it has one; a closing slide
// pointing to the full post is added automatically. Run once per post:
//   node scripts/carousel.mjs <slug> [--png <dir>]   (--png also writes each slide)
// The PDF goes to ~/Documents/Motown Carousels/<slug>.pdf (override with
// CAROUSEL_DIR); it is an upload for LinkedIn, so it stays out of the repo.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { PDFDocument } from "pdf-lib";
import { C, el, words, contourLayer, renderPng } from "./render.mjs";

const [slug] = process.argv.slice(2);
const pngAt = process.argv.indexOf("--png");
const pngDir = pngAt > 0 ? process.argv[pngAt + 1] : null;
if (!slug) throw new Error("usage: node scripts/carousel.mjs <slug> [--png <dir>]");

const W = 1080, H = 1350, PAD = 88;
const { cover, slides } = JSON.parse(await readFile(`linkedin/${slug}/carousel.json`, "utf8"));
const total = slides.length + 2;

const mono = (size, color, extra) => ({ fontFamily: "JetBrains Mono", fontSize: size, letterSpacing: size * 0.18, color, ...extra });
const display = (size, color) => ({ fontFamily: "Space Grotesk", fontSize: size, lineHeight: 1.05, letterSpacing: -size * 0.015, color });
const counter = (n, color = C.muted) => el("div", mono(22, color), `${String(n).padStart(2, "0")} / ${String(total).padStart(2, "0")}`);
const eyebrow = (text, color = C.muted, rule = C.ink) =>
    el("div", { display: "flex", alignItems: "center", gap: 18, ...mono(22, color) }, [el("div", { width: 44, height: 2, background: rule }), text]);

// Cover: header image across the top half when the post has one.
async function coverSlide() {
    const imgPath = `src/assets/blog/${slug}-image.jpg`;
    const imgH = 700;
    const img = existsSync(imgPath)
        ? `data:image/jpeg;base64,${(await sharp(imgPath).resize(W, imgH, { fit: "cover" }).jpeg({ quality: 90 }).toBuffer()).toString("base64")}`
        : null;
    return el("div", { width: W, height: H, display: "flex", flexDirection: "column", position: "relative", background: C.paper }, [
        img
            ? { type: "img", props: { src: img, width: W, height: imgH, style: { width: W, height: imgH } } }
            : el("div", { width: W, height: imgH, display: "flex", position: "relative", background: C.paper }, [contourLayer(slug, W, imgH, { opacity: 0.35 })]),
        el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, padding: `56px ${PAD}px 72px` }, [
            eyebrow("MOTOWN SOLUTIONS"),
            words(cover, display(cover.length <= 55 ? 92 : 76, C.ink)),
            el("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [
                el("div", { display: "flex", alignItems: "center", gap: 18, ...mono(22, C.ink) }, [el("div", { width: 72, height: 8, background: C.accent }), "SWIPE"]),
                counter(1),
            ]),
        ]),
    ]);
}

function pointSlide({ title, body }, n) {
    return el("div", { width: W, height: H, display: "flex", position: "relative", background: C.paper, borderBottom: `16px solid ${C.ink}` }, [
        contourLayer(`${slug}-${n}`, W, H),
        el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: `${PAD}px` }, [
            el("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [eyebrow("MOTOWN SOLUTIONS"), counter(n)]),
            el("div", { display: "flex", flexDirection: "column", gap: 40 }, [
                el("div", { width: 72, height: 8, background: C.accent }),
                words(title, display(title.length <= 40 ? 80 : 64, C.ink)),
                el("div", { display: "flex", fontFamily: "Inter", fontSize: 40, lineHeight: 1.45, color: C.muted }, body),
            ]),
            el("div", mono(22, C.muted), "MOTOWNTECH.COM"),
        ]),
    ]);
}

function ctaSlide(n) {
    return el("div", { width: W, height: H, display: "flex", position: "relative", background: C.ink }, [
        contourLayer(`${slug}-cta`, W, H, { color: C.paper, opacity: 0.1 }),
        el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: `${PAD}px` }, [
            el("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [eyebrow("MOTOWN SOLUTIONS", "#a1a1a6", C.paper), counter(n, "#a1a1a6")]),
            el("div", { display: "flex", flexDirection: "column", gap: 40 }, [
                words("Read the full write-up", display(84, C.paper)),
                el("div", { display: "flex", fontFamily: "Inter", fontSize: 36, lineHeight: 1.45, color: "#a1a1a6" }, `motowntech.com/blog/${slug}`),
            ]),
            el("div", { display: "flex", alignItems: "center", gap: 18, ...mono(22, C.paper) }, [el("div", { width: 72, height: 8, background: C.accent }), "LINK IN THE COMMENTS"]),
        ]),
    ]);
}

const trees = [await coverSlide(), ...slides.map((s, i) => pointSlide(s, i + 2)), ctaSlide(total)];
const pdf = await PDFDocument.create();
if (pngDir) await mkdir(pngDir, { recursive: true });
for (const [i, tree] of trees.entries()) {
    const png = await renderPng(tree, W, H);
    if (pngDir) await writeFile(`${pngDir}/${String(i + 1).padStart(2, "0")}.png`, png);
    const page = pdf.addPage([W, H]);
    page.drawImage(await pdf.embedPng(png), { x: 0, y: 0, width: W, height: H });
}
pdf.setTitle(cover);
const outDir = process.env.CAROUSEL_DIR ?? join(homedir(), "Documents", "Motown Carousels");
await mkdir(outDir, { recursive: true });
const out = join(outDir, `${slug}.pdf`);
await writeFile(out, await pdf.save());
console.log(`wrote ${out} (${trees.length} slides)`);
