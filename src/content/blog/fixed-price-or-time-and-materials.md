---
title: "Fixed price or time and materials: reading a software quote"
image: ../../assets/blog/fixed-price-or-time-and-materials-image.jpg
imageAlt: "A blue steel bar cut to an exact length next to a loose coil of off-white string"
cover: ../../assets/blog/fixed-price-or-time-and-materials.png
description: "How fixed-price and time-and-materials software quotes differ, where the risk sits in each, and what to check before you sign either one."
pubDate: 2027-01-20
relatedPages: ["/mvp-development", "/technical-due-diligence"]
category: software
---

A fixed-price quote moves the risk of the unknown onto the developer, who prices that risk into the number. Time and materials leaves the risk with you and charges for the hours actually worked. Neither is cheaper by default, and the right one depends on how well the work can be described before it starts.

Most owners compare two quotes by the total at the bottom. That total means something different in each model, so it helps to know what you're actually buying before you put the two side by side.

## What a fixed-price quote actually fixes

A fixed price fixes a number against a scope. The scope is the part to read closely, because everything outside it becomes a change request with its own price.

When a developer commits to a fixed price, they're guessing how long the work will take and adding a margin for what they can't see yet. If the work goes smoothly, that margin is profit. If it doesn't, they absorb the overrun, and a team absorbing an overrun has every reason to read the scope as narrowly as it can.

That works well when the work is known. A two-week audit with a defined list of documents at the end is easy to fix, which is why our [technical due diligence](/technical-due-diligence) runs on a fixed scope. A website rebuilt from an existing design is similar. Nobody needs to find anything out before quoting it.

## What time and materials actually charges for

Time and materials bills for the hours worked at an agreed rate, usually with regular reporting on what those hours went to. You pay for what the work turns out to need, which can be less than a fixed quote's padding or more than anyone hoped.

The advantage is that you can change direction without renegotiating. If your first users show you that the reporting screen matters more than the onboarding flow, the team switches and the invoice reflects it. Under a fixed price, the same switch is a change order.

The risk is that nothing stops the total from growing except your own attention. Time and materials needs someone on your side who reads the weekly report, asks why a task took twice the estimate and decides what to drop when the budget gets tight.

## Where the risk sits in each model

The question underneath both models is who pays when the estimate turns out wrong.

- Fixed price: the developer pays for underestimates, and you pay up front for the margin that covers them. You also pay for anything the scope didn't name.
- Time and materials: you pay for underestimates directly, and you keep the savings when the work goes faster.

Neither one makes the unknown disappear. Say a clinic wants a booking system that talks to its existing practice software, and nobody has looked at that software's API yet. A fixed quote has to price the worst case for that integration. A time-and-materials quote can only give a range until someone has looked.

## How to read the quote in front of you

Whichever model it uses, a good quote answers the same questions.

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

Another approach fixes the date and the budget and lets the scope be the thing that moves. That's how we run an [MVP build](/mvp-development). Scope and launch date are agreed when the build starts, and new ideas go onto a written list for the next cycle. The cost of an idea that turns up mid-build is a decision about what to leave out, and the invoice doesn't change. We wrote more about that list in [what to build first in an MVP](/blog/mvp-what-to-build-first).

## Which one to choose

Choose a fixed price when you can describe the finished thing in enough detail that two developers would build roughly the same product from your description. Choose time and materials when the work involves finding things out, such as an unknown integration, a legacy system nobody has documented or a product still looking for its users. If you can't describe it yet, pay for a short discovery first and decide after. In our experience, the quote that holds up best comes from the developer who asked you the most questions before writing it.

If you have a quote in front of you and want a second read, or want us to quote the work, [get in touch](/contact).
