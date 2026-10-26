---
title: "Your website is slow. Does your team need a new editor too?"
image: ../../assets/blog/headless-wordpress-clinic-image.jpg
imageAlt: "An empty blue stage with ropes and pulleys visible backstage"
cover: ../../assets/blog/headless-wordpress-clinic.png
description: "An endoscopy center kept WordPress for editing while changing how its public pages were delivered. The benefits and publishing tradeoffs."
pubDate: 2026-10-14
relatedPages: ["/case-studies/endoscopy-center", "/migrate-from-wordpress"]
category: case-stories
---

If your staff are happy editing in WordPress and the trouble is how the site behaves for visitors, you may not need to leave WordPress at all. You can keep it as the place people edit and stop it from assembling pages for every visitor. Pages load faster and stay up when WordPress has a bad day, and nobody has to learn a new tool.

## Work out which problem you have

Complaints about a WordPress site tend to fall into two groups. Some are about running it, like plugin updates nobody trusts and upkeep that eats into the week. Others are about what visitors get, which means slow pages and a site that breaks when something on the server misbehaves.

If most of your complaints are in the first group, read [when it's time to leave WordPress](/blog/when-to-leave-wordpress). If they're mostly in the second and your editors like the tool, replacing it is usually the expensive answer, because it takes away the one thing that works.

The slowness and fragility have a specific cause. Without a page cache in front of it, a WordPress install builds each page on the spot, every time someone opens it, with PHP, a database and whatever plugins you run. A cache speeds that up, but the public site still runs on the live install, so anything that goes wrong in that chain can still go wrong in front of a visitor.

## Build the pages before anyone asks for them

The alternative is to keep WordPress as the place content lives and build the public site from it ahead of time. The site reads pages, menus and everything else from WordPress while it builds, then serves plain HTML files. Visitors load those files and never touch WordPress. This is usually called headless WordPress.

An outpatient endoscopy center we worked with was in exactly this spot. Staff liked editing their site but were unhappy with how it loaded for patients. After the change, WordPress still holds the pages, provider bios, procedures and the navigation menu, and staff edit them the way they always did. A slow database, a plugin update or an expiring certificate on the editing side is now an inconvenience for staff that patients never see. WordPress could be down all week and the public pages would keep loading.

## Publishing has to stay one button

If every edit now needs a developer to run a deploy, you have swapped a slow site for a slow publishing process. Before you agree to this setup, ask exactly what happens when an editor presses publish.

At the clinic, the answer is that nothing changes for the editor. A small plugin notices the published change, waits ninety seconds so that ten quick saves turn into one rebuild, and asks the host to build the site again. The new pages replace the old ones only once the whole set is ready. The trade is that an edit takes a minute or two to appear.

## The risk moves into the build

The cost is that the build needs WordPress reachable while it runs. If WordPress is down during a build, the build fails and the previous version of the site stays up. That lets patients keep using the published pages while the editing system is repaired.

That only holds if the build is strict about what it accepts. Some things worth checking with whoever builds it for you:

- Content from WordPress is checked before it's used, so a renamed field stops the build with a clear error and the live site stays as it was.
- A missing piece of content never gets filled with placeholder text that looks real.
- HTML from the editor is cleaned on the way in, with scripts, forms and embedded frames stripped out.
- Every code change is built against a test copy of the WordPress content before it goes near the live site.

If the build rejects a change, the previous published site should remain available.

## When this approach fits

It suits you if most of these are true:

- Your editors are comfortable in WordPress and you don't want to retrain them.
- The complaints are about speed and outages for visitors more than about editing.
- The public site is mostly pages people read, without shopping carts or logged-in areas that need WordPress running for each visitor.
- Waiting a minute or two for an edit to go live is acceptable.

The clinic's build handles a few other publishing chores too. Old image links that used to break are now fixed during the build, and each page gets a search description written from its own content.

The [endoscopy center case study](/case-studies/endoscopy-center) has the full build. If you're considering the same approach, ask to see a complete publishing cycle, including a failed build. Your editors need to know how they will notice a failure and who will help them publish again.
