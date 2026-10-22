---
title: "How an auction house replaced its spreadsheets with an app"
image: ../../assets/blog/auction-house-spreadsheets-image.jpg
imageAlt: "Loose paper slips and blank photos scattered across a blue surface, turning into a neat column of paper tags on the right"
cover: ../../assets/blog/auction-house-spreadsheets.png
description: "An auction house ran its inventory on spreadsheets, a photo folder and a group chat. We moved it to one system of record that tracks who changed what."
pubDate: 2026-10-21
relatedPages: ["/case-studies/auction-operations", "/spreadsheet-to-app"]
---

An auction house we built for ran its whole inventory across a set of spreadsheets, a shared photo folder and a group chat. Each of those worked fine on its own. Things broke down the day two people disagreed about where a lot stood and none of the three could settle it.

In our experience, most businesses that run on spreadsheets hit a version of that day eventually.

## What the spreadsheet couldn't answer

The staff already knew how to run an auction, and we left their process alone. For any item, they needed to know where it was, who last changed it and when.

A spreadsheet can tell you where an item is, if someone remembered to update it. It has no idea who changed a cell or when. Keep the same status in three places and the three drift apart. Say the spreadsheet has an item as photographed, the chat says it's still in storage, and the photo folder holds two files with two different names. Each person can point to their own copy, and nothing shows which one is current.

## One record per item

We built one system of record for the whole job, from intake to catalog to auction. Each item moves through seven stages: quick catalog, photograph, store, assign, review, catalog and auction. After that it's either sold or unsold.

The main design decision was how status works. The database works out where an item stands from the times each stage was completed, so there is no separate status field for anyone to keep in sync. Every screen and every export reads status from that one source. The database also refuses impossible states: an item can't be both sold and unsold, and it can't sit in two lots at once.

Every change is recorded against the person who made it. Deletes can be undone, so if a record is removed by mistake the week before a sale, staff can restore it (in bulk if needed) from a recently deleted screen.

## AI writes the first draft and a person approves it

Cataloging used to mean typing titles, descriptions and keywords by hand, item by item, in the format the auction software expected. Now a cataloger uploads the photos and an AI model drafts that copy, already shaped for the auction software.

The model can't publish anything itself. A cataloger reads each draft, asks for a new version with feedback when it's off, and approves it into the inventory. If the AI service starts failing, the system pauses the queue for a while and stops sending it requests until it recovers.

This is the part we'd recommend to anyone adding AI to an internal process. Let the model do the tedious first pass, and leave the decision with a person.

## Built for the warehouse floor

Most photos are taken on a phone in the warehouse, and the system is designed around that. Photos upload straight from the phone's camera. iPhone images are converted and compressed on the phone before upload and optimized again once they arrive.

Changes to thousands of items at once run as bulk actions with a live progress bar, and each one is recorded in the audit trail. If someone edits the wrong batch of items, the change is in the log and can be reversed.

## Signs you've outgrown your spreadsheets

None of this is specific to auctions. If these sound familiar, the spreadsheet has probably stopped being the right tool:

- The same status lives in more than one place, and they don't always agree.
- When something goes wrong, nobody can say who changed it or when.
- Deleting the wrong row means the data is gone.
- Part of the real work happens in a chat thread, outside any record.

The [auction operations case study](/case-studies/auction-operations) has the full story, including the technical decisions behind it. If your team runs on spreadsheets and is starting to run into this, read how we approach [turning spreadsheets into an app](/spreadsheet-to-app), or [tell us what you're working with](/contact).
