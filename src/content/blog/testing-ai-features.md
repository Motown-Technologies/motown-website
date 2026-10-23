---
title: "AI evals: how to test an AI feature before customers do"
image: ../../assets/blog/testing-ai-features-image.jpg
imageAlt: "A row of blue glass bottles lined up at a stone ring, one of them slightly too wide to pass through"
cover: ../../assets/blog/testing-ai-features.png
description: "What an eval is, how to build a test set for an AI feature, and how to use it to catch problems before a prompt or model change reaches customers."
pubDate: 2026-11-04
relatedPages: ["/mlops-services", "/llm-fine-tuning", "/case-studies/auction-operations"]
category: ai
---

You test an AI feature by running it against a fixed set of realistic examples, scoring every answer the same way each time, and refusing to ship any change that makes the score worse. That fixed set and its scoring are called an eval.

Without one, the usual test is someone on the team trying a few questions and deciding it looks fine. That's how a feature passes the demo and then fails on the first odd thing a customer types.

## Why AI features need a different kind of testing

Ordinary software gives the same output for the same input, so a test either passes or fails. An AI feature can give a different answer each time, and a wrong answer looks just as confident as a right one. Nothing crashes and no error appears. The feature just gets worse on the cases nobody tried.

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

A few dozen well-chosen cases is a reasonable start. The set grows as you learn where the feature goes wrong.

## How to grade the answers

Use the simplest grader that works for each case.

### Checks in code

If the right answer is a category, a yes or no, a number or a field in a fixed format, check it with code. It's fast and cheap, and it grades the same way every time. Many AI features can be graded this way more often than people expect, especially ones that extract data from documents.

### A second model as grader

For open-ended answers, such as a summary or a reply to a customer, you can ask a separate model to grade each answer against a written rubric: did it answer the question, did it stay within policy, did it invent anything. Anthropic's guide suggests using a different model from the one being tested. Check a sample of its grades by hand from time to time to make sure the grader agrees with you.

### People

Some judgments need someone who knows the work. Keep human grading for the cases that really need it, and use their verdicts to improve the automated checks.

## Use the eval as a gate

The eval is most useful when it decides whether a change ships. Every time you change the prompt, the model or the documents the feature searches, run the full set and compare scores. Pin the cases you can't afford to get wrong, so any change that fails one of them is blocked regardless of the overall score. That's the same harness we build before any [LLM fine-tuning](/llm-fine-tuning) work, because without it you can't tell whether a tuning run helped.

After launch, keep watching. If the questions customers ask start to look different from the ones you tested, scores on the old set will look fine while real quality slips. Spotting that drift is part of our [MLOps](/mlops-services) work.

## Where human review still belongs

An eval tells you how often the feature is right. It doesn't make any single answer safe. When an answer leads to something hard to undo, keep a person in the loop. In the [auction house system](/case-studies/auction-operations) we built, a model drafts the catalog copy from photos, and a cataloger reviews, regenerates with feedback where needed and approves every draft before it becomes inventory.

## Before you launch

Write down what a good answer is, collect the cases that matter, and decide what score you'll accept. If you can't say what "good" means for your AI feature, that's the first thing to settle.

If you'd like help building an eval for a feature you're about to launch, or one that's already live, [talk to us](/contact).
