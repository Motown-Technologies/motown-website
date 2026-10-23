---
title: "What technical due diligence checks before a raise or sale"
image: ../../assets/blog/technical-due-diligence-explained-image.jpg
imageAlt: "A jeweler's loupe next to a white cube on a blue surface"
cover: ../../assets/blog/technical-due-diligence-explained.png
description: "What a technical due diligence checks before a raise or an acquisition, explained for founders and investors who don't read code."
pubDate: 2026-10-16
relatedPages: ["/technical-due-diligence"]
category: software
---

A technical due diligence checks six things before an investment or acquisition closes: architecture, code quality, security, infrastructure and cost, key-person risk, and IP and licensing. Whoever does the reading, whether an investor's engineer, an acquirer's team or an enterprise buyer's security reviewer, writes up what they find, and that report affects the price.

We run that same read as a two-week audit with a fixed scope, and we look where a buyer's reviewer would look, so nothing in their report comes as news to you.

## Six areas we examine

### Architecture

The question is whether the system can absorb the next 18 months of the roadmap. Some plans assume a rewrite that nobody has budgeted for, and this is where that shows up.

### Code quality

We check test coverage in the places it matters and how consistent the code is. The practical test is how much of the codebase a new engineer could safely change in their first month.

### Security

We look at sign-in, access control, how secrets are stored, what data is exposed and which dependencies carry known vulnerabilities. Security findings are the ones most likely to stall a deal at the worst moment.

### Infrastructure and cost

We work out what the platform costs to run today, what it would cost at ten times the load, and which line items grow in ways nobody has modelled.

### Team and key-person risk

Some systems are understood by only one person. We find those, note what is undocumented, and ask what would happen if that person resigned in the middle of a raise. For a view of a handover from the receiving end, we wrote about [inheriting a codebase that still works](/blog/inherited-codebase).

### IP and licensing

We check who owns the code, whether contractor agreements actually assign it to the company, and whether any dependency carries a licence an acquirer won't accept. Contractor-built code with no assignment on file is one of the gaps we look for, along with an inventory of every dependency's licence.

## What you get at the end

The audit produces five documents, all written to be forwarded:

- A findings report in plain language, with evidence attached.
- A risk register, ranked by likelihood and by impact on the deal.
- A remediation plan covering what to fix, in what order and at what cost.
- A cost model for the run-rate today and under projected growth.
- A one-page summary for the data room, written for investors.

Every finding carries its evidence, an estimated cost to fix and a plain sentence explaining why it matters to someone who isn't an engineer.

## Why timing matters

The same finding lands differently depending on who finds it. A problem you disclose becomes a line item. If the other side's engineer finds it in week three of the raise, it becomes leverage in their negotiation and usually a discount. A promise to fix something after close gets priced into your valuation.

Finding it first gives you the choice. You can fix it beforehand, or disclose it on your own terms with a costed plan already attached.

## When to run one

If you're the founder, run the audit four to six weeks before you open a data room. That leaves time to fix what's cheap, put a cost on what isn't, and go into diligence with the answers already written. If nobody on your team can own the fixes, that is the kind of gap a [fractional CTO](/blog/fractional-cto-for-startups) covers. Buyers often ask for a SOC 2 report as well, which we cover under [SOC 2 readiness](/soc-2-readiness).

If you're the investor, we run the same audit on a company you're considering and report to you. You get the architecture, the risks, the cost to fix them and a read on how much of the roadmap the current system can carry.

The full scope is on our [technical due diligence](/technical-due-diligence) page. If a raise or an acquisition is coming up, [book an audit](/contact).
