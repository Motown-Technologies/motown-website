# LinkedIn schedule

Use the short link in the Link column, in the first comment or at the end of the post. It forwards to the article with the LinkedIn tracking codes added (`src/pages/go/[slug].astro` builds one for every published post), so never paste a link with `utm_` codes into LinkedIn. Post new blog posts in the afternoon (UTC), after the 11:00 UTC daily build has published them.

Format: each post.md has a text post (a story or argument) and a carousel (a practical tool: a checklist, worksheet or set of questions). Publish the format in the Format column. The other one is optional; if you use it, post it at least a few weeks later, since it covers the topic from a different angle.

Before posting, recheck any prices, model names, product versions, plan names and deadlines in the post and carousel, and rebuild the carousel PDF if you change its text (`node scripts/carousel.mjs <slug>`).

## Seeding: 3 a week (Mon backlog, Wed new post, Fri backlog)

| Date | Post | Type | Format | Link |
|---|---|---|---|---|
| Mon 2026-10-26 | When the spreadsheet, photo folder and group chat disagree | backlog | text | https://motowntech.com/go/auction-house-spreadsheets |
| Wed 2026-10-28 | Connecting AI to your business tools: what MCP changes | new | text | https://motowntech.com/go/what-is-mcp |
| Fri 2026-10-30 | Security and reliability checks for a vibe-coded prototype | backlog | carousel | https://motowntech.com/go/what-your-prototype-skipped |
| Mon 2026-11-02 | Designing software for people going through grief | backlog | text | https://motowntech.com/go/building-for-people-in-grief |
| Wed 2026-11-04 | The AI demo looked good. How do you know it is ready? | new | text | https://motowntech.com/go/testing-ai-features |
| Fri 2026-11-06 | What if an email tells your AI assistant to ignore the rules? | backlog | carousel | https://motowntech.com/go/prompt-injection-explained |
| Mon 2026-11-09 | Taking over someone else's codebase without breaking it | backlog | text | https://motowntech.com/go/inherited-codebase |
| Wed 2026-11-11 | Does your business need an app people have to download? | new | text | https://motowntech.com/go/native-cross-platform-or-web-app |
| Fri 2026-11-13 | RAG and fine-tuning: how AI uses your company's information | backlog | carousel | https://motowntech.com/go/rag-and-fine-tuning-explained |

## Weekly: Wednesdays, the day each new post goes live

| Date | Post | Type | Format | Link |
|---|---|---|---|---|
| Wed 2026-11-18 | Who checks the AI when approving everything becomes a job? | new | text | https://motowntech.com/go/human-in-the-loop-ai |
| Wed 2026-11-25 | A customer asked for SOC 2. What happens next? | new | text | https://motowntech.com/go/soc-2-explained-for-startups |
| Wed 2026-12-02 | What will this AI feature cost when people actually use it? | new | text | https://motowntech.com/go/ai-feature-running-costs |
| Wed 2026-12-09 | Why does every software update feel like a risk? | new | text | https://motowntech.com/go/staging-environment-explained |
| Wed 2026-12-16 | We have backups. How long would getting back to work take? | new | text | https://motowntech.com/go/backups-vs-disaster-recovery |
| Wed 2026-12-23 | How to write a software brief a developer can price | backlog | carousel | https://motowntech.com/go/software-brief-developers-can-price |
| Wed 2026-12-30 | Technical debt explained for the people who pay for it | backlog | carousel | https://motowntech.com/go/technical-debt-explained |
| Wed 2027-01-06 | Someone left the company. What can they still access? | new | text | https://motowntech.com/go/single-sign-on-explained |
| Wed 2027-01-13 | When the spreadsheet only one person understands runs the business | new | text | https://motowntech.com/go/when-a-spreadsheet-should-become-a-database |
| Wed 2027-01-20 | Why two software quotes can mean very different things | new | text | https://motowntech.com/go/fixed-price-or-time-and-materials |
| Wed 2027-01-27 | The software launched. Who is looking after it now? | new | text | https://motowntech.com/go/software-maintenance-after-launch |
| Wed 2027-02-03 | Why your website feels slow even when it loads fine for you | new | text | https://motowntech.com/go/core-web-vitals-explained |
| Wed 2027-02-10 | Who owns the code your software depends on? | new | text | https://motowntech.com/go/open-source-licenses-explained |

## After the scheduled posts run out: weekly from the backlog

| Date | Post | Type | Format | Link |
|---|---|---|---|---|
| Wed 2027-02-17 | The care team likes the prototype. Can it hold real patient records? | backlog | text | https://motowntech.com/go/prototype-to-production-health-data |
| Wed 2027-02-24 | How do you get AI to answer from your company documents? | backlog | carousel | https://motowntech.com/go/rag-or-fine-tuning |
| Wed 2027-03-03 | When your team starts working around the software you bought | backlog | carousel | https://motowntech.com/go/build-vs-buy-software |
| Wed 2027-03-10 | When a donation is flagged: decisions a payment platform needs | backlog | text | https://motowntech.com/go/donation-platform-screening |
| Wed 2027-03-17 | Does this process need AI, or just better automation? | backlog | carousel | https://motowntech.com/go/ai-agent-or-automation |
| Wed 2027-03-24 | How a sensible feature list turns into a launch that never happens | backlog | carousel | https://motowntech.com/go/mvp-what-to-build-first |
| Wed 2027-03-31 | Why your company search cannot find the answer | backlog | carousel | https://motowntech.com/go/vector-embeddings-explained |
| Wed 2027-04-07 | Your website is slow. Does your team need a new editor too? | backlog | text | https://motowntech.com/go/headless-wordpress-clinic |
| Wed 2027-04-14 | What to own when a contractor builds your software | backlog | carousel | https://motowntech.com/go/what-to-own-when-a-contractor-builds-your-software |
| Wed 2027-04-21 | Why an AI agent can get the task right and still cause trouble | backlog | carousel | https://motowntech.com/go/ai-agent-harness-explained |
| Wed 2027-04-28 | Why your team keeps entering the same information twice | backlog | carousel | https://motowntech.com/go/webhooks-apis-integrations-explained |
| Wed 2027-05-05 | When to leave WordPress, and when staying is fine | backlog | carousel | https://motowntech.com/go/when-to-leave-wordpress |
| Wed 2027-05-12 | Who makes the technical decisions when nobody owns them? | backlog | carousel | https://motowntech.com/go/fractional-cto-for-startups |
| Wed 2027-05-19 | Your cloud bill went up. Do you actually need to move? | backlog | carousel | https://motowntech.com/go/cloud-migration-route-by-route |
| Wed 2027-05-26 | What will an investor find when they look at your software? | backlog | carousel | https://motowntech.com/go/technical-due-diligence-explained |
| Wed 2027-06-02 | Your online store is losing sales. Is the platform really the problem? | backlog | carousel | https://motowntech.com/go/shopify-custom-or-headless |
