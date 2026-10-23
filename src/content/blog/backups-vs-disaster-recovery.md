---
title: "Backups vs disaster recovery for business software"
image: ../../assets/blog/backups-vs-disaster-recovery-image.jpg
imageAlt: "A blue spare tire on a stone surface with a car jack and wheel wrench laid out beside it"
cover: ../../assets/blog/backups-vs-disaster-recovery.png
description: "A backup is a copy of your data. Disaster recovery is the tested plan for running again after a failure. How they differ, and what to decide."
pubDate: 2026-12-16
relatedPages: ["/database-design", "/cloud-application-development"]
category: software
---

A backup is a copy of your data. Disaster recovery is the tested plan for getting your software, and the business that runs on it, working again after something goes badly wrong. You need both, and having backups doesn't mean you have a recovery plan.

Many companies find this out on the worst possible day. The backups were running every night, but nobody knew how to restore one, how long it would take, or what else the app needed besides the data.

## What a backup is

A backup is a copy of your data stored separately from the original, so that if the original is deleted, corrupted or encrypted by ransomware, you still have it.

The usual rule of thumb, which [CISA recommends to small and medium businesses](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data), is 3-2-1: three copies of important data, on two different types of storage, with one copy off site. For a cloud app, off site usually means a different account or region from the one the app runs in, so one compromised login or one outage can't take out the data and its backup together.

A backup tells you that a copy of the data exists. It doesn't tell you how to use it.

## What disaster recovery is

Disaster recovery covers how you get back to working, and how fast.

Restoring the data is only part of that. To run again, an app needs somewhere to run, its configuration and secrets, its connections to payment, email and accounting tools, and a domain pointing at the right place. Someone has to know the steps and have the access to carry them out. A disaster recovery plan writes all of that down, and gets rehearsed before anyone needs it.

The events it covers vary. Someone deletes the wrong records, a bad release corrupts data, a cloud region goes down, or an attacker gets into the account. Each calls for a slightly different response, and the plan should cover the ones that would hurt you most.

## Two numbers to decide

Recovery planning comes down to two numbers, and choosing them is a business decision more than a technical one.

The recovery point objective (RPO) is, in [NIST's definition](https://csrc.nist.gov/glossary/term/rpo), "the point in time to which data must be recovered after an outage." Put simply, it's how much recent work you can afford to lose. If you back up once a night, a failure at 4pm can cost you a day of orders, bookings or notes.

The recovery time objective (RTO) is how long the system can stay down before the damage becomes unacceptable. [NIST's contingency planning guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) describes it as the maximum time a system can remain unavailable.

Say a dental practice runs its schedule in a custom app. Losing the morning's bookings would mean phoning patients one by one, so it wants an RPO of minutes. An hour of downtime is annoying but survivable, so an RTO of an hour or two is fine. A wholesaler taking orders around the clock might weigh it the other way. Lower numbers cost more, so the aim is to pick them on purpose instead of finding out what they are during an outage.

## A backup nobody has restored

The gap we see most often is a backup that has never been restored. The job runs, the dashboard shows green, and nobody has checked that the file opens, that it's complete, or how long a restore takes with real data.

A restore test is the only proof that a backup works, and it gives you your actual recovery time. We schedule restore tests, time them, and treat a failed one as an incident.

## What a sound setup looks like

For most business software, we set up:

- Point-in-time recovery on the database, so you can restore to the moment just before a mistake, not only to last night.
- Backups stored in a separate account or region, with their own access controls.
- Infrastructure defined in code, so the servers and settings around the data can be rebuilt from scratch instead of pieced together from memory.
- A short written runbook saying who does what, in what order, with which access.
- Restore drills on a schedule, with the time each one took written down.

None of this is unusual. It tends to get skipped because the app is running fine and there's always something more pressing.

## Where to start

If you're not sure where you stand, ask whoever runs your software three questions. When was a backup last restored, and how long did it take? How much data would we lose if the database failed right now? If the hosting account were locked tomorrow, what would we do?

Backup and recovery is part of our [database design](/database-design) work, and the infrastructure side sits under [cloud application development](/cloud-application-development). For a second opinion on your setup, [get in touch](/contact).
