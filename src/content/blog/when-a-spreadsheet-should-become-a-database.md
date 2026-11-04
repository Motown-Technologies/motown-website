---
title: "Spreadsheet or database: signs it's time to move"
image: ../../assets/blog/when-a-spreadsheet-should-become-a-database-image.jpg
imageAlt: "A leaning tower of loose paper beside a closed blue steel filing cabinet"
cover: ../../assets/blog/when-a-spreadsheet-should-become-a-database.png
description: "How to recognize when a shared spreadsheet needs a different home, and how to move the work without losing the knowledge inside it."
pubDate: 2027-01-13
relatedPages: ["/spreadsheet-to-app", "/database-design"]
category: software
---

One person understands the formulas, knows which tab is current and can explain why a number looks wrong. Everyone else uses the sheet carefully and waits for them when something breaks. Their vacation becomes a planning problem.

That dependence is reason enough to consider a database, even for a small workbook. Size usually isn't the reason. Excel's [published limit](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) is 1,048,576 rows per worksheet and Google Sheets allows [up to 20 million cells](https://support.google.com/drive/answer/37603), but heavy formulas and lookups across tabs slow most business sheets down long before either. The better test is whether the team can maintain the sheet and trust its numbers.

## The signs come in clusters

- The same customer or order appears in several tabs or files, and they don't always agree.
- More than one file has "final" in its name.
- One wrong paste broke the formulas, and someone spent an afternoon working out what changed.
- Nobody can say who changed a number, or when.
- Anyone with the link can see pay rates or client details.

A single problem may be fixable in the workbook. When several keep coming back, it's time to weigh tidying the sheet against moving the shared work into an app.

## What a database won't let slide

A database holds rules about the records themselves. A status comes from a fixed list, so "Active", "active " and "???" can't all turn up in the same column. An order has to belong to a customer who exists. A customer is stored once and every order points to that record, so an address change reaches all of them. A rushed edit late on a Friday can't break those rules without anyone noticing.

With a proper app in front of it, each person gets their own login, screens for their part of the job, and only the permissions they need.

## When the spreadsheet is still right

Keep it when one person owns it, when it's for analysis or a one-off calculation, or when the process behind it still changes every week. Software built around a process nobody has settled yet will need rebuilding once they do.

## The workbook already knows how the business works

Every tab, formula, macro and workaround is a record of how things actually get done, exceptions included. Write it all down before anyone designs a screen. Then agree what an order, a tenant or a repair means and which links between them must stay intact. That's where the duplicates surface, and a new screen won't settle a disagreement about the records underneath. Import, check, and keep the old sheet running alongside until the team trusts the new system.

The [auction house project](/blog/auction-house-spreadsheets) shows one version of that move, and our [spreadsheet to app](/spreadsheet-to-app) page has more on that kind of project.

## One thing to do this week

Ask the person who knows the workbook to walk you through a normal day and a difficult one. Write down the exceptions as well as the formulas. That list is most of the brief for whatever replaces the sheet.

If your business runs on a sheet like this, [tell us about it](/contact).
