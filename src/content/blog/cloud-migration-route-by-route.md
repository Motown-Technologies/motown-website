---
title: "Cloud migration: lowering your bill without a risky cutover"
image: ../../assets/blog/cloud-migration-route-by-route-image.jpg
imageAlt: "Taped cardboard moving boxes floating above a blue floor, one box resting on the ground"
cover: ../../assets/blog/cloud-migration-route-by-route.png
description: "Most cloud bills pay for egress and idle capacity. How to read yours, decide what moves and migrate one route at a time instead of all at once."
pubDate: 2026-09-03
relatedPages: ["/cloud-migration-services"]
category: software
---

If your cloud bill has grown faster than your traffic, the cause is rarely compute. It's egress on files users download, servers sized for a peak that hardly ever comes, and managed services priced for a company bigger than yours. Moving to a cheaper platform can fix that, as long as the move itself doesn't become the risky part.

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

Be honest about the third group. GPU workloads, long-running stateful services and anything behind a compliance boundary that took real effort to get right are usually best left alone. A plan that insists on moving everything tends to turn into the rewrite nobody wants to sign off on.

## Know where each piece usually lands

If the destination is Cloudflare, the mapping is fairly predictable:

- API routes and the glue between services become Workers. They're billed per request and scale to zero when traffic is quiet, so there are no instances to size.
- Static sites and server-rendered frontends go to Pages, with the CDN, TLS and preview environments included. For apps built this way from the start, see [cloud application development](/cloud-application-development).
- Files in S3 move to R2, which uses the same S3 API and charges no egress fees. For an app that serves a lot of files, that line item alone is often the whole business case.
- Small relational databases can move to D1. Postgres or MySQL databases that need to stay put get Hyperdrive in front of them, so a request doesn't pay for a cold connection every time.
- Scheduled jobs become Cron Triggers and background work goes on Queues. The server whose only job was running crontab can be shut down.

Whatever stays behind gets Cloudflare in front of it, so the rest can move without waiting on it.

## Move one route at a time

The risky way to migrate is a single weekend where everything switches at once, and any problem reaches every user. You can avoid that because your traffic already flows through DNS you control. Routes can move to the new platform one at a time while the rest keep running on the old setup.

Each step is small enough to check on its own. Users keep the same URLs the whole way through, including for files that now come from R2, and most of them never notice that anything changed.

A sensible order is to start where the savings are largest and the risk is smallest. File storage is often a good first move, because shifting it to R2 removes egress fees without touching application code.

## Questions to answer before you commit

- Which few line items make up most of the bill, and does another platform actually charge less for them?
- Which workloads have to stay, and what will sit in front of them?
- Can traffic be split by route at the DNS level, so pieces can move one at a time?
- What would the bill look like with only the easy moves done?

If the answers point to real savings, you can start with the easy moves and decide on the rest once you see the new bill.

## One way to get started

When a company asks us to look at its cloud costs, we start the same way: a recent invoice and a rough map of what runs where. From that we can say what moves, what stays and what the bill should look like afterward. We can also structure the engagement against the savings we find, so the audit costs nothing if there's nothing to save.

Read how we approach [cloud migration](/cloud-migration-services), or [send us your bill and tell us what runs where](/contact).
