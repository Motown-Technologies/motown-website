# LinkedIn: webhooks-apis-integrations-explained

## Post 1: native text

An API lets one system ask another for data. A webhook lets a system announce that something just happened. Most business integrations need both.

Say a dental practice takes deposits through Stripe. With a webhook, Stripe tells the booking system the moment a deposit clears and the appointment confirms itself. Without one, someone checks by hand.

Webhooks are fast, but the receiving side has to be built for them:

• Verify every message, because anyone can send a request to your web address.
• Expect the same event to arrive twice.
• Don't assume events arrive in order.
• Reply straight away and do the work from a queue, so retries don't pile up.

Users never see any of this, so it gets skipped in quick builds. The result is the occasional double charge, or a booking that never confirmed and nobody can explain.

The connection itself is rarely the hard part of an integration. The decisions are harder:

• Which system wins when both change the same record?
• Does "client" in one tool mean "customer" in the other?
• What happens when one side is down for an hour?
• Who gets told when something fails?

If nobody can answer that last one, the integration will eventually fail without anyone noticing, and you'll hear about it from a customer.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/webhooks-apis-integrations-explained.pdf)

Document title: Webhooks, APIs and integrations, explained for operators

What each one is, how they work together, and the questions to answer before you connect two business systems. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/webhooks-apis-integrations-explained?utm_source=linkedin&utm_medium=social&utm_campaign=webhooks-apis-integrations-explained
