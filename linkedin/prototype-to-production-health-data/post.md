# LinkedIn: prototype-to-production-health-data

## Post 1: native text

The prototype's "submitted by" field was a dropdown of six hard-coded names. Nobody signed in, and every facility could see every other facility's records.

A multi-facility senior-care operator ran its concierge team on that low-code prototype, and the workflow was right. So we kept it. The rebuild reproduced the screens faithfully, then added what the demo had skipped. Staff who knew the prototype needed no retraining.

Most of the work was underneath. Each facility's records are walled off in one place every request passes through, so a page someone adds on a deadline can't forget a filter. An account linked to no facility sees nothing. Lobby wallboards show totals only, never a resident's name. Facility logins and Wi-Fi keys stay hidden until an owner or admin reveals one, and each reveal is logged.

Some rules needed a judgment call. HIPAA calls automatic logoff "addressable" and names no time limit, so someone has to pick the numbers. The app uses an idle timeout, a hard cap on session length and a warning about a minute before sign-out.

Two reviews ran against realistic data before anyone signed in. The biggest catch was outside accounts showing up in internal staff lists, which could eventually have sent a resident's name outside the organization.

If your prototype is about to hold patient or resident records, keep the screens and check what's underneath them. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/prototype-to-production-health-data.pdf)

Document title: Before your prototype holds health data

Run this checklist before a low-code or AI-built prototype holds patient or resident records. Anything still open needs work first, and the workflow can stay useful while you rebuild what's underneath.

## First comment (both posts)

https://motowntech.com/go/prototype-to-production-health-data
