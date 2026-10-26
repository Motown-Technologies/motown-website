# LinkedIn: ai-feature-running-costs

## Post 1: native text

A demo that drafts a few support replies shows an AI feature might be useful. It says a lot less about the bill once your team uses it all day.

Providers charge per token, roughly four characters of English. You pay for everything you send (instructions, documents, the conversation so far, the question) and, at a higher rate, for what comes back.

The model moves the bill most. On Anthropic's current prices, Haiku 5.5 costs $0.10 per million input tokens for shorter requests and Opus 5.5 costs $4, forty times as much for the same text.

A tool drafting 10,000 replies a month, each sending about 3,000 tokens and getting 500 back, runs around $110 a month on Sonnet 5.5 and $5.50 on Haiku 5.5. It grows if usage beats the forecast, requests carry more context or one click calls the model several times.

Where we look for savings:

• Use the smallest model that does each job well on realistic examples.
• Cache instructions and documents that repeat. Cached input costs a fraction of the normal rate.
• Batch work that can wait. Anthropic and OpenAI charge about half for it.
• Send only the context the model needs.
• Set a per-customer budget so one heavy user or a looping bug can't quietly run up the bill.

Prices change often, so check them before you budget. Then get an estimate at expected usage and at a volume that'd make you nervous, and name who gets the spending alerts.

## Post 2: carousel (~/Documents/Motown Carousels/ai-feature-running-costs.pdf)

Document title: A fill-in budget for an AI feature

Fill this in before you approve an AI feature, once at expected usage and once at a volume that'd make you nervous. It works from requests and tokens to a monthly number, then shows what brings it down (link's in the comments).

## First comment (both posts)

https://motowntech.com/go/ai-feature-running-costs
