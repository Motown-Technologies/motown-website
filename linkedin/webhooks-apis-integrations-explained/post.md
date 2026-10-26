# LinkedIn: webhooks-apis-integrations-explained

## Post 1: native text

A deposit clears in Stripe, and someone still marks the booking as paid by hand. A customer changes their address, and two departments update different copies of it.

Connecting tools sounds simple until both hold information you rely on. An API lets one system ask another for data or an action. A webhook lets a system send a message the moment something happens, so Stripe tells your booking system the deposit cleared and the appointment confirms itself.

The receiving side has to be built for that. It should check every message is genuine, because anyone can send a request to your web address, and a forged "payment succeeded" could mark an order as paid. It should expect the same event twice, not count on events arriving in order, and reply at once, doing the work later from a queue.

Users never see any of this, so quick builds skip it, and you get the occasional double charge or a booking that never confirmed.

Once it works, most of the effort is decisions. If an address changes in the CRM and in accounting on the same day, one system has to win. "Client" in one tool may or may not mean "customer" in another. Someone has to hear when a call fails, and without a daily check that totals match on both sides, a quiet failure can sit until month end.

Link's in the comments: questions to answer before connecting two tools, and when Zapier or a built-in connector is enough.

## Post 2: carousel (~/Documents/Motown Carousels/webhooks-apis-integrations-explained.pdf)

Document title: Questions to answer before you connect two tools

Go through these before anyone builds the connection. Each one's a decision the integration will need, and they're much easier to make before data starts moving.

## First comment (both posts)

https://motowntech.com/go/webhooks-apis-integrations-explained
