# LinkedIn: rag-and-fine-tuning-explained

## Post 1: native text

Ask an AI assistant about the refund policy your team agreed last week and it has nothing to go on. It might say so. It might make one up.

AI proposals usually offer two fixes, RAG and fine-tuning, and they change different things.

RAG (retrieval-augmented generation) changes what the model reads. Your documents are split into passages and indexed. A question triggers a search, and the best passages go to the model with an instruction to answer from them and say which ones it used. Think open-book exam. Change the policy, update the index, and the next answer uses the new wording.

The catch is search. Pull up last year's policy and the model will still write a convincing answer, so check the passages as well as the reply.

Fine-tuning changes the model itself. You keep training it on reviewed examples, so it's closer to teaching a new hire how your firm writes: acknowledge the request, explain the policy, give a next step. It's a poor place to keep a policy, though. When the terms change, fixing it takes another training run.

Before either, try clear instructions and a few good examples in the prompt. That's often enough, and it gives you a baseline.

One thing to do this week: write down five real refund questions and the answers you'd accept. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/rag-and-fine-tuning-explained.pdf)

Document title: A glossary for AI proposals

Keep this next to the next AI proposal you're asked to approve, so words like weights, context and fine-tuning mean something specific. The full explanation's linked in the comments.

## First comment (both posts)

https://motowntech.com/go/rag-and-fine-tuning-explained
