---
title: "Human review for AI: where to put the checkpoint"
image: ../../assets/blog/human-in-the-loop-ai-image.jpg
imageAlt: "A train of off-white toy carriages stopped on a curving track in front of a raised black signal arm on a blue floor"
cover: ../../assets/blog/human-in-the-loop-ai.png
description: "Where a person should review an AI's work, and how to keep that review useful when they face a queue of near-identical approvals."
pubDate: 2026-11-18
relatedPages: ["/ai-agent-development", "/case-studies/auction-operations"]
category: ai
---

An AI tool drafts the work and a person approves it. That sounds reassuring until the person has a hundred near-identical items to review and a full day of other work.

The review step needs as much thought as the draft. We'd put the checkpoint in front of anything costly to get wrong, and then spend real effort making the review screen something a busy person can keep up with. It's more design work up front. Without it, approval turns into clicking through.

## Ask what happens if nobody checks

A language model doesn't fail loudly. It gives an answer that reads well and is wrong, in the same tone it uses when it's right, so a reviewer can't go by how sure it sounds.

So for each thing the AI does, ask what happens if the output is wrong and nobody looks. If the answer is "someone rewrites a draft," the cost is small. If it's "a refund goes out" or "a patient gets the wrong instructions," a person sees it first.

That sorts actions into three groups. Reading, searching, tagging and drafting can often run with less review, though an internal summary can still mislead whoever reads it. Customer emails, record updates, price changes and refunds get prepared by the AI and approved by a person. Deleting data, moving money above a set limit and changing permissions stay outside the AI's permissions entirely, so the rule holds even when it misreads an instruction. Drawing those lines is most of the design work on an [AI agent](/ai-agent-development).

## What we did at an auction house

We built an operations system for an auction house where a vision model reads item photos and drafts the catalog title, description and keywords. A cataloger reviews each draft, asks for another try with feedback when it's off, and approves it into inventory. The model never publishes anything on its own, and if the AI provider is failing, the queue stops instead of retrying over and over.

The split worked because the slow part, writing copy for thousands of items, went to the model, and the judgment stayed with the person who knows the collection. The [auction house case study](/case-studies/auction-operations) has the full story.

## A review screen people can keep up with

The reviewer should be able to catch a mistake without redoing the work from scratch. Put what the AI used, the photo or the source document or the customer's message, right beside the draft. Make editing as easy as approving, so fixing a small slip isn't more effort than letting it through. And make the unusual items look unusual: a refund twice the normal size shouldn't sit in the queue looking like every other one.

Starting with more review than you need is fine. After a few weeks the approval records show which kinds of output a person almost never changes, and those can move to spot checks. The kinds that still get edited keep their checkpoint.

## One thing to do this week

Sit with the person who does the approving and ask them to show you a routine item and a hard one. If they can't see why the draft came out the way it did, or can't fix it without starting over, the review step needs work.

If you're planning an AI workflow and want a second opinion on where the checkpoints go, [get in touch](/contact).
