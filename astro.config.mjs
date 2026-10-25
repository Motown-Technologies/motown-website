import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import markdownPages from "./markdown-pages.mjs";

import unpublishedLinks from "./unpublished-links.mjs";

// https://astro.build/config
export default defineConfig({
  // Required for sitemap + canonical URLs. Change if this deploys elsewhere.
  site: 'https://motowntech.com',
  // Astro's HTML minifier eats the significant space around inline <span>/<a>
  // when the markup puts them on their own line ("a <span>x</span> app.").
  compressHTML: false,
  server: { host: '0.0.0.0' },
  // unpublishedLinks runs first so the markdown copies get the cleaned HTML.
  integrations: [mdx(), react(), sitemap(), unpublishedLinks(), markdownPages()],
  vite: {
    plugins: [tailwindcss()]
  }
});
