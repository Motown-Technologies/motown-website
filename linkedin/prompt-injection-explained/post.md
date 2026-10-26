# LinkedIn: prompt-injection-explained

## Post 1: native text

Prompt injection is when someone hides instructions for your AI inside something it's reading.

A CV hides a line telling a recruiting assistant to rank that applicant first. An email tells an operations assistant to change an order's delivery address. The AI takes in your instructions and that text as one stream, and can't reliably tell which part to obey.

The hidden part can be white text on white or tucked in a file's details, so whoever's using the tool never sees it. Whoever forwarded the email was just doing their job.

There's no complete fix yet, so we plan for the AI being fooled and make that cheap:

• Give it the least access the job needs. If it drafts replies, it doesn't need to send them.
• Have a person approve refunds, deletions, payments and customer messages.
• Enforce permissions in code, outside the AI. If it never gets the confidential file, it can't leak it.
• Check its output like any other user input.
• Try the attacks yourself before launch, and log what the AI does after.

Be most careful when one tool reads outside content, sees private data and can send things out, even through a link it shows. That mix lets an attacker pull your data out.

For each AI feature, jot down what it reads, what private data it sees and what it can do. If it reads outside content and can act, make sure the worst it can do alone is something you can live with.

## Post 2: carousel (~/Documents/Motown Carousels/prompt-injection-explained.pdf)

Document title: Prompt injection: audit your AI feature

If an AI tool you run reads email, documents or web pages, go through these six questions before you give it more access. The full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/go/prompt-injection-explained
