// Vercel Routing Middleware: Markdown content negotiation.
// `Accept: text/markdown` gets the build-time index.md for the page (see
// markdown-pages.mjs), or a Markdown 404. Everyone else falls through to the
// static HTML.

export const config = {
    // Pages only; anything with a file extension (incl. the .md files we
    // fetch below) skips the middleware.
    matcher: "/((?!.*\\.).*)",
};

const MD_HEADERS = {
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
};

export const NOT_FOUND_MD = `# 404 Not Found

There is no page at this address on motowntech.com.

- Site overview for agents: https://motowntech.com/llms.txt
- Full page list: https://motowntech.com/sitemap-index.xml
- Home: https://motowntech.com/
`;

function quality(accept, type) {
    for (const part of accept.split(",")) {
        const [media, ...params] = part.trim().toLowerCase().split(";");
        if (media.trim() !== type) continue;
        const q = params.find((p) => p.trim().startsWith("q="));
        return q ? parseFloat(q.split("=")[1]) || 0 : 1;
    }
    return 0;
}

export function wantsMarkdown(accept = "") {
    const md = quality(accept, "text/markdown");
    return md > 0 && md >= quality(accept, "text/html");
}

export default async function middleware(request) {
    if (!wantsMarkdown(request.headers.get("accept") ?? "")) return;

    const url = new URL(request.url);
    const mdPath = url.pathname.replace(/\/$/, "") + "/index.md";
    const res = await fetch(new URL(mdPath, url));
    if (res.ok) {
        return new Response(await res.text(), { headers: MD_HEADERS });
    }
    return new Response(NOT_FOUND_MD, { status: 404, headers: MD_HEADERS });
}
