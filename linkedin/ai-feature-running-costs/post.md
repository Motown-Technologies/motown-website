# LinkedIn: ai-feature-running-costs

## Post 1: native text

Before you approve an AI feature, get two cost estimates: one at the usage you expect, and one at a volume that'd make you nervous.

A demo that drafts a few support replies says little about the bill once your team uses it all day. Providers charge per token, roughly four characters of English, for everything you send and, at a higher rate, for what comes back.

The model moves the bill most. On Anthropic's current prices, Haiku 5.5 costs $0.10 per million input tokens for shorter requests and Opus 5.5 costs $4. Same text, forty times the price.

Take a tool drafting 10,000 replies a month, each sending about 3,000 tokens and getting 500 back. That's around $110 a month on Sonnet 5.5 and $5.50 on Haiku 5.5. It grows if usage beats the forecast, requests carry more context or one click calls the model several times.

Where we look for savings:

• The smallest model that does each job well on realistic examples.
• Caching the instructions and documents that repeat.
• Batching work that can wait, at about half price.
• Sending only the context the model needs.
• A budget per customer, so one heavy user or a looping bug can't quietly run up the bill.

Prices change often, so check them first. Then name the person who gets the spending alerts.

## Post 2: carousel (~/Documents/Motown Carousels/ai-feature-running-costs.pdf)

Document title: A fill-in budget for an AI feature

Fill this in before you approve an AI feature, once at expected usage and once at a volume that'd make you nervous. It works from requests and tokens to a monthly number, then shows what brings it down (link's in the comments).

## First comment (both posts)

https://motowntech.com/go/ai-feature-running-costs
