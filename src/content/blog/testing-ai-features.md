---
title: "Testing an AI feature before your customers do"
image: ../../assets/blog/testing-ai-features-image.jpg
imageAlt: "A row of blue glass bottles lined up at a stone ring, one of them slightly too wide to pass through"
cover: ../../assets/blog/testing-ai-features.png
description: "A good demo is one person's impression. How to build a test set of real questions and use its score to decide whether an AI change ships."
pubDate: 2026-11-04
relatedPages: ["/mlops-services", "/llm-fine-tuning", "/case-studies/auction-operations"]
category: ai
---

Someone tries a few questions in the demo, likes the answers and says the AI feature is ready. Then a customer phrases the same question differently and gets an answer that is confident and wrong.

A demo is one person's impression. Before launch we'd want a test set: realistic questions, an agreed way to grade the answers, and a score you can compare from one version to the next. The usual name for this is an eval. It takes more effort than a demo, and in return you find out whether a change made things better or worse.

## Why a demo can't tell you

Ordinary software gives the same output for the same input. An AI feature can answer differently each time, and a wrong answer sounds as sure as a right one. Nothing crashes when it gets worse.

It also changes when nobody has touched your product. The provider updates its model, someone tweaks the instructions to fix one complaint, new documents go into what it searches. Any of these can fix one thing and break three others, and you won't know which unless you measure.

## What goes in the test set

Start with real inputs if you have them: past support tickets, real documents, questions customers have actually asked. For something new, write them with the people who do the job today. They know what the strange cases look like.

Say a dental group is adding an assistant for patients' questions about appointments and insurance. Its first test set would have the common questions, phrased the way patients phrase them, typos included. It would have questions the assistant should decline because they need a clinician, and two insurance plans with similar names that need different answers. It would also have a message telling the assistant to ignore its instructions; our post on [prompt injection](/blog/prompt-injection-explained) explains why that one matters.

A few dozen well-chosen cases are a reasonable start. Every real mistake after launch becomes a new case, so it can't come back unnoticed.

## Grade with the simplest thing that works

When the right answer is a category, a yes or no, or a number, an automatic check grades it the same way every time. For open-ended answers, like a reply to a customer, a separate model can grade each one against a written rubric. [Anthropic's guide to building evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) suggests using a different model from the one being tested, and someone should check a sample of its grades by hand. Save people for the judgment calls that need someone who knows the work.

## Let the score decide what ships

Every change to the instructions, the model or the documents runs the full set before it goes live. Mark the cases you can't afford to get wrong as must-pass, so failing any one of them blocks the change whatever the overall score says.

A good score still doesn't replace a person where an answer leads to something hard to undo. In the [auction house system](/case-studies/auction-operations) we built, a model drafts catalog copy from photos, and a cataloger reviews and approves every draft before it becomes inventory.

## One thing to do this week

Write down what a good answer looks like for your AI feature. If the people involved can't agree, settle that before anyone calls it ready.

If you'd like help building the test set, [tell us about the feature](/contact).
