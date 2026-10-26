---
title: "Someone left the company. What can they still access?"
image: ../../assets/blog/single-sign-on-explained-image.jpg
imageAlt: "A blue lever switch on a stone wall wired to a row of small white lamps, all lit"
cover: ../../assets/blog/single-sign-on-explained.png
description: "How single sign-on helps with staff access, what it leaves to account provisioning and what to check before buying another business tool."
pubDate: 2027-01-06
relatedPages: ["/web-application-development", "/soc-2-readiness"]
category: software
---

When someone leaves, who knows every tool they could sign in to? Email may be on the offboarding list, while the CRM, accounting tool and a smaller app have separate accounts. Closing the company account may not close all of them.

Single sign-on, or SSO, lets connected tools use one company identity. It can make access easier to manage, but signing in, removing accounts and ending existing access are details you still need to check.

## How single sign-on works

SSO connects an identity provider with the apps staff use. The identity provider holds your staff accounts and checks who someone is. For most companies that's the directory that came with their email, such as Google Workspace or Microsoft Entra ID, or a dedicated service like Okta. The service providers are the apps people sign in to: your CRM, your accounting tool, your own custom software.

When someone opens an app, it sends them to the identity provider. They sign in there, usually with a password and a second factor, and the identity provider sends them back with a signed message saying who they are. The app trusts that message and lets them in, without ever seeing or storing their password.

Two standards do most of this work:

- [SAML 2.0](https://www.oasis-open.org/standard/saml/), an older XML-based standard maintained by OASIS, which most business software supports.
- [OpenID Connect](https://openid.net/developers/how-connect-works/), a newer standard built on OAuth 2.0 and common in modern web and mobile apps.

Your identity provider and the app need to support the same standard.

## What SSO gives a growing company

Offboarding is one of the main reasons companies adopt SSO. Without SSO, when someone leaves, a person has to remember every tool they had an account in and close each one, and something usually gets missed. With SSO, disabling one account stops them signing in to every connected app. Revoke their active sessions at the same time: an app they are already signed in to can keep them in until that session ends.

Security rules get set once. If you require a second factor in the identity provider, every connected app inherits it, so you aren't relying on each tool's settings or each person's password habits. People also have fewer passwords to forget, reset and reuse.

Audits get easier too. If you're working toward SOC 2, or selling to larger customers, you'll be asked how you grant and remove access, and a single directory gives you a clear answer.

## SSO and user provisioning are different things

SSO handles signing in. It doesn't necessarily create or remove the accounts inside each app. A former employee might be unable to sign in while their account, and everything it owns, still sits in the system.

Creating and removing those accounts is called provisioning. The common standard for it is [SCIM](https://www.rfc-editor.org/rfc/rfc7644), which lets the identity provider create, update and deactivate accounts in each app automatically. When you compare vendors, ask about both.

## What to check when buying software

Many vendors include SSO only on their more expensive plans. Before you sign, ask:

1. Does it support SAML or OpenID Connect with our identity provider?
2. Is SSO included in the plan we're buying, or only in a higher one?
3. Does it support SCIM, or will we remove accounts by hand?
4. Can we turn off password login, so SSO is the only way in?

Ask the fourth one even if the others check out. If staff can still sign in with a password, someone who has left may still have a way back in, and SSO hasn't closed it.

## Adding SSO to your own software

If you build software, SSO usually comes up in one of two ways. Your own staff want to use their company login for internal tools, or your customers, often the larger ones, ask whether your product supports it before they'll buy.

Say a logistics company has a custom dispatch app used by its own staff and by people at three partner firms. Each partner wants its people to sign in with their own company accounts. The app now has to accept more than one identity provider and map each person to the right role and to their own company's data.

Beyond signing in, the team needs to decide which roles exist, who can approve what and what gets logged. Write down those decisions with the teams using the app.

Use the next offboarding review to test the whole process with your IT team. Check which apps require the company login, which allow a separate password and which accounts still need to be removed by hand. Keep that list with the person responsible for access.
