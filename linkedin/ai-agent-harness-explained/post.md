# LinkedIn: ai-agent-harness-explained

## Post 1: native text

Two AI agents on the same model can behave nothing alike. The difference is the harness, the software around the model that decides what it can see, use and change.

Say an insurance broker wants an agent to sort claims emails. Reading the policy number is the easy part. Can it change the policy record? Who looks at a big claim? What if an attachment won't open? None of that comes from the model.

When an agent goes wrong, look past its answer. Did it get the right data? Did a tool fail in a way it couldn't read? Did anything check the result? Did it know when to stop? A newer model won't necessarily fix any of that.

Checks are the part we'd get right first. Anthropic's engineering team wrote that agents "reliably skew positive when grading their own work." Their fix was a separate checker that clicked through the running app like a user would and rejected work that failed.

The harness is also the part you keep. Models improve every few months, and your permissions, business rules and checks carry over to the next one.

If you've got an agent running, give it a case it can't finish, like a missing attachment or a policy system that's down. It should stop at a set point or hand off to a person. Check the record it left as well as its reply.

## Post 2: carousel (~/Documents/Motown Carousels/ai-agent-harness-explained.pdf)

Document title: Questions to ask before you trust an AI agent

If someone's pitching you an AI agent, or your team wants to build one, ask these before it touches real work. They're all about the software around the model, and the link's in the comments.

## First comment (both posts)

https://motowntech.com/go/ai-agent-harness-explained
