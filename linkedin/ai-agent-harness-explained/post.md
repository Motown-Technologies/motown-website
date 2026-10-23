# LinkedIn: ai-agent-harness-explained

## Post 1: native text

Two AI agents built on the same model can behave very differently. The difference is usually the harness, the software around the model.

The model does the reasoning. The harness decides what it sees, which tools it can call, what it's allowed to change, when it stops and what counts as finished.

When an agent fails in production, the model is seldom the main cause. More often:

• It had access to the wrong data, or to too much.
• A tool returned an error it couldn't interpret.
• Nothing checked the result.
• There was no rule for when to stop, so it kept trying.

Checks matter most. Anthropic's engineering team wrote that agents reliably rate their own work too highly. Their fix was a separate evaluator that used the app the way a person would and rejected work that failed. Whatever you build, something other than the agent should check its work.

The harness is also the part you keep. Models improve every few months and swapping one in is often a small change. Your permissions, business rules, approval points and audit trail live in the harness and carry over.

Before you buy or build an agent, ask four things. What tools can it use, and with whose permissions? What does it do when it isn't sure? Who checks its work? Can you see a log of every action?

Vague answers usually point to a weak harness, whatever model is inside.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/ai-agent-harness-explained.pdf)

Document title: What an AI agent harness is, and why it decides quality

The software around the model decides whether an agent is safe to use. Here is what a harness does and what to ask before you trust one. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/ai-agent-harness-explained?utm_source=linkedin&utm_medium=social&utm_campaign=ai-agent-harness-explained
