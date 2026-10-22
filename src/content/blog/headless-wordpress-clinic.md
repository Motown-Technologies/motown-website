---
title: "How a clinic kept WordPress for editing and went static"
image: ../../assets/blog/headless-wordpress-clinic-image.jpg
imageAlt: "An empty blue stage with ropes and pulleys visible backstage"
cover: ../../assets/blog/headless-wordpress-clinic.png
description: "An endoscopy center kept WordPress for its staff and moved it out of the way of patients. Here is how publishing works now, and why the site stays up."
pubDate: 2026-10-14
relatedPages: ["/case-studies/endoscopy-center", "/migrate-from-wordpress"]
---

An outpatient endoscopy center ran its public website as a full WordPress install. Every time a patient opened a page, PHP, a database and a stack of plugins put that page together on the spot. The staff liked editing it. Nobody liked how it loaded.

The usual fix for a slow WordPress site is to replace WordPress. That works, and it also takes away the one tool the office already knows how to use. We kept WordPress exactly where it was and changed everything in front of it.

## WordPress only runs when someone publishes

The public site is now plain HTML pages, built ahead of time and served from hosting we run. WordPress still holds all the content: pages, provider bios, procedures and the navigation menu. The site reads that content while it builds and then serves finished files. A patient loading a page never touches WordPress at all.

That one decision changes what can go wrong. A slow database, a plugin update or an expiring certificate on the editing side used to slow down or break the public site. Now each of those is an inconvenience for staff, and patients don't notice. The CMS could be down all week and the public pages would keep loading.

There is a cost, and we tell clients about it up front. The build does need WordPress reachable while it runs. If WordPress is down during a build, the build fails and the previous version of the site stays up. For a medical practice, that is the failure you want.

## Publishing is still one button

The whole point of keeping WordPress was that nobody on staff would have to learn anything new. So publishing works the way it always did. An editor changes a page, a provider bio or a menu item in WordPress and presses publish.

Behind that button, a small plugin we wrote notices that published content changed. It waits ninety seconds so that a burst of edits turns into one job. Ten quick saves produce one rebuild. Then it asks the host to rebuild the site, and the new pages replace the old ones only once the whole set is ready. No developer and no deploy button are involved, and the editor doesn't need to know any of it is happening.

## A build that stops when something looks wrong

Moving WordPress out of the way of patients moves the risk into the build, so most of the engineering went there.

Every piece of content WordPress sends is checked before it's used. If a field gets renamed or a content type changes shape, the build stops with a clear error and the live site stays as it was. A production build never fills a gap with placeholder text. If something can't be fetched, the page comes out as a not-found page, and those pages are kept out of search results.

HTML written in the editor is cleaned on the way in, with scripts, forms and embedded frames stripped out. Every change to the code is also built against a stand-in copy of WordPress before it goes anywhere near the live site, so a broken build never reaches patients.

## The small things editors used to fix by hand

A few problems disappeared because the build now handles them:

- Images left over from the old site used to break or shift the page as they loaded. Old image addresses are now rewritten during the build, and every image gets its size set in advance and loads only when needed.
- Meta descriptions, the summaries that appear in search results, used to be written by hand when they were written at all. Each page now gets one generated from its own content.
- The navigation menu still comes from WordPress, so editors stay in control of it.

We also did an accessibility pass covering contrast, keyboard navigation, a working skip link and reduced motion, and left automated tests in place so those fixes stay fixed.

## When this approach fits

If your team is comfortable in WordPress and the problem is how the site performs for visitors, replacing the CMS is usually the expensive answer. Keeping it for editing and taking it out of the path of every visitor gets the speed and reliability without retraining anyone.

The [endoscopy center case study](/case-studies/endoscopy-center) has the full build, including the technical decisions. If your site is on WordPress and you're weighing your options, start with [when it's time to leave WordPress](/blog/when-to-leave-wordpress) and how we approach [moving off it](/migrate-from-wordpress), or [tell us what your team edits today](/contact).
