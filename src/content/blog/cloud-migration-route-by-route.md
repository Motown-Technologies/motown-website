---
title: "Your cloud bill went up. Do you actually need to move?"
image: ../../assets/blog/cloud-migration-route-by-route-image.jpg
imageAlt: "Taped cardboard moving boxes floating above a blue floor, one box resting on the ground"
cover: ../../assets/blog/cloud-migration-route-by-route.png
description: "How to investigate a rising cloud bill, weigh the disruption of moving and decide which workloads should stay where they are."
pubDate: 2026-09-03
relatedPages: ["/cloud-migration-services"]
category: software
---

A cloud bill can rise without an obvious change in the business. Find out which charges increased before planning a move. Moving everything to a cheaper platform is a lot of work if the expensive part is a database you still need to keep.

Start with a recent invoice and a rough map of what runs where. File downloads, idle servers and managed services are worth examining. A move should follow a cost comparison that includes the work of migrating and looking after the new setup.

## Read the invoice before you plan the move

Start with a recent bill and group the line items by what they pay for. Three things tend to stand out:

- Egress, charged on every file a user downloads.
- Instances sized for peak traffic that sit idle most of the month.
- A load balancer, firewall, CDN and TLS, each on its own bill.

If most of the cost sits in those lines, a platform that bills differently will make a real difference. If most of it is GPU time or a large database that has to stay where it is, moving will save less, and it's better to know that before you start.

## Sort every workload into three groups

List everything the application runs, then put each item into one of three groups:

- It has a native home on the new platform and can move as it is.
- It needs a bridge, so it keeps running where it is while the rest moves around it.
- It belongs where it is and should stay.

Leave room for workloads that should stay. GPU workloads, long-running stateful services and anything behind a compliance boundary that took real effort to get right are usually best left alone. Moving those workloads as well can turn a cost-saving project into a much larger rewrite.

## Mapping workloads to Cloudflare

For a move to Cloudflare, this is a starting map of the options to investigate. Check the fit and limits of each workload before treating it as a migration plan:

- API routes and the glue between services become Workers. They're billed per request and scale to zero when traffic is quiet, so there are no instances to size.
- Static sites and server-rendered frontends go to Pages, with the CDN, TLS and preview environments included.
- Files in S3 move to R2, which uses the same S3 API and charges no egress fees. For an app that serves a lot of files, that line item alone is often the whole business case.
- Small relational databases can move to D1. Postgres or MySQL databases that need to stay put get Hyperdrive in front of them, so a request doesn't pay for a cold connection every time.
- Scheduled jobs become Cron Triggers and background work goes on Queues. The server whose only job was running crontab can be shut down.

Whatever stays behind gets Cloudflare in front of it, so the rest can move without waiting on it.

## Move one route at a time

Switching everything in one weekend makes it harder to isolate a problem. Where the traffic setup supports it, move individual routes while the rest keep running on the old platform. Ask the migration team to demonstrate how that split and its rollback will work before relying on it.

Each step is small enough to check on its own. Users keep the same URLs the whole way through, including for files that now come from R2, and most of them never notice that anything changed.

Start with a move that offers worthwhile savings at a manageable risk. File storage may be a useful first candidate if downloads account for a large share of the bill. Check the storage connections and URLs before assuming it can move without application changes.

## Questions to answer before you commit

- Which few line items make up most of the bill, and does another platform actually charge less for them?
- Which workloads have to stay, and what will sit in front of them?
- Can the traffic setup split routes between platforms, so pieces can move one at a time?
- What would the bill look like with only the easy moves done?

If the answers point to real savings, you can start with the easy moves and decide on the rest once you see the new bill.

## Count the work after the move

A lower hosting bill is only part of the comparison. The team still has to maintain the new deployment, understand its limits and support the pieces left behind. Make sure someone can own that setup before approving a move.

Price the smaller moves separately from the more involved ones. For each, write down the expected saving, the migration work and what it would take to reverse it. If the saving is small or the workload is difficult to move, leaving it alone is a reasonable decision.
