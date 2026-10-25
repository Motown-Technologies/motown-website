---
title: "Technical debt explained for the people who pay for it"
image: ../../assets/blog/technical-debt-explained-image.jpg
imageAlt: "A pale stone column of mismatched blocks propped up by a stack of blue wooden wedges"
cover: ../../assets/blog/technical-debt-explained.png
description: "What technical debt is, how to spot it without reading code, why the business pays for it, and how to pay it down without a full rewrite."
pubDate: 2026-09-16
relatedPages: ["/legacy-system-modernization", "/technical-due-diligence"]
category: software
---

Adding one field to a form has become a two-week job. A routine release breaks a report nobody changed. The team says there's technical debt, and the owner hears another request to spend money before getting anything new.

Technical debt is the extra work involved in changing software whose earlier design or shortcuts no longer fit what you need. Ask where the extra work is happening and which repairs would reduce it.

## Where the term technical debt comes from

The programmer Ward Cunningham introduced the metaphor in 1992, in a conference report about a financial software project. Martin Fowler's [summary of technical debt](https://martinfowler.com/bliki/TechnicalDebt.html) puts it in money terms: "The extra effort that it takes to add new features is the interest paid on the debt." Cleaning up the code pays off the principal.

Some debt is a sensible choice. Shipping a simpler version to find out whether customers want it can be the right call, as long as someone plans to pay it back.

## What technical debt looks like from outside the code

You don't need to read code to notice it. The signs show up in schedules and support tickets:

- Small changes take weeks. Adding one field to a form turns into a project.
- Every release breaks something unrelated.
- Estimates keep growing, and engineers hedge them more each time.
- Only one person understands part of the system, and everyone waits for them.
- Updates to the framework and libraries keep getting postponed because the code feels unsafe to touch.
- New engineers take months before they can ship anything useful.

Each of these can have other causes. When you see several at once, debt is the likely explanation.

## Where technical debt comes from

Some of it is deliberate. A team takes a shortcut to hit a launch date and writes it down. That's the healthy kind, provided it gets paid back.

Most of it builds up without anyone deciding. The business changed and the software was bent to fit. The libraries it depends on fell years behind. Tests were never written, so nobody can change the code with confidence. Contractors came and went, each leaving their own style. A prototype that went straight to production is another common source, and we've written about [what those prototypes usually skip](/blog/what-your-prototype-skipped). Some of it is simply what an early version looks like once the company has grown past it, which isn't anyone's fault.

## Why the business pays for technical debt

Technical debt affects both the engineers doing the work and the business paying for it. The bill arrives as features that cost more and ship later, bugs and outages that reach customers, and good engineers leaving because the work is frustrating. It also shows up when you raise money or sell the company, because a buyer's [technical review](/blog/technical-due-diligence-explained) may affect how they assess the product.

A shortcut that costs an hour a week can become more expensive as other code is built on top of it.

## How to pay down technical debt without stopping everything

A full rewrite is tempting and usually the wrong first move. It freezes new work for months, and the new system has to rediscover every rule the old one handled without anyone noticing.

A more manageable approach:

1. Find where it hurts. Look at which parts of the system change most often and break most often. Debt in code nobody touches costs almost nothing. Debt in the checkout flow costs you every week.
2. Write tests that capture what the system does today, including the odd behavior people now depend on, before changing anything.
3. Pay down debt where you're already working. When a feature touches a messy part of the code, clean up that part as part of the feature.
4. Set a steady budget. Reserve part of every development cycle for maintenance and upgrades, so the work gets done before it becomes urgent.
5. Replace older systems in pieces where possible. Keep a way to compare results and return to the old behavior while each part is checked. The team needs to understand the existing rules before removing the code that implements them.

## Questions to ask your development team

You can manage technical debt without being technical. Ask your team:

1. Which part of the system are you most nervous about changing, and why?
2. What would you fix first if you had two free weeks?
3. Which of our dependencies are out of date or no longer supported?
4. How long does it take a new engineer to ship their first change?

Use the answers to put costs and priorities against specific repairs.
