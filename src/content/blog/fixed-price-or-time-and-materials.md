---
title: "Why two software quotes can mean very different things"
image: ../../assets/blog/fixed-price-or-time-and-materials-image.jpg
imageAlt: "A blue steel bar cut to an exact length next to a loose coil of off-white string"
cover: ../../assets/blog/fixed-price-or-time-and-materials.png
description: "How to compare fixed-price and time-and-materials quotes by scope, uncertainty and who pays when the estimate is wrong."
pubDate: 2027-01-20
relatedPages: ["/mvp-development", "/technical-due-diligence"]
category: software
---

One developer offers a fixed price. Another quotes an hourly rate and a range. The totals look comparable, but you still don't know whether they include the same work or what happens when the project changes.

A fixed price attaches a number to a scope, with a margin for uncertainty. Time and materials charges for the hours worked. To compare them, you need to understand the assumptions behind each quote and who carries the cost when those assumptions turn out wrong.

## What a fixed-price quote actually fixes

Read the scope closely. The agreed price covers that work; anything outside it becomes a separately priced change request.

When a developer commits to a fixed price, they're guessing how long the work will take and adding a margin for what they can't see yet. If the work goes smoothly, that margin is profit. If it doesn't, they absorb the overrun, and a team absorbing an overrun has every reason to read the scope as narrowly as it can.

That works best when the work is understood. An audit with defined deliverables or a rebuild against an agreed design is easier to scope than an unfamiliar integration. There can still be unknowns, so ask the developer which assumptions the fixed price depends on.

## What time and materials actually charges for

Time and materials bills for the hours worked at an agreed rate, usually with regular reporting on what those hours went to. You pay for what the work turns out to need, which can be less than a fixed quote's padding or more than anyone hoped.

The advantage is that you can change direction without renegotiating. If your first users show you that the reporting screen matters more than the onboarding flow, the team switches and the invoice reflects it. Under a fixed price, the same switch is a change order.

The risk is that nothing stops the total from growing except your own attention. Time and materials needs someone on your side who reads the weekly report, asks why a task took twice the estimate and decides what to drop when the budget gets tight.

## Where the risk sits in each model

The models put the cost of an inaccurate estimate in different places.

- Fixed price: the developer pays for underestimates, and you pay up front for the margin that covers them. You also pay for anything the scope didn't name.
- Time and materials: you pay for underestimates directly, and you keep the savings when the work goes faster.

An unfamiliar integration remains uncertain under either model. Say a clinic wants a booking system that talks to its existing practice software, and nobody has looked at that software's API yet. A fixed quote has to price the worst case for that integration. A time-and-materials quote can only give a range until someone has looked.

## How to read the quote in front of you

Check these details in either kind of quote.

### What exactly is included?

A fixed quote should list the screens, user roles, integrations and data it covers. If it only says "booking system", the scope will be argued over later.

### What happens when something changes?

Ask how change requests are priced and approved. A fixed quote with an expensive change process can end up costing more than time and materials would have.

### What does "done" mean?

Look for testing, deployment, a handover and a support period after launch. Some quotes stop at "code delivered", and the work of getting it live is billed separately.

### Who owns the result?

The repository, the hosting accounts and the domain should be in your name. That matters more than the pricing model, because it decides whether you can take the work elsewhere.

### How will you see progress?

On time and materials, ask what the weekly report shows. On a fixed price, ask when you'll see working software, because a fixed project can still be late.

## A middle path most projects end up on

Many projects split the work: a short fixed-price discovery phase to answer the open questions, followed by a build quoted once those answers exist.

Another approach fixes the date and budget and allows the scope to move. If a new requirement comes in, something else has to leave or wait. That requires a person with authority to make the tradeoff, plus a record everyone can refer to. The post on [choosing an MVP scope](/blog/mvp-what-to-build-first) goes through that decision.

## Which one to choose

Choose a fixed price when you can describe the finished thing in enough detail that two developers would build roughly the same product from your description. Choose time and materials when the work involves finding things out, such as an unknown integration, a legacy system nobody has documented or a product still looking for its users. If you can't describe it yet, pay for a short discovery first and decide after. In our experience, detailed questions before quoting help surface the assumptions that otherwise cause disputes later.

Before choosing, ask both developers to price the same first phase and list their assumptions and exclusions. If the quotes still differ, you will have something concrete to discuss beyond the number at the bottom.
