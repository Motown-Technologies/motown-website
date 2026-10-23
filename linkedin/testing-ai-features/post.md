# LinkedIn: testing-ai-features

## Post 1: native text

The usual test for an AI feature is someone trying a few questions and deciding it looks fine. That's how it passes the demo and fails on the first odd thing a customer types.

AI features need a different kind of test. The same input can give a different answer each time, a wrong answer looks as confident as a right one, and nothing crashes. The feature also changes without anyone touching your code, whenever a provider updates a model or someone tweaks a prompt.

The fix is an eval: a fixed set of realistic examples, a way to grade every answer the same way, and a score you track over time.

Say a dental group is adding an assistant for appointment and insurance questions. A first test set would include:

• Common questions, phrased the way patients phrase them, typos included.
• Questions it should decline, such as anything needing a clinician.
• Questions that look alike but need different answers.
• Messages that try to make it ignore its instructions.
• Every real mistake after launch, added so it can't come back unnoticed.

Grade with code where the answer is a category or a number, with a second model against a written rubric for open-ended answers, and with people for the rest.

Then use the eval as a gate. Every prompt, model or data change runs the full set, and anything that makes the score worse doesn't ship.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/testing-ai-features.pdf)

Document title: How to test an AI feature before customers do

What an eval is, what goes in the test set and how to grade it, so a prompt or model change can't make your AI feature worse without anyone noticing. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/testing-ai-features?utm_source=linkedin&utm_medium=social&utm_campaign=testing-ai-features
