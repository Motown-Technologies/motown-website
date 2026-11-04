# LinkedIn: staging-environment-explained

## Post 1: native text

If the only places your team can try a change are a developer's laptop and the live app, you're missing a step. It's called staging.

A laptop often runs a different database, has settings found nowhere else and talks to stand-ins for the payment or accounting tools. The live app puts your customers in the experiment.

A staging environment is a private copy of your app, as close to the live one as you can afford. Only your team sees it, and changes go there first.

Say a clinic's booking app gets a new reminder feature. On the laptop it sends one test text. On staging, loaded with realistic appointments and on the text provider's test mode, it sends every reminder twice. That's a ten-minute fix on staging. On the live app, it's an apology to every patient.

It's also where the people who use the software sign off. Your operations lead clicks through the new flow and whoever asked for the report checks the numbers, before Monday morning.

On a donation platform we're building, staging updates automatically. The live site updates only when someone deliberately marks a version for release, so going live names exactly what ships.

If more than a few people rely on the app, or it takes payments, holds customer records or connects to other systems, it needs staging. A prototype nobody relies on yet can wait.

## Post 2: carousel (~/Documents/Motown Carousels/staging-environment-explained.pdf)

Document title: Does your staging match production? A checklist

Go through this with your developer to see how close your staging copy really is to the live app, because one that's drifted gives false confidence. The full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/go/staging-environment-explained
