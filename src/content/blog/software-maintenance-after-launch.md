---
title: "Software maintenance after launch: what to budget for"
image: ../../assets/blog/software-maintenance-after-launch-image.jpg
imageAlt: "A small blue bonsai on a stone block, ringed by miniature watering cans, shears and an oil can on a blue background"
cover: ../../assets/blog/software-maintenance-after-launch.png
description: "The work and budget needed after launch, including updates, incident ownership and small fixes that otherwise fall between teams."
pubDate: 2027-01-27
relatedPages: ["/website-maintenance", "/app-maintenance-and-support"]
category: software
---

The build is finished and the software works. Then a browser changes, a payment connection needs an update or the contact form stops sending messages. Who gets the alert, and is fixing it in anyone's budget?

Launch often closes the project without settling that. Give maintenance its own budget line from the first month after launch, separate from new features, even when the same people do both jobs.

## What the money pays for

The biggest steady part is updates. Every modern application is built on dozens or hundreds of open source packages, and each of them releases security fixes. Skip a year and the updates pile up, each one harder to apply than it would have been on time.

Then there's change you don't control. Browsers, operating systems, hosting providers and app stores move on their own schedules, and a mobile app faces two operating system releases a year.

Someone also has to notice when checkout stops working. Monitoring catches that, provided a person reads the alerts. Backups need the same care: we rehearse restores and tell the client how long recovery takes.

Last come the small requests, like a new price, a staff update or a report for finance. Agree which of these count as maintenance and which need their own estimate, or they'll sit between two budgets.

## Why similar products cost different amounts

Every integration is an outside company that can change underneath you. A booking app connected to a payment provider, a calendar service and an accounting system has three. A brochure site with a contact form has almost none.

Software where each update can be tried on a test copy before it goes live is cheaper to change than software someone has to check by hand. If you've taken over a product without that, we wrote about [inheriting a codebase that still works](/blog/inherited-codebase).

Sensitive data needs faster patching. If a clinic's patient portal has a known vulnerability in one of its packages, the fix can't wait for next month's cycle. Each platform adds its own updates: a web app plus iOS and Android apps is three, and two of them answer to app store reviews. A product left alone for two years usually needs a catch-up project before routine maintenance can start.

## A monthly plan or a block of hours

Most [maintenance](/app-maintenance-and-support) runs on a monthly plan, a block of hours or a mix. A plan is easier to budget for. A block of hours suits a product that rarely changes but sometimes needs a burst of work.

Either way, ask what the monthly report contains: what was patched, what broke, what was fixed and what needs a decision, in words the owner can use. If you never hear from your maintenance provider, you can't tell whether the work is happening.

## Before the build team moves on

Ask your developer three things while they still have the whole system in their heads. Which parts depend on outside services? What would a new developer need to know to take over? What would they patch first?

Then write down who receives alerts, who can approve urgent work and what the budget covers. Give a copy to the person running the business as well as the person running the software.

If your software launched without a plan like this, [tell us about it](/contact).
