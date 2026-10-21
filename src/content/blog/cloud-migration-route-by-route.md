---
title: "Leaving AWS one route at a time"
image: ../../assets/blog/cloud-migration-route-by-route-image.jpg
imageAlt: "Taped cardboard moving boxes floating above a blue floor, one box resting on the ground"
cover: ../../assets/blog/cloud-migration-route-by-route.png
description: "Most cloud bills are egress, idle capacity and managed services sized for a bigger company. We move apps to Cloudflare one route at a time."
pubDate: 2026-09-03
relatedPages: ["/cloud-migration-services"]
draft: true
---

When a company asks us to look at its AWS, GCP or Azure bill, the expensive part is rarely the compute. It's egress, capacity reserved for a peak that hardly ever comes, and managed services priced for a scale the business hasn't reached.

Most of a typical application can move to Cloudflare cleanly. The hard part is knowing which pieces move, and in what order, so the switch is uneventful for the people using the app.

## Start with an inventory

A migration starts with a list of every workload, and each one goes into one of three groups:

- It has a Cloudflare-native home and can move as it is.
- It needs a bridge, so it can keep running where it is while the rest moves around it.
- It belongs where it is and should stay.

Being honest about that last group is what keeps the cutover boring. A plan that tries to move everything usually turns into the rewrite nobody wants to sign off on.

## Where each piece usually goes

- API routes and the glue between services move to Workers. There are no instances to size, and nothing sits idle waiting for a peak that arrives twice a year.
- Static sites and server-rendered frontends move to Pages. The CDN, TLS and preview environments come with the platform, so there's no need to piece them together from four separate services.
- Files in S3 move to R2, which uses the same S3 API with no egress fees. For anything that serves files to users, that line item alone is often the whole business case.
- Small relational databases move to D1. Postgres and MySQL databases that need to stay put get Hyperdrive in front of them, so a Worker isn't paying for a cold connection on every request.
- Scheduled jobs become Cron Triggers and background work becomes Queues. The server whose only job was running crontab can be retired.

Some things stay where they are: GPU workloads, long-running stateful services, and anything with a compliance boundary that took real effort to get right. Those get Cloudflare in front of them so everything else can move.

## Route by route, behind the same DNS

The cutover happens in steps. Because traffic already flows through DNS you control, routes can move to Cloudflare one at a time while the rest keep running on the old setup. Users keep the same URLs the whole way through, including files that now come from R2.

## What changes on the bill

The legacy cloud bill was designed around instances and regions. Most applications built in the last decade don't need either, and they pay every month for the mismatch. After a migration, the usual changes look like this:

- Egress on every file a user downloads goes away with R2.
- Instances sized for peak and idle the rest of the month become Workers billed per request, which scale to zero when traffic is quiet.
- A load balancer, firewall, CDN and TLS that each had their own bill come with the platform and get configured once.

## How we price it

We start from a recent invoice and a rough map of what runs where. From that we can tell you what moves, what stays, and what the bill should look like afterward. Engagements can be structured against the savings we find, so the audit costs nothing if there's nothing to save.

If your cloud bill has grown faster than your traffic, read how we approach [cloud migration](/cloud-migration-services), or [send us your bill and tell us what runs where](/contact).
