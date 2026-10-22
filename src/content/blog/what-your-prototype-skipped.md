---
title: "What an AI-built prototype needs before real users arrive"
image: ../../assets/blog/what-your-prototype-skipped-image.jpg
imageAlt: "A half-built stone arch supported by wooden scaffolding on a blue floor"
cover: ../../assets/blog/what-your-prototype-skipped.png
description: "A no-code or AI-built prototype can prove an idea in days. Here is what it usually leaves out, and what we add before it goes in front of customers."
pubDate: 2026-09-11
relatedPages: ["/prototype-to-production"]
---

Before an AI-built or no-code prototype can take real users, it needs data that survives a redeploy, real sign-in and permissions, handling for the paths a demo never takes, hardened connections to the services it depends on, and a way to ship and roll back.

A no-code tool or an AI coding assistant can turn an idea into a demo in days, and that speed is useful for finding out whether an idea is worth pursuing. A demo only has to work for one person following one path through the screens, though, and most prototypes are built with that in mind. These are the layers we add before one runs for real.

## Data that survives a redeploy

In a lot of prototypes the data lives in memory or in a store nobody designed. Restart the app and it resets, or two records end up disagreeing with each other.

A production app needs a real schema, migrations so its structure can change without losing anything, and backups. The data has to stay consistent and still be there after the next deploy.

## Real sign-in and permissions

Prototypes often have hard-coded secrets and let anyone sign in. That is fine on a laptop and a serious problem once customer data is involved. In one rebuild we took on, the "submitted by" field was a dropdown of six hard-coded names, because the demo had no users at all.

We add proper authentication, role-based access so each person only reaches what they should, and secrets that are managed outside the code.

## The paths a demo never takes

A demo sticks to the happy path. That is why so many prototypes work on the first try and break on the second user.

Production code runs background jobs and queues for the work that shouldn't hold up a page, and its business logic has to keep working when something goes wrong partway through. We test it under real load, with proper error handling, before customers rely on it. The screens people touch also need to be accessible and responsive, and they need to hold up to what a paying customer expects.

## The services it depends on

No app runs on its own. It needs APIs, payments, sign-in providers and other third-party services, and each one has to be connected properly and hardened.

Underneath that, we connect the app to the cloud it runs on (AWS, GCP or Azure), managed Postgres, Redis and object storage, transactional email that actually gets delivered, and monitoring, logging and product metrics so you can see what it's doing.

## A way to ship and roll back

Prototypes tend to be deployed by hand, with no way back if a release goes wrong. We set up hosting, automated CI/CD, monitoring and scaling, so a release is routine and a bad one can be rolled back.

## Example: a senior-care prototype rebuilt for health data

We wrote about one of these rebuilds in detail: [a senior-care operator's low-code prototype](/blog/prototype-to-production-health-data) that had exactly the right workflow and no way to hold real resident records. The screens stayed the same and almost everything underneath changed.

## Where to start

A prototype that works is a good starting point, because the idea has already been tested. If you have one, whether it was vibe-coded, AI-built or got stuck at 80%, [send it to us](/contact). We'll tell you what stands between it and an app you can ship. Most prototypes take roughly 4 to 8 weeks to make production-ready. You can also read more about how we approach [prototype to production](/prototype-to-production).
