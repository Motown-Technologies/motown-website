# LinkedIn: donation-platform-screening

## Post 1: native text

A simple name check on a donation platform we're building flagged six of twenty ordinary donor names. "Maria Garcia" sits inside a longer name on a sanctions list.

Every donor on the platform, which we're building for nonprofits, is screened against those lists. Most of the work was deciding what happens around a possible match.

Allowing exactly one extra word cut the false alarms to three of twenty, and those three were genuine possible matches for a person to review. Then came the decisions we made on purpose:

• If the lists can't be checked, the gift is declined. A check that switches off in an outage protects nobody.
• A flagged donor sees a neutral decline that never mentions a watchlist while a person reviews the match.
• Passes are recorded along with blocks, or you can't show you screened everyone.
• Charity verification only advises. Churches are exempt and mostly aren't on the federal list, so blocking would stop legitimate gifts.

If your platform takes money for other organizations, walk through a possible match and a screening outage with whoever handles compliance. Decide who reviews it, what the donor sees and what you keep.

We wrote up what we decided and why. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/donation-platform-screening.pdf)

Document title: Walk through a flagged payment with compliance

Settle these before money starts moving, ideally in one sitting with whoever handles compliance. Every question comes from a donation platform we're building for nonprofits, and the link's in the comments.

## First comment (both posts)

https://motowntech.com/go/donation-platform-screening
