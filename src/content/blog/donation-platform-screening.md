---
title: "When a donation is flagged: decisions a payment platform needs"
image: ../../assets/blog/donation-platform-screening-image.jpg
imageAlt: "A mesh sieve on a blue surface letting small white pebbles through and holding back larger stones"
cover: ../../assets/blog/donation-platform-screening.png
description: "What one donation platform taught us about false matches, failed checks and the records needed to explain a payment decision."
pubDate: 2026-09-09
relatedPages: ["/case-studies/donation-platform"]
category: case-stories
---

A donor enters an ordinary name and the platform flags a possible sanctions match. Someone now has to decide whether the gift can proceed, what the donor should see and what to record. The platform needs a defined way to handle that uncertainty.

On a donation platform we're building for nonprofits, the work has included false matches, checks that might fail and payment requests that might be retried. These are the design decisions worth discussing with the people responsible for compliance before money starts moving.

## Put the check where every payment has to pass

The first decision is where screening lives. A sanctions check that sits beside the main payment flow gets routed around eventually, usually when someone adds a new way to pay and forgets to call it.

Find the one place every payment route already goes through, and put the check there. On a donation platform we're building for nonprofits, that's the function that identifies the donor. Card gifts and donor-advised fund grants both pass through it, and the check runs before a record is written or a payment exists.

On this platform, keeping the check in the payment path hasn't meant waiting for an outside vendor. It stores the watchlists locally and queries them in about half a millisecond.

## Decide now what happens when the check can't run

Sooner or later the lists won't be reachable. The safe answer is to decline the payment. That can feel harsh, but a check that switches itself off during an outage stops protecting you at exactly the moment it matters. If you'd rather let payments through, make sure someone decided that on purpose and recorded why.

## Decline quietly and record everything

When a payer does match, the message they see matters. Most screening hits are possible matches, and OFAC's guidance is to judge how strong a hit is before treating it as confirmed. The decline should stay neutral and never mention a watchlist while a person reviews the match.

Keep a record of the donors who passed, too. A log of blocks alone can't show that anyone else was screened, and "we screen everyone" is only a claim you can defend later if the passes are on record.

## Not every list check should block

Charity verification looks like the same feature as sanctions screening, since both match a name against a government list. On a giving platform they need opposite responses. Sanctions violations carry strict liability, so a match blocks the gift. Charity verification should only advise. Churches are exempt without ever applying and most don't appear on the federal list, so treating a missing charity as a red flag would block legitimate gifts.

Choose the default after considering both kinds of error: letting a problematic payment through and blocking a legitimate one.

## Test your name matching against ordinary names

A list might write "SMITH, John" while a donor types "John Smith." Normalize both sides, stripping accents, punctuation, titles and company suffixes, so those compare as equal.

Then test it against everyday names. In our testing, a simple "is this name contained in a listed name" check flagged six of twenty ordinary donor names. "Maria Garcia" sits inside a longer listed name, so the check could decline an ordinary donor's gift. Allowing exactly one extra word brought it down to three of twenty, and those three were genuine possible matches for a person to review.

Test the chosen matching settings against the real lists and document both false alarms and missed matches. That platform has no fuzzy matching yet, so a name transliterated differently can slip past, and the gap is documented in the repository.

## Assume a payment partner might process a request twice

If you call outside services to move money, find out whether a retried request is safe. The donor-advised fund providers on that platform don't guarantee it. So the grant is reserved before the request goes out, a response that comes back unclear is handled as its own case and never assumed to be a success, and receipts come from the platform's own record.

It also helps not to hold the money at all. Donations there are direct charges to the receiving organization, and the platform never keeps a balance of its own.

## A short list to check your platform against

- Every payment route passes through the screening check, including routes added later.
- The check declines the payment when it can't run.
- Decline messages never mention a watchlist.
- Passes are recorded alongside blocks.
- Each list check blocks or advises based on what a wrong answer would cost.
- Name matching has been measured against real names, and its gaps are written down.

Walk through a possible match and an unavailable screening service with your compliance lead. Decide who reviews the case, what the donor sees and what evidence is retained. The [donation platform case study](/case-studies/donation-platform) records how those decisions were implemented on this project.
