---
title: "Nobody arrives here wanting to use software."
image: ../../assets/blog/building-for-people-in-grief-image.jpg
imageAlt: "A small olive sapling in a pot on a blue windowsill in sunlight"
cover: ../../assets/blog/building-for-people-in-grief.png
description: "How the people a grief-support nonprofit serves shaped its public site, members' app and back office, from the first question to the last email."
pubDate: 2026-10-07
relatedPages: ["/case-studies/nonprofit-community"]
draft: true
---

A small nonprofit we built for supports women through the loss of a parent. It runs community events, grief support groups and subsidized therapy, and it marks the anniversaries that come around every year. When we started, it had no software at all. The story, the applications and the community all lived in conversations.

We built a public site that explains the organization and takes applications, a members' app, and the back office the staff now run everything from. Forty-seven screens in all. The feature list mattered less than one fact about the people using it: they arrive grieving, often distressed, usually on a phone, and sometimes without much patience for technology.

## One question at a time

That fact changed small decisions everywhere. The application asks one group of questions at a time, so nobody faces a long form on a bad day. When a member leaves a memorial wish for someone, the app offers a few preset phrases before it offers an empty text box, because a blank box is hard to fill when you are grieving. Nothing important happens on a single click without a chance to stop.

The design brief listed what the product should never look like: clinical, corporate, greeting-card or funereal. The public site uses a warmer voice, because it has to persuade someone to apply. Inside, past the login, it's calmer and built for coming back to. Both halves share one accent colour, and that colour is used only on the button that finishes a form.

We also took a word out. Early copy described the community as "peer-led." That describes how the organization is run, and it undersold what a visitor actually gets, since the support groups and subsidized therapy aren't run by peers. It came out of every page. The client then rewrote the public copy themselves, and we used their version as written. They know how to talk to the person arriving.

## The anniversary has to land on the right day

For the people this nonprofit serves, the anniversary of a parent's death (the Yahrtzeit) is one of the most important days of the year. It is recorded as a Hebrew date, so its date on the ordinary calendar moves every year. In a leap year, an anniversary that falls in the month of Adar is observed in Adar II.

The memorial wall is built on those dates. The system works out each anniversary fresh for every year, including the leap-year rule, and sends reminders and community wishes before the day. Getting this wrong would mean a reminder on the wrong day, so we treated it as core logic from the start.

Reminders run hourly. The hosting sleeps when idle, and checking every fifteen minutes would have kept it awake and billing all day. The reminder job is written so that a late run catches up, which means a reminder can arrive a little later but is never skipped.

## Dignity in the permissions

A member's record belongs to her, and the permissions are built around that.

Staff sometimes need to see the members' app with real data. They can only do that by signing in as a dedicated test account, which has three separate safeguards and can't reach any real member's account. Every time someone enters or leaves that view, it goes in the audit log.

Closing an account is something a member asks for. Erasing her personal details is a separate step an admin takes later, and only on an account that is already closed. When the details are erased, the memorial she created for her parent and the wishes others wrote stay in place.

Email works the same way. Members can turn off each kind of bulk email, and only messages about their own account always arrive. Unsubscribing asks for confirmation and doesn't promise an instant effect it can't deliver.

## The back office

Before the platform, there was no way to see who nobody had checked in on lately. Now staff have reach-out tasks that surface exactly those members, with a view of each staff member's workload.

Giving moved into the same system: one-off and recurring donations with dedications, PDF receipts and annual giving statements. Recurring charges run inside the app so every cycle produces its own receipt, and two charging runs can never overlap, so nobody is charged twice.

## A team of four can't debug this at midnight

The nonprofit has no engineers on staff. Wherever we could, we made a rule the software enforces itself. Every change has to pass the full test suite, with complete test coverage, before it can be merged. Text never drops below a 4.5:1 contrast ratio, placeholders and disabled labels included. Every admin action is logged, and the destructive ones are limited to a single role.

None of this is visible to a member, and that's how it should be. She should be able to apply, find an event and remember her parent without thinking about the software at all.

The [nonprofit community case study](/case-studies/nonprofit-community) has the full build, including the technical decisions behind each of these. If you're building for people who arrive on a hard day, [tell us who they are](/contact). That answer changes more of the build than the feature list does.
