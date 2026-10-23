---
title: "Human in the loop AI: where a person should sign off"
image: ../../assets/blog/human-in-the-loop-ai-image.jpg
imageAlt: "A train of off-white toy carriages stopped on a curving track in front of a raised black signal arm on a blue floor"
cover: ../../assets/blog/human-in-the-loop-ai.png
description: "Where to put a person in an AI workflow: before anything irreversible, costly or customer-facing, with a review step people can actually keep up with."
pubDate: 2026-11-18
relatedPages: ["/ai-agent-development", "/case-studies/auction-operations"]
category: ai
---

Put a person in the loop wherever the AI's output becomes something hard to undo: money moving, a message reaching a customer, a record changing in a system other people rely on. Let the AI do the reading, sorting and drafting, and have someone approve before any of that takes effect.

That rule covers most cases. The hard part is placing the checkpoint so it catches real mistakes without turning a person into a rubber stamp.

## Why AI workflows need a checkpoint

Ordinary software fails loudly. A form throws an error, a payment is declined. A language model fails differently: it gives an answer that reads well and is wrong, with the same confidence it uses when it's right. You can't tell the two apart from the tone.

So the question to ask is what happens if this output is wrong and nobody looks. If the answer is "someone rewrites a draft," the cost is small. If it's "a refund goes out" or "a patient gets the wrong instructions," a person needs to see it first.

## Where to put the person

We sort every action an AI system can take into three groups.

### Things it can do alone

Reading documents, searching, summarising, tagging, sorting a queue and drafting text that nobody outside sees yet. If the output is wrong, nothing has happened, and the person who uses it later will notice.

### Things it prepares and a person approves

Sending an email to a customer, updating a record, changing a price, issuing a refund, filing anything official. The AI does the work up to the last step, and a person reads the result and presses the button.

### Things it never does

Deleting data, moving money above a set limit, changing permissions, anything with legal weight. Here the AI can suggest, but the action sits outside its reach entirely. The permissions it is given enforce that, so the rule holds even when the model misreads an instruction.

Drawing those lines takes most of the design work on an [AI agent](/ai-agent-development), and the answer differs for every action. The same agent might file tickets alone, need sign-off to reply to a customer, and have no access to the billing system at all.

## An example from our own work

We built an operations system for an auction house where a vision model reads item photos and drafts the catalog title, description and keywords. A cataloger reviews each draft, regenerates it with feedback when it's off, and approves it into real inventory. The model never publishes anything on its own.

That split worked because the slow part, writing copy for thousands of items, went to the model, and the judgment call stayed with the person who knows the collection. The full story is in the [auction house case study](/case-studies/auction-operations).

## Make the review step something people can keep up with

A checkpoint only helps if the person at it is paying attention. Show someone a hundred near-identical approvals a day and they'll start clicking through. That's a design problem, and it has design fixes:

- Show the reviewer what the AI used to reach its answer, such as the source document, the photo or the customer's original message, next to the draft.
- Make editing as easy as approving, so fixing a small mistake doesn't feel like more work than letting it through.
- Highlight what's unusual. A refund twice the normal size or a draft that contradicts the source should look different from the routine ones.
- Batch the routine items and slow down the risky ones.

Regulators are starting to write this down. The EU AI Act's [article on human oversight](https://artificialintelligenceact.eu/article/14/) says people overseeing high-risk AI systems should be able to understand the system's limits, watch for over-reliance on its output, override it, and stop it. Most business tools aren't classed as high-risk, but it's a useful checklist either way.

## Keep a record and a way to stop

Every action the AI takes, or proposes, should be logged with what it was given and what it produced. When something odd happens, you want to reconstruct exactly what the system saw and who approved what.

You also need a way to stop it. That can be a switch an operator flips, a spending limit, or a rule that halts the queue when errors pile up. In the auction system, if the AI provider is failing, a circuit breaker stops the queue instead of retrying over and over.

## Move the line as trust builds

Starting with more review than you need is fine. After a few weeks, the approval records tell you which kinds of output a person almost never changes. Those are candidates to let through on their own, perhaps with spot checks. The kinds that still get edited keep their checkpoint.

We'd rather loosen a checkpoint with evidence than discover one was missing after a mistake reached a customer.

If you have a process you'd like AI to help with, describe it the way you'd explain it to a new hire and [send it to us](/contact). We'll tell you what an AI system can safely own and where a person should sign off.
