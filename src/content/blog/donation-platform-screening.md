---
title: "Sanctions screening for donation and payment platforms"
image: ../../assets/blog/donation-platform-screening-image.jpg
imageAlt: "A mesh sieve on a blue surface letting small white pebbles through and holding back larger stones"
cover: ../../assets/blog/donation-platform-screening.png
description: "Taking payments for other organizations means screening every payer. Where the check sits, what it does when it fails and what it records matter most."
pubDate: 2026-09-09
relatedPages: ["/case-studies/donation-platform"]
category: case-stories
---

If your platform takes payments on behalf of other organizations, you are responsible for more than the payment. You have to screen who is paying, check who is receiving, and keep records that still hold up years later. All of that is cheap to build in at the start and expensive to add once money is already moving.

## Put the check where every payment has to pass

The first decision is where screening lives. A sanctions check that sits beside the main payment flow gets routed around eventually, usually when someone adds a new way to pay and forgets to call it.

Find the one place every payment route already goes through, and put the check there. On a donation platform we're building for nonprofits, that's the function that identifies the donor. Card gifts and donor-advised fund grants both pass through it, and the check runs before a record is written or a payment exists.

Speed is no reason to put it elsewhere. That platform stores the watchlists locally and queries them in about half a millisecond, with no outside vendor between a donor and their gift.

## Decide now what happens when the check can't run

Sooner or later the lists won't be reachable. The safe answer is to decline the payment. That can feel harsh, but a check that switches itself off during an outage stops protecting you at exactly the moment it matters. If you'd rather let payments through, make sure someone decided that on purpose and recorded why.

## Decline quietly and record everything

When a payer does match, the message they see matters. Telling a designated person they matched a sanctions list is itself a violation, so the decline should be neutral and never mention a watchlist.

Keep a record of the donors who passed, too. A log of blocks alone can't show that anyone else was screened, and "we screen everyone" is only a claim you can defend later if the passes are on record.

## Not every list check should block

Charity verification looks like the same feature as sanctions screening, since both match a name against a government list. On a giving platform they need opposite responses. Sanctions violations carry strict liability, so a match blocks the gift. Charity verification should only advise. Churches are exempt without ever applying and most don't appear on the federal list, so treating a missing charity as a red flag would block legitimate gifts.

Before you build any list check, ask what it costs to be wrong in each direction. That answer sets the default.

## Test your name matching against ordinary names

A list might write "SMITH, John" while a donor types "John Smith." Normalize both sides, stripping accents, punctuation, titles and company suffixes, so those compare as equal.

Then test it against everyday names. In our testing, a simple "is this name contained in a listed name" check flagged six of twenty ordinary donor names. "Maria Garcia" sits inside a longer listed name, and a platform that declines her gift is worse than useless. Allowing exactly one extra word brought it down to three of twenty, and those three were genuine possible matches for a person to review.

No setting gives you zero false alarms and zero misses. Pick where to sit, measure it against the real lists, and write down what it still lets through. That platform has no fuzzy matching yet, so a name transliterated differently can slip past, and the gap is documented in the repository.

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

The [donation platform case study](/case-studies/donation-platform) has the full technical detail. If your product moves payments, donations or [regulated data](/soc-2-readiness), [tell us what it does and who you answer to](/contact), and we'll tell you which obligations belong in the architecture now and which can wait.
