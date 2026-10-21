// Wavy contour lines seeded by a string, so each blog post gets its own
// pattern. Shared by scripts/title-card.mjs and the post page art.
export function contours(seed, { width = 1200, height = 630, count = 14 } = {}) {
    let h = [...seed].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
    const rand = () => (h = (h * 1664525 + 1013904223) >>> 0) / 2 ** 32;
    const amp = 20 + rand() * 40, freq = 0.004 + rand() * 0.008, phase = rand() * 6;
    const gap = height / count;
    return Array.from({ length: count }, (_, i) => {
        const pts = [];
        for (let x = 0; x <= width; x += 20) {
            pts.push(`${x},${(gap * (i + 0.5) + Math.sin(x * freq + phase + i * 0.35) * amp * (0.5 + i / (2 * count))).toFixed(1)}`);
        }
        return pts.join(" ");
    });
}
