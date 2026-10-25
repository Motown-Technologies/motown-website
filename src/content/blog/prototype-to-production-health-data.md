---
title: "The care team likes the prototype. Can it hold real patient records?"
image: ../../assets/blog/prototype-to-production-health-data-image.jpg
imageAlt: "A paper model house next to the same house cast in concrete"
cover: ../../assets/blog/prototype-to-production-health-data.png
description: "A senior-care prototype got the workflow right but needed different access controls and audit records before handling health data."
pubDate: 2026-08-19
relatedPages: ["/case-studies/senior-care-concierge", "/prototype-to-production"]
category: case-stories
---

If your low-code or AI-built prototype is about to hold patient or resident records, the screens are probably the part you can keep. The work is underneath them: who can sign in, which records each person can reach, and whether anyone can tell afterward who saw what. Health data raises the bar on all of it, because a mistake there is a disclosure.

## Keep the workflow, rebuild what holds the data

A prototype your staff already use has answered the hardest product questions: which screens exist, what goes on them and how a person actually works a case. Starting over "properly" throws that away.

A multi-facility senior-care operator we worked with ran its concierge team on a low-code prototype. The workflow suited the team, but the demo had no user accounts: "submitted by" was a dropdown of six hard-coded names, and everyone could see every facility's records. We wrote the rebuild in two halves: reproduce the workflow faithfully, then add what the demo had skipped. Staff who knew the prototype needed no retraining.

The [general prototype checklist](/blog/what-your-prototype-skipped) covers sign-in, data and deploys. Handling health data adds requirements around access, logging and vendors.

## Put the access boundary below the screens

The obvious way to restrict records is screen by screen, with each page filtering to the user's facility. That works until someone adds a page on a deadline and forgets the filter.

Put the rule where every query passes through it instead. In the senior-care rebuild, facility separation sits underneath every database query. Internal staff see across all facilities, a facility user sees only their own, and an account linked to no facility sees nothing at all, so a configuration mistake shows an empty screen rather than another facility's records.

It also helps to decide which screens should carry protected information at all. Lobby wallboards in that project show aggregate figures only, never a resident's name, so they can run on a simple read-only link.

## Make sensitive fields something people reveal on purpose

Prototypes tend to keep logins, keys and notes in ordinary text fields. In the rebuild, facility logins and Wi-Fi keys are encrypted, hidden by default, visible only to an owner or admin, and every reveal is logged. If showing a secret takes a deliberate action, nobody leaks one by accident.

The same goes for history. A prototype usually records nothing about who changed a record. Health data needs an append-only audit log, with a timeline on each record and each user, so you can answer "who looked at this?" with a fact.

## Turn vague rules into specific decisions

HIPAA often says what to do without saying how. Automatic logoff is a good example: sessions have to end after inactivity, but the rule names no duration. Someone has to pick the numbers and the behavior.

The senior-care app uses three layers: an idle timeout, a hard cap on session length, and a countdown warning about a minute before sign-out. When it signs someone out, it says why and offers a link back to where they were. Document these choices and their reasons for review with your privacy officer.

## Know where the data lives and who has signed for it

Many low-code platforms are fine for a demo and wrong for protected health information. Before you build, decide where the production app will run and confirm that every vendor touching the data will sign a business associate agreement. The senior-care operator's app runs in its own cloud account, under its own compliance agreement.

## Audit it as if someone else built it

Test with realistic data before anyone signs in. Two reviews of that rebuild, run against a working dataset of 33 facilities and several thousand tickets, turned up 48 findings. The one that mattered most was external facility accounts appearing in lists meant for internal staff, which could eventually have sent a resident's name outside the organization.

## Before your prototype holds health data

- Can every user be traced to a real, invited account with two-factor sign-in?
- Is access to records enforced in one place, and does a misconfigured account see nothing?
- Are secrets and sensitive fields hidden until someone deliberately reveals them, with the reveal logged?
- Can you show who viewed or changed any record, and when?
- Have you written down your session timeouts and why you chose them?
- Does every vendor holding the data have a signed agreement?

Unresolved items need work before the prototype holds real records; the workflow can still be useful while that foundation is rebuilt.

Keep the workflow your staff helped establish, but review the data boundaries separately. Ask someone to demonstrate what an external facility account can see, including an account set up incorrectly. The [senior care case study](/case-studies/senior-care-concierge) describes the rebuild and the findings that review uncovered.
