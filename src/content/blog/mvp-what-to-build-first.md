---
title: "MVP scope: deciding what the first version leaves out"
image: ../../assets/blog/mvp-what-to-build-first-image.jpg
imageAlt: "A small wooden stool alone on a blue floor, with a stack of blank cards set aside in the corner"
cover: ../../assets/blog/mvp-what-to-build-first.png
description: "How to pick the one user journey your first version has to prove, and how to write down the features that wait so the launch date stops moving."
pubDate: 2026-08-13
relatedPages: ["/mvp-development"]
category: software
---

A potential customer asked for one feature, and a competitor already has another. Your team can explain why each belongs in the first version. Meanwhile the launch date moves every time the list grows.

An MVP is the smallest thing that answers the question your business depends on. Usually that's whether people will do a particular thing, and pay for it, if you make it easy enough. Everything else can wait. The hard part is getting people to agree that it waits.

## One journey decides the scope

Describe the journey from the user's starting problem to the point where they get value. Then go down the feature list and ask, for each one, whether that journey can be completed without it. If it can, the feature waits.

A short list leaves room to make that one journey work properly. People need to understand the screens, reach them on the devices they have, and recover when something goes wrong. The journey also needs its foundations: sign-in and permissions that fit, storage you can trust, and a way to release and roll back changes. Payments belong in the first version if payment is part of the question you're testing.

If the task can be done in a browser, a responsive web version is a good place to start. If it needs more from a phone, work through [whether it needs an installed app](/blog/native-cross-platform-or-web-app) before committing to one.

## "Later" needs a reason written beside it

This is where we'd put the effort. Writing "later" next to a feature doesn't settle the disagreement that put it on the list. Someone valued that idea, and they'll raise it again at the next meeting unless the decision is written down with its reasons.

For each feature that waits, record who needs it, what they'd do without it, and what evidence would bring it back into scope. Then people can point to the decision instead of reopening it.

The same record handles requests that arrive mid-build. A good idea that turns up halfway through goes on the list for the next cycle, and the launch date stays put. If it truly has to go in, say plainly what it costs: the date, the budget or another feature.

## Small still has to last

Estimate what the first version will cost to run and what changes at a larger number of users. You'll know the next constraint without paying for capacity you may never need.

Keep the code and hosting in the company's own accounts, with setup notes and the list of deferred work, so the first version stays usable when the original builder moves on.

## This week

At your next scope discussion, ask what a first user must be able to finish and what you need to learn from it. Write the excluded features down next to the included ones, each with its reason, so everyone leaves with the same release in mind.

Our [MVP development](/mvp-development) page covers how we build first versions. If your list keeps growing, [tell us what you're building](/contact).
