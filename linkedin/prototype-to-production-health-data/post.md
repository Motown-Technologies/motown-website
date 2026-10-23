# LinkedIn: prototype-to-production-health-data

## Post 1: native text

If your low-code or AI-built prototype is about to hold patient or resident records, keep the screens. The work is underneath them.

A senior-care operator we worked with had a prototype whose workflow was right. But the "submitted by" field was a dropdown of six hard-coded names, and every facility could see every other facility's records.

Here's what health data adds before a prototype like that can go live:

• Enforce access in one place, below every screen. A page someone adds on a deadline can't forget a filter it never had to apply.
• Make a misconfigured account see nothing.
• Hide secrets and sensitive fields until someone deliberately reveals them, and log the reveal.
• Keep an append-only audit log, so "who looked at this?" has an answer.
• Pick your session timeouts and write down why. HIPAA requires automatic logoff but names no duration.
• Confirm every vendor holding the data will sign a business associate agreement.

Then test with realistic data before anyone signs in. In that rebuild, a review turned up external accounts appearing in lists meant for internal staff. Left alone, that could eventually have sent a resident's name outside the organization. It was fixed before launch.

A working prototype still has real value. The workflow is the hard part, and it's already done.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/prototype-to-production-health-data.pdf)

Document title: What your prototype needs before it holds health data

A low-code or AI-built prototype can get the workflow right and still be unsafe for patient records. Here's what has to change underneath the screens first. Full write-up in the comments.

## First comment (both posts)

https://motowntech.com/blog/prototype-to-production-health-data?utm_source=linkedin&utm_medium=social&utm_campaign=prototype-to-production-health-data
