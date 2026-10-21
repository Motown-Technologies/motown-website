# LinkedIn: prototype-to-production-health-data

## Post 1: native text

A senior-care operator ran its concierge team on a low-code prototype. The workflow was right. It still couldn't hold a real resident's record.

The prototype had no user accounts, no permissions and no audit trail, and nothing kept one facility's data away from another's. That's normal for a prototype. Skipping those parts is how it got built quickly.

We rebuilt it in two halves. First we reproduced the workflow the team already knew, screen for screen, so nobody needed retraining. Then we added what the demo had left out:

• Invite-only accounts with two-factor sign-in and passkeys, replacing a dropdown of six hard-coded names.
• Each facility's records separated underneath every database query.
• Facility logins and Wi-Fi keys encrypted and hidden, with every reveal logged.
• An append-only audit log on every record.

Resident data is protected health information, so that shaped the design from the first decision.

Before launch we reviewed the system as if someone else had built it. Two passes over a dataset of 33 facilities found 48 issues, including external accounts showing up in lists meant for internal staff. Eight were fixed that night.

If you have a prototype that works, the workflow is the hard part and it's already done. What's left is making it safe to hold real data.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/prototype-to-production-health-data.pdf)

Document title: What a prototype skips before it can hold health data

A low-code prototype got a senior-care team's workflow right, but it had no users, no permissions and no audit trail. Here's what changed when we rebuilt it for real resident records. Full write-up in the comments.

## First comment (both posts)

https://motowntech.com/blog/prototype-to-production-health-data?utm_source=linkedin&utm_medium=social&utm_campaign=prototype-to-production-health-data
