---
title: "AI agent harness: what to check before it touches real work"
image: ../../assets/blog/ai-agent-harness-explained-image.jpg
imageAlt: "A stone sphere held in a blue leather and brass harness, tethered by one strap to an iron ring in a pale floor"
cover: ../../assets/blog/ai-agent-harness-explained.png
description: "The tools, permissions and checks around an AI model decide what happens when it makes a mistake. What to ask before you connect one to your business."
pubDate: 2026-09-05
relatedPages: ["/ai-agent-development"]
category: ai
---

Say an insurance broker wants an AI agent to sort the claims emails that land every morning. Before it goes live, someone asks the awkward questions. Can it change the policy record? Who looks at a large claim before anything happens? What does it do when an attachment won't open?

The model doesn't answer any of those. The software around it does, and that software is usually called the agent harness. Two products built on the same model can behave nothing alike because of it.

## What the harness does

On its own, a language model takes text in and gives text back. It can't look up an order, send an email or check its own answer. The harness gives it tools, each with its own permissions, and runs the loop: the model picks a step, the harness carries it out and reports back, and that repeats until the job is done or a limit is hit. The harness also chooses what the model sees at each step, keeps notes when a task runs longer than one session, and decides when a person has to approve something first.

Anthropic calls its Claude Agent SDK a "general-purpose agent harness" in its write-up on [harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents). In the same piece it describes a later session that would "see that progress had been made, and declare the job done" when it wasn't. Their fix was a progress file that each new session treats as the source of truth.

## Checks are the part to get right

In a follow-up on [harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps), Anthropic notes that "agents reliably skew positive when grading their own work." Their answer was a separate evaluator that clicked through the running app the way a user would and rejected work that failed its criteria.

If we had to pick one thing to get right, it would be this. When an agent goes wrong in production, look past its answer. Did it get the right data? Did a tool return an error it couldn't read? Did anything check the result? Did it know when to stop? A newer model won't necessarily fix any of that.

## The harness is the part you keep

Models improve every few months, and moving to a newer one is often a small change. Your permissions, business rules and checks live in the harness and carry over. The tradeoff is that the harness needs a review when the model changes. As Anthropic puts it, "every component in a harness encodes an assumption about what the model can't do on its own," and those assumptions "can quickly go stale as models improve." Drop the scaffolding a better model no longer needs, and keep the checks that protect customers.

## Questions to ask about any agent

Whether you're buying an agent or having one built:

1. What tools can it use, and with whose permissions?
2. What does it do when it isn't sure?
3. Who checks its work, and is that check separate from the agent?
4. Can you see a log of every action it took?

This week, pick one task your team wants an agent to handle and give it a case it can't finish, like a missing attachment or a policy system that's down. It should stop at a set point or hand off to a person. Check the record it left as well as its reply. If nobody can say what happens next, settle that before it gets near a real inbox.

Our [AI agent development](/ai-agent-development) page covers how we build agents. If you're weighing one for your business, [tell us about the task](/contact).
