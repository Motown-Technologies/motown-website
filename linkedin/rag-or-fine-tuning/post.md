# LinkedIn: rag-or-fine-tuning

## Post 1: native text

If you want an AI to answer from your company's documents, you almost certainly want retrieval (RAG), and fine-tuning probably won't help.

RAG looks up the relevant passages each time someone asks and hands them to the model. Fine-tuning trains the model on examples so it behaves differently: format, tone, judgment.

Why fine-tuning is a poor place to keep facts:

• When your policy changes, a tuned model keeps the old one until you retrain it.
• It can't show which document an answer came from.
• It can't enforce access rules. What it learned, it can repeat to anyone.

Fine-tuning earns its place when the model knows the right thing but says it in the wrong shape, thousands of times a day. Sorting emails into fixed categories in a fixed format is a good example. Some products use both.

Where you can fine-tune has also changed this year. OpenAI closed its fine-tuning platform to new organizations in May, and existing customers can't start new jobs after January 6, 2027. Google Cloud still offers tuning for Gemini, and open-weight models can be tuned on your own infrastructure.

Either way, the dataset and the test set are what you're paying for. Keep them yours.

## Post 2: carousel (~/Documents/Motown Carousels/rag-or-fine-tuning.pdf)

Document title: RAG or fine-tuning: which one your data needs

How to tell whether your AI needs to look things up or learn a new behavior, and why most companies start with the first. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/rag-or-fine-tuning?utm_source=linkedin&utm_medium=social&utm_campaign=rag-or-fine-tuning
