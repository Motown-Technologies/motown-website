---
title: "How to write a software brief a developer can price"
image: ../../assets/blog/software-brief-developers-can-price-image.jpg
imageAlt: "A brass balance scale on a blue table, with a folded sheet of paper on one pan balanced by small stone weights on the other"
cover: ../../assets/blog/software-brief-developers-can-price.png
description: "What to put in a software brief so developers can quote it: the problem, the users, your data, the systems it touches and what's fixed."
pubDate: 2026-09-26
relatedPages: ["/mvp-development", "/web-application-development"]
category: software
---

You send the same description to three developers and get three very different quotes. Before deciding which one is overpriced, check whether they imagined the same product. "We need an app for our field team" leaves room for anything from a form to a scheduling system with offline sync.

A brief helps developers estimate the same work. Describe who needs help, what they do today, the systems involved and the limits on the project. You can do that in your own words, usually in a couple of pages.

## Why most software briefs can't be priced

A quote contains assumptions about the users, data and exceptions, even if the developer hasn't written them down. A clearer brief makes more of those assumptions visible. The prices may still differ, but you can ask each developer about the same pieces of work.

## Start with the problem and who has it

Open with what is going wrong today and what it costs you. "Our dispatchers spend the first hour of every day copying jobs from email into a spreadsheet, and drivers call in to ask where they're going next" tells a developer far more than "we need a dispatch system."

If you know what the current process costs in hours, mistakes or lost sales, include it. It helps the developer suggest how much to build first.

## List the users and what each one does

Name each type of person who will use the software and write a sentence or two about what they do in it. For example:

- A dispatcher assigns each new job to a driver.
- A driver sees today's jobs on a phone, marks each one done and adds a photo.
- The owner sees how many jobs were finished this week and which ones are late.

Each of these lines is a piece of work someone can estimate. Roles also tell the developer who needs to see what, and permissions are much cheaper to design in at the start than to add after the first complaint.

## Show the data and the systems it touches

Attach the real artifacts: the spreadsheet you use now, the paper form, a screenshot of the report you build by hand every Monday. Remove anything sensitive, but keep the columns and the messy parts. The actual spreadsheet lets the developer inspect details that a description may leave out.

Then list every system the software has to talk to, such as your accounting package, your CRM, your online store or a supplier's portal. Integrations are often where estimates go wrong, so say what you know: which product it is, whether data needs to flow one way or both, and how often. If you don't know whether a system can connect to anything, say so, and a good developer will find out before quoting.

## Say what is fixed

Budget, deadline and rules shape the design, so put them in writing.

Give a budget range. Many people hold it back to see what comes in, but without it developers can't tell whether you want the smallest version that works or the complete one. With a range, they can tell you what fits inside it.

Give the date and the reason for it. "Live before our busy season starts in March" lets a developer plan a smaller first release that makes the date. Also list any rules the software has to follow, for example if it will hold patient records, card payments or children's data, and anything your customers already require of you, such as a security review.

## Separate what you need now from what can wait

Mark each feature as needed for launch or useful later. This list helps control the price, but it can be difficult to write when each feature has someone who wants it included. We wrote about how we make those cuts in [what to build first in an MVP](/blog/mvp-what-to-build-first).

## What to leave out

Leave out the choice of programming language or platform unless you have a real reason, such as an in-house team that already works in one. Leave out detailed screen designs too. Rough sketches of what people need to see are useful, but polished mockups often fix decisions before anyone has tested them.

You also don't need a fifty-page specification. A long spec can still miss the one exception your staff handle by email every week, and that exception is what a developer most needs to hear about.

## A one-page outline you can copy

1. The problem today, and what it costs.
2. The people who will use it, and what each one does.
3. Your current tools and data, with samples attached.
4. Systems it has to connect to.
5. What's needed at launch, and what can wait.
6. Budget range, deadline and the reason for the date.
7. Rules you have to follow.
8. Who on your side makes decisions, and how fast they can answer questions.

## What a good developer does with it

Expect questions about anything the brief leaves open. A developer who quotes a vague brief without asking anything has filled the gaps with assumptions you haven't seen.

For larger projects, ask for a defined first phase and a range for what follows, with the open questions attached. You should be able to see what you are paying to learn before committing to the whole build.
