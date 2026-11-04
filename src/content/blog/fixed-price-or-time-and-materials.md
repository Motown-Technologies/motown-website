---
title: "Fixed price or hourly: how to read a software quote"
image: ../../assets/blog/fixed-price-or-time-and-materials-image.jpg
imageAlt: "A blue steel bar cut to an exact length next to a loose coil of off-white string"
cover: ../../assets/blog/fixed-price-or-time-and-materials.png
description: "How to compare fixed-price and time-and-materials quotes by scope, uncertainty and who pays when the estimate is wrong."
pubDate: 2027-01-20
relatedPages: ["/mvp-development", "/technical-due-diligence"]
category: software
---

One developer offers a fixed price. Another quotes an hourly rate and a range. The totals look close, and you still can't tell whether they cover the same work or what happens when the project changes.

Both are fair ways to price software. Where they differ is who pays when the estimate turns out wrong.

## A fixed price fixes the scope, too

A fixed price attaches a number to a written scope. The developer guesses how long the work will take and adds a margin for what they can't see yet. If the work goes smoothly, that margin is profit. If it doesn't, they absorb the overrun, and a team absorbing an overrun has every reason to read the scope as narrowly as it can. Anything the scope didn't name becomes a separately priced change request.

It works best when the work is well understood: an audit with defined deliverables, or a rebuild against an agreed design.

## Time and materials needs someone watching

Time and materials bills for the hours worked at an agreed rate, usually with a weekly report. You pay for what the work turns out to need, which can be less than a fixed quote's padding or more than anyone hoped.

You can also change direction without renegotiating. If your first users show you the reporting screen matters more than onboarding, the team switches and the invoice follows. The catch is that nothing keeps the total down except someone on your side who reads the report, asks why a task took twice the estimate and decides what to drop when the budget gets tight.

## An unknown costs money under either model

Say a clinic wants a booking system that talks to its existing practice software, and nobody has looked at how that software connects yet. A fixed quote has to price the worst case. A time-and-materials quote can only give a range until someone looks.

Choose a fixed price when you can describe the finished thing well enough that two developers would build roughly the same product. Choose time and materials when the work means finding things out: an unknown integration, a legacy system nobody documented, a product still looking for its users. If you can't describe it yet, pay for a short fixed-price discovery and get the build quoted after.

Another option fixes the date and budget and lets the scope move, so a new requirement means something else waits. The post on [choosing an MVP scope](/blog/mvp-what-to-build-first) goes through that decision.

## Four questions for either quote

- What exactly is included? A fixed quote should list the screens, user roles, integrations and data. "Booking system" alone gets argued over later.
- How are changes priced and approved? An expensive change process can make a fixed quote cost more than paying by the hour would have.
- What does "done" mean? Look for testing, deployment, a handover and support after launch. Some quotes stop at "code delivered."
- Who owns the result? The repository, hosting accounts and domain should be in your name. That decides whether you can take the work elsewhere, which matters more than the pricing model.

## Before you choose

Ask both developers to price the same first phase and list their assumptions and exclusions. If the quotes still differ, you'll have something concrete to discuss beyond the number at the bottom.

If you're weighing quotes for an [MVP](/mvp-development), [tell us about the project](/contact).
