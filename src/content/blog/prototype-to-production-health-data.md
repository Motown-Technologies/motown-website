---
title: "A prototype proves the idea. It can't hold someone's name."
image: ../../assets/blog/prototype-to-production-health-data-image.jpg
imageAlt: "A paper model house next to the same house cast in concrete"
cover: ../../assets/blog/prototype-to-production-health-data.png
description: "A senior-care operator's low-code prototype had the right workflow. Here is what it took to rebuild it as an app that can safely hold resident records."
pubDate: 2026-08-19
relatedPages: ["/case-studies/senior-care-concierge", "/prototype-to-production"]
draft: true
---

A senior-care operator with several facilities ran its concierge team on a low-code proof of concept. The team handled resident and family concerns, admissions, discharges and daily tasks, and the prototype matched how they actually worked a call. The thinking behind it was sound.

It still couldn't hold a real resident's record. There were no user accounts, no permissions and no audit trail, and nothing kept one facility's data away from another's. A prototype is allowed to skip all of that, which is why it can be built quickly. Those skipped parts are exactly what a regulated business needs before it can use the tool for real.

## Keep what works, then add what was skipped

The prototype had already answered the hard product questions: which screens exist, what data they hold and how the team moves through a call. We wrote the specification in two halves. The first half reproduced that workflow faithfully. The second added everything a demo can leave out.

Because the screens and the flow stayed the same, staff who had used the prototype didn't need retraining.

## What changed underneath

Most of this work is invisible to the people using the app. Here is what moved from prototype to application:

- The "submitted by" field in the prototype was a dropdown of six hard-coded names, because the demo had no users. The application has invite-only accounts with two-factor sign-in and passkeys, and no administrator ever handles anyone's password.
- In the prototype everyone saw everything. Now every facility's records are separated at the database query level. Internal staff see across all facilities, a facility user sees only their own, and an account linked to no facility sees nothing at all.
- Facility logins and Wi-Fi keys used to sit in ordinary fields. They are now encrypted, hidden by default, visible only to an owner or admin, and every time someone reveals one it is logged.
- There was no history before. Now an append-only audit log keeps a timeline on every record and for every user.
- Reports were something you read on screen. They now export to Excel, CSV and PDF, can be saved as views, and can be emailed on a schedule.
- The application runs in the operator's own cloud account, under their own compliance agreement, instead of on a low-code platform.

## Health data shaped the design from day one

Resident information is protected health information, and we treated it that way from the first decision. That choice is why facility separation lives underneath every query instead of on individual screens, where a developer on a deadline could forget it. It is also why credentials hide themselves unless someone deliberately reveals them.

Automatic logoff is a good example of how a regulation becomes a design decision. HIPAA requires sessions to end after inactivity but doesn't say how long. The application uses three layers: an idle timeout, a hard cap on session length, and a countdown warning about a minute before sign-out. When it does sign someone out, it explains why and offers a link back to where they were.

Once the foundation was in place, the project went further than the original brief. Facilities got their own portal with shared ticket threads, and the reporting was rebuilt with scheduled delivery. Lobby wallboards show aggregate figures only, never a resident's name.

## Testing it before anyone logged in

Before launch we audited the system as if someone else had built it. Two reviews ran against a full working dataset of 33 facilities and several thousand tickets. One looked for what was broken, and the other looked for what had been promised and never built.

They turned up 48 findings. One of them mattered a lot: external facility accounts were showing up in lists meant for internal staff, which could eventually have sent a resident's name to someone outside the organization. Another was a report whose default date range took 456 seconds and six gigabytes of memory to produce. After a row limit it took 21 seconds and a tenth of the memory.

Eight findings were fixed the same night, and five of those were bugs introduced only hours earlier. That is why we audit before launch instead of trusting the last passing test run. We also pushed back where a finding was wrong. Two were rejected with reasons, and two were deliberately deferred with the reason written into the code.

## If you have a prototype that works

A working prototype is a good place to start. It means the workflow has already been tested by the people who use it. The question is what has to change before it can hold regulated data, real users and other people's information, and what can stay as it is.

The [senior care case study](/case-studies/senior-care-concierge) has the full technical detail. If you have a prototype of your own, read how we approach [taking a prototype to production](/prototype-to-production), or [send us what you've built](/contact).
