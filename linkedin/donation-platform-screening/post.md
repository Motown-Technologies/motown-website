# LinkedIn: donation-platform-screening

## Post 1: native text

If your platform takes payments for other organizations, you're responsible for more than the payment.

You have to screen who's paying. Most of the rules for that are cheap to build in early and expensive to add once money is moving.

A few worth checking against your own platform:

• Put the sanctions check in the one place every payment route already passes through. A check beside the main flow gets skipped the day someone adds a new way to pay.
• Decide now what happens when the lists can't be reached. Declining is the safe answer, because a check that switches off during an outage protects nobody.
• Keep decline messages neutral. Telling a designated person they matched a sanctions list is itself a violation.
• Record the passes as well as the blocks. Otherwise you can't show you screened everyone.
• Not every list check should block. On a giving platform, charity verification should only advise, since churches are exempt and mostly aren't on the federal list.

Then test your name matching on ordinary names. On a donation platform we're building, a naive check flagged six of twenty everyday donor names. Allowing one extra word brought it to three, and those three deserve a person's review.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/donation-platform-screening.pdf)

Document title: Sanctions screening for platforms that take payments

Five checks for any platform that takes payments on behalf of other organizations. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/donation-platform-screening?utm_source=linkedin&utm_medium=social&utm_campaign=donation-platform-screening
