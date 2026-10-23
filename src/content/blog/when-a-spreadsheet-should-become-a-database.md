---
title: "When a spreadsheet should become a real database"
image: ../../assets/blog/when-a-spreadsheet-should-become-a-database-image.jpg
imageAlt: "A leaning tower of loose paper beside a closed blue steel filing cabinet"
cover: ../../assets/blog/when-a-spreadsheet-should-become-a-database.png
description: "The signs a spreadsheet has outgrown its job, what a database does differently, and how to move without losing data or stopping work."
pubDate: 2027-01-13
relatedPages: ["/spreadsheet-to-app", "/database-design"]
category: software
---

A spreadsheet should become a database when several people depend on it to run the business and the data has to stay correct while they all change it. Size matters less than most people think. Shared editing, linked records and the cost of a mistake are what usually tip it.

Spreadsheets are a good tool. They're quick to start, everyone knows how to use one, and plenty of businesses run well on them for years. Trouble starts when a sheet that began as one person's tracker turns into the system the whole company relies on.

## Signs a spreadsheet has outgrown its job

You'll probably recognise some of these:

- The same customer or order appears in several tabs or files, and they don't always agree.
- People email copies around, and more than one file has "final" in its name.
- One wrong paste or a sorted column broke the formulas, and someone spent an afternoon working out what changed.
- You can't tell who changed a number, or when.
- Anyone with the link can see and edit everything, including pay rates or client details.
- Only one person really understands how it works, and their holidays make everyone nervous.
- It's getting slow, or you've started splitting it into separate files to keep it usable.

One or two of these is normal. If several sound familiar, the spreadsheet is doing a database's job without any of a database's protections.

## What a database does differently

In a spreadsheet, anyone can type anything into any cell. A database is built around rules about what the data is allowed to be.

A status field can only hold one of a fixed list of values, so "Active", "active " and "???" can't all turn up in the same column. An order has to belong to a customer who exists. A required field can't be left blank. The database enforces these rules itself, so a rushed edit late on a Friday can't break them without anyone noticing.

Related data lives in linked tables. A customer is stored once, and every order points to that record. Change the customer's address and every order sees the change, with no stale copy left in another tab.

A database is also designed for many people working at once, each seeing current data, and it can record who changed what and when. With a proper app in front of it, each person gets their own login, screens for their part of the job, and only the permissions they need.

## Is size the reason to move?

Usually not. Excel's [published limit](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) is 1,048,576 rows per worksheet, and Google Sheets allows [up to 20 million cells](https://support.google.com/drive/answer/37603) in a spreadsheet. Most business spreadsheets run into trouble long before either limit, because heavy formulas and lookups across tabs slow a sheet down well before it runs out of rows.

A slow sheet is one sign. The stronger signs have to do with people, and with whether anyone still trusts the numbers.

## When a spreadsheet is still the right tool

Keep the spreadsheet when one person owns it, when it's for analysis or a one-off calculation, or when the process behind it still changes every week. Software built around a process nobody has settled yet will need rebuilding once they do. A spreadsheet also works well for exploring data that lives in a database, pulled out as an export or a report.

## How to move without losing anything

Say a property management company tracks units, tenants, leases and repairs in one large workbook. Moving it to a database goes roughly like this:

1. Map the workbook. Write down every tab, formula, macro and workaround, because together they describe how the business actually works.
2. Model the data. Units, tenants, leases and repairs become linked tables with rules. This is where duplicates and inconsistencies come to the surface, and you decide how to fix them.
3. Build the screens. People get forms and views shaped around their tasks, along with logins and roles.
4. Import, check and run both side by side. The existing data is cleaned and imported, and the team keeps the spreadsheet until they trust the new system.

The data model is the step to get right. Screens can be redesigned in a week, but a database with years of records in it is much harder to restructure, so we spend time on the schema first.

We did this for an auction house that ran its inventory across spreadsheets, a shared photo folder and a group chat. The [write-up of that project](/blog/auction-house-spreadsheets) shows what moving to one system of record changed for them.

Most spreadsheet-to-app projects take roughly four to eight weeks. Our [spreadsheet to app](/spreadsheet-to-app) page covers how we run them, and [database design](/database-design) covers the schema work underneath. If several of the signs above sound familiar, [show us the spreadsheet](/contact).
