---
title: "Does this process need AI, or just better automation?"
image: ../../assets/blog/ai-agent-or-automation-image.jpg
imageAlt: "A straight line of falling white dominoes on a blue floor, splitting into two branches at a single upright blue domino."
cover: ../../assets/blog/ai-agent-or-automation.png
description: "How to separate the repetitive work from the judgment calls before adding AI to a business process."
pubDate: 2026-10-12
relatedPages: ["/ai-agent-development", "/workflow-automation", "/business-process-automation"]
category: ai
---

A request to "put AI on" a process can hide a much simpler problem: someone spends the day copying information, checking a few rules and chasing replies. It helps to separate those jobs before choosing a tool.

If the steps are known and the same conditions produce the same result, ordinary automation is a good starting point. AI may help with the part that involves reading a messy email or document. An agent becomes worth considering when each answer changes what needs to happen next.

## What's the difference between an AI agent and automation?

Automation follows a path someone wrote in advance. When an invoice arrives, it goes into the accounting system. If the amount is over a limit, it's routed to a manager. The software never decides anything you didn't decide for it, which is why you can test it, predict it and audit it.

An AI agent is given a goal and a set of tools and chooses its own steps. Anthropic's engineering team distinguishes the two in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): in a workflow, a language model is used inside steps that code has laid out, while an agent directs its own process and decides which tools to use. The same piece recommends starting with the simplest thing that works and adding complexity only when it's needed. That matches where most of our scoping conversations end up.

Between the two sits a middle option that gets overlooked: ordinary automation with a single AI step inside it. The software runs the process, and a model handles the one part a rule can't, such as reading a scanned form or sorting an email into a category.

## Questions that decide it

### Can you write the rules down?

Ask the person who does the job today to explain it. If the answer is a list of conditions ("if the customer is in Florida and the order is over $500, it goes to Maria"), that's automation. If the answer keeps turning into "it depends, you just have to read it," that part is a candidate for AI.

### How varied are the inputs?

Structured inputs (a form, a CSV export, a row in a database) almost never need a model. Free text, photos and documents in a hundred layouts often do. Even then, the model usually only needs to turn the messy input into structured data. Everything after that can be plain code.

### What does a mistake cost?

A rule that misfires does the same wrong thing every time, so you notice and fix it. A model can be right for weeks and then wrong in a way nobody predicted. If an error means a refund issued, a record deleted or an email sent to a patient, that action needs a person to approve it, whoever proposed it.

### Does the path change from case to case?

Look at whether the next step changes with each case. If handling a case means looking something up, deciding what to look up next based on the answer, and repeating until the case is resolved, a fixed workflow will struggle and an agent may be the right tool. If the path is the same five steps with different data, it isn't.

## A worked example

Say a property management company wants to "use AI for maintenance requests." Tenants send messages through a portal, and today a coordinator reads each one, works out what's wrong, picks a vendor and books a visit.

The work breaks down like this:

- Logging the request, assigning it a number and confirming receipt is automation. No model needed.
- Reading "the thing under the sink is dripping again and the cabinet smells" and turning it into "plumbing, low urgency, unit 4B" is the part where a model helps.
- Choosing a vendor from a list by trade and building is a rule.
- Booking the visit and notifying the tenant is automation.
- Deciding whether a burst pipe at 2 a.m. means calling an emergency plumber is where a person stays in the loop, or at least gets a phone call.

That workflow has one AI step. Giving an agent control of the whole process would add cost and unpredictability without changing the result.

An agent starts to make sense if the coordinator's job also involves chasing: checking the vendor's reply, rescheduling when they decline, asking the tenant for photos when the description is vague, and deciding when to escalate. Those cases take different paths, which can justify giving an agent more control, within agreed limits.

## If you do need an agent

When an agent is the right call, decide its limits before connecting tools. Write down what it may do alone, what needs approval and what it must never attempt. Give it only the access the task requires, a step budget so it stops when stuck, and a record of actions that a person can inspect.

For the rule-based parts, document the process with the person doing it today. Include the exceptions they handle without thinking. Those details are needed even when no AI is involved.

## Where to start

Write the process down step by step, mark each step "rule" or "judgment," and circle the judgment steps where a mistake would be expensive. The rule steps are your automation. The judgment steps are where AI might help, and the circled ones are where a person keeps the final say.
