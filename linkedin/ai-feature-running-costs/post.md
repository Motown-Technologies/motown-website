# LinkedIn: ai-feature-running-costs

## Post 1: native text

An AI feature costs a little every time someone uses it, and the model you pick matters more than anything else on the bill.

Providers charge per token, roughly four characters of English text. You pay for what goes in (instructions, documents, the user's question) and for what comes back, and output costs more.

The spread between models is wide. On Anthropic's current price list, Haiku 5.5 costs $0.10 per million input tokens for shorter requests and Opus 5.5 costs $4. That's forty times the price for the same text.

Say a support tool drafts 10,000 replies a month, each sending about 3,000 tokens and getting 500 back. That's around $110 a month on Sonnet 5.5 and around $5.50 on Haiku 5.5.

Where we look for savings:

• Use the smallest model that does each task well, tested on realistic examples.
• Cache the instructions and documents that repeat across requests. Cached input is billed at a fraction of the normal rate.
• Batch work that can wait. Anthropic and OpenAI both charge about half for it.
• Send only the context the model needs.
• Set a budget per customer, so one heavy user or a looping bug can't run up the bill unnoticed.

Prices change often, so check the providers' pricing pages before you budget.

## Post 2: carousel (~/Documents/Motown Carousels/ai-feature-running-costs.pdf)

Document title: What an AI feature costs to run

How AI features are billed, and the levers that keep the monthly bill down. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/ai-feature-running-costs?utm_source=linkedin&utm_medium=social&utm_campaign=ai-feature-running-costs
