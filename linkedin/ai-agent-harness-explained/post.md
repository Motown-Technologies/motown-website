# LinkedIn: ai-agent-harness-explained

## Post 1: native text

Two AI agents on the same model can behave nothing alike. The difference is usually the harness, the software around the model.

The model does the thinking. The harness decides what it sees, which tools it can use, what it's allowed to change, when it stops and how its work gets checked.

An insurance broker wants an agent to sort incoming claims emails. Reading a policy number is easy. Can it change the policy record? Who looks at a big claim? What if an attachment won't open? That's all harness.

When an agent goes wrong, look past the model's answer. Did it get the right data? Did a tool throw an error it couldn't read? Did anything check the result? Did it know when to stop? A newer model won't necessarily fix any of that.

Checks matter most. Anthropic's engineering team wrote that agents "reliably skew positive when grading their own work." Their fix was a separate checker that clicked through the running app like a user would and rejected work that failed.

The harness is also the part you keep. Models improve every few months and swapping one in is often a small change. Your permissions, business rules and checks carry over.

If you've got an agent running, give it a case it can't finish, like a missing attachment or a policy system that's down. It should stop at a set point or hand off to a person. Check the record it left, as well as its reply.

## Post 2: carousel (~/Documents/Motown Carousels/ai-agent-harness-explained.pdf)

Document title: Questions to ask before you trust an AI agent

If someone's pitching you an AI agent, or your team wants to build one, ask these before it touches real work. They're all about the software around the model, and the link's in the comments.

## First comment (both posts)

https://motowntech.com/blog/ai-agent-harness-explained?utm_source=linkedin&utm_medium=social&utm_campaign=ai-agent-harness-explained
