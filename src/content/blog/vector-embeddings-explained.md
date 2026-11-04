---
title: "Vector embeddings: why company search misses the answer"
image: ../../assets/blog/vector-embeddings-explained-image.jpg
imageAlt: "Paper index cards on a blue floor gathered into separate clusters, with one card on its own between two groups"
cover: ../../assets/blog/vector-embeddings-explained.png
description: "How vector embeddings let software search company documents by meaning, and where exact part numbers and access permissions trip them up."
pubDate: 2026-09-18
relatedPages: ["/rag-development", "/services/ai-development"]
category: ai
---

A customer types "how do I get my money back" and the help page is called "refund policy." A staff member knows the answer is somewhere in a contract folder but can't remember the wording. Both searches fail for the same reason: they depend on guessing words the documents may not use.

Vector embeddings let software search by meaning. An embedding model reads a passage and returns a long list of numbers. OpenAI's current models return 1,536 or 3,072 of them by default, according to [OpenAI's embeddings guide](https://developers.openai.com/api/docs/guides/embeddings). Software treats those numbers as a position, like coordinates on a map with far more than two dimensions.

## A bookshop shelved by subject

Picture a bookshop that shelves books by what they're about instead of by title. A book on sourdough sits next to one on bread machines and a long way from a biography of a general. Embeddings put every passage of your documents on a map like that, so "terminate the agreement" lands near "cancel the contract" even though the two share no words.

A question becomes numbers too, and search returns the passages nearest to it. That's the search half of retrieval-augmented generation, usually shortened to RAG: the embeddings find the passages, and a language model writes an answer from them.

The numbers need somewhere to live. Dedicated vector databases exist, but often the database you already run can do the job. Postgres, which a lot of business software is built on, has an open-source extension called [pgvector](https://github.com/pgvector/pgvector) that adds vector search to it. We usually start with the database a client already has. A separate system means another bill, another set of credentials and another copy of the data to keep in sync, and that only pays off once the volume or speed calls for it.

## Where it goes wrong

Embeddings are good at meaning and bad at exact strings. Say a parts distributor builds a catalog search and a technician types HX-4410-B. To the model that looks almost the same as HX-4410-C, so the closest match can be the wrong part. Order numbers, policy codes and names have the same problem. Running keyword search alongside it, usually called hybrid search, handles that.

A few other limits are worth knowing before you buy anything:

- Search by meaning always returns something, even when nothing relevant exists. Without a way to report that it came up empty, the language model writes an answer from the closest weak match.
- If the HR folder is in the index, anyone who can ask a question can surface it, unless access rules are checked at the moment of each search.
- Embeddings from different models can't be compared, so switching models later means processing every document again.

## What to settle before a vendor demo

Decide what people should be able to find and where it lives today, which searches use exact identifiers, and who is allowed to see what. Write that last one down before anything is indexed.

Then build a test. This week, collect a few dozen searches your team gave up on, along with the passages they should have found, and include part numbers or policy codes if you use them. Bring that list to any vendor, us included. Without it, search quality gets judged by reading a handful of answers, and a system can look fine that way while getting the hard questions wrong.

Our [RAG development](/rag-development) page covers how we build search over company documents. If your team keeps giving up on searches, [tell us what they can't find](/contact).
