---
title: "Headless WordPress: faster pages without a new editor"
image: ../../assets/blog/headless-wordpress-clinic-image.jpg
imageAlt: "An empty blue stage with ropes and pulleys visible backstage"
cover: ../../assets/blog/headless-wordpress-clinic.png
description: "An endoscopy center kept WordPress for editing and stopped serving patients from it. What changed for staff, and the publishing tradeoff."
pubDate: 2026-10-14
relatedPages: ["/case-studies/endoscopy-center", "/migrate-from-wordpress"]
category: case-stories
---

At an outpatient endoscopy center we worked with, WordPress could now be down for a week and patients wouldn't notice. Staff would, and that was the point.

## Staff liked editing, and nobody liked how it loaded

The center's staff were comfortable in WordPress and didn't want a new tool. The trouble was what patients got. Without a page cache, WordPress builds every page on the spot for each visitor, using its database and whatever plugins are installed. A cache helps, but visitors still reach the live install, so a bad plugin update or a slow database can still land in front of a patient.

If your complaints are more about running WordPress, like updates nobody trusts and upkeep that eats the week, that's a different problem. We wrote about [when it's time to leave WordPress](/blog/when-to-leave-wordpress). Here, replacing the editor would have thrown away the one part that worked.

## We kept WordPress and stopped serving pages from it

WordPress still holds the pages, provider bios, procedures and the navigation menu, and staff edit them the way they always did. The public site is built from that content ahead of time and served as plain pages, so patients never touch WordPress. Developers call this headless WordPress.

A slow database or an expiring certificate on the editing side is now an inconvenience for staff that patients never see.

## Publishing had to stay one button

If every edit needed a developer to run a deploy, we'd have swapped a slow site for slow publishing. So nothing changed for editors. When someone presses publish, the site waits ninety seconds, so ten quick saves turn into one rebuild, and then rebuilds itself. The new pages replace the old ones only once the whole set is ready. The tradeoff is that an edit takes a minute or two to show up.

## The risk moved into the build

The build needs WordPress reachable while it runs. If WordPress is down at that moment, the build fails and the previous version of the site stays up. That only works if the build is strict. When something in the content looks wrong, like a field that's been renamed, it stops with a clear error instead of publishing a broken page. It never fills a gap with placeholder text that looks real.

## What we'd tell another practice

This setup fits when your editors like WordPress, the complaints come from visitors, the site is mostly pages people read rather than shopping carts or logins, and a minute or two before an edit goes live is fine.

If someone pitches it to you, ask to see a full publishing cycle, failed build included. Your editors need to know how they'll notice a failure and who helps them publish again.

The [endoscopy center case study](/case-studies/endoscopy-center) has the full build. If your site sounds like theirs, [tell us about it](/contact).
