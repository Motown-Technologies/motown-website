---
title: "AI agent or automation: how to tell which a process needs"
image: ../../assets/blog/ai-agent-or-automation-image.jpg
imageAlt: "A straight line of falling white dominoes on a blue floor, splitting into two branches at a single upright blue domino."
cover: ../../assets/blog/ai-agent-or-automation.png
description: "Many processes people want to put AI on need ordinary automation with one AI step. How to tell the rule steps from the judgment calls."
pubDate: 2026-10-12
relatedPages: ["/ai-agent-development", "/workflow-automation", "/business-process-automation"]
category: ai
---

A request to "put AI on" a process often hides a simpler job. Someone spends the day copying information, checking a few rules and chasing replies. It's worth pulling those apart before choosing a tool, because most of them don't need AI at all.

## Automation, agents and the option in between

Automation follows a path someone wrote in advance. An invoice arrives, it goes into the accounting system, and if it's over a limit it goes to a manager. You can test it, predict it and audit it.

An AI agent gets a goal and some tools and picks its own steps. Anthropic's engineering team draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), and recommends starting with the simplest thing that works. That matches where most of our scoping conversations end up.

The option people overlook sits in between: ordinary automation with one AI step inside it. The software runs the process, and a model handles the one part a rule can't, like reading a scanned form or sorting an email.

## A maintenance request, step by step

Say a property management company wants to "use AI for maintenance requests." Today a coordinator reads each tenant message, works out what's wrong, picks a vendor and books a visit.

- Logging the request and confirming receipt is automation.
- Turning "the thing under the sink is dripping again and the cabinet smells" into "plumbing, low urgency, unit 4B" is where a model helps.
- Choosing a vendor by trade and building is a rule.
- Booking the visit and telling the tenant is automation.
- A burst pipe at 2 a.m. goes to a person, or at least rings one.

That's one AI step. Handing the whole process to an agent would add cost and unpredictability and get you the same result.

An agent starts to make sense if the coordinator also does the chasing: checking the vendor's reply, rebooking when they decline, asking the tenant for photos, deciding when to escalate. Each of those cases takes a different path, and a fixed workflow struggles with that.

## What you give up is predictability

A rule that misfires does the same wrong thing every time, so you notice and fix it. A model can be right for weeks and then wrong in a way nobody predicted. Anything where a mistake means a refund issued, a record deleted or an email sent to a patient needs a person to approve it, whoever proposed it.

When an agent is the right call, its limits come before its tools: what it may do alone, what needs approval and what it must never attempt. It should get only the access the task requires, a step budget so it stops when it's stuck, and a record of its actions a person can read.

## One thing to do this week

Sit with the person who does the job today and write the process down, including the exceptions they handle without thinking. Mark each step "rule" or "judgment," then circle the judgment steps where a mistake would be expensive. The rule steps are your [automation](/workflow-automation). The judgment steps are where AI might help, and the circled ones keep a person's final say.

If your sheet points to an [agent](/ai-agent-development), or you'd like a second opinion on it, [tell us about the process](/contact).
