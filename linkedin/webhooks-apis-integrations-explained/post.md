# LinkedIn: webhooks-apis-integrations-explained

## Post 1: native text

A deposit clears in Stripe, and someone still marks the booking as paid by hand. A customer changes their address, and two departments update different copies.

A webhook lets one system tell another the moment something happens. Stripe tells your booking system the deposit cleared, and the appointment confirms itself.

The receiving side has to be built for it. Anyone can send a request to your web address, so each message has to be checked as genuine, or a forged "payment succeeded" could mark an order as paid. The same event can arrive twice, and not always in order. Users never see this handling, so quick builds skip it, and you get the occasional double charge or a booking that never confirmed.

Once the connection works, most of the effort is decisions. If an address changes in the CRM and in accounting on the same day, one system has to win. "Client" in one tool may or may not mean "customer" in another. And someone has to hear when a call fails. Without a daily check that totals match on both sides, a quiet failure can sit until month end.

This week, pick the connection your team leans on most and ask who gets told when it breaks.

We wrote up how APIs and webhooks work, and when Zapier is enough. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/webhooks-apis-integrations-explained.pdf)

Document title: Questions to answer before you connect two tools

Go through these before anyone builds the connection. Each one's a decision the integration will need, and they're much easier to make before data starts moving.

## First comment (both posts)

https://motowntech.com/go/webhooks-apis-integrations-explained
