# LinkedIn: prompt-injection-explained

## Post 1: native text

If an AI tool reads your email, someone outside your company can write instructions for it.

That's prompt injection. A CV hides a line telling a recruiting assistant to rank the applicant first. An email tells an operations assistant to change a delivery address. The AI takes in your instructions and that text as one stream, and can't reliably tell which part to obey. The hidden part can be white text on white, so whoever's using the tool never sees it.

There's no complete fix yet, so we plan for the AI being fooled and make that cheap:

• Give it the least access the job needs. If it drafts replies, it doesn't need to send them.
• Have a person approve refunds, deletions, payments and customer messages.
• Enforce permissions outside the AI. If it never gets the confidential file, it can't leak it.
• Try the attacks yourself before launch, and log what it does after.

Be most careful when one tool reads outside content, sees private data and can send things out, even through a link it shows.

The price is an assistant that does less on its own. We think that's worth paying.

For one AI feature you run, jot down what it reads, what it can see and what it can do. If it reads outside content and can act, make sure the worst it can do alone is something you can live with.

## Post 2: carousel (~/Documents/Motown Carousels/prompt-injection-explained.pdf)

Document title: Prompt injection: audit your AI feature

If an AI tool you run reads email, documents or web pages, go through these six questions before you give it more access. The full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/go/prompt-injection-explained
