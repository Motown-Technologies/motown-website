// Links to blog posts that weren't built (scheduled or draft) become plain text.
import { test } from "node:test";
import assert from "node:assert/strict";
import { unwrapMissingBlogLinks } from "../unpublished-links.mjs";

const built = new Set(["/blog/live-post", "/blog/live-post/", "/blog"]);
const isBuilt = (path) => built.has(path);

test("unwraps links to unbuilt posts and keeps the text", () => {
    const { html, missing } = unwrapMissingBlogLinks(
        'Work through <a href="/blog/scheduled-post">whether it needs an <em>app</em></a> first.',
        isBuilt,
    );
    assert.equal(html, "Work through whether it needs an <em>app</em> first.");
    assert.deepEqual(missing, ["/blog/scheduled-post"]);
});

test("keeps links to built posts, including hash and trailing slash", () => {
    const src = '<a href="/blog/live-post">a</a> <a class="x" href="/blog/live-post/#part">b</a> <a href="/blog">c</a>';
    const { html, missing } = unwrapMissingBlogLinks(src, isBuilt);
    assert.equal(html, src);
    assert.deepEqual(missing, []);
});

test("ignores links outside /blog/", () => {
    const src = '<a href="/contact">contact</a> <a href="https://example.com/blog/x">ext</a>';
    assert.equal(unwrapMissingBlogLinks(src, () => false).html, src);
});
