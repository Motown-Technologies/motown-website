---
title: "AI feature costs: what you pay for and how to cut them"
image: ../../assets/blog/ai-feature-running-costs-image.jpg
imageAlt: "A brass parking meter on a blue floor with a line of white sugar cubes leading to it"
cover: ../../assets/blog/ai-feature-running-costs.png
description: "How AI features are billed per token, what drives the monthly bill, and how caching, batching and model choice keep it down."
pubDate: 2026-12-02
relatedPages: ["/ai-integration-services", "/services/ai-development"]
category: ai
---

An AI feature costs you a small amount every time someone uses it, billed by how much text goes into the model and how much comes back. The bill depends mostly on three things you control: which model you use, how much context you send with each request, and how often you send the same thing twice.

Here's how the pricing works and where the savings are.

## What a token is

Model providers charge per token, a chunk of text that's often a short word or part of a longer one. OpenAI's rule of thumb is that [one token is about four characters of English, or three quarters of a word](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them). Other languages, code and unusual formatting often use more tokens for the same amount of text.

Every request has two sides. Input tokens are everything you send: your instructions, any documents or records you include, the conversation so far, and the user's question. Output tokens are what the model writes back.

## How the pricing works

Providers publish a price per million tokens, with input and output priced separately. Output usually costs several times more than input. On [Anthropic's current price list](https://claude.com/pricing), output is five times the input price on every current model.

The gap between models is much bigger than the gap between input and output. At the time of writing, Anthropic lists its smallest current model, Haiku 5.5, at $0.10 per million input tokens and $0.50 per million output tokens for shorter requests. Opus 5.5, one of its most capable models, is $4 and $20. That's forty times the price for the same number of tokens. [OpenAI's pricing page](https://developers.openai.com/api/docs/pricing) shows a similar spread across its models.

Prices change often, so check the current pages before you budget.

## A worked example

Say a software company adds a feature that drafts replies to support tickets. Each request sends about 3,000 tokens: instructions, the ticket and a few help articles. The model writes back about 500 tokens. The team expects 10,000 drafts a month.

On Sonnet 5.5, Anthropic's middle model at $2 input and $10 output per million, each draft costs about a cent: $0.006 for the input and $0.005 for the output. That's around $110 a month.

On Haiku 5.5, at $0.10 and $0.50, the same drafts come to about $5.50 a month.

Those numbers are small. Costs grow when usage grows faster than anyone planned, when every request carries a huge amount of context, or when a feature calls the model several times per user action.

## Choose the model per task

The largest saving is usually using the smallest model that does the job well. Sorting tickets into categories, pulling fields out of a form or tagging photos rarely needs the most capable model. Drafting a careful reply to an upset customer might.

We test each task against a set of realistic examples on two or three models and pick the cheapest one whose answers we'd ship. A single feature can route easy requests to a small model and send only the hard ones to a larger one. That routing only works if your code doesn't call one provider's model directly from dozens of places, which is why we build a single layer between the product and the model, described on our [AI integration](/ai-integration-services) page.

## Cache what repeats

Many requests start with the same long block of text: the same instructions, the same product manual, the same policy document. Prompt caching lets the provider keep that block ready so you don't pay full price for it every time.

Anthropic's [prompt caching documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) prices a cache read at a tenth of the normal input price on most models, and less on some newer ones. Writing to the cache costs a bit more than normal input, and by default the cache lasts five minutes, refreshed each time it's used. OpenAI's pricing page also lists a lower "cached input" rate for most of its models.

To benefit, put the parts that stay the same at the start of the request and the parts that change, like the user's question, at the end. It's a small change in how requests are built, and it can cut the input bill sharply for features with long instructions.

## Batch work that can wait

Some work doesn't need an answer in seconds: summarizing yesterday's calls, tagging a backlog of documents, writing product descriptions for a new catalog. Both Anthropic and OpenAI offer batch processing, where you submit many requests at once and get the results later, at about half the normal price.

## Send less context

Every token you send is billed, so trim what goes in. Send the three most relevant help articles instead of the whole knowledge base. Summarize a long conversation instead of resending all of it each turn. Cap how long the answer can be when you only need a short one. Retrieval systems that look up the right passages before calling the model exist partly for this reason.

## Put limits in before launch

Set a spending alert with the provider, and in your own product, track usage per customer or per account. A budget per tenant stops one heavy user, or a bug that calls the model in a loop, from running up a bill that nobody sees until the invoice arrives.

Our [AI development](/services/ai-development) page covers how we build these features. If you're planning one and want to know what it would cost to run, [send us the details](/contact).
