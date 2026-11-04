---
title: "Sanctions screening on a donation platform: what we decided"
image: ../../assets/blog/donation-platform-screening-image.jpg
imageAlt: "A mesh sieve on a blue surface letting small white pebbles through and holding back larger stones"
cover: ../../assets/blog/donation-platform-screening.png
description: "A simple name check flagged six of twenty ordinary donors. What we decided about false matches, outages and the records that explain a decline."
pubDate: 2026-09-09
relatedPages: ["/case-studies/donation-platform"]
category: case-stories
---

In our testing, a simple name check flagged six of twenty ordinary donor names. "Maria Garcia" sits inside a longer name on a sanctions list, so a check that asks "does this name appear inside a listed one?" would have declined an ordinary gift.

That was one of several surprises on a donation platform we're building for nonprofits. Every donor is screened against the sanctions lists, and most of the work was deciding what happens around a possible match.

## Ordinary names were the hard part

Lists and donors write names differently. A list might say "SMITH, John" while a donor types "John Smith," so both sides get cleaned up first, with accents, punctuation, titles and company suffixes stripped, until those two compare as equal.

Allowing exactly one extra word brought the false alarms down from six of twenty to three, and those three were genuine possible matches for a person to review. The platform has no fuzzy matching yet, so a name transliterated differently can slip past. That gap is written down where the next person will find it.

## The check sits where every gift has to pass

A screening check that sits off to the side gets routed around eventually, usually when someone adds a new way to pay. Here it runs at the one step every donation goes through to identify the donor, for card gifts and donor-advised fund grants alike, before any record or payment exists. The watchlists are stored on the platform and checked in about half a millisecond, so no outside vendor sits between a donor and their gift.

If the lists can't be checked, the gift is declined. That can feel harsh. A check that switches itself off during an outage stops protecting anyone at exactly the moment it matters.

## A flagged donor sees a neutral message

Most hits are possible matches, and OFAC's guidance is to judge how strong a hit is before treating it as confirmed. So the decline never mentions a watchlist while a person reviews the match. The platform also records the donors who passed, because a log of blocks alone can't show that anyone else was screened.

## One list blocks, the other only advises

Checking whether a charity is registered looks like the same feature, since both match a name against a government list. We gave them opposite defaults. Sanctions violations carry strict liability, so a match blocks the gift. Charity status only advises, because churches are exempt without ever applying and most don't appear on the federal list. Treating a missing church as a red flag would block legitimate gifts.

## What we'd tell another platform

Pick each default by asking what a wrong answer costs: a problematic payment let through, or a legitimate donor turned away. Then sit down with whoever handles compliance and walk through two cases, a possible match and a screening service that's down. Decide who reviews the case, what the donor sees and what you keep.

The [donation platform case study](/case-studies/donation-platform) covers the rest of the build, including how grants stay safe when a payment partner might process a request twice. If you're building something that moves money for other organizations, [tell us about it](/contact).
