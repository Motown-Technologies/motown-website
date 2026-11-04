---
title: "Cloud migration: read the bill before you move anything"
image: ../../assets/blog/cloud-migration-route-by-route-image.jpg
imageAlt: "Taped cardboard moving boxes floating above a blue floor, one box resting on the ground"
cover: ../../assets/blog/cloud-migration-route-by-route.png
description: "Before a cloud migration, find out which charges grew. How to sort workloads into move, bridge or stay, and then move one route at a time."
pubDate: 2026-09-03
relatedPages: ["/cloud-migration-services"]
category: software
---

The cloud bill has gone up, and nothing obvious changed in the business. The tempting answer is to move everything somewhere cheaper. That's a lot of work if the expensive part turns out to be a database you have to keep anyway.

Our view: read the invoice first, move the pieces that actually save money, and leave the rest where it is.

## Read the invoice before you plan the move

Group a recent bill by what each line pays for. Three things tend to stand out. There's egress, the fee charged on every file a user downloads. There are servers sized for peak traffic that sit idle most of the month. And there's a load balancer, firewall, CDN and TLS, each billed on its own.

If most of the cost sits in those lines, a platform that bills differently can make a real difference. If most of it is GPU time or a large database that has to stay put, moving saves less.

## Sort every workload into three groups

List everything the application runs and put each item in a group. Some things move as they are. Some need a bridge, so they keep running where they are while the rest moves around them. Some stay. GPU workloads, long-running services that hold their own data, and anything behind a compliance boundary that took real effort to get right are usually best left alone. Moving them too can turn a cost-saving project into a rewrite.

## What a move to Cloudflare can look like

Here's a starting map for Cloudflare. Check each workload's fit and limits before treating it as a plan:

- API routes and the glue between services become Workers, billed per request, so there are no servers to size.
- Files in S3 move to R2, which uses the same S3 API and charges no egress fees. For an app that serves a lot of files, that line alone is often the whole business case.
- Small databases can move to D1. Postgres or MySQL databases that need to stay put get Hyperdrive in front of them.
- Scheduled jobs become Cron Triggers, and the server whose only job was running them can be shut down.

## Move one route at a time

Switching everything in one weekend makes a problem hard to pin down. Where the traffic setup allows it, move individual routes while the rest keep running on the old platform. Users keep the same URLs the whole way through, and most never notice anything changed. Ask the migration team to show you the split, and how to roll it back, before you rely on it.

File storage is often a good first candidate when downloads are a big share of the bill.

## The work after the move counts too

A lower hosting bill is only part of the comparison. Someone still has to look after the new setup, learn its limits and support whatever stayed behind. If the saving is small or the workload is hard to move, leaving it alone is a perfectly good decision.

## This week

Pull last month's invoice and find the few line items that make up most of it. Ask whether another platform actually charges less for those. If it does, price the easy moves on their own, each with its expected saving, the work involved and what it would take to reverse.

We plan and carry out moves like this as part of our [cloud migration](/cloud-migration-services) work. If your bill has crept up, [send us the breakdown](/contact).
