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

When a contractor builds your software, your company should own the code and its copyright, the code repository, the cloud and hosting accounts, the domain name, every credential and the documentation. Set them up in your company's name before work starts and give the contractor access, which you can remove later.

Most ownership problems are set up in the first week, when the quickest way to start is for the developer to use accounts they already have. Nobody notices until the relationship ends, a payment is disputed, or an investor asks who owns the code.

## Who owns the code you paid for?

Paying for software doesn't automatically make you the owner of its copyright. Under US law, a "work made for hire" belongs to the hiring party when an employee creates it as part of their job. For outside contractors the rule is narrower. The US Copyright Office's [circular on works made for hire](https://www.copyright.gov/circs/circ30.pdf) explains that a commissioned work qualifies only if it falls into one of nine listed categories and both parties sign a written agreement saying so. Custom software often doesn't fit those categories, which is why development contracts usually include a clause assigning the intellectual property to the client.

Check that your contract has that clause, that it covers everyone who works on the project, including any subcontractors, and that it is signed. This is general information, so have a lawyer review the contract itself.

Contractor-built code with no assignment on file is one of the gaps a [technical due diligence](/technical-due-diligence) looks for before a raise or a sale, along with the licenses of the open-source packages the code depends on. Ask your contractor for a list of those licenses at handover.

## The code repository

The code should live in a repository owned by your company, for example a GitHub or GitLab organization that you created, with the contractor added as a member. A zip file of the finished code leaves out that history. The history of changes shows who did what and why, and it's what the next engineer will use to understand the code.

If the repository already sits in the contractor's account, it can be moved. GitHub's guide to [transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) explains that the commit history, issues and pull requests move with it.

## Cloud and hosting accounts

The accounts where the software runs, such as AWS, Google Cloud, Azure or a hosting platform, should be opened by your company, with the billing on your card and the owner login tied to a company email address that more than one person can reach. Turn on two-factor authentication for that owner login.

The contractor gets their own user inside your account with the permissions the work needs. If they leave, you remove that user and everything keeps running. When it works the other way round and the software runs inside the contractor's account, you are dependent on them to keep paying the bill and to hand it over.

## The domain name

Your domain should be registered by your company, at a registrar where you hold the login. ICANN's page for [domain name registrants](https://www.icann.org/registrants) explains that the registrant is the person or business that registered the name and manages it through the registrar. If a web developer registered it in their own name, you may not be able to change it without them.

You can check who your registrar is with ICANN's lookup tool. The domain matters beyond the website, because your email usually depends on it too.

## Credentials and outside services

Most software relies on outside services: a payment processor, an email-sending service, a mapping or SMS provider, and for mobile apps, the Apple and Google developer accounts that publish to the app stores. Each of those accounts should be opened in your company's name.

Keep the passwords and keys in a company password manager, shared with the contractor rather than owned by them. When someone leaves the project, change the keys they had access to. If nobody can tell you where a key is stored, that's worth fixing before anything else on this list.

## Documentation

Include documentation in the agreed handover. At minimum it should explain how to run the software on a new machine, how to deploy a change, where each secret is stored, and which outside services the software uses and why. A short note on how the system is put together, and why any unusual decisions were made, saves the next team weeks.

Check whether a new engineer could set it up next month without calling the contractor. We wrote about what that handover looks like from the receiving end in [taking over someone else's codebase](/blog/inherited-codebase).

## A checklist for your next contract

1. An IP assignment clause, signed, covering subcontractors.
2. A repository in your company's organization from the first commit.
3. Cloud, hosting and app store accounts opened by you, with your billing.
4. The domain registered in your company's name.
5. Credentials in a password manager you control.
6. Setup, deployment and architecture notes as a deliverable, with a date.

## If the work has already started

Use the checklist to find the accounts and documents your company still needs to control. Agree the handover while the contractor is still available to answer questions, including who will run a fresh setup and deployment in front of you.
