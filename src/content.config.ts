import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        // 1200x630 title card from scripts/title-card.mjs: the /blog
        // thumbnail and the social preview (og:image).
        cover: image().optional(),
        // Text-free image at the top of the post. Without one, the post
        // page draws contour art seeded by the post id.
        image: image().optional(),
        imageAlt: z.string().default(""),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // Drafts render in `astro dev` and are left out of the build.
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
