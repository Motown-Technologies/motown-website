---
title: "Software maintenance after launch: the work and the cost"
image: ../../assets/blog/software-maintenance-after-launch-image.jpg
imageAlt: "A small blue bonsai on a stone block, ringed by miniature watering cans, shears and an oil can on a blue background"
cover: ../../assets/blog/software-maintenance-after-launch.png
description: "What software maintenance after launch involves, what makes it cost more or less, and how to budget for it before the build ends."
pubDate: 2027-01-27
relatedPages: ["/website-maintenance", "/app-maintenance-and-support"]
category: software
---

After launch, software needs regular work just to keep doing what it did on day one: security updates, platform changes, monitoring, backups and the small fixes users find. What that costs depends less on how big the product is and more on how many moving parts it depends on and how well it was built to be changed.

Most build quotes end at launch, and that leaves a gap in the budget for the years after it. Here is what fills that gap and what makes it larger or smaller.

## What maintenance actually is

Maintenance is the work that keeps a product where it is. New features are a separate budget line, even when the same people do both.

### Security and dependency updates

Every modern application is built on dozens or hundreds of open source packages, and each of them releases updates and security fixes. Applying them on a schedule, testing them first and handling the occasional update that breaks something is the largest steady part of maintenance. Skip it for a year and the updates pile up, each one harder to apply than it would have been on time.

### Platform changes you don't control

Browsers, operating systems, hosting providers and app stores all change on their own schedules. A mobile app faces two operating system releases a year and store policies that change without much warning. Our [app maintenance](/app-maintenance-and-support) work starts with testing against platform betas before they reach users, because the alternative is finding out from one-star reviews.

### Monitoring, backups and restores

Someone has to notice when the checkout or contact form stops working. Uptime and error monitoring catches that, provided a person reads the alerts. Backups need the same care, since the only way to know a backup works is to restore it. We rehearse restores and tell the client how long recovery takes.

### Bug fixes and small changes

Real users find problems that testing missed, and the business keeps changing. A new price, a new staff member, a report the finance team needs. On our [website maintenance](/website-maintenance) plans, these small edits get handled without raising a project, so they don't sit in a queue for months.

## What drives the cost up or down

Two products of the same size can have very different maintenance bills. These are the things we look at when we estimate one.

### How many moving parts it depends on

Every integration, plugin and third-party service is something that can change underneath you. A booking app that connects to a payment provider, a calendar service and an accounting system has three outside parties who can each change their API. A brochure site with a contact form has almost none.

### Whether it was built to be changed

Automated tests, a staging environment and a repeatable deploy make every later change cheaper, because each update can be checked before it goes live. Without them, every change is tested by hand or not tested at all, and both cost money in different ways. If you've taken over a product without these, we wrote about [inheriting a codebase that still works](/blog/inherited-codebase).

### How sensitive the data is

Software that holds health records, payment details or personal data needs faster patching, access reviews and audit logs. Say a clinic's patient portal has a known vulnerability in one of its packages. That fix can't wait for the next monthly cycle, so the plan has to allow for urgent work.

### How many platforms it runs on

A web app is one codebase on one platform you largely control. A web app plus iOS and Android apps is three, and two of them answer to app store reviews. Each platform adds its own updates and its own testing.

### How long it was left alone

Maintenance costs least when it's continuous. A product that went two years without updates usually needs a catch-up project first, sometimes including a framework upgrade, before routine maintenance can start.

## How maintenance is usually priced

Most maintenance runs on a monthly plan covering a defined set of work, or on a block of hours used as needed, or on some mix of the two. A plan is easier to budget for. A block of hours suits products that change rarely but sometimes need a burst of work.

Whichever you choose, ask what the monthly report contains. Ours covers what was patched, what broke, what was fixed and what needs a decision, written for someone who doesn't read code. If you never hear anything from your maintenance provider, you can't tell whether the work is happening.

## How to budget for it before launch

The cheapest time to plan maintenance is before the build ends. Ask your developer three things while they still have the whole system in their heads. Which parts depend on outside services? What would a new developer need to know to take over? And what would they patch first if they were looking after it?

Then put a monthly line in the budget from the first month after launch, sized to the moving parts, and treat new features as a separate decision.

If you have software in production and nobody is clearly looking after it, [tell us what it runs on](/contact).
