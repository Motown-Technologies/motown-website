---
title: "The AI demo looked good. How do you know it is ready?"
image: ../../assets/blog/testing-ai-features-image.jpg
imageAlt: "A row of blue glass bottles lined up at a stone ring, one of them slightly too wide to pass through"
cover: ../../assets/blog/testing-ai-features.png
description: "How to test an AI feature against real customer questions and measure whether a change improves the work people rely on."
pubDate: 2026-11-04
relatedPages: ["/mlops-services", "/llm-fine-tuning", "/case-studies/auction-operations"]
category: ai
---

Someone tries a few questions in the demo, likes the answers and says the feature is ready. A customer may then phrase the question differently and get a confident but incorrect answer.

A repeatable test set gives the team more to go on than a good demonstration. Run realistic inputs through the feature, agree how to grade the answers and compare versions using the same cases. That process is usually called an eval.

## Why AI features need a different kind of testing

Ordinary software gives the same output for the same input, so a test either passes or fails. An AI feature can give a different answer each time, and a wrong answer looks just as confident as a right one. The feature can get worse on untested cases without crashing or showing an error.

It also changes without anyone touching your code. A provider updates a model, someone tweaks the prompt to fix one complaint, a new batch of documents goes into the search index. Any of these can fix one thing and break three others, and you won't know which unless you measure.

## What is an eval?

An eval has three parts:

- A test set: real or realistic inputs, each with what a good answer looks like.
- A way to grade each answer.
- A score you track over time, so you can compare this week's version with last week's.

Anthropic's guide to [defining success criteria and building evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) makes two points we agree with. Success criteria should be specific and measurable. And the test cases should look like your real traffic, awkward edge cases included.

## How to build a test set

Start with real inputs if you have them: past support tickets, real documents, questions customers have actually asked. If you're launching something new, write them with the people who do the job today, because they know what the strange cases look like.

Say a dental group is adding an assistant that answers patients' questions about appointments and insurance. A useful first test set would include:

- The common questions, phrased the way patients actually phrase them, typos included.
- Questions the assistant should decline, such as anything that needs a clinician's judgment.
- Questions that look similar but need different answers, such as two insurance plans with similar names.
- Inputs that try to make it misbehave, such as a message telling it to ignore its instructions. Our post on [prompt injection](/blog/prompt-injection-explained) covers why that one matters.
- Every real mistake it makes after launch, added as a new case so it can't come back unnoticed.

A few dozen well-chosen cases are a reasonable start. The set grows as you learn where the feature goes wrong.

## How to grade the answers

Use the simplest grader that works for each case.

### Checks in code

If the right answer is a category, a yes or no, a number or a field in a fixed format, check it with code. It's fast and cheap, and it grades the same way every time. Many AI features can be graded this way more often than people expect, especially ones that extract data from documents.

### A second model as grader

For open-ended answers, such as a summary or a reply to a customer, you can ask a separate model to grade each answer against a written rubric: did it answer the question, did it stay within policy, did it invent anything. Anthropic's guide suggests using a different model from the one being tested. Check a sample of its grades by hand from time to time to make sure the grader agrees with you.

### People

Some judgments need someone who knows the work. Keep human grading for the cases that really need it, and use their verdicts to improve the automated checks.

## Use the eval as a gate

The eval is most useful when it decides whether a change ships. Every time you change the prompt, the model or the documents the feature searches, run the full set and compare scores. Pin the cases you can't afford to get wrong, so any change that fails one of them is blocked regardless of the overall score. Keep that comparison in place for tuning work too; a training run is not evidence that the feature improved.

After launch, keep watching. If the questions customers ask start to look different from the ones you tested, scores on the old set will look fine while real quality slips. Have someone review real failures and update the test cases, so the set continues to reflect the work people need done.

## Where human review still belongs

An eval measures performance across the test set; an individual answer still needs appropriate checks. When an answer leads to something hard to undo, keep a person in the loop. In the [auction house system](/case-studies/auction-operations) we built, a model drafts the catalog copy from photos, and a cataloger reviews, regenerates with feedback where needed and approves every draft before it becomes inventory.

## Before you launch

Write down what a good answer is, collect the cases that matter, and decide what score you'll accept. If you can't say what "good" means for your AI feature, that's the first thing to settle.
