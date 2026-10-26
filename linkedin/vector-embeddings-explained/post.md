# LinkedIn: vector-embeddings-explained

## Post 1: native text

Your refund policy is written down. So why can't your company search find it?

Often because the customer typed "how do I get my money back" and the page is called "refund policy." Keyword search matches words, and those two share none.

Vector embeddings let software search by meaning. A model turns each passage into a long list of numbers that works like a spot on a map. Passages that mean similar things land close together, so "terminate the agreement" sits near "cancel the contract." Your question becomes numbers too, and the search returns whatever's nearest.

That's the search half of most AI assistants built on company documents. Its limits are worth knowing before you buy one:

• It's bad at exact strings. To the model, part HX-4410-B looks almost the same as HX-4410-C. Running keyword search alongside it helps (vendors call it hybrid search).
• It always returns something, even when nothing relevant exists. The system needs a way to say it came up empty.
• If the HR folder is indexed, anyone who can ask a question can surface it, unless access rules are checked on every search.
• Results from different models can't be compared, so switching models later means processing all your documents again.

Before you talk to a vendor, collect a few dozen searches your team gave up on, plus the passages they should've found. Throw in part numbers or policy codes if you use them, then test every version against that list.

## Post 2: carousel (~/Documents/Motown Carousels/vector-embeddings-explained.pdf)

Document title: Questions to settle before you buy AI search

Answer these before a vendor demo, so you're judging search on your own questions instead of a few nice-looking answers. Link's in the comments.

## First comment (both posts)

https://motowntech.com/blog/vector-embeddings-explained?utm_source=linkedin&utm_medium=social&utm_campaign=vector-embeddings-explained
