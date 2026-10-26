# LinkedIn: technical-debt-explained

## Post 1: native text

Technical debt is the extra work of changing software whose earlier design or shortcuts no longer fit. Ward Cunningham coined the metaphor in 1992. Martin Fowler puts it in money terms: the extra effort to add features is the interest.

Some of it's a sensible choice. Shipping a simpler version to see if customers want it can be right, if someone plans to pay it back. Most of it builds up without anyone deciding. The business changed and the software got bent to fit, its outside code fell years behind, or tests never got written.

You can spot it without reading code. Adding one form field becomes a two-week job. A routine release breaks a report nobody touched. Estimates keep growing, only one person understands part of the system, and updates get put off because the code feels unsafe to touch. Each can have other causes, but several at once usually mean debt.

A full rewrite is tempting, and usually the wrong first move. It freezes new work for months, and the new system has to rediscover every rule the old one handled.

Start where the system changes and breaks most, since debt in code nobody touches costs almost nothing. Write tests capturing what it does today, odd behavior included. Clean up the messy part a feature already touches, and set aside part of every cycle for maintenance.

Not technical? Ask your team which part they're most nervous about changing, and why. Then cost and rank the fixes they name.

## Post 2: carousel (~/Documents/Motown Carousels/technical-debt-explained.pdf)

Document title: Technical debt: questions for your team

Bring these to your next planning meeting if you approve engineering budgets but don't read code. Each answer gives you a specific fix to cost and rank, and the full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/blog/technical-debt-explained?utm_source=linkedin&utm_medium=social&utm_campaign=technical-debt-explained
