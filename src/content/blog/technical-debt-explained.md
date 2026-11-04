---
title: "Technical debt explained for the people who pay for it"
image: ../../assets/blog/technical-debt-explained-image.jpg
imageAlt: "A pale stone column of mismatched blocks propped up by a stack of blue wooden wedges"
cover: ../../assets/blog/technical-debt-explained.png
description: "What technical debt is, how to spot it without reading code, and why paying it down where it hurts usually beats a full rewrite."
pubDate: 2026-09-16
relatedPages: ["/legacy-system-modernization", "/technical-due-diligence"]
category: software
---

Adding one field to a form has turned into a two-week job. A routine release breaks a report nobody touched. The team says it's technical debt, and you hear another request to spend money before getting anything new.

Technical debt is the extra work of changing software whose earlier design or shortcuts no longer fit what you need. The programmer Ward Cunningham coined the metaphor in 1992, and Martin Fowler's [summary of technical debt](https://martinfowler.com/bliki/TechnicalDebt.html) puts it in money terms: "The extra effort that it takes to add new features is the interest paid on the debt."

Some of it is a sensible choice. Shipping a simpler version to find out whether customers want it can be the right call, as long as someone plans to pay it back. Most of it builds up without anyone deciding. The business changed and the software got bent to fit. Contractors came and went, each leaving their own style. A prototype went straight to production, and we've written about [what those prototypes usually skip](/blog/what-your-prototype-skipped). Some of it is just what an early version looks like after the company outgrows it, which isn't anyone's fault.

## You can see it without reading code

The signs show up in schedules and support tickets. Small changes take weeks. Releases break unrelated things. Estimates keep growing, and engineers hedge them more each time. One person understands part of the system and everyone waits for them. Updates keep getting postponed because the software feels unsafe to touch. Any of these can have another cause, but several at once usually mean debt.

You pay for it in features that cost more and ship later, outages that reach customers, and good engineers leaving because the work is frustrating. It also comes up when you raise money or sell the company, because a buyer's [technical review](/blog/technical-due-diligence-explained) may weigh it.

## Skip the rewrite and pay it down where it hurts

A full rewrite is tempting and usually the wrong first move. It freezes new work for months, and the new system has to rediscover every rule the old one handled without anyone noticing.

We'd start with the parts of the system that change most and break most. Debt in a corner nobody touches costs almost nothing. Debt in the checkout flow costs you every week. Before anything changes, the team should pin down what the system does today, including the odd behavior people now depend on. After that, clean up the messy part each new feature already touches, and set aside part of every development cycle for maintenance so the work happens before it's urgent. Older pieces can be replaced one at a time, with a way back to the old behavior while each one is checked.

The tradeoff is patience. You keep shipping while the debt comes down over months, and nobody gets the clean slate a rewrite promises.

## One question to ask this week

You don't need to be technical to manage this. Ask your team which part of the system they're most nervous about changing, and why. Then ask what they'd fix first if they had two free weeks. Put a cost and a priority against the answers.

If the nervous answer turns out to be most of the system, our [legacy system modernization](/legacy-system-modernization) page covers how we approach that. Or [tell us what you're working with](/contact).
