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
