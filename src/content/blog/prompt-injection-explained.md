---
title: "Prompt injection: how to limit what a tricked AI can do"
image: ../../assets/blog/prompt-injection-explained-image.jpg
imageAlt: "An open blue envelope on off-white paper, with a dark thread leading from inside it to a stone key lying nearby."
cover: ../../assets/blog/prompt-injection-explained.png
description: "Hidden instructions in emails and documents can redirect AI tools. There's no complete fix, so limit what a tricked assistant can do."
pubDate: 2026-10-19
relatedPages: ["/ai-agent-development", "/mlops-services", "/rag-development"]
category: ai
---

A recruiting assistant reads a CV with a hidden line telling it to rank this applicant first. An operations assistant reads an email asking it to change an order's delivery address. Nobody on your team did anything wrong. They asked the AI to read something, and it had someone else's instructions in it.

That's prompt injection, and there's no complete fix for it yet. What you can control is how much damage the assistant could do if it followed the wrong instruction.

## Why the AI can't tell the difference

A language model gets one long stream of text. Your instructions sit in it next to whatever the user typed and whatever documents the system pulled in. The model has no reliable way to tell which parts to obey and which parts only to read. It decides by judgment, and judgment can be tricked.

OWASP describes two kinds. Direct injection is a user typing the attack into the chat box, trying to get your support bot to offer a discount it isn't allowed to give or say something embarrassing. On its own, that mostly risks your reputation.

Indirect injection is the serious one. The instructions arrive inside content the AI reads on someone's behalf: a web page, a PDF, an email, a calendar invite, a product review. They can be white text on a white background or tucked into a document's metadata, so the person using the tool never sees them.

## It gets worse once the AI can act

A chatbot that only replies can be made to say something wrong. An agent that can send email, edit records or call your systems can be made to do something wrong, with whatever permissions you gave it.

The combination to watch for is a tool that reads outside content, can see private data and can send information out, even through a link it shows. That mix lets an attacker's instructions pull your data out through the AI.

## Assume it will be fooled, and make that cheap

That's OWASP's guidance and our own practice. Give the AI the least access that does the job: an assistant that drafts replies doesn't need to send them. Have a person approve refunds, deletions, payments and messages to customers. Enforce permissions outside the model, so it only ever receives documents the person asking is allowed to see. If it never gets the confidential file, no hidden instruction can leak it. Check its output like any other input, try the attacks yourself before launch, and log what it does after.

The price is an assistant that does less on its own, with someone approving the expensive steps. We think that's worth paying. If you're still deciding how much freedom a process needs, see [choosing between an AI agent and plain automation](/blog/ai-agent-or-automation).

## One thing to do this week

Pick one AI feature you run and write down what it reads, what private data it can see and what it can do. If it reads outside content and can act, make sure the worst thing it can do alone is something you could live with.

If you'd like help working through that for an [AI agent](/ai-agent-development) you're building or already running, [get in touch](/contact).
