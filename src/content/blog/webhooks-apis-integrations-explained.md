---
title: "Why your team keeps entering the same information twice"
image: ../../assets/blog/webhooks-apis-integrations-explained-image.jpg
imageAlt: "Two tin-can telephones joined by a taut string with a small brass bell hanging from the middle, on a blue floor"
cover: ../../assets/blog/webhooks-apis-integrations-explained.png
description: "What APIs and webhooks do, and the ownership and failure decisions needed to keep business tools in agreement."
pubDate: 2026-08-25
relatedPages: ["/data-integration-services", "/api-development"]
category: software
---

A payment clears in one tool, but someone still has to mark the booking as paid in another. A customer changes their address, and two departments update different copies. Connecting the tools sounds straightforward until both contain information the business relies on.

APIs let one system ask another for data or an action. Webhooks let a system send a message when something happens. An integration uses those connections, plus rules about ownership and failure, to keep the tools in agreement.

## What an API is

An API (application programming interface) is a list of requests a piece of software will accept, with replies in a fixed format another program can read. Your accounting system might accept "give me all unpaid invoices" or "create this customer."

With an API, whoever wants something has to ask. If your CRM needs to know whether an invoice was paid, it calls the accounting system's API and checks. When that check runs on a schedule, every five minutes or every night, it's called polling.

APIs come with rules. A key or login proves who is asking, limits cap how many requests a caller can make, and permissions decide what each caller can see. A leaked key can expose everything it is allowed to read, so we limit its permissions to what the job needs.

## What a webhook is

With a webhook, the other system tells you when something happens. You give it a web address, and it sends a message there as soon as a payment succeeds, a form is submitted or an order ships, so nothing has to keep asking.

Say a dental practice takes deposits through Stripe. With a webhook, Stripe tells the booking system the moment a deposit clears, and the appointment confirms itself. Without one, the booking system checks every so often, or a receptionist checks by hand.

Webhooks are faster and lighter than polling, but the receiving side has to be built for them. Stripe's [webhook documentation](https://docs.stripe.com/webhooks) sets out rules that apply to most providers:

- Verify every message. Anyone can send a request to your web address, so the receiver checks a signature to confirm the message came from the provider. Without that check, a forged "payment succeeded" message could mark an order as paid.
- Expect duplicates. The same event can arrive more than once, so the receiver keeps a record of the event IDs it has already handled.
- Don't rely on order. Stripe states that it doesn't guarantee events arrive in the order they happened.
- Reply quickly and do the work afterwards. The receiver acknowledges the message straight away and processes it from a queue. If the receiver is slow or down, the provider retries. In live mode, Stripe keeps retrying for up to three days.

The people using the system never see any of this, so it often gets skipped in a quick build. When it's missing, you get the occasional double charge or the booking that never confirmed, and nobody can explain why.

## What an integration is

An integration is the whole job of keeping two systems in agreement. Most use both tools: webhooks for events that need to arrive quickly, and API calls to fetch the full record, fill gaps and catch anything a webhook missed.

Before building the connection, agree how the two systems should handle the data:

- Which system is the source of truth for each piece of data? If a customer's address changes in the CRM and in the accounting system on the same day, one of them has to win.
- How do the fields map? "Client", "account" and "customer" might mean the same thing in three tools, or they might not.
- What happens when a call fails? The options are to retry, queue it, alert someone, or some mix of these.
- How will you know it's working? We add a reconciliation check that compares totals on both sides, so a silent failure shows up the same day instead of at month end.

Document these decisions for the people who will support the connection later, including what each field means in each system.

## Zapier, built-in connectors or custom code

Many tools ship with built-in connectors, and services like Zapier link popular apps without any code. For a simple one-way flow, such as adding new form submissions to a mailing list, these are the right choice and cost very little.

They get harder to trust when the flow carries money or sensitive data, when it needs the duplicate and ordering handling described above, when several steps have to succeed or fail together, or when you need a record of what happened to each item. Compare the connector's handling of those cases with what your process needs. A custom integration may be justified, but it also needs someone to maintain its code and respond to its alerts.

## Questions to ask before you connect two tools

1. Does each tool have a documented API, and does it send webhooks for the events you care about?
2. Which system owns each piece of data?
3. What should happen when one side is down for an hour?
4. Who gets told when something fails, and how?

If nobody owns the alerts, a failed connection can go unnoticed until a customer reports it.
