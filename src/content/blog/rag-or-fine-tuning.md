---
title: "How do you get AI to answer from your company documents?"
image: ../../assets/blog/rag-or-fine-tuning-image.jpg
imageAlt: "A blue library card cabinet with one drawer pulled out, next to a potter's wheel holding a half-formed clay pot"
cover: ../../assets/blog/rag-or-fine-tuning.png
description: "When to use document retrieval, when fine-tuning helps and what to settle about sources and access before connecting company data."
pubDate: 2026-10-02
relatedPages: ["/rag-development", "/llm-fine-tuning"]
category: ai
---

Your team wants an AI assistant that answers questions about your policies, contracts or product manuals. The proposal says fine-tuning. Before you sign, ask three things: do the documents change, do different people have different access, and does an answer need to show where it came from?

If the answer to any of those is yes, start with retrieval (RAG): look up the relevant passages each time someone asks. Fine-tuning is a separate decision about how the model behaves. If the terms are new, start with [what RAG and fine-tuning do to a model](/blog/rag-and-fine-tuning-explained).

## Retrieval keeps the documents in charge

With RAG the model stays as it is. Your documents are indexed, usually with [vector embeddings](/blog/vector-embeddings-explained) plus keyword search, and each question triggers a search. The best passages go to the model, which answers from them and can cite where each part came from.

That handles the three questions above. When a policy changes, you update the index and the next answer uses the new version. Access can be checked at search time, so someone only gets answers from documents they're allowed to open. Every answer can point to its passage. And removing a document means deleting it from the index.

Ask to see what happens when a policy has been replaced, or when no document covers the question. A confident answer from an old passage is still wrong.

## Why fine-tuning is a poor place to keep facts

A tuned model absorbs its examples at training time. If your return policy changes next month, it keeps the old one until someone retrains it. It can't show which document an answer came from, because what it learned is spread through its weights. And it can't enforce your access rules: anything it was trained on, it can repeat to anyone who asks the right way.

## Where fine-tuning does help

Tuning fits when the model knows the right thing but says it in the wrong shape, across thousands of requests. Say an insurance broker wants every incoming email sorted into one of fifteen categories and summarized in a fixed format for its claims system. A good prompt gets close. A model tuned on a few thousand correctly labeled emails can follow the format more reliably, with a shorter prompt. OpenAI's [model optimization guide](https://developers.openai.com/api/docs/guides/model-optimization) also notes that careful prompting may be all you need, and we'd test that first.

The broker could use both: a tuned model writes claim summaries in its house format, and retrieval pulls the customer's policy wording into each one.

The tradeoff is upkeep. OpenAI is winding down its fine-tuning platform; its [deprecations page](https://developers.openai.com/api/docs/deprecations) says new organizations lost access in May 2026 and existing customers can't start new jobs after January 6, 2027. Google Cloud still offers [supervised fine-tuning for Gemini models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning), and open-weight models can be tuned on infrastructure you control. Base models get replaced every year or so either way, so keep the dataset, test set and training instructions yourself.

## Write the test set this week

Whichever way it goes, we build the test set first: a fixed list of real questions with agreed answers, scored the same way on every version. It's how you tell a real improvement from a lucky run. You can start it this week by collecting the questions your team answered last month and the answers they'd stand behind.

Our [RAG development](/rag-development) and [LLM fine-tuning](/llm-fine-tuning) pages cover how we build each. If a proposal is on your desk, [send it over](/contact).
