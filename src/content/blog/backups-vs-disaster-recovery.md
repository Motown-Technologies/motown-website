---
title: "Backups vs disaster recovery: what gets you working again"
image: ../../assets/blog/backups-vs-disaster-recovery-image.jpg
imageAlt: "A blue spare tire on a stone surface with a car jack and wheel wrench laid out beside it"
cover: ../../assets/blog/backups-vs-disaster-recovery.png
description: "A successful backup job does not tell you when staff could work again. How to plan and rehearse recovery from a business software failure."
pubDate: 2026-12-16
relatedPages: ["/database-design", "/cloud-application-development"]
category: software
---

The backup dashboard is green. Then the booking system stops at four in the afternoon, and the questions start. Who can restore it? Where would it run? Would today's appointments still be there?

A backup is a copy of your data. Disaster recovery is the tested plan for getting the software, and the people who depend on it, working again. A green dashboard only tells you about the first one.

## A copy of the data is the easy part

The usual rule of thumb, which [CISA recommends to small and medium businesses](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data), is 3-2-1: three copies of important data, on two types of storage, with one off site. For a cloud app, off site usually means a different account or region, so one compromised login or one outage can't take out the data and its backup together.

Restoring the data still doesn't put anyone back to work. The app also needs somewhere to run, its settings and passwords, its connections to payments, email and accounting, and a domain pointing at the right place. Someone has to know the steps and have the access to carry them out. A recovery plan writes all of that down.

## Two numbers to pick on purpose

The first is how much recent work you could lose. [NIST](https://csrc.nist.gov/glossary/term/rpo) calls it the recovery point objective. If you back up once a night, a failure at 4pm can cost you a day of orders, bookings or notes.

The second is how long you could be down, the recovery time objective in [NIST's contingency planning guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf).

Say a dental practice runs its schedule in a custom app. Losing the morning's bookings would mean phoning patients one by one, so it wants to lose a few minutes of data at most. An hour offline is annoying but survivable. A wholesaler taking orders around the clock might weigh it the other way. Lower numbers cost more, so choose them before an outage chooses them for you.

## The backup nobody has restored

This is the gap we see most often. The job runs, the dashboard shows green, and nobody has checked that the file opens, that it's complete, or how long a restore takes with real data.

A restore test is the only proof that a backup works, and it gives you your actual recovery time. We schedule restore tests, time them, and treat a failed one as an incident. It's easy to keep postponing that while the app runs fine and other requests feel more urgent. We'd do it anyway.

Around the drill, a sound setup lets you restore the database to the moment before a mistake, not only to last night. It keeps backups in a separate account with their own access controls, and it has a short runbook saying who does what, in what order.

## One question for this week

Ask whoever runs your software when a backup was last restored and how long it took. If nobody knows, book a restore and time it.

We set this up as part of our [cloud application work](/cloud-application-development) and [database design](/database-design). If you'd like help planning your first drill, [get in touch](/contact).
