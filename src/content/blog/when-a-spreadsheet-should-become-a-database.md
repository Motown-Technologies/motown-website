---
title: "When the spreadsheet only one person understands runs the business"
image: ../../assets/blog/when-a-spreadsheet-should-become-a-database-image.jpg
imageAlt: "A leaning tower of loose paper beside a closed blue steel filing cabinet"
cover: ../../assets/blog/when-a-spreadsheet-should-become-a-database.png
description: "How to recognize when a shared spreadsheet needs a different home, and how to move the work without losing the knowledge inside it."
pubDate: 2027-01-13
relatedPages: ["/spreadsheet-to-app", "/database-design"]
category: software
---

One person understands the formulas, knows which tab is current and can explain why a number looks wrong. Everyone else uses the sheet carefully and waits for them when something breaks. Their holiday becomes a planning problem.

Dependence on one person's knowledge is a reason to consider a database, even if the workbook is small. Before replacing the sheet, understand the process and the exceptions it holds. Much of the business knowledge you need is already there.

## Signs a spreadsheet has outgrown its job

Look for recurring problems such as:

- The same customer or order appears in several tabs or files, and they don't always agree.
- People email copies around, and more than one file has "final" in its name.
- One wrong paste or a sorted column broke the formulas, and someone spent an afternoon working out what changed.
- With copies of the file going around, you can't tell who changed a number, or when.
- Anyone with the link can see and edit everything, including pay rates or client details.
- Only one person really understands how it works, and their holidays make everyone nervous.
- It's getting slow, or you've started splitting it into separate files to keep it usable.

A single problem may be fixable in the workbook. If several keep recurring, compare improving the sheet and its permissions with moving the shared work into an app.

## What a database does differently

A spreadsheet can have validation and protected cells, but those rules need care as a workbook changes hands. A database lets the team define rules about the records themselves, with an app controlling how people work with them.

A status field can only hold one of a fixed list of values, so "Active", "active " and "???" can't all turn up in the same column. An order has to belong to a customer who exists. A required field can't be left blank. The database enforces these rules itself, so a rushed edit late on a Friday can't break them without anyone noticing.

Related data lives in linked tables. A customer is stored once, and every order points to that record. Change the customer's address and every order sees the change, with no stale copy left in another tab.

A database is also designed for many people working at once. Recording who changed what and when is something the team needs to build into the system and check. With a proper app in front of it, each person gets their own login, screens for their part of the job, and only the permissions they need.

## Is size the reason to move?

Excel's [published limit](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) is 1,048,576 rows per worksheet, and Google Sheets allows [up to 20 million cells](https://support.google.com/drive/answer/37603) in a spreadsheet. Most business spreadsheets run into trouble long before either limit, because heavy formulas and lookups across tabs slow a sheet down well before it runs out of rows.

Speed matters less than whether the team can maintain the sheet and trust its numbers.

## When a spreadsheet is still the right tool

Keep the spreadsheet when one person owns it, when it's for analysis or a one-off calculation, or when the process behind it still changes every week. Software built around a process nobody has settled yet will need rebuilding once they do. A spreadsheet also works well for exploring data that lives in a database, pulled out as an export or a report.

## How to move without losing anything

Say a property management company tracks units, tenants, leases and repairs in one large workbook. Moving it to a database goes roughly like this:

1. Map the workbook. Write down every tab, formula, macro and workaround, because together they describe how the business actually works.
2. Model the data. Units, tenants, leases and repairs become linked tables with rules. This is where duplicates and inconsistencies come to the surface, and you decide how to fix them.
3. Build the screens. People get forms and views shaped around their tasks, along with logins and roles.
4. Import, check and run both side by side. The existing data is cleaned and imported, and the team keeps the spreadsheet until they trust the new system.

Spend time on the data model before importing the records. The team needs to agree what an order, tenant or repair means and which relationships must stay intact. A new screen won't resolve disagreement about the underlying records.

Ask the person who knows the workbook to walk through a normal day and a difficult one. Record the exceptions as well as the formulas, and agree how staff will check the imported data before giving up the old sheet. The [auction house project](/blog/auction-house-spreadsheets) shows one version of that move.
