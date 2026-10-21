import { getCollection } from "astro:content";

// Published posts, newest first. Drafts are included under `astro dev`.
export async function getPosts() {
    const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
