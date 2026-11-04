# LinkedIn: rag-or-fine-tuning

## Post 1: native text

Your team wants an AI assistant that answers from your policies and manuals, and the proposal says fine-tuning. Ask three questions before you sign.

Do the documents change? With retrieval (RAG), you update the index and the next answer uses the new version. A fine-tuned model keeps the old policy until someone retrains it.

Do different people have different access? Retrieval can check permissions at search time. A tuned model can repeat anything it was trained on to anyone who asks the right way.

Does an answer need to show its source? Retrieval can cite the passage. A tuned model has no passage to point to.

A yes to any of these points to retrieval. Fine-tuning is a separate decision about behavior: the model knows the right thing but says it in the wrong shape, thousands of times. An insurance broker sorting every incoming email into one of fifteen categories, in a fixed format for its claims system, fits. It could use both, with retrieval pulling the customer's policy wording into each summary.

If you do tune, keep the dataset and test set yourself. OpenAI is winding down its fine-tuning platform, and base models get replaced every year or so.

Whatever you choose, we build the test set first: real questions with agreed answers, scored the same way on every version. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/rag-or-fine-tuning.pdf)

Document title: RAG or fine-tuning: a decision table

For when an AI proposal lands on your desk: each card is a requirement and the approach it points to. The full write-up, with the test set we build first, is in the comments.

## First comment (both posts)

https://motowntech.com/go/rag-or-fine-tuning
