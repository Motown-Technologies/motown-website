---
title: "AI agent or plain automation: which your process needs"
image: ../../assets/blog/ai-agent-or-automation-image.jpg
imageAlt: "A straight line of falling white dominoes on a blue floor, splitting into two branches at a single upright blue domino."
cover: ../../assets/blog/ai-agent-or-automation.png
description: "How to tell whether a process needs an AI agent or ordinary automation, and why most processes need far less AI than the pitch suggests."
pubDate: 2026-10-12
relatedPages: ["/ai-agent-development", "/workflow-automation", "/business-process-automation"]
category: ai
---

If you can write the steps down and they come out the same every time, you need automation. An AI agent earns its place only when the next step depends on reading something messy, such as an email, a document or a request in someone's own words, and deciding what to do about it.

Most processes we're asked to "put AI on" are the first kind with a little of the second mixed in. Working out which parts are which is the most useful hour you'll spend before building anything.

## What's the difference between an AI agent and automation?

Automation follows a path someone wrote in advance. When an invoice arrives, it goes into the accounting system. If the amount is over a limit, it's routed to a manager. The software never decides anything you didn't decide for it, which is why you can test it, predict it and audit it.

An AI agent is given a goal and a set of tools and chooses its own steps. Anthropic's engineering team puts the line in a useful place in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): in a workflow, a language model is used inside steps that code has laid out, while an agent directs its own process and decides which tools to use. The same piece recommends starting with the simplest thing that works and adding complexity only when it's needed. We agree, and most of our scoping conversations end up there.

Between the two sits a middle option that gets overlooked: ordinary automation with a single AI step inside it. The software runs the process, and a model handles the one part a rule can't, such as reading a scanned form or sorting an email into a category.

## Questions that decide it

### Can you write the rules down?

Ask the person who does the job today to explain it. If the answer is a list of conditions ("if the customer is in Florida and the order is over $500, it goes to Maria"), that's automation. If the answer keeps turning into "it depends, you just have to read it," that part is a candidate for AI.

### How varied are the inputs?

Structured inputs (a form, a CSV export, a row in a database) almost never need a model. Free text, photos and documents in a hundred layouts often do. Even then, the model usually only needs to turn the messy input into structured data. Everything after that can be plain code.

### What does a mistake cost?

A rule that misfires does the same wrong thing every time, so you notice and fix it. A model can be right for weeks and then wrong in a way nobody predicted. If an error means a refund issued, a record deleted or an email sent to a patient, that action needs a person to approve it, whoever proposed it.

### Does the path change from case to case?

This is the real test for an agent. If handling a case means looking something up, deciding what to look up next based on the answer, and repeating until the case is resolved, a fixed workflow will struggle and an agent may be the right tool. If the path is the same five steps with different data, it isn't.

## A worked example

Say a property management company wants to "use AI for maintenance requests." Tenants send messages through a portal, and today a coordinator reads each one, works out what's wrong, picks a vendor and books a visit.

Broken into parts:

- Logging the request, assigning it a number and confirming receipt is automation. No model needed.
- Reading "the thing under the sink is dripping again and the cabinet smells" and turning it into "plumbing, low urgency, unit 4B" is the part where a model helps.
- Choosing a vendor from a list by trade and building is a rule.
- Booking the visit and notifying the tenant is automation.
- Deciding whether a burst pipe at 2 a.m. means calling an emergency plumber is where a person stays in the loop, or at least gets a phone call.

That's one AI step inside a workflow. Calling it an agent would add cost and unpredictability without changing the result.

An agent starts to make sense if the coordinator's job also involves chasing: checking the vendor's reply, rescheduling when they decline, asking the tenant for photos when the description is vague, and deciding when to escalate. Each case takes a different path, and that's the kind of work agents do well, given limits.

## If you do need an agent

When an agent is the right call, most of the design work goes into limits. We decide what it may do on its own, what needs a person's approval and what it must never attempt. It gets the same permissions a person in that role would get, a budget of steps so it can't loop forever, and a log of every action with the inputs that prompted it. Our [AI agent development](/ai-agent-development) page covers how we set those boundaries.

When it isn't, the job is to encode the process so it stops depending on one person remembering the order of things. That's [workflow automation](/workflow-automation), and for processes that cross several systems, [business process automation](/business-process-automation).

## Where to start

Write the process down step by step, mark each step "rule" or "judgment," and circle the judgment steps where a mistake would be expensive. The rule steps are your automation. The judgment steps are where AI might help, and the circled ones are where a person keeps the final say.

If you'd like a second opinion on which parts are which, [send us the process](/contact) as it runs today.
