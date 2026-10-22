---
title: "What an AI-built prototype needs before real users arrive"
image: ../../assets/blog/what-your-prototype-skipped-image.jpg
imageAlt: "A half-built stone arch supported by wooden scaffolding on a blue floor"
cover: ../../assets/blog/what-your-prototype-skipped.png
description: "A no-code or AI-built prototype can prove an idea in days. Here is what it usually leaves out, and what we add before it goes in front of customers."
pubDate: 2026-09-11
relatedPages: ["/prototype-to-production"]
---

It has never been faster to get a working app in front of someone. A no-code tool or an AI coding assistant can turn an idea into a demo in days, and for finding out whether an idea is worth pursuing, that speed is useful.

The problems show up when real customers arrive. A demo only has to work for one person following one path through the screens, and most prototypes are built with that in mind. The second user, the unexpected click and the redeploy that wipes the data all come later.

Whether a prototype was vibe-coded, generated with AI or built on a no-code platform, these are the layers we add before it can run for real.

## Data that survives a redeploy

In a lot of prototypes the data lives in memory or in a store nobody designed. Restart the app and it resets, or two records end up disagreeing with each other.

A production app needs a real schema, migrations so its structure can change without losing anything, and backups. The data has to stay consistent and still be there after the next deploy.

## Real sign-in and permissions

Prototypes often have hard-coded secrets and let anyone sign in. That is fine on a laptop and a serious problem once customer data is involved.

We add proper authentication, role-based access so each person only reaches what they should, and secrets that are managed outside the code. Those are the guardrails that keep a live app safe.

## The paths a demo never takes

A demo sticks to the happy path. That is why so many prototypes work on the first try and break on the second user.

Production code runs background jobs and queues for the work that shouldn't hold up a page, and its business logic has to keep working when something goes wrong partway through. We test it under real load, with proper error handling, before customers rely on it.

## The services it depends on

No app runs on its own. It needs APIs, payments, sign-in providers and other third-party services, and each one has to be connected properly and hardened.

Underneath that, we connect the app to the cloud it runs on (AWS, GCP or Azure), managed Postgres, Redis and object storage, transactional email that actually gets delivered, and monitoring, logging and product metrics so you can see what it's doing.

## A way to ship and roll back

Prototypes tend to be deployed by hand, with no way back if a release goes wrong. We set up hosting, automated CI/CD, monitoring and scaling, so a release is routine and a bad one can be rolled back.

## An interface built for a real audience

The screens people touch need to be accessible and responsive, and they need to hold up to what a paying customer expects. A demo audience is usually more forgiving than that.

## A worked example

We wrote about one of these rebuilds in detail: [a senior-care operator's low-code prototype](/blog/prototype-to-production-health-data) that had exactly the right workflow and no way to hold real resident records. The screens stayed the same and almost everything underneath changed.

## Where to start

A prototype that works is a good starting point, because the idea has already been tested. If you have one, whether it was vibe-coded, AI-built or got stuck at 80%, [send it to us](/contact). We'll tell you what stands between it and an app you can ship, and how quickly we can get there. You can also read more about how we approach [prototype to production](/prototype-to-production).
