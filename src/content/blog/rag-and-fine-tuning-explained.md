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

Ask an AI assistant about an unpublished internal refund policy it has no access to, and it has no reliable basis for answering. It may say it doesn't know, or produce a plausible policy that isn't yours. What it learned during training won't tell it what your team agreed last week.

AI proposals often mention retrieval-augmented generation, usually shortened to RAG, alongside fine-tuning. RAG supplies relevant documents when the model answers. Fine-tuning changes the model's weights to help it follow patterns learned from examples. For a support team, that might mean looking up today's refund policy and learning how to structure a reply. Both need testing against the work you expect them to do.

## What a model knows, and what it reads

A language model has two sources of information when it answers. The first is what it absorbed during training, stored in billions of numbers called weights. That knowledge is broad but frozen: it doesn't update when your prices change.

The second is whatever you send with the question: instructions, a pasted document, the conversation so far. This is called the context. The model reads it fresh every time, and it can only hold so much in one request.

## What RAG does

RAG is a way of looking things up before answering. The term comes from a [2020 research paper](https://arxiv.org/abs/2005.11401) from Facebook AI Research. The system searches your own documents for the passages that matter, then hands those passages to the model along with the question.

A RAG system has four main parts:

1. Your documents are split into passages of a manageable size, a few paragraphs each.
2. Each passage is indexed so it can be found by meaning and by exact words. Search by meaning usually relies on [vector embeddings](/blog/vector-embeddings-explained).
3. When someone asks a question, the system searches the index and picks the most relevant passages.
4. Those passages go into the context with an instruction to answer from them and say which ones were used.

Think of it as an open-book exam. For a refund question, the system retrieves the relevant part of your policy and gives it to the model to use in its reply. When the policy changes, updating the index makes the revised passage available for retrieval without changing the model's weights.

Having the right passage doesn't guarantee that the answer follows it. Check that the reply accurately states the policy and that any citation supports what it says.

Search is an important place to investigate when an answer is wrong. If the system retrieves an old policy or a passage about a different kind of refund, the model may write a convincing answer from it. Check the retrieved passages as well as the reply, including whether the system declines to answer when it finds nothing relevant.

## What fine-tuning does

Supervised fine-tuning takes an existing model and continues its training on examples you supply. Each example pairs an input with the output you want, such as a customer's refund request and a reviewed reply. The number of examples needed depends on the task and their quality; there is no universal requirement for hundreds or thousands. Test whether training improves the replies rather than assuming a larger dataset will do so.

Fine-tuning is more like training a new hire on how your firm writes. Suppose the support team wants each reply to acknowledge the request, explain the applicable policy and give the customer a next step. Training on reviewed examples can help the model follow that structure more consistently, with a shorter prompt. Those changes are stored in its weights, but individual replies can still be wrong.

Fine-tuning is a poor way to keep a changing refund policy current. If the terms change, the weights won't update themselves; changing what they learned requires another training run. Fine-tuning alone also doesn't provide a reliable way to trace an answer back to a particular training example.

## How they compare

| | RAG | Fine-tuning |
|---|---|---|
| What changes | What the model reads for each question | The model's weights |
| Good for | Current facts from your documents | Consistent format, tone or task behavior |
| Updating | Change the documents and re-index | Prepare new examples and retrain |
| Showing sources | Can cite retrieved passages; check that they support the answer | Training alone doesn't provide source attribution |
| What you need | Documents and a search index | Reviewed input/output examples; quantity depends on the task |

The two can work together: retrieval supplies today's refund terms while a tuned model helps keep the reply in the team's agreed format. Test both whether the terms are correct and whether the reply follows that format.

Before either, there is a cheaper step: write clear instructions and include a few good examples in the prompt. For many tasks that is enough, and it gives you a baseline to measure anything more elaborate against.

## Choosing between them

Which one you need depends on your documents, who is allowed to see them and how you'll measure the result. We cover that decision in [how to get AI to answer from your company documents](/blog/rag-or-fine-tuning), with questions to narrow the choice.
