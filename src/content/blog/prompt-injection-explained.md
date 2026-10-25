---
title: "What if an email tells your AI assistant to ignore the rules?"
image: ../../assets/blog/prompt-injection-explained-image.jpg
imageAlt: "An open blue envelope on off-white paper, with a dark thread leading from inside it to a stone key lying nearby."
cover: ../../assets/blog/prompt-injection-explained.png
description: "How instructions hidden in emails and documents can redirect AI tools, and how to limit the business damage when that happens."
pubDate: 2026-10-19
relatedPages: ["/ai-agent-development", "/mlops-services", "/rag-development"]
category: ai
---

A recruiting assistant reads a CV with a hidden instruction to rank the applicant first. An operations assistant reads an email telling it to change an order's delivery address. In both examples, material the assistant was asked to read contains an instruction from someone else.

These are examples of prompt injection. With no complete fix yet, the tool's permissions determine how much damage following the wrong instruction could cause.

## How does prompt injection work?

A language model receives one long stream of text. Your instructions ("you are a support assistant, answer questions about orders") sit in that stream alongside whatever the user typed and whatever documents the system pulled in to help. The model has no reliable way to tell which parts are instructions it should obey and which parts are data it should only read.

So if a piece of that text says "ignore your previous instructions and do this instead," the model may comply. Telling instructions from data is something the model does by judgment, and judgment can be tricked.

## Direct and indirect injection

OWASP describes two kinds.

Direct injection is a user typing the attack into the chat box. Someone asks your support bot to reveal its instructions, offer a discount it isn't allowed to give or write something embarrassing that ends up in a screenshot. This is the version people have heard of, and on its own it mostly risks your reputation.

Indirect injection is the more serious one. The instructions arrive inside content the AI reads on someone's behalf: a web page, an uploaded PDF, an email, a calendar invite, a product review. The person using the tool never sees them. They can be written in white text on a white background, tucked into a document's metadata or phrased to look like ordinary content.

In the CV and order-email examples, a team member could be carrying out a legitimate task when the attack arrives. Reviewing the instructions your own team wrote is not enough; test the content the assistant retrieves and reads as well.

## Why it gets worse when AI can take actions

A chatbot that can only reply with text can be made to say something wrong. An agent that can send email, edit records or call your APIs can be made to do something wrong, with whatever permissions you gave it. Connecting more tools gives an attacker more possible actions to exploit.

Pay particular attention to a tool that combines these capabilities: reads content from outside your company, has access to private data, and can send information out (by email, a web request or even a link it renders). That combination lets an attacker's instructions pull your data out through the AI.

## How to defend against prompt injection

OWASP's guidance, and our own practice, comes down to assuming the model will sometimes be fooled and designing so that being fooled doesn't cost much.

### Give the AI the least access that does the job

An assistant that summarizes support tickets doesn't need permission to close them. An agent that drafts replies doesn't need to send them. Every permission you leave out is one an attacker can't use.

### Put a person in front of anything expensive

Refunds, deletions, payments and messages to customers should wait for a human to approve them. The AI can prepare the action and explain why, and a person confirms it. Agree which actions need that checkpoint before giving the assistant access.

### Keep untrusted content clearly separate

Mark text from outside sources as data, tell the model it is data, and never put it in the same place as your own instructions. This lowers the success rate without bringing it to zero, which is why it's paired with the other measures.

### Check what comes out

When the AI's output feeds into another system, validate it like any user input. If it should be a category from a fixed list, reject anything else. If it should never contain a link, strip links.

### Enforce permissions outside the model

A retrieval system should only fetch documents the person asking is allowed to see, checked in code at query time. If the model never receives the confidential file, no injected instruction can make it leak that file. Test those boundaries with users who have different access rights.

### Test with attacks, and keep testing

Before launch, try the attacks yourself: hidden instructions in documents, emails written to hijack the agent, requests to reveal the system prompt. After launch, log what the AI did and why, and watch for unusual behavior. If you're still deciding how much autonomy a process needs, our post on [choosing between an AI agent and plain automation](/blog/ai-agent-or-automation) covers that.

## What to ask before you launch

For any AI feature, list what it reads, what private data it can see and what actions it can take. If it reads outside content and can act, assume someone will try to steer it, and make sure the worst action it can take on its own is one you could live with.
