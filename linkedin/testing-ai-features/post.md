# LinkedIn: testing-ai-features

## Post 1: native text

Someone tries a few demo questions, likes the answers and calls the AI feature ready. Then a customer asks it differently and gets a confident, wrong answer.

That's normal for AI. The same question can get a different answer each time, and a wrong answer sounds as sure as a right one. The feature can also change without anyone touching your code, when the provider updates its model or someone tweaks the prompt to fix a complaint.

A demo is one person's impression. A test set gives you something to compare: fixed, realistic questions, an agreed way to grade each answer, and a score you track across versions.

For a dental group's appointment and insurance assistant, that means the questions patients ask, typos included. Add ones it should decline, two insurance plans with similar names, and a message telling it to ignore its instructions. Every real mistake after launch becomes a new case.

After that, every prompt, model or document change runs the full set before it ships, and a lower score keeps it out. Mark cases you can't afford to miss as must-pass, so any one failing blocks the change.

Answers that lead to something hard to undo still need a person. In an auction house system we built, a model drafts catalog copy from photos, and a cataloger reviews, regenerates with feedback where needed and approves every draft. The model never publishes on its own.

Link's in the comments: grading open-ended answers and what to watch after launch.

## Post 2: carousel (~/Documents/Motown Carousels/testing-ai-features.pdf)

Document title: A checklist for your first AI test set

Run through this before anyone signs off an AI feature because the demo looked good. It covers what goes in the test set, how to grade each kind of answer and when to hold a change back.

## First comment (both posts)

https://motowntech.com/go/testing-ai-features
