# LinkedIn: donation-platform-screening

## Post 1: native text

A donor types an ordinary name and your platform flags a possible sanctions match. Can the gift go ahead, what does the donor see, and what gets recorded?

If you take payments for other organizations, those answers are yours to decide, and they're much cheaper to settle before money is moving.

On a donation platform we're building for nonprofits, the first decision was where the check lives. Usually a platform calls a screening vendor mid-donation. This one keeps the watchlists locally and checks them in about half a millisecond, so the check sits in the one function every payment route passes through, before any record or payment exists.

Other things worth deciding on purpose:

• What happens when the lists can't be reached. Declining is safest, since a check that switches off in an outage protects nobody.
• What the decline says. Keep it neutral and never mention a watchlist. Most flags are possible matches, and a person should judge the match before anyone treats it as confirmed.
• What gets logged. Record the passes as well as the blocks, or you can't show you screened everyone.
• Which checks block. Charity verification should only advise, since churches are exempt and mostly aren't on the federal list.

Then test your matching on ordinary names. A naive check flagged six of twenty everyday names. Allowing one extra word brought it to three, and those three deserve a person's review.

We end the write-up with a short checklist for your own platform. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/donation-platform-screening.pdf)

Document title: Walk through a flagged payment with compliance

Settle these before money starts moving, ideally in one sitting with whoever handles compliance. Every question comes from a donation platform we're building for nonprofits, and the link's in the comments.

## First comment (both posts)

https://motowntech.com/go/donation-platform-screening
