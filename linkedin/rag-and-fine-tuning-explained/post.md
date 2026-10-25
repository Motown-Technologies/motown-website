# LinkedIn: rag-and-fine-tuning-explained

## Post 1: native text

An AI model doesn't know your refund policy. It learned from public text up to a cutoff date, and your documents were never part of that.

There are two common ways to change what it does, and AI proposals often mention both.

RAG (retrieval-augmented generation) looks things up. Your documents are split into passages and indexed. When someone asks a question, the system finds the relevant passages and hands them to the model with the question. It works like an open-book exam: the model writes the answer, the facts come from your documents, and you can check the passage it used. Update a document and the next answer uses the new version.

Fine-tuning trains the model further on examples you supply, each one an input paired with the output you want. After hundreds or thousands of them, the model follows that pattern without long instructions. It suits consistent format and tone. It's a poor way to store facts, because whatever it learned stays as it was at training time and it can't point to a source.

Before either, try clear instructions with a few good examples in the prompt. For many tasks that's enough, and it gives you a baseline to measure against.

## Post 2: carousel (~/Documents/Motown Carousels/rag-and-fine-tuning-explained.pdf)

Document title: RAG and fine-tuning, explained in plain terms

What each approach changes about an AI model, and what each can and can't do for your business. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/rag-and-fine-tuning-explained?utm_source=linkedin&utm_medium=social&utm_campaign=rag-and-fine-tuning-explained
