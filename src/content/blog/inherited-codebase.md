---
title: "Taking over someone else's codebase without breaking it"
image: ../../assets/blog/inherited-codebase-image.jpg
imageAlt: "A ring of old mismatched keys on a blue surface, one of them new and blue"
cover: ../../assets/blog/inherited-codebase.png
description: "A healthcare practice handed us a website someone else built. Why our first month shipped nothing new, and how every step after kept a way back."
pubDate: 2026-09-24
relatedPages: ["/case-studies/healthcare-practice"]
category: case-stories
---

When a multi-site healthcare practice came to us in August 2023, publishing a change to its website meant asking a developer to run a script. There were no drafts, no preview and no way to schedule anything. The site worked, and every change to it was risky.

Someone else had built it, and nothing was obviously broken. That's what makes an inherited system tricky. There's no failure to point at, so the first job is finding out what can be changed safely while the site stays up.

## Our first month shipped nothing new

A key to the live system sat in the code, and the site couldn't be rebuilt the same way twice. We spent the first month making it run, publish and rebuild reliably, so any later change could be made and undone on purpose. The practice saw almost none of that work, and everything after depended on it.

## Each rebuild had a reason

Over the next three years the site was rebuilt three times, and something forced each one.

Search engines came first. Every page arrived empty until the visitor's browser filled it in, so search engines saw very little. In October 2023 we rebuilt it so pages arrived finished. It went live, was backed out five days later, and went back in at the end of the month.

Then the editors. The practice kept adding kinds of content, and we kept hand-building drafts, a preview mode and other editing features into an admin screen that was never meant to have them. By mid-2026 that pile of workarounds was the clearest sign the practice needed a real content management system.

In March 2026 we rebuilt the site so it looks pixel for pixel like the live one but no longer loads anything while a patient is browsing. The practice never asked for a redesign, so we ruled one out from the start. In June the editors moved to Wagtail, which has drafts, revisions, preview, scheduled publishing and editor roles. The framework underneath had lost support that April, so an upgrade was coming anyway. We bundled the two so the practice paid for one migration instead of two, and shipped the upgrade alone first so any fallout stayed separate.

## Every step kept a way back

The old system stayed running, frozen. Switching the site back to it meant changing one setting. The content move copied records and never deleted any, and it could be re-run to pick up later edits. The old data stayed in place for a month after the switch, along with a database snapshot.

## Where the practice is now

The site is 352 pages built ahead of time, and it stays up even when the back end doesn't. When an editor hits publish, the site rebuilds on its own, and a change that would break it fails before it reaches patients. Patients see the same site. Editors no longer wait on a developer.

## What we'd tell anyone taking over a working system

Make it reproducible first, change one thing at a time for a reason you can name, and keep a way back from every step. Before agreeing on new features with an incoming team, ask them to publish a change and roll it back in front of you.

A buyer runs a similar review before a deal, which we cover in [what technical due diligence checks](/blog/technical-due-diligence-explained). The [healthcare practice case study](/case-studies/healthcare-practice) has the full timeline. If you've inherited a system like this, [tell us about it](/contact).
