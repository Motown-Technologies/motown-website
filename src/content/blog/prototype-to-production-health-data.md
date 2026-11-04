---
title: "Taking a health data prototype into production"
image: ../../assets/blog/prototype-to-production-health-data-image.jpg
imageAlt: "A paper model house next to the same house cast in concrete"
cover: ../../assets/blog/prototype-to-production-health-data.png
description: "A senior-care prototype had the right workflow and six hard-coded names. What we kept, and what changed before it held resident records."
pubDate: 2026-08-19
relatedPages: ["/case-studies/senior-care-concierge", "/prototype-to-production"]
category: case-stories
---

The prototype's "submitted by" field was a dropdown of six hard-coded names. There were no user accounts, so nobody signed in, and every facility could see every other facility's records.

It belonged to a multi-facility senior-care operator that ran its concierge team on a low-code prototype: resident and family concerns, admissions, discharges, daily tasks. The workflow suited the team. It just couldn't hold a real resident's record, and with health data a mistake is a disclosure.

## We kept the screens and rebuilt what holds the data

A prototype your staff already use has answered the hardest product questions: which screens exist, what goes on them, and how a person actually works a case. Starting over "properly" would have thrown that away. So the rebuild was planned in two halves: reproduce the workflow faithfully, then add what the demo had skipped. Staff who knew the prototype needed no retraining.

## Each facility's records are walled off in one place

The obvious way to restrict records is page by page, with each screen filtering to the user's facility. That works until someone adds a page on a deadline and forgets the filter. In the rebuild, the rule sits underneath every request for data. Internal staff see across all facilities, a facility user sees only their own, and an account linked to no facility sees nothing at all. A setup mistake shows an empty screen, never another facility's residents.

Some screens shouldn't carry resident information in the first place. The lobby wallboards show totals only, never a resident's name, so they can run on a simple read-only link.

## Secrets became something you reveal on purpose

Facility logins and Wi-Fi keys had sat in ordinary fields. Now they're encrypted, hidden by default and visible only to an owner or admin, and every reveal is logged. A log nobody can edit also records who changed what, with a timeline on each record and each user, so "who looked at this?" has a factual answer.

## Some rules needed someone to pick the numbers

HIPAA treats automatic logoff as "addressable": you assess whether it fits your system and document the decision, and the rule names no duration. The app uses an idle timeout, a hard cap on session length, and a warning about a minute before sign-out. When it signs someone out, it says why and offers a link back to where they were.

The app runs in the operator's own cloud account, under its own compliance agreement. Plenty of low-code platforms are fine for a demo and wrong for health data, so it's worth settling where production will live early.

## We audited it as if someone else had built it

Two reviews ran against a working dataset of 33 facilities and several thousand tickets and turned up 48 findings. The one that mattered most was external facility accounts appearing in lists meant for internal staff. Left alone, that could eventually have sent a resident's name outside the organization.

## What we'd tell another team with a prototype like this

Keep the workflow your staff helped shape, and review the data boundaries as a separate job. This week, ask someone to show you what an outside account can see, including one that's been set up wrong.

The [senior care case study](/case-studies/senior-care-concierge) covers the full rebuild, and the [general prototype checklist](/blog/what-your-prototype-skipped) covers sign-in, data and deploys. If your prototype is about to hold real records, [tell us about it](/contact).
