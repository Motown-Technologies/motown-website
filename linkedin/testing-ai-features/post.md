# LinkedIn: testing-ai-features

## Post 1: native text

A good demo is one person's impression. Before an AI feature goes in front of customers, we'd want a test set.

Someone tries a few questions, likes the answers and calls it ready. Then a customer asks the same thing differently and gets an answer that's confident and wrong. Nothing crashes when an AI feature gets worse, and it can change without anyone touching your product, when the provider updates its model or someone tweaks the instructions.

A test set is a fixed list of realistic questions, an agreed way to grade the answers, and a score you compare across versions.

For a dental group's appointment and insurance assistant, that means questions phrased the way patients phrase them, typos included. Add ones it should decline, two insurance plans with similar names, and a message telling it to ignore its instructions. Every real mistake after launch becomes a new case.

Then every change runs the full set before it ships. Mark the cases you can't afford to miss as must-pass, so a single failure blocks the change.

A good score still doesn't replace a person where a mistake is hard to undo. In an auction house system we built, a model drafts catalog copy from photos and a cataloger approves every draft before it becomes inventory.

Start by writing down what a good answer looks like. If nobody can agree, that's your first problem.

## Post 2: carousel (~/Documents/Motown Carousels/testing-ai-features.pdf)

Document title: A checklist for your first AI test set

Run through this before anyone signs off an AI feature because the demo looked good. It covers what goes in the test set, how to grade each kind of answer and when to hold a change back.

## First comment (both posts)

https://motowntech.com/go/testing-ai-features
