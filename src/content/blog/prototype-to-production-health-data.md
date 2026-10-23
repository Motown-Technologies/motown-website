---
title: "HIPAA and your prototype: what changes for health data"
image: ../../assets/blog/prototype-to-production-health-data-image.jpg
imageAlt: "A paper model house next to the same house cast in concrete"
cover: ../../assets/blog/prototype-to-production-health-data.png
description: "A low-code or AI-built prototype can get a care workflow right and still be unsafe for patient records. Here is what has to change before it holds them."
pubDate: 2026-08-19
relatedPages: ["/case-studies/senior-care-concierge", "/prototype-to-production"]
category: case-stories
---

If your low-code or AI-built prototype is about to hold patient or resident records, the screens are probably the part you can keep. The work is underneath them: who can sign in, which records each person can reach, and whether anyone can tell afterward who saw what. Health data raises the bar on all of it, because a mistake there is a disclosure.

## Keep the workflow, rebuild what holds the data

A prototype your staff already use has answered the hardest product questions: which screens exist, what goes on them and how a person actually works a case. Starting over "properly" throws that away.

A multi-facility senior-care operator we worked with ran its concierge team on a low-code prototype. The workflow was right. But the "submitted by" field was a dropdown of six hard-coded names, because the demo had no users, and every facility's records were visible to everyone. We wrote the rebuild in two halves: reproduce the workflow faithfully, then add what the demo had skipped. Staff who knew the prototype needed no retraining.

Our [general checklist of what prototypes skip](/blog/what-your-prototype-skipped) covers sign-in, data and deploys. What follows is what health data adds.

## Put the access boundary below the screens

The obvious way to restrict records is screen by screen, with each page filtering to the user's facility. That works until someone adds a page on a deadline and forgets the filter.

Put the rule where every query passes through it instead. In the senior-care rebuild, facility separation sits underneath every database query. Internal staff see across all facilities, a facility user sees only their own, and an account linked to no facility sees nothing at all. That last case matters. When something is misconfigured, the safe failure is an empty screen.

It also helps to decide which screens should carry protected information at all. Lobby wallboards in that project show aggregate figures only, never a resident's name, so they can run on a simple read-only link.

## Make sensitive fields something people reveal on purpose

Prototypes tend to keep logins, keys and notes in ordinary text fields. In the rebuild, facility logins and Wi-Fi keys are encrypted, hidden by default, visible only to an owner or admin, and every reveal is logged. If showing a secret takes a deliberate action, nobody leaks one by accident.

The same goes for history. A prototype usually records nothing about who changed a record. Health data needs an append-only audit log, with a timeline on each record and each user, so you can answer "who looked at this?" with a fact.

## Turn vague rules into specific decisions

HIPAA often says what to do without saying how. Automatic logoff is a good example: sessions have to end after inactivity, but the rule names no duration. Someone has to pick the numbers and the behavior.

The senior-care app uses three layers: an idle timeout, a hard cap on session length, and a countdown warning about a minute before sign-out. When it signs someone out, it says why and offers a link back to where they were. Write down each choice like this and the reason for it. Your privacy officer will ask.

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

If several answers are no, the prototype still has value. It just needs a different foundation before it can hold anyone's records.

The [senior care case study](/case-studies/senior-care-concierge) has the full technical detail. If you have a prototype of your own, read how we approach [taking a prototype to production](/prototype-to-production), or [send us what you've built](/contact).
