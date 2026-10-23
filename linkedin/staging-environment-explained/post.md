# LinkedIn: staging-environment-explained

## Post 1: native text

A staging environment is a private copy of your live app where every change runs before customers see it.

When a developer asks for budget for one, it can sound like paying twice for something that already works. Here's what it actually buys you.

A developer's laptop is a poor guide to how the live app behaves. It often runs a different database, holds settings that exist nowhere else, and connects to mock versions of the payment or accounting tools.

Say a clinic's booking app gets a new reminder feature. On the laptop it sends one test text. On staging, with realistic appointments and the text provider's test mode, it sends every reminder twice. Catching that on staging costs ten minutes. In production it costs an apology to every patient.

Staging is also where non-technical people sign off. Your operations lead clicks through the new flow before it goes live, instead of finding out on Monday what it does.

A good staging setup has:

• The same hosting and database versions as production, on smaller machines
• Deploys from the same pipeline, so the release itself gets rehearsed
• Realistic data with personal details removed
• Integrations pointed at test accounts
• A rollback that has been tried

If more than a handful of people depend on your app, or it takes payments or holds customer records, it needs one.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/staging-environment-explained.pdf)

Document title: What a staging environment is, and why you need one

What staging is, what it catches before your customers do, and four questions to ask your developer about it. The full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/staging-environment-explained?utm_source=linkedin&utm_medium=social&utm_campaign=staging-environment-explained
