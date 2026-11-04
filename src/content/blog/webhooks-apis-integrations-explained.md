---
title: "APIs and webhooks explained: keeping your tools in sync"
image: ../../assets/blog/webhooks-apis-integrations-explained-image.jpg
imageAlt: "Two tin-can telephones joined by a taut string with a small brass bell hanging from the middle, on a blue floor"
cover: ../../assets/blog/webhooks-apis-integrations-explained.png
description: "What APIs and webhooks do, in plain terms, and the decisions about ownership and failure that keep two business tools in agreement."
pubDate: 2026-08-25
relatedPages: ["/data-integration-services", "/api-development"]
category: software
---

A deposit clears in Stripe, but someone still marks the booking as paid by hand. A customer changes their address, and two departments update different copies. Connecting the tools sounds simple until both hold information the business relies on.

## Two ways for software to talk

An API is a list of requests a piece of software will accept, with replies another program can read. Your accounting system might accept "give me all unpaid invoices" or "create this customer." With an API, whoever wants something has to ask. Asking on a schedule, every five minutes or every night, is called polling.

A webhook works the other way round. You give a system a web address, and it sends a message there the moment something happens: a payment succeeds, a form is submitted, an order ships.

Say a dental practice takes deposits through Stripe. With a webhook, Stripe tells the booking system as soon as a deposit clears, and the appointment confirms itself. Without one, the booking system checks every so often, or a receptionist does.

## The part nobody sees gets skipped

The receiving side has to be built for webhooks, and [Stripe's documentation](https://docs.stripe.com/webhooks) sets out rules that apply to most providers. Anyone can send a request to your web address, so every message has to be checked as genuine. Without that check, a forged "payment succeeded" could mark an order as paid. The same event can arrive twice, and Stripe doesn't guarantee events arrive in order. The receiver should reply at once and do the work afterwards, because a slow or offline receiver gets retried, in Stripe's live mode for up to three days.

People using the system never see any of this, so a quick build often leaves it out. Then you get the occasional double charge, or the booking that never confirmed, and nobody can explain why.

## Most of an integration is decisions

An integration is the whole job of keeping two systems in agreement, and the hard parts are choices:

- Which system wins for each piece of data? If an address changes in the CRM and in accounting on the same day, one of them has to.
- Do the words match? "Client", "account" and "customer" might mean the same thing in three tools, or they might not.
- What happens when a call fails: retry, queue it, alert someone, or a mix?
- How will you know it's working? We add a check that compares totals on both sides, so a silent failure shows up the same day instead of at month end.

## When Zapier is enough

For a simple one-way flow, such as adding new form submissions to a mailing list, a built-in connector or Zapier is the right choice and costs very little. We'd think twice once the flow carries money or sensitive data, needs the duplicate and ordering handling above, or needs a record of what happened to each item. A custom integration can earn its place there, but someone has to look after it and answer its alerts.

## This week

Pick the connection your team leans on most and ask who gets told when it fails. If nobody owns the alerts, a broken connection can go unnoticed until a customer reports it.

We build these through our [data integration](/data-integration-services) and [API development](/api-development) work. If two of your tools keep disagreeing, [tell us which ones](/contact).
