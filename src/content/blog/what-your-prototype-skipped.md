---
title: "Security and reliability checks for a vibe-coded prototype"
image: ../../assets/blog/what-your-prototype-skipped-image.jpg
imageAlt: "A half-built stone arch supported by wooden scaffolding on a blue floor"
cover: ../../assets/blog/what-your-prototype-skipped.png
description: "What a vibe-coded or AI-built prototype usually skips before it holds real customer data, and the tests that show whether yours did."
pubDate: 2026-09-11
relatedPages: ["/prototype-to-production"]
category: software
---

In one rebuild we took on, "submitted by" was a dropdown of six hard-coded names. It demonstrated the workflow well. It couldn't tell anyone who had actually submitted a record, and anyone with the link could submit as anyone.

A vibe-coded or no-code prototype is good at getting people to agree on what the product should do. Working screens don't show whether one customer can reach another's records, or what happens when a service the app relies on goes down. Check both before customers depend on it, even if security was in the original brief.

## Who can reach what

Hiding a button doesn't block the action behind it. If the server accepts the request from someone without permission, the data is exposed however locked down the screen looks. Replacing that dropdown meant giving each person a real account, with permissions suited to their job, checked on the server for every request.

Prototypes built on a hosted database often let the browser talk to it directly. That can be fine, as long as rules behind it decide which records each person can see. If yours runs on Supabase, its [data security guide](https://supabase.com/docs/guides/database/secure-data) explains how those rules work.

Then look for secrets. Private payment keys, email credentials and database passwords sometimes get pasted straight into the code. Any secret that was committed or reached the browser needs replacing, because deleting it from today's code leaves it in the history. It's also worth limiting how often someone can try a password or call an expensive feature, so one script can't run up your AI bill overnight.

## What happens when something fails

A demo follows the path its builder expects. Real people submit twice, leave forms half done and come back after the connection drops. A double submit shouldn't create two orders or charge a card twice.

In a lot of prototypes the data lives in memory or in a store nobody designed, so a restart resets it. A production app needs a real database whose structure can change without losing anything, and backups someone has restored at least once.

List the outside services too: payments, email, sign-in. For each, know who owns the account and what the app does when that service is slow or down. A request that waits forever freezes the page, and one that fails silently loses the customer's work. Add an alert for when the app stops responding, and find out whether anyone besides the builder can release an update and roll it back.

## The workflow is usually worth keeping

We wrote about one of these rebuilds in detail: [a senior-care operator's low-code prototype](/blog/prototype-to-production-health-data) that had exactly the right workflow and no way to hold real resident records safely. The screens stayed the same and almost everything underneath changed.

## Something to try this week

In a test environment with dummy data, sign in as two different people and try to open each other's records, including by calling the app directly. Then restart the app and check the records are still there. If customer records turn out to be exposed in the live app, restrict access right away, and replace any secret key that has leaked.

Our [prototype to production](/prototype-to-production) page covers how we take these apps the rest of the way. If you have one that's about to meet real customers, [tell us about it](/contact).
