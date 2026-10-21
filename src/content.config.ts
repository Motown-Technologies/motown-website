import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        // 1200x630 title card from scripts/title-card.mjs, used only as the
        // social preview (og:image).
        cover: image().optional(),
        // Text-free header image: top of the post page and the thumbnail on
        // /blog and the homepage. Without one, the post page draws contour
        // art seeded by the post id and lists show no thumbnail.
        image: image().optional(),
        imageAlt: z.string().default(""),
        // Site paths this post draws on, e.g. "/case-studies/auction-operations".
        // Those pages list the post under "Related posts".
        relatedPages: z.array(z.string()).default([]),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        // Drafts render in `astro dev` and are left out of the build.
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
