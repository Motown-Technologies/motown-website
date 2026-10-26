# LinkedIn: prototype-to-production-health-data

## Post 1: native text

If your low-code or AI-built prototype is about to hold patient or resident records, keep the screens. The work's underneath.

A multi-facility senior-care operator we worked with ran its concierge team on a prototype with the right workflow. But "submitted by" was a dropdown of six hard-coded names, and every facility could see all the others' records. We rebuilt in two halves: copy the workflow faithfully, then add what the demo skipped. Staff who knew the prototype needed no retraining.

Facility separation now sits under every database query, so a page someone adds on deadline can't forget a filter it never had to apply. An account linked to no facility sees nothing. Lobby wallboards show totals only, never a resident's name, so they can run on a read-only link. Facility logins and Wi-Fi keys stay encrypted and hidden until an owner or admin reveals one, and each reveal is logged.

Some rules needed a judgment call. HIPAA calls automatic logoff "addressable": you assess whether it fits your system and write down your decision, and it names no time limit. The app uses an idle timeout, a hard cap on session length and a warning about a minute before sign-out.

Two reviews ran against realistic data before anyone signed in. The biggest catch was outside accounts showing up in internal staff lists, which could eventually have sent a resident's name outside the organization. It got fixed before launch.

Link's in the comments for the six questions to answer first.

## Post 2: carousel (~/Documents/Motown Carousels/prototype-to-production-health-data.pdf)

Document title: Before your prototype holds health data

Run this checklist before a low-code or AI-built prototype holds patient or resident records. Anything still open needs work first, and the workflow can stay useful while you rebuild what's underneath.

## First comment (both posts)

https://motowntech.com/blog/prototype-to-production-health-data?utm_source=linkedin&utm_medium=social&utm_campaign=prototype-to-production-health-data
