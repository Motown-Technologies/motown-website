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

A team wants an AI assistant to answer questions about its policies, contracts or product manuals. The documents change, people have different access rights and an answer needs to show where it came from. Those requirements matter more than whether the proposal calls the system RAG or fine-tuning.

For current company information, start with retrieval: look up the relevant passages each time a question is asked. Fine-tuning is usually a separate decision about the model's behavior, such as its format or tone. If the terms are new to you, start with [what RAG and fine-tuning do to a model](/blog/rag-and-fine-tuning-explained).

## What's the difference between RAG and fine-tuning?

With RAG, the model itself stays as it is. Your documents are indexed, usually with [vector embeddings](/blog/vector-embeddings-explained) plus keyword search, and each question triggers a search. The best passages go to the model, which writes an answer from them and can cite where each part came from.

Fine-tuning trains an existing model further on examples you supply, so the model's behavior changes. You show it hundreds or thousands of inputs paired with the outputs you want, and it learns to produce that kind of output without being told each time.

## When is RAG the right choice?

RAG fits when the answer depends on information that lives in your documents and changes over time. Policies, contracts, product manuals, price lists and past support tickets all fall into that group.

That lets the system handle changing information and access rules:

- When a document changes, you update the index, and the next answer uses the new version.
- Every answer can point to the passage it came from, so people can check it.
- Access rules can be checked at search time, so a staff member only gets answers from documents they're allowed to open.
- Removing a document from the system means deleting it from the index.

Ask to see what happens when a policy has been replaced or when no relevant document is found. A confident answer from an old passage is still the wrong result.

## When is fine-tuning the right choice?

Fine-tuning fits when the model already has the knowledge it needs but doesn't behave the way you want, consistently, across thousands of requests. Say an insurance broker wants every incoming email sorted into one of fifteen categories and summarized in a fixed format for its claims system. A well-written prompt gets close. A model tuned on a few thousand correctly labeled emails can follow the format more reliably, with a shorter prompt.

OpenAI's [model optimization guide](https://developers.openai.com/api/docs/guides/model-optimization) lists similar reasons: more examples than fit in a single request, shorter prompts that cost less at volume, and the option of a smaller, cheaper model trained for one task. The same guide notes that careful prompting may be all you need, and we'd test that first.

## Why fine-tuning is a poor way to store facts

A fine-tuned model absorbs its training examples at training time. If your return policy changes next month, the model keeps the old one until you retrain it. It also can't show which document an answer came from, because the information is spread through the model's weights. A model can't enforce your access rules either: anything it was trained on, it can repeat to anyone who asks the right question.

## Where can you fine-tune in 2026?

OpenAI is winding down its fine-tuning platform. Its [deprecations page](https://developers.openai.com/api/docs/deprecations) says new organizations lost access in May 2026 and that existing customers can't create new fine-tuning jobs after January 6, 2027. Fine-tuned models keep running until their base models are retired.

Other routes remain. Google Cloud offers [supervised fine-tuning for Gemini models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning), and open-weight models can be tuned and hosted on infrastructure you control.

Base models get replaced every year or so, and sometimes the provider's tuning service changes too. Keep the dataset, evaluation set and training instructions under your control, so a change of base model can be tested against the same work.

## Can you use both?

Yes, and for some products it is the best setup. A tuned model handles the format and tone, and retrieval supplies the current facts at question time. The broker above might tune a model to write claim summaries in its house format, then use retrieval to pull the customer's policy wording into each summary.

## How to decide

Use these questions to narrow the choice:

1. Does the right answer depend on documents that change? Use RAG.
2. Do people need to see the source of an answer? Use RAG.
3. Does the model know the right thing but say it in the wrong shape or style? Consider fine-tuning.
4. Do you have hundreds of examples of good output that people agree on? Without them, tuning has nothing to learn from.

Whichever way it goes, we build the test set first: a fixed list of real questions or tasks with agreed answers, scored the same way on every version. Comparing versions against those cases helps distinguish a real improvement from a lucky run.
