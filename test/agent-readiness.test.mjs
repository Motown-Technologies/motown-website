// Run after `npm run build`: the last tests read dist/.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import middleware, { config, wantsMarkdown, NOT_FOUND_MD } from "../middleware.js";
import { htmlToMarkdown } from "../markdown-pages.mjs";

const dist = new URL("../dist/", import.meta.url);

test("wantsMarkdown honours Accept and q-values", () => {
    assert.equal(wantsMarkdown("text/markdown"), true);
    assert.equal(wantsMarkdown("text/markdown, text/html;q=0.5"), true);
    assert.equal(wantsMarkdown("text/html,application/xhtml+xml,*/*;q=0.8"), false);
    assert.equal(wantsMarkdown("text/html, text/markdown;q=0.5"), false);
    assert.equal(wantsMarkdown("text/markdown;q=0"), false);
    assert.equal(wantsMarkdown(""), false);
});

test("matcher skips files with extensions, so the .md fetch can't loop", () => {
    const re = new RegExp(`^${config.matcher}$`);
    for (const p of ["/", "/about", "/services/automation", "/__ora-404-probe"]) assert.ok(re.test(p), p);
    for (const p of ["/index.md", "/about/index.md", "/llms.txt", "/_astro/x.css", "/favicon.png"]) assert.ok(!re.test(p), p);
});

function withFetch(pages, fn) {
    const orig = globalThis.fetch;
    const seen = [];
    globalThis.fetch = async (url) => {
        seen.push(new URL(url).pathname);
        const body = pages[new URL(url).pathname];
        return body ? new Response(body) : new Response("nope", { status: 404 });
    };
    return fn(seen).finally(() => (globalThis.fetch = orig));
}

const req = (path, accept) => new Request(`https://motowntech.com${path}`, { headers: { accept } });

test("HTML requests pass through untouched", async () => {
    assert.equal(await middleware(req("/", "text/html")), undefined);
});

test("markdown request serves the page's index.md with Vary: Accept", () =>
    withFetch({ "/index.md": "# Home\n", "/about/index.md": "# About\n" }, async (seen) => {
        for (const [path, body] of [["/", "# Home\n"], ["/about", "# About\n"], ["/about/", "# About\n"]]) {
            const res = await middleware(req(path, "text/markdown"));
            assert.equal(res.status, 200);
            assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
            assert.equal(res.headers.get("vary"), "Accept");
            assert.equal(await res.text(), body);
        }
        assert.deepEqual(seen, ["/index.md", "/about/index.md", "/about/index.md"]);
    }));

test("unknown path with markdown Accept gets a Markdown 404", () =>
    withFetch({}, async () => {
        const res = await middleware(req("/__ora-404-probe-xkx9vl8p", "text/markdown"));
        assert.equal(res.status, 404);
        assert.equal(res.headers.get("content-type"), "text/markdown; charset=utf-8");
        const body = await res.text();
        assert.equal(body, NOT_FOUND_MD);
        assert.ok(body.length >= 20);
        assert.match(body, /https:\/\/motowntech\.com\/llms\.txt/);
    }));

test("htmlToMarkdown keeps content, drops chrome and decoration", () => {
    const md = htmlToMarkdown(`<html><head><title>T</title></head><body>
        <nav>menu</nav><h1>Hello</h1><span aria-hidden>→</span>
        <a href="/x"><h3>Card</h3><p>Body</p></a><footer>foot</footer><script>x()</script></body></html>`);
    assert.equal(md, "# Hello\n\n### Card\n\nBody\n\n[Card](/x)\n");
});

test("build emitted index.md for every page", { skip: !existsSync(dist) && "no dist/" }, () => {
    const home = readFileSync(new URL("index.md", dist), "utf8");
    assert.match(home, /^# Where ideas/m);
    assert.doesNotMatch(home, /<script|<nav|<footer/);
    assert.ok(existsSync(new URL("about/index.md", dist)));
    assert.ok(!existsSync(new URL("404.md", dist)));
});

test("llms.txt follows llmstxt.org and has when-to-use guidance", { skip: !existsSync(dist) && "no dist/" }, () => {
    const txt = readFileSync(new URL("llms.txt", dist), "utf8");
    assert.match(txt, /^# Motown Solutions\n\n> .+\n/);
    assert.match(txt, /^## When to use Motown Solutions$/m);
    // Every linked .md file must exist in the build.
    for (const [, path] of txt.matchAll(/\]\(https:\/\/motowntech\.com(\/[^)]*\.md)\)/g)) {
        assert.ok(existsSync(new URL("." + path, dist)), path);
    }
});

test("Organization JSON-LD has description and contactPoint", { skip: !existsSync(dist) && "no dist/" }, () => {
    const html = readFileSync(new URL("index.html", dist), "utf8");
    const org = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(org["@type"], "Organization");
    assert.ok(org.description.length > 20);
    assert.equal(org.contactPoint["@type"], "ContactPoint");
    assert.ok(org.contactPoint.contactType && org.contactPoint.email && org.contactPoint.telephone);
});
