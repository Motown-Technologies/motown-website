---
title: "How we built sanctions screening into a donation platform"
image: ../../assets/blog/donation-platform-screening-image.jpg
imageAlt: "A mesh sieve on a blue surface letting small white pebbles through and holding back larger stones"
cover: ../../assets/blog/donation-platform-screening.png
description: "Taking donations for other organizations brings sanctions screening, charity checks and records that must hold up. Here is how that shaped one platform."
pubDate: 2026-09-09
relatedPages: ["/case-studies/donation-platform"]
---

We're building a giving platform where nonprofits run campaigns and always-on donation pages, and donors give by card, digital wallet or a grant from a donor-advised fund. Once a platform takes payments on behalf of other organizations, it picks up obligations that have little to do with payments: sanctions screening, checking that a charity is what it says it is, and keeping records that still hold up years later.

We treated those obligations as part of the architecture from the first week. Most of them are cheap to get right at the start and expensive to add once money is already moving.

## Screening sits where every donation passes

Every donor is checked against the sanctions lists before anything else happens. There is one function that every donation route goes through to identify the donor, and the check lives there. It runs before a record is written or a payment is created, for card gifts and donor-advised fund grants alike.

A check that sits beside the main path instead of inside it tends to get routed around eventually, for example when someone adds a new way to give.

The watchlists are stored locally and queried in about half a millisecond. No outside vendor sits between a donor and their gift, and screening adds no noticeable wait.

## Say no without saying why

When a donor matches, the platform declines the gift with a neutral message that never mentions a watchlist. That sounds unfriendly until you know the rule behind it: telling a designated person they matched a sanctions list is itself a violation.

If the lists can't be queried for any reason, the donation is declined. We built it that way on purpose. A check that turns itself off during an outage stops protecting anyone at exactly the moment it matters.

The platform also records the donors who passed, alongside the ones who were blocked. "We screen everyone" is only a claim you can defend later if the passes are on record too.

## Two lists, two different responses

Charity verification looks like the same feature as sanctions screening. Both match a name against a government list. They get opposite treatment.

Sanctions screening blocks the donation, because violations carry strict liability. Charity verification is advisory. Churches are exempt without ever applying, and most of them don't appear on the federal list at all, so treating a missing charity as a red flag would block legitimate gifts.

## Matching names nobody spells the same way

A sanctions list might write "SMITH, John" and a donor types "John Smith." The platform normalizes both into the same set of words, with accents, punctuation, titles and company suffixes stripped out, so those compare as equal.

Tuning that match took real testing. In our July tests, a naive "is this name contained in a listed name" check flagged six of twenty ordinary donor names. "Maria Garcia" sits inside a longer listed name, and a platform that declines her gift is worse than useless. Allowing exactly one extra word brought it down to three of twenty, and those three are genuine possible matches that a person should review.

No setting gets you zero false alarms and zero misses at the same time. The work is choosing where to sit, measuring that choice against the real lists, and writing down what it still lets through. This system has no fuzzy matching yet, so a name transliterated differently can slip past. That gap is documented in the repository instead of glossed over.

## Money that can't be sent twice

Donor-advised fund providers are third-party services that don't guarantee a retried request won't be processed twice. So every provider runs through the same pattern on our side: the grant is reserved before the request goes out, a response that comes back unclear is handled as its own case instead of being assumed a success, and receipts come from our own record.

Donations are direct charges to the receiving organization, and the platform never holds a balance of its own. Each organization's credentials are encrypted, and production refuses to start if the encryption key is missing.

## Writing down what isn't finished

The platform is still being built, and the README has a section for known limitations: list imports are still run by hand instead of on a schedule, one security migration is waiting behind feature flags for the frontend release, and a rate-limiting ceiling stays in place until shared counters land.

We think that section is as useful as the features list. Whoever works on the system next inherits those limits as decisions instead of discovering them as surprises.

The [donation platform case study](/case-studies/donation-platform) has the full technical detail. If your product moves payments, donations or regulated data, [tell us what it does and who you answer to](/contact), and we'll tell you which obligations belong in the architecture now and which can wait.
