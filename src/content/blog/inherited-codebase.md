---
title: "Nothing was broken. That was the hard part."
image: ../../assets/blog/inherited-codebase-image.jpg
imageAlt: "A ring of old mismatched keys on a blue surface, one of them new and blue"
cover: ../../assets/blog/inherited-codebase.png
description: "What we do when a client hands us someone else's codebase that still works, and how one practice ended up with a site that publishes itself."
pubDate: 2026-09-24
relatedPages: ["/case-studies/healthcare-practice"]
draft: true
---

A multi-site healthcare practice came to us in August 2023 with a website someone else had built. Nothing about it was broken. Underneath, every part of it was fragile, and every fragile part was holding something up.

That is a harder handover than a site that has fallen over. A broken system tells you where to start. A working one makes every change feel like a risk, so it is tempting to leave it alone until something forces your hand.

## What we were handed

The site was a React app copied to cloud storage by a one-line shell script. It talked to a Django API, and that API's admin panel was doing the job of a content management system. There were no drafts, no preview, no scheduling and no media library. Publishing a change meant asking a developer to run the deploy script. A production key sat in the repository, and the list of dependencies couldn't be rebuilt the same way twice.

Our first month produced no new features. We spent it making the system runnable, deployable and reproducible, so that any later change could be made and undone on purpose. Clients rarely see that month, and it is the part we would skip last.

## Every change had a reason

Over the next three years the site moved five times. Each move had something forcing it.

Search engines were the first. Every URL served the same empty page until JavaScript filled it in, so search engines saw very little. In October 2023 we rebuilt it so pages arrived as finished HTML, with proper metadata and a build that could fail before anything shipped. It landed, was backed out five days later, and went back in at the end of the month. It also left a problem in place: content was still fetched twice, once at build time and again in the visitor's browser.

From 2024 into 2026 the work was quiet: framework upgrades, pinned dependencies, error monitoring, and a site that rebuilt itself whenever someone published. The practice kept adding content types, and we kept hand-building editor features into an admin panel that was never meant to have them. By mid-2026 we had written draft states, a preview mode and a registry of pages the editors couldn't otherwise reach. That custom code was the clearest sign the practice needed a real CMS.

## Two moves, planned before any code

In March 2026 we rebuilt the site on Astro. We wrote the specification first, with three rules: as little browser JavaScript as possible, nothing fetched while a visitor is on the page, and pixel parity with the live site. The practice never asked for a redesign, so a redesign and new features were both ruled out from the start.

The CMS move came in June 2026. Django 4.2 reached end of support that April, so a framework upgrade was coming either way. We combined it with the CMS replacement to avoid paying for two migrations, and shipped the upgrade as its own release first so any fallout from it stayed separate. The editors now work in Wagtail, a CMS with drafts, revisions, preview, scheduled publishing and editor roles.

## Making each step easy to undo

Moving content between systems is where things go missing, so we planned every step to be reversible:

- The old API stayed running, frozen, and nothing was removed to make the new one work.
- Rolling the site back to the old API meant changing one setting.
- The content migration copied records and never deleted them, and it could be re-run safely to pick up later edits.
- Every migrated record kept a pointer to the row it came from.
- The old tables stayed in place for a month after the switch, along with a database snapshot.

## Where the practice is now

The site is 352 pages of real HTML, built ahead of time and served from a CDN. Nothing is fetched while a visitor is on the page, so the site stays up even when the API doesn't. When an editor hits publish, the site rebuilds on its own. Every change goes through an automated build first, and a change that would break the site fails there and never reaches production.

Patients see the same site they always did. The editors, who used to wait on a developer, now publish their own content.

## If you've inherited a codebase

A working system you didn't build is worth taking seriously before anyone touches it. Make it reproducible first, change one thing at a time for a reason you can name, and keep a way back from every step.

The [healthcare practice case study](/case-studies/healthcare-practice) has the full timeline. If you are sitting on a codebase someone else wrote, [tell us what you have](/contact).
