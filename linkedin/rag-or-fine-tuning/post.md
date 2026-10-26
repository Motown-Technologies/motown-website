# LinkedIn: rag-or-fine-tuning

## Post 1: native text

Your team wants an AI assistant that answers from your policies, contracts and product manuals. The proposal mentions fine-tuning. Should it?

Your documents change. Replace a policy and the next answer should use the new one. Retrieval (RAG) means updating the index. A fine-tuned model keeps the old policy until someone retrains it.

Access differs too. Retrieval can check it at search time, so people only get answers from documents they're allowed to open. A tuned model can repeat anything it was trained on to anyone who asks the right way.

Answers need to show where they came from. Retrieval can cite the passage. Fine-tuning spreads what it learned through the model, leaving no passage to point to.

So the documents go into retrieval. Fine-tuning is about behavior: the model knows the right thing but says it in the wrong shape across thousands of requests, and you've got hundreds of agreed examples of good output. An insurance broker sorting every incoming email into one of fifteen categories, in a fixed format for its claims system, fits. It could use both: retrieval pulls the customer's policy wording into each tuned summary.

If you tune, keep the dataset and test set yourself. OpenAI is winding down its fine-tuning platform, and base models get replaced every year or so.

First, build the test set: real questions with agreed answers, scored the same way on every version. Then ask to see what happens with a replaced policy, and with a question no document covers.

## Post 2: carousel (~/Documents/Motown Carousels/rag-or-fine-tuning.pdf)

Document title: RAG or fine-tuning: a decision table

For when an AI proposal lands on your desk: each card is a requirement and the approach it points to. The full write-up, with the test set we build first, is in the comments.

## First comment (both posts)

https://motowntech.com/blog/rag-or-fine-tuning?utm_source=linkedin&utm_medium=social&utm_campaign=rag-or-fine-tuning
