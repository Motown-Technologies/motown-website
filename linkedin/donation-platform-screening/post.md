# LinkedIn: donation-platform-screening

## Post 1: native text

When a giving platform declines a sanctioned donor, it can't tell them why.

Telling a designated person they matched a sanctions list is itself a violation. So the decline message is neutral and never mentions a watchlist.

That was one of several rules that shaped a donation platform we're building for nonprofits. Once you take payments on behalf of other organizations, you inherit obligations that have little to do with payments.

A few of the decisions:

• Every donor is screened in the one function every donation passes through, before a record is written or a payment exists.
• If the lists can't be checked, the gift is declined. A check that switches off during an outage protects nobody.
• Donors who pass are recorded too, so "we screen everyone" can be shown later.
• Charity verification is advisory only, because churches are exempt and mostly don't appear on the federal list.

Name matching took real tuning. A naive check flagged six of twenty ordinary donor names in our tests. Allowing one extra word brought it to three, and those three deserve a person's review.

Most of these are cheap to build in at the start and expensive to add once money is moving.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/donation-platform-screening.pdf)

Document title: Compliance rules a giving platform can't skip

Five decisions from a donation platform that screens every donor without telling any of them. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/donation-platform-screening?utm_source=linkedin&utm_medium=social&utm_campaign=donation-platform-screening
