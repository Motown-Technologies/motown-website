---
title: "Vector embeddings explained for people who don't code"
image: ../../assets/blog/vector-embeddings-explained-image.jpg
imageAlt: "Paper index cards on a blue floor gathered into separate clusters, with one card on its own between two groups"
cover: ../../assets/blog/vector-embeddings-explained.png
description: "What a vector embedding is, how it lets software search by meaning, where it falls short, and what to decide before you use one."
pubDate: 2026-09-18
relatedPages: ["/rag-development", "/services/ai-development"]
category: ai
---

A vector embedding is a list of numbers that stands for the meaning of a piece of text. Texts that mean similar things get similar numbers, so software can match "how do I get my money back" to a page that only says "refund policy."

That idea sits under most of the AI search and "chat with your documents" tools on the market. If someone is proposing one to you, it helps to know what the numbers do and where they go wrong.

## What is a vector embedding?

An embedding model reads a sentence, a paragraph or a page and returns a long list of numbers. OpenAI's current models, for example, return 1,536 or 3,072 numbers for each piece of text by default, according to [OpenAI's embeddings guide](https://developers.openai.com/api/docs/guides/embeddings). Nobody reads those numbers. Together they work as a position, like coordinates on a map that has far more than two directions.

Picture a bookshop that shelves books by what they're about instead of by title. A book on sourdough sits next to one on bread machines and a long way from a biography of a general. An embedding puts every paragraph of your documents on a map like that. The model learned where things belong by reading a very large amount of text, so it places "terminate the agreement" close to "cancel the contract" even though the two phrases share no words.

## How do embeddings make search smarter?

Ordinary search matches words. If a customer types "money back" and your help page says "refund," keyword search can miss it.

Search with embeddings works differently. You turn every chunk of your documents into an embedding once and store the results. When someone asks a question, the question becomes an embedding too, and the system looks for the stored chunks that sit closest to it on the map. Closeness on the map stands in for closeness in meaning.

That is the search half of retrieval-augmented generation, usually shortened to RAG. The embeddings find the relevant passages, and a language model writes an answer from them.

## Where do embeddings get stored?

The numbers need a home that can quickly answer "which of these million positions are nearest to this one?" That is what a vector database does. Some are dedicated products, but often the database you already run can do the job. Postgres, which a lot of business software is built on, has an open-source extension called [pgvector](https://github.com/pgvector/pgvector) that adds vector search to it.

We usually start with the database a client already has. A separate system means another bill, another set of credentials and another copy of the data to keep in sync, and that only pays off once the volume or the speed requirements call for it.

## What embeddings get wrong

Embeddings are good at meaning and bad at exact strings. Say a parts distributor builds a search tool for its catalog, and a technician types the part number HX-4410-B. To the embedding model that looks almost the same as HX-4410-C, so the closest match can be the wrong part. Policy codes, names, order numbers and dates have the same problem.

The fix is to run keyword search alongside embedding search and combine the results, which is called hybrid search. It is the default in our [RAG development](/rag-development) work, because the part-number miss is usually the first failure people notice.

A few other limits are worth knowing before you buy anything:

- An embedding is only as good as the chunk of text it was made from. If a long contract is split every few hundred characters regardless of its structure, a clause can be cut in half and never found whole.
- Embeddings from different models can't be compared with each other. If you switch models later, you re-embed everything.
- Search by meaning always returns something, even when nothing relevant exists. The system needs a way to report that it found nothing useful, or the language model will write an answer from the closest weak match.
- If the HR folder is in the index, anyone who can ask a question can surface it, unless access rules are checked at the moment of each search.

## What should a business owner decide?

You don't need to pick an embedding model yourself. You do need to answer the questions only your business can answer:

1. What should people be able to find, and where does it live today? A shared drive, a wiki, a ticketing system, an inbox.
2. Which searches involve exact identifiers? If staff look things up by order number or part code, plan for hybrid search from the start.
3. Who is allowed to see what? Write this down before anything is indexed.
4. How will you know it works? Collect a few dozen real questions people ask, along with the right answers, and test every version against that list.

The last one is the most useful thing to bring to a first conversation with any vendor, us included. Without a fixed set of test questions, search quality gets judged by reading a handful of answers, and a system can look fine that way while getting the hard questions wrong.

## Embeddings are one part of the system

Most of the quality in an AI search tool comes from the steps around the embeddings: how documents are split, how results are re-ranked and how answers cite their sources. Our [AI development](/services/ai-development) page covers the wider work, from retrieval systems to agents and fine-tuned models.

If your team keeps searching a pile of documents by hand, [tell us where they live](/contact) and what people keep asking.
