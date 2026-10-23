---
title: "Headless WordPress: keep the editor, speed up the site"
image: ../../assets/blog/headless-wordpress-clinic-image.jpg
imageAlt: "An empty blue stage with ropes and pulleys visible backstage"
cover: ../../assets/blog/headless-wordpress-clinic.png
description: "Staff like WordPress but the site is slow or fragile? Keep WordPress for editing and take it out of the visitor's path. Here is what that involves."
pubDate: 2026-10-14
relatedPages: ["/case-studies/endoscopy-center", "/migrate-from-wordpress"]
category: case-stories
---

If your staff are happy editing in WordPress and the trouble is how the site behaves for visitors, you may not need to leave WordPress at all. You can keep it as the place people edit and stop it from assembling pages for every visitor. Pages load faster and stay up when WordPress has a bad day, and nobody has to learn a new tool.

## Work out which problem you have

Complaints about a WordPress site tend to fall into two groups. Some are about running it, like plugin updates nobody trusts and upkeep that eats into the week. Others are about what visitors get, which means slow pages and a site that breaks when something on the server misbehaves.

If most of your complaints are in the first group, read [when it's time to leave WordPress](/blog/when-to-leave-wordpress). If they're mostly in the second and your editors like the tool, replacing it is usually the expensive answer, because it takes away the one thing that works.

The slowness and fragility have a specific cause. A standard WordPress install builds each page on the spot, every time someone opens it, with PHP, a database and whatever plugins you run. Anything that goes wrong in that chain goes wrong in front of a visitor.

## Build the pages before anyone asks for them

The alternative is to keep WordPress as the place content lives and build the public site from it ahead of time. The site reads pages, menus and everything else from WordPress while it builds, then serves plain HTML files. Visitors load those files and never touch WordPress. This is usually called headless WordPress.

An outpatient endoscopy center we worked with was in exactly this spot. Staff liked editing their site. Nobody liked how it loaded for patients. After the change, WordPress still holds the pages, provider bios, procedures and the navigation menu, and staff edit them the way they always did. A slow database, a plugin update or an expiring certificate on the editing side is now an inconvenience for staff that patients never see. WordPress could be down all week and the public pages would keep loading.

## Publishing has to stay one button

If every edit now needs a developer to run a deploy, you have swapped a slow site for a slow publishing process. Before you agree to this setup, ask exactly what happens when an editor presses publish.

At the clinic, the answer is that nothing changes for the editor. A small plugin notices the published change, waits ninety seconds so that ten quick saves turn into one rebuild, and asks the host to build the site again. The new pages replace the old ones only once the whole set is ready. The trade is that an edit takes a minute or two to appear.

## The risk moves into the build

There is a cost, and it's worth knowing up front. The build needs WordPress reachable while it runs. If WordPress is down during a build, the build fails and the previous version of the site stays up. For a medical practice, that's the failure you want.

That only holds if the build is strict about what it accepts. Some things worth checking with whoever builds it for you:

- Content from WordPress is checked before it's used, so a renamed field stops the build with a clear error and the live site stays as it was.
- A missing piece of content never gets filled with placeholder text that looks real.
- HTML from the editor is cleaned on the way in, with scripts, forms and embedded frames stripped out.
- Every code change is built against a test copy of the WordPress content before it goes near the live site.

When something looks wrong, the worst outcome should be yesterday's site staying up a little longer.

## When this approach fits

It suits you if most of these are true:

- Your editors are comfortable in WordPress and you don't want to retrain them.
- The complaints are about speed and outages for visitors more than about editing.
- The public site is mostly pages people read, without shopping carts or logged-in areas that need WordPress running for each visitor.
- Waiting a minute or two for an edit to go live is acceptable.

It also tends to clear up small chores along the way. At the clinic, old image links that used to break are now fixed during the build, and each page gets a search description written from its own content.

The [endoscopy center case study](/case-studies/endoscopy-center) has the full build, including the technical decisions. If you're weighing your options, see how we approach [moving off WordPress](/migrate-from-wordpress), or [tell us what your team edits today](/contact).
