# LinkedIn: technical-debt-explained

## Post 1: native text

Engineers feel technical debt every day. The business pays for it.

Technical debt is the extra cost of changing software that was built faster or more simply than what you now ask of it. You pay it like interest: every new feature takes longer, and breaks more, than it would in a cleaner system.

You don't need to read code to spot it:

• Adding one field to a form turns into a project.
• Every release breaks something unrelated.
• Only one person understands part of the system, and everyone waits for them.
• Library updates keep getting postponed because the code feels unsafe to touch.
• New engineers take months to ship anything.

A full rewrite is tempting and usually the wrong first move. It freezes new work for months, and the new system has to rediscover every rule the old one handled.

What works better is steadier. Find the parts that change and break most often, because debt in code nobody touches costs almost nothing. Write tests around what the system does today. Clean up the messy code a feature already touches. Reserve part of every cycle for maintenance so it happens before it's urgent.

If you're not technical, ask your team one question: which part of the system are you most nervous about changing, and why? The answer is usually where the debt is.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/technical-debt-explained.pdf)

Document title: Technical debt, explained for the people who pay for it

What technical debt is, how to spot it without reading code, and how to pay it down without stopping everything for a rewrite. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/technical-debt-explained?utm_source=linkedin&utm_medium=social&utm_campaign=technical-debt-explained
