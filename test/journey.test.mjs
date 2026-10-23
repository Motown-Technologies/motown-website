// The contact form's visit-path fields, run against the inline script in
// BaseLayout with a fake browser (sessionStorage, location, page-load events).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const layout = readFileSync(new URL("../src/layouts/BaseLayout.astro", import.meta.url), "utf8");
const script = layout.match(/<script is:inline data-journey>([\s\S]*?)<\/script>/)[1];

function browser(firstUrl, referrer) {
    const store = new Map();
    const listeners = [];
    const url = new URL(firstUrl);
    const ctx = {
        sessionStorage: { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)) },
        location: { origin: url.origin, pathname: url.pathname, search: url.search },
        document: { referrer, title: "", addEventListener: (e, f) => listeners.push(f) },
        URLSearchParams,
        JSON,
    };
    ctx.window = ctx;
    const titles = {
        "/blog/mvp-what-to-build-first": "What to build first in an MVP, and what to leave out",
        "/mvp-development": "MVP Development for Startups | Motown Solutions",
        "/case-studies/auction-operations": "Auction Operations Platform Case Study | Motown Solutions",
        "/services/web-design": "Web Design & Development Services | Motown Solutions",
        "/about": "About Motown Solutions | Software in New York and Florida",
        "/contact": "Contact Motown Solutions | Start a Software Project",
    };
    ctx.document.title = titles[url.pathname] ?? "";
    vm.runInNewContext(script, ctx);
    // ClientRouter navigation: new path, no reload, astro:page-load fires.
    const go = (path) => {
        const u = new URL(path, url.origin);
        ctx.document.title = titles[u.pathname] ?? "";
        ctx.location.pathname = u.pathname;
        ctx.location.search = u.search;
        listeners.forEach((f) => f());
    };
    return { go, fields: () => ({ ...ctx.window.motownJourneyFields() }) };
}

test("records landing page, outside referrer, campaign and the page before contact", () => {
    const b = browser(
        "https://motowntech.com/blog/mvp-what-to-build-first?utm_source=linkedin&utm_medium=social&utm_campaign=mvp",
        "https://www.linkedin.com/",
    );
    b.go("/mvp-development");
    b.go("/contact");
    assert.deepEqual(b.fields(), {
        "Came from": "Landing page: MVP Development for Startups",
        "Landing page": "/blog/mvp-what-to-build-first?utm_source=linkedin&utm_medium=social&utm_campaign=mvp",
        "Referrer": "https://www.linkedin.com/",
        "Campaign": "utm_source=linkedin&utm_medium=social&utm_campaign=mvp",
        "Page before contact": "/mvp-development",
        "Pages viewed": "/blog/mvp-what-to-build-first > /mvp-development > /contact",
    });
});

test("direct visit straight to the contact page", () => {
    const b = browser("https://motowntech.com/contact", "");
    const f = b.fields();
    assert.equal(f["Referrer"], "(direct or unknown)");
    assert.equal(f["Campaign"], "(none)");
    assert.equal(f["Page before contact"], "(came straight to contact)");
    assert.equal(f["Came from"], "(came straight to contact)");
});

test("names the kind of page the visitor came from", () => {
    const cases = [
        ["/case-studies/auction-operations", "Case study: Auction Operations Platform"],
        ["/services/web-design", "Service: Web Design & Development Services"],
        ["/blog/mvp-what-to-build-first", "Blog post: What to build first in an MVP, and what to leave out"],
        ["/about", "About page"],
    ];
    for (const [path, label] of cases) {
        const b = browser(`https://motowntech.com${path}`, "");
        b.go("/contact");
        assert.equal(b.fields()["Came from"], label, path);
    }
});

test("ignores same-site referrers and repeated page-load events", () => {
    const b = browser("https://motowntech.com/about", "https://motowntech.com/");
    b.go("/about"); // the initial astro:page-load fires on the same page
    b.go("/contact");
    const f = b.fields();
    assert.equal(f["Referrer"], "(direct or unknown)");
    assert.equal(f["Pages viewed"], "/about > /contact");
    assert.equal(f["Page before contact"], "/about");
});
