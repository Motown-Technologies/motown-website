---
title: "What to own when a contractor builds your software"
image: ../../assets/blog/what-to-own-when-a-contractor-builds-your-software-image.jpg
imageAlt: "A giant blue key ring holding several brass and steel keys on a pale stone surface, with one small key lying apart"
cover: ../../assets/blog/what-to-own-when-a-contractor-builds-your-software.png
description: "The code, repository, cloud accounts, domain, credentials and documentation your company should own before a contractor writes any code."
pubDate: 2026-10-05
relatedPages: ["/mvp-development", "/technical-due-diligence", "/dedicated-development-team"]
category: software
---

The contractor is leaving, or a payment is in dispute, or an investor asks who owns the code. That's usually when a company finds out the repository, the hosting account or even the domain sits in someone else's name.

Most of these problems are set up in the first week, when the quickest way to start is for the developer to use accounts they already have. Our advice: open every account in your company's name before work starts, and give the contractor access you can remove later. It makes the first week a little slower. Untangling it later is much slower.

## The code is not automatically yours

Paying for software doesn't make you the copyright owner. Under US law, commissioned work only counts as "work made for hire" if it falls into one of nine listed categories and both sides sign a written agreement saying so, as the US Copyright Office's [circular on works made for hire](https://www.copyright.gov/circs/circ30.pdf) explains. Custom software often doesn't fit, which is why development contracts usually include a clause assigning the intellectual property to the client.

Check that yours has one, that it covers subcontractors, and that it's signed. This is general information, so have a lawyer review the contract itself. Contractor code with no assignment on file is one of the gaps a [technical due diligence](/technical-due-diligence) looks for before a raise or a sale.

## The accounts are where the risk sits

The repository should live in a GitHub or GitLab organization your company created, with the contractor as a member. A zip of the finished code leaves out the history of who changed what and why, which is what the next engineer uses to understand it. If the repository is already in the contractor's account, it can be moved, and [GitHub's transfer guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) confirms the history moves with it.

Hosting accounts like AWS, Google Cloud or Azure should be billed to your card, with the owner login on a company email more than one person can reach, and two-factor turned on. The contractor gets their own user, which you remove when they leave.

The domain should be registered to your company at a registrar where you hold the login. If a web developer registered it in their own name, you may not be able to change it without them, and your email probably depends on it.

The same goes for the payment processor, the email and SMS services, and the Apple and Google developer accounts for a mobile app. Keep their passwords and keys in a company password manager, and change the keys when someone leaves.

## The handover should include how to run it

Make documentation part of the agreed handover: how to run the software on a new machine, how to deploy a change, where each secret is stored, and which outside services it uses. We wrote about receiving that handover in [taking over someone else's codebase](/blog/inherited-codebase).

## One thing to check this week

Look up your domain with ICANN's lookup tool and see whose name is on it as the [registrant](https://www.icann.org/registrants). If it's not your company's, start there, while the person who registered it still answers your emails. If you're about to hire a contractor and want the setup done right, [talk to us](/contact).
