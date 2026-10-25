---
title: "How a sensible feature list turns into a launch that never happens"
image: ../../assets/blog/mvp-what-to-build-first-image.jpg
imageAlt: "A small wooden stool alone on a blue floor, with a stack of blank cards set aside in the corner"
cover: ../../assets/blog/mvp-what-to-build-first.png
description: "How to choose the user journey a first version needs to prove, make difficult scope decisions and keep useful ideas for later."
pubDate: 2026-08-13
relatedPages: ["/mvp-development"]
category: software
---

A potential customer asked for one feature, and a competitor has another. The team can explain why each belongs in the first version, yet the release date keeps moving as the list grows.

Choosing an MVP means deciding which question the first version needs to answer and which work can wait. Expect some disagreement: people need to understand why an idea they value will have to wait.

## Find the one loop

An MVP is the smallest thing that answers the question your business depends on. Usually that question is whether people will do a particular thing, and pay for it, if you make it easy enough.

Describe the journey from the user's starting problem to the point where they receive value. For each proposed feature, ask whether that journey can be completed without it. Put the rest on a written list with the reason it was deferred.

Record the cuts so people can refer back to the decision instead of reopening it at each meeting. When a good idea turns up mid-build, it goes on the list for the next cycle, and the launch date stays where it was.

## Small scope still needs to work

A shorter feature list leaves more room to make the chosen journey usable. People need to understand the screens, reach them on the devices they have and recover when something goes wrong.

Include the foundations the journey actually needs: appropriate sign-in and permissions, reliable data storage, and a way to release and roll back changes. Payments belong in the first version if payment is part of the question you are testing.

A responsive web version is a useful starting point when users can complete the task in a browser. If the product needs something more from a phone, work through [whether it needs an installed app](/blog/native-cross-platform-or-web-app) before committing to one.

## The feature you leave out needs an explanation

Writing "later" beside a feature doesn't settle the disagreement that put it on the list. Record who needs it, what they would do without it and what evidence would bring it back into scope.

If a new request arrives during the build, compare it with the agreed journey. If it must be included, make the effect on the date, budget or another feature explicit.

## Plan for the users you are trying to reach

Estimate what the first version will cost to run and what changes at a larger number of users. This helps identify the next constraint without committing to capacity the product may never need.

The handover matters as well. Keep the repository and hosting in the company's accounts, with setup notes and a record of deferred work, so the first version stays usable when the original builder moves on.

## Before you start

At the next scope discussion, ask what a first user must be able to finish and what you need to learn from that experience. Write down the excluded features alongside the included ones, so everyone leaves with the same understanding of the release.
