---
title: "AI feature running costs: how to budget before launch"
image: ../../assets/blog/ai-feature-running-costs-image.jpg
imageAlt: "A brass parking meter on a blue floor with a line of white sugar cubes leading to it"
cover: ../../assets/blog/ai-feature-running-costs.png
description: "How to budget for an AI feature from expected usage and the cost of each request, and the limits that catch surprises before the invoice."
pubDate: 2026-12-02
relatedPages: ["/ai-integration-services", "/services/ai-development"]
category: ai
---

A demo that drafts a few support replies tells you whether an AI feature might be useful. It tells you much less about the bill once a team uses it all day. One click might send a short ticket to the model, or the whole conversation plus several help articles, more than once.

Our advice: price it at the usage you expect and at a volume that would make you nervous, pick the smallest model that does the job, and put spending limits in before launch. The model you choose moves the bill more than anything else.

## What you're paying for

Providers charge per token, a chunk of text that's often a short word or part of a longer one. OpenAI's rule of thumb is that [one token is about four characters of English](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them). You pay for everything you send (instructions, documents, the conversation so far, the question) and, at a higher rate, for what the model writes back. On [Anthropic's current price list](https://claude.com/pricing), output is five times the input price on every current model.

The gap between models is much bigger. At the time of writing, Anthropic lists Haiku 5.5, its smallest current model, at $0.10 per million input tokens and $0.50 per million output tokens for shorter requests. Opus 5.5, one of its most capable, is $4 and $20. That's forty times the price for the same text. [OpenAI's pricing page](https://developers.openai.com/api/docs/pricing) shows a similar spread. Prices change often, so check them before you budget.

## A worked example

Say a software company adds a feature that drafts replies to support tickets. Each request sends about 3,000 tokens (instructions, the ticket and a few help articles) and gets about 500 back. The team expects 10,000 drafts a month.

On Sonnet 5.5, Anthropic's middle model at $2 input and $10 output per million, each draft costs about a cent: $0.006 for the input and $0.005 for the output. That's around $110 a month. On Haiku 5.5 the same drafts come to about $5.50.

Modest, either way. It grows if usage beats the forecast, if requests carry much more context, or if one action calls the model several times.

## Where the savings are

Use the smallest model that does each job well. Sorting tickets or pulling fields out of a form rarely needs the most capable model; a careful reply to an upset customer might. A cheaper model only saves money if its output is good enough, so compare them on the same realistic examples.

After that, cut what you send. Instructions and documents that open every request can be cached, and Anthropic's [prompt caching documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) prices a cache read at a tenth of the normal input price on most models. Work that can wait, like tagging a backlog of documents, can go through batch processing at about half price with both Anthropic and OpenAI. And send the three most relevant help articles instead of the whole knowledge base.

## Put limits in before launch

Set a spending alert with the provider, and track usage per customer inside your product. A budget per account stops one heavy user, or a bug that calls the model in a loop, from running up a bill nobody sees until the invoice arrives.

## One thing to do this week

Ask for a cost estimate at expected usage and at that uncomfortable higher volume. Then write down who gets the spending alerts and what they do when the limit is reached.

Our [AI integration services](/ai-integration-services) page covers how we scope this. If you want the numbers worked out for your feature, [tell us about it](/contact).
