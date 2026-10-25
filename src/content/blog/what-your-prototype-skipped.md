---
title: "Security and reliability checks for a vibe-coded prototype"
image: ../../assets/blog/what-your-prototype-skipped-image.jpg
imageAlt: "A half-built stone arch supported by wooden scaffolding on a blue floor"
cover: ../../assets/blog/what-your-prototype-skipped.png
description: "The security and reliability gaps to check before a vibe-coded or AI-built prototype holds real customer data, and how to test for each one."
pubDate: 2026-09-11
relatedPages: ["/prototype-to-production"]
category: software
---

In one rebuild we took on, "submitted by" was a dropdown of six hard-coded names. Without user accounts, the dropdown could demonstrate the workflow but couldn't identify who submitted a record, and anyone with the link could submit as anyone.

A vibe-coded or no-code prototype can help people agree on what the product should do. Working screens alone don't show whether someone can reach another customer's records or whether the app recovers when a service fails. Check those protections before customers depend on it, even if security and reliability were part of the original brief.

## Security: who can reach what

### Permissions enforced on the server

Check whether hiding a button is the only thing preventing an unauthorized action. If the server accepts the same request from someone without permission, the data remains exposed even though the screen looks locked down.

Replacing that dropdown meant giving each person a real account, with permissions suited to their job, and checking those permissions on the server for every request. Ask the team to demonstrate a user trying to reach someone else's records by calling the app directly, outside the normal screens. Check the records they are denied and the ones they can open.

### Database rules

Some prototypes let the browser access a hosted database through a public API. A visible project address or publishable key can be part of that design; access must be restricted by the permissions enforced behind it. Which records are exposed depends on the tables available through the API, the permissions granted and any rules restricting access to individual records.

For a setup such as Supabase, check table permissions and row-level security policies together. Its [data security guide](https://supabase.com/docs/guides/database/secure-data) explains how those protections work. Test the exposed tables both without signing in and with an account that should have limited access. Secret keys that bypass those protections must never reach the browser.

### Secrets kept out of the code

Look for private payment keys, email service credentials and database passwords pasted into the code. Store these in the hosting platform's secret settings and use them only in server-side code. Moving a value into an environment variable doesn't keep it private if the build includes that value in the browser's code. Vite, for example, [exposes variables prefixed with `VITE_` to client code](https://vite.dev/guide/env-and-mode.html).

Rotate any secret credential that was committed or exposed to the browser. Deleting it from the current code leaves it in the repository's history. Publishable keys intended for browser use are different; check each provider's guidance before treating a visible key as a leaked secret.

### Input and dependencies

Treat everything a user types or uploads as untrusted: form fields, file uploads, and text passed to an AI model. Limit how often someone can try a password or call an expensive feature, so one script can't run up your AI bill overnight.

Check every package the app depends on. AI assistants sometimes suggest libraries that are outdated or don't exist, and attackers have registered packages under names that assistants tend to invent. Each dependency should be real, maintained and pinned to a known version. The [OWASP Top 10](https://owasp.org/Top10/) is a useful checklist for the rest of a web app review.

## Reliability: what happens when something fails

### Data that survives a redeploy

In a lot of prototypes the data lives in memory or in a store nobody designed. Restart the app and it resets, or two records end up disagreeing with each other.

A production app needs a real schema, migrations so its structure can change without losing anything, and backups that someone has restored at least once.

### The paths a demo never takes

A demo usually follows the path its builder expects. Real people submit twice, leave forms unfinished and come back after a connection drops. A double submit shouldn't create two orders or charge a card twice.

Work that takes too long for a page may need a background job. A process that fails halfway through needs a defined way to resume or stop safely. Test the paths people will rely on, including the error messages and recovery steps. The screens need to work on their devices and be accessible to them.

### Outside services that fail

List the services the prototype depends on, such as payments, email and sign-in. For each, check who owns the account, where its keys live and what the app does when that service is slow or down. A request that waits forever freezes the page; one that fails silently loses the customer's work. Test slow and refused requests too.

### Knowing it broke before a customer tells you

A prototype usually fails quietly. Add error tracking, logs you can search and an alert when the app stops responding. Agree which failures should wake someone up and who that person is.

### A way to ship and roll back

Find out how the prototype is deployed and whether someone other than its builder can repeat that process. Before customers depend on it, rehearse a release and a rollback. Afterward, check the records and the screens.

## Example: a senior-care prototype rebuilt for health data

We wrote about one of these rebuilds in detail: [a senior-care operator's low-code prototype](/blog/prototype-to-production-health-data) that had exactly the right workflow and no way to hold real resident records safely. The screens stayed the same and almost everything underneath changed.

## Where to start

In an isolated test environment with dummy data, sign in as two people with different accounts and try to open each other's records, including by calling the app directly. Search the code and its history for secret credentials. Then restart the app, check the records, and make an outside service unavailable to see what users get.

Separate what you find into launch blockers and work that can wait. Testing with dummy data can continue while gaps are closed. If customer records are exposed, restrict access immediately; if secret credentials have leaked, rotate them and investigate their use before resuming the affected operation.
