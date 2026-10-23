import { getCollection, type CollectionEntry } from "astro:content";

export const CATEGORIES = {
    "case-stories": "Case stories",
    ai: "AI",
    software: "Software",
} as const;
export type Category = keyof typeof CATEGORIES;

// Live means published and dated today or earlier when the site is built.
// Future-dated posts stay out of the build until a later (daily) rebuild.
export const isScheduled = (data: CollectionEntry<"blog">["data"]) => data.pubDate.valueOf() > Date.now();
const isLive = (data: CollectionEntry<"blog">["data"]) => !data.draft && !isScheduled(data);

// Newest first. Drafts and scheduled posts are included under `astro dev`.
export async function getPosts(category?: Category) {
    const posts = await getCollection(
        "blog",
        ({ data }) => (import.meta.env.DEV || isLive(data)) && (!category || data.category === category),
    );
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
