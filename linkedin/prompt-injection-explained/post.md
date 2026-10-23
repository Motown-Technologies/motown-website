# LinkedIn: prompt-injection-explained

## Post 1: native text

If your AI assistant reads email, documents or web pages, anyone who can write one of those can try to give it orders.

That's prompt injection. A language model receives your instructions and the content it's reading as one stream of text, and it has no reliable way to tell which part is an instruction and which part is data. OWASP lists it first in its Top 10 for LLM Applications 2025.

Say an operations team has an agent that reads incoming email and can update orders. Someone sends an email that tells it to change the delivery address on an open order. Nobody on the team typed anything malicious, and the agent may still do it.

There's no complete fix yet. The defense is to make being fooled cheap:

• Give the AI the least access that does the job. An assistant that drafts replies doesn't need to send them.
• Put a person in front of refunds, deletions, payments and messages to customers.
• Enforce permissions in code, outside the model. If it never receives the confidential file, it can't leak it.
• Validate what comes out like any other user input.
• Try the attacks yourself before launch, and log what the AI does after.

A good question for any AI feature: what does it read, what can it see, and what can it do? If it reads outside content and can act, make sure the worst thing it can do alone is something you could live with.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/prompt-injection-explained.pdf)

Document title: Prompt injection, explained for business owners

What prompt injection is, why it matters most once AI can take actions, and the design choices that limit the damage. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/prompt-injection-explained?utm_source=linkedin&utm_medium=social&utm_campaign=prompt-injection-explained
