# LinkedIn: rag-and-fine-tuning-explained

## Post 1: native text

AI proposals usually offer two ways to make a model work with your company's information: RAG or fine-tuning. They change different things.

RAG (retrieval-augmented generation) changes what the model reads. Your documents get split into passages and indexed. Ask a question and the system finds the relevant ones and hands them to the model, with an instruction to answer from them and say which ones it used. Think open-book exam.

So when your refund policy changes, you update the index and the next question gets the new wording, with no change to the model.

Finding the right passage doesn't guarantee a right answer, so check the reply and the passages behind it. Pull up an old policy and it'll still write a convincing answer.

Fine-tuning changes the model's weights. You keep training an existing model on examples, each one an input paired with the reviewed output you want. It's more like training a new hire on how your firm writes, so every support reply acknowledges the request, explains the policy and gives a next step, with a shorter prompt.

It's a bad place to keep a policy that changes. Updating it takes another training run, and training alone can't trace an answer back to a source.

You can use both. There's also a cheaper step before either: clear instructions and a few good examples in the prompt. That often does the job, and it gives you a baseline to measure against.

Side-by-side table's in the article. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/rag-and-fine-tuning-explained.pdf)

Document title: A glossary for AI proposals

Keep this next to the next AI proposal you're asked to approve, so words like weights, context and fine-tuning mean something specific. The full explanation's linked in the comments.

## First comment (both posts)

https://motowntech.com/go/rag-and-fine-tuning-explained
