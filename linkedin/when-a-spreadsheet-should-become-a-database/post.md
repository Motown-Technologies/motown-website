# LinkedIn: when-a-spreadsheet-should-become-a-database

## Post 1: native text

One person understands the formulas, knows which tab is current and can explain why a number looks off. When something breaks, everyone waits for them, and their vacation becomes a planning problem.

That alone is a reason to think about a database, even for a small workbook. Size usually isn't it: Excel allows over a million rows per sheet, and heavy formulas slow most business spreadsheets down long before that.

Other signs come with it. The same customer appears in several tabs, and they don't agree. More than one file has "final" in its name. With copies going around, nobody can say who changed a number, or when. Anyone with the link can see pay rates.

An auction house we worked with kept item status in a spreadsheet, a shared photo folder and a group chat, which disagreed. An item could be "photographed" in the sheet and "still in storage" in the chat. In the system we built, the database works out each item's stage from its timestamps, so nobody updates a status by hand and every screen agrees.

A database also enforces rules. A status comes from a fixed list, an order has to belong to a real customer, and each customer is stored once, so an address change reaches every order.

A spreadsheet's still right when one person owns it, it's for analysis, or the process behind it changes weekly.

Link's in the comments for moving a workbook over without losing the exceptions it holds.

## Post 2: carousel (~/Documents/Motown Carousels/when-a-spreadsheet-should-become-a-database.pdf)

Document title: Map your workbook before you replace it

Do this before anyone designs screens for the replacement. Your workbook already holds most of what the new system needs to know, and these steps get it out.

## First comment (both posts)

https://motowntech.com/go/when-a-spreadsheet-should-become-a-database
