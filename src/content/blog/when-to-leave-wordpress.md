---
title: "When it's time to leave WordPress"
image: ../../assets/blog/when-to-leave-wordpress-image.jpg
imageAlt: "A heavy old filing cabinet next to a single slim blue binder on a blue floor"
cover: ../../assets/blog/when-to-leave-wordpress.png
description: "The signs that WordPress upkeep has become a job of its own, when staying put is fine, and what moving off it involves."
pubDate: 2026-10-09
relatedPages: ["/migrate-from-wordpress"]
draft: true
---

WordPress is easy to start with. The trouble tends to show up years later, after enough plugins, themes and quick fixes that keeping the site running has become a job of its own.

Here is how we think about whether a site should move off it.

## The signs it's time

These are the complaints we hear on first calls about WordPress sites:

- A dozen plugins are waiting on updates, and nobody is sure which one will break the site.
- Bots hammer `/wp-admin` all day.
- PHP and a database run on every page view, and mobile PageSpeed scores are in the red.
- The theme is something only the original developer understands.

Each of these has a cost. Plugin updates eat into your team's week. Every plugin adds code that attackers can probe. And pages get slower as the plugin list grows.

## When staying is fine

If your site runs a handful of plugins, updates go through without drama and pages load quickly on a phone, WordPress is doing its job. A migration takes real work, and we wouldn't spend it on a site that isn't causing problems. The case for leaving starts when keeping the site alive takes more of your team's time than writing for it.

## What leaving looks like

You can keep the editor your team already knows. We rebuild the site as pages built ahead of time and served as plain HTML. Visitors never touch PHP or a database, so pages load fast and there is far less to attack. No plugins run on the public site.

For editing, there are two routes. WordPress can stay on as a back office that only your editors see, or you can move to a newer CMS. We help you pick based on who edits and how often. Either way, when an editor hits publish, the site rebuilds itself, and nobody on your team has to think about it.

Contact forms, analytics and newsletter signups get rebuilt without plugins. The theme nobody understood is replaced with clean code that we document and hand over.

## Keeping your search rankings

The biggest worry is usually SEO. We crawl the old site, map every URL to its new address and set up 301 redirects, so your rankings carry over. Posts, pages, media, categories and custom fields come over in bulk by script, and we check them against the original.

## How the move runs

1. Audit the site. We inventory every page, plugin, form and redirect, and work out which plugins you actually need.
2. Choose the CMS: WordPress kept as a back office, or a new one.
3. Rebuild and migrate. We build the new front end and import your content, so you review real pages with real content.
4. Redirect and launch. Every old URL gets a 301, and after launch we check the redirects and watch Search Console for crawl errors.

Your current site stays live the whole time. We only switch DNS once the new one checks out.

## An example

An endoscopy center's site ran on a full WordPress install. We rebuilt it as static pages that pull content from WordPress at build time. Patients never touch WordPress, and staff still edit in the admin they know. The [endoscopy center case study](/case-studies/endoscopy-center) has the details.

If you're weighing a move, [send us your site's URL](/contact). We'll look at what it runs on, tell you what moving would involve and give you a realistic timeline. The [WordPress migration page](/migrate-from-wordpress) covers how we do it.
