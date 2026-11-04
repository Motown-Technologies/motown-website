---
title: "RAG and fine-tuning: how AI uses your company's information"
image: ../../assets/blog/rag-and-fine-tuning-explained-image.jpg
imageAlt: "An open reference book with a blue ribbon bookmark next to a smooth wooden practice block"
cover: ../../assets/blog/rag-and-fine-tuning-explained.png
description: "How RAG supplies current company information and fine-tuning changes model behavior, explained through a customer refund example."
pubDate: 2026-09-28
relatedPages: ["/rag-development", "/llm-fine-tuning"]
category: ai
---

Ask an AI assistant about your internal refund policy, the one your team agreed last week, and it has nothing reliable to go on. It may say it doesn't know. Or it may write a plausible policy that isn't yours.

Most AI proposals offer two fixes: retrieval-augmented generation (RAG) and fine-tuning. They change different things, and for facts that change, we'd start with RAG.

## What a model knows, and what it reads

A model answers from two places. One is what it absorbed in training, stored in billions of numbers called weights. That knowledge is broad but frozen; it doesn't update when your prices change. The other is whatever you send with the question, called the context: instructions, a pasted document, the conversation so far. The model reads that fresh every time, up to a limit.

## RAG changes what the model reads

RAG looks things up before answering. The term comes from a [2020 research paper](https://arxiv.org/abs/2005.11401) from Facebook AI Research. Your documents are split into passages and indexed so they can be found by meaning, usually with [vector embeddings](/blog/vector-embeddings-explained), and by exact words. A question triggers a search, and the best passages go to the model with an instruction to answer from them and say which ones it used.

Think of an open-book exam. Change the refund policy, update the index, and the next answer uses the new wording. The model itself never changes.

The catch is search. If it pulls up last year's policy, or a passage about a different kind of refund, the model will write a convincing answer from it. So check the passages as well as the reply, and check what happens when nothing relevant turns up.

## Fine-tuning changes the model

Fine-tuning continues training an existing model on examples you supply, each a customer request paired with a reviewed reply. It's closer to training a new hire on how your firm writes. If every reply should acknowledge the request, explain the policy and give a next step, tuning can make the model follow that shape more consistently, with a shorter prompt.

It's a poor place to keep a policy. When the terms change, the weights don't, and fixing that takes another training run. Training alone also can't trace an answer back to a source.

| | RAG | Fine-tuning |
|---|---|---|
| What changes | What the model reads | The model's weights |
| Good for | Current facts from your documents | Consistent format and tone |
| Updating | Change the documents, re-index | New examples, retrain |
| Sources | Can cite the passages it used | None from training alone |

The two can work together: retrieval supplies today's refund terms while a tuned model keeps the reply in your format.

## Try the cheap step first

Before either, write clear instructions and include a few good examples in the prompt. For many tasks that's enough. Even when it isn't, it gives you a baseline to measure anything fancier against.

This week, pick five real refund questions your team answered recently and write down the answers you'd accept. That's the start of a test set, and it'll tell you more about any proposal than its name does. When you're ready to choose, read [how to get AI to answer from your company documents](/blog/rag-or-fine-tuning), see our [RAG development](/rag-development) and [fine-tuning](/llm-fine-tuning) pages, or [ask us](/contact).
