---
title: "Why an AI agent can get the task right and still cause trouble"
image: ../../assets/blog/ai-agent-harness-explained-image.jpg
imageAlt: "A stone sphere held in a blue leather and brass harness, tethered by one strap to an iron ring in a pale floor"
cover: ../../assets/blog/ai-agent-harness-explained.png
description: "The tools, permissions and checks around an AI model decide what happens when it makes a mistake. What to ask before connecting one to your business."
pubDate: 2026-09-05
relatedPages: ["/ai-agent-development"]
category: ai
---

Suppose an insurance broker asks an AI agent to sort incoming claims emails. Reading a policy number is useful, but it leaves some uncomfortable questions. Can the agent change the policy record? Who reviews a large claim? What happens when an attachment won't open?

Those decisions live in the software around the model, often called the agent harness. It gives the model tools, keeps track of the work and checks the results. Two products using the same model can behave very differently because of how that surrounding software is built.

## What an AI agent harness is

On its own, a language model takes text in and gives text back. It can't look up an order, send an email or check whether its answer was right. An agent is a model that can do those things, and the harness is the code that lets it.

The term is now common in the industry. Anthropic, for example, calls its Claude Agent SDK a "general-purpose agent harness" in its engineering write-up on [harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

The model reasons from what the harness gives it. The harness controls the available information and tools, when the work stops and how the result is checked.

## What a harness does

The details vary, but most harnesses handle the same jobs:

- Tools. These are the functions the agent can call, such as "look up customer", "draft refund" or "search the policy documents", each with its own permissions.
- The loop. The model picks a tool, the harness runs it and feeds the result back, and the model picks the next step. This repeats until the task is done or a limit is reached.
- Context. The harness chooses what goes in front of the model at each step: the task, the relevant records and earlier results. With too little, the model guesses. With too much, it loses track of the task.
- Memory between sessions. Long tasks outlast a single session, so the harness keeps notes on what's done and what's left. Anthropic describes a later session that would "see that progress had been made, and declare the job done" when it wasn't. Their fix was a progress file and a feature list that each new session treats as the source of truth.
- Checks. Tests, validation rules or a second model review the work before it counts.
- Limits. Step budgets, timeouts and approval points make a person confirm before anything expensive or irreversible happens.

## Why the harness decides agent quality

A production failure needs investigation beyond the model's answer. Check whether it received the right data, whether a tool returned an error, whether anything checked the result and whether it had a rule for stopping. Changing models will not necessarily repair those gaps.

In a follow-up article on [harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps), Anthropic notes that "agents reliably skew positive when grading their own work." Their answer was a separate evaluator agent that clicked through the running app the way a user would and rejected work that failed its criteria.

For the claims email example, test a case the agent cannot finish. A missing attachment or an unavailable policy system should lead to a defined stopping point or a handoff. Check the resulting record as well as the agent's reply.

## Does the harness matter more than the model?

For most business uses, it matters at least as much. Models improve every few months, and moving to a newer one is often a small change. Your business rules, permissions and checks live in the harness, and that work carries over from one model to the next.

Anthropic makes a related point: "every component in a harness encodes an assumption about what the model can't do on its own," and those assumptions "can quickly go stale as models improve." So a harness should be reviewed when the model changes. Review which scaffolding is still needed while keeping the checks that protect customers.

## What to look for around the model

For the task you want the agent to handle, look for:

- Scoped permissions that say what the agent may do alone, what needs approval and what it must never attempt.
- Tools limited to the access a person in that role would need.
- Step budgets, timeouts and a defined failure state, so the agent stops when it's stuck.
- An audit trail of every action, with its inputs and reasoning.
- Scored test runs against realistic scenarios, including the awkward ones, before the agent goes near a real inbox.

## Questions to ask about any AI agent

Whether you're buying an agent product or having one built, ask:

1. What tools can it use, and with whose permissions?
2. What does it do when it isn't sure?
3. Who checks its work, and is that check separate from the agent?
4. Can you see a log of every action it took?

Try these questions against one task your team wants an agent to handle. If nobody can explain what happens when a tool fails or the agent gets stuck, settle that before giving it access to a real inbox.
