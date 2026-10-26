# LinkedIn: what-your-prototype-skipped

## Post 1: native text

In one prototype we rebuilt, "submitted by" was a dropdown of six hard-coded names. It showed the workflow fine, but it couldn't tell anyone who'd actually submitted a record, and anyone with the link could submit as anyone.

It was a senior-care operator's low-code proof of concept, and the workflow was right. So the spec was written in two halves: rebuild the screens the team already knew, then add what the demo had been allowed to skip. The dropdown became invite-only accounts, with permissions checked on the server for every request. Staff who'd used the prototype didn't need retraining.

Vibe-coded, AI-built and no-code prototypes tend to skip the same things. Before yours holds real customer data, check:

• Is hiding a button the only thing stopping an action? Call the app directly, outside the screens, and see what the server accepts.
• Do secret keys sit in the code or reach the browser? Rotate any that leaked, since deleting them leaves them in the code's history.
• Does the data survive a restart, and has anyone restored a backup?
• What do users see when payments, email or sign-in is slow or down?
• Can someone other than the builder release an update and roll it back?

You can start this week in a test environment with dummy data. Sign in as two different people and try to open each other's records, then restart the app and check the records are still there.

## Post 2: carousel (~/Documents/Motown Carousels/what-your-prototype-skipped.pdf)

Document title: Six tests to run on your prototype before launch

Run these in a test environment with dummy data before a vibe-coded or no-code prototype holds real customer records. Each one checks something a demo never touches.

## First comment (both posts)

https://motowntech.com/blog/what-your-prototype-skipped?utm_source=linkedin&utm_medium=social&utm_campaign=what-your-prototype-skipped
