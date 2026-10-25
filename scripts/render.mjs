// Shared pieces for the images rendered at post-creation time (title cards,
// LinkedIn carousels): house palette, fonts, contour art and satori -> PNG.
import { readFile } from "node:fs/promises";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { contours } from "../src/lib/contours.mjs";

export const C = { paper: "#f5f2ea", ink: "#0b0b0c", muted: "#4a4a4f", accent: "#1d4ed8" };

export const el = (type, style, children) => ({ type, props: { style, children } });

const font = (f) => readFile(new URL(`./fonts/${f}`, import.meta.url));
const fonts = Promise.all([
    font("space-grotesk-latin-700-normal.woff").then((data) => ({ name: "Space Grotesk", data, weight: 700 })),
    font("jetbrains-mono-latin-500-normal.woff").then((data) => ({ name: "JetBrains Mono", data, weight: 500 })),
    font("inter-latin-400-normal.woff").then((data) => ({ name: "Inter", data, weight: 400 })),
]);

// satori draws the "ff" ligature with the advance width of a single f, which
// leaves a gap after it ("Staff  still"). Lay text out word by word and
// split words containing "ff" into letters so no ligature forms.
// ponytail: catches ff only; add fi/fl here if the font ever ligates them too.
export function words(text, style) {
    const gap = style.fontSize * 0.24;
    return el("div", { display: "flex", flexWrap: "wrap", columnGap: gap, ...style },
        text.split(/\s+/).map((w) => /ff/.test(w)
            ? el("div", { display: "flex" }, [...w].map((ch) => el("span", {}, ch)))
            : el("span", {}, w)));
}

// Absolutely positioned contour lines, seeded so each post gets its own.
export function contourLayer(seed, width, height, { color = C.ink, opacity = 0.12 } = {}) {
    const lines = contours(seed, { width, height, count: Math.round(height / 45) })
        .map((pts) => `<polyline points="${pts}" />`);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none" stroke="${color}" stroke-width="1.5" opacity="${opacity}">${lines.join("")}</svg>`;
    return {
        type: "img",
        props: { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`, width, height, style: { position: "absolute", top: 0, left: 0 } },
    };
}

export async function renderPng(tree, width, height) {
    const svg = await satori(tree, { width, height, fonts: await fonts });
    return new Resvg(svg).render().asPng();
}

// The 1200x630 social card: eyebrow, title, site name, over contour lines
// seeded by `seed` so each page gets its own pattern.
export function titleCard({ eyebrow, title, seed }) {
    const size = title.length <= 40 ? 84 : title.length <= 70 ? 68 : 54;

    return el("div", { width: 1200, height: 630, display: "flex", position: "relative", background: C.paper, borderBottom: `14px solid ${C.ink}` }, [
        contourLayer(seed, 1200, 630),
        el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "64px 72px" }, [
            el("div", { display: "flex", alignItems: "center", gap: 16, fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: 3.5, color: C.muted }, [
                el("div", { width: 40, height: 2, background: C.ink }),
                eyebrow,
            ]),
            words(title, { fontFamily: "Space Grotesk", fontSize: size, lineHeight: 1.02, letterSpacing: -size * 0.015, color: C.ink, maxWidth: 1000 }),
            el("div", { display: "flex", alignItems: "center", gap: 20, fontFamily: "JetBrains Mono", fontSize: 20, letterSpacing: 3, color: C.ink }, [
                el("div", { width: 72, height: 8, background: C.accent }),
                "MOTOWNTECH.COM",
            ]),
        ]),
    ]);
}
