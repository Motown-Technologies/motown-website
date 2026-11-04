---
title: "Single sign-on: what it covers when someone leaves"
image: ../../assets/blog/single-sign-on-explained-image.jpg
imageAlt: "A blue lever switch on a stone wall wired to a row of small white lamps, all lit"
cover: ../../assets/blog/single-sign-on-explained.png
description: "Single sign-on can lock a former employee out of every connected tool at once. Where it stops, and what to ask before you buy another tool."
pubDate: 2027-01-06
relatedPages: ["/web-application-development", "/soc-2-readiness"]
category: software
---

Someone leaves, and email is on the offboarding list. The CRM, the accounting tool and a smaller app each have their own accounts, and closing the company account may not close any of them. A month later, could anyone say what that person can still open?

Single sign-on, or SSO, connects those tools to one company identity, so leaving can actually mean leaving. It handles signing in, though, and a few details around it decide whether the door is really shut.

## One login, held in one place

An identity provider holds your staff accounts. For most companies that's the directory that came with their email, such as Google Workspace or Microsoft Entra ID, or a dedicated service like Okta. When someone opens a connected app, it sends them there to sign in, usually with a password and a second factor. The app gets back a signed message saying who they are and never sees their password.

Two standards do most of this work: [SAML 2.0](https://www.oasis-open.org/standard/saml/), which most business software supports, and the newer [OpenID Connect](https://openid.net/developers/how-connect-works/). Your identity provider and the app need to support the same one.

## What changes on someone's last day

Without SSO, a person has to remember every tool the leaver had an account in and close each one, and something usually gets missed. With SSO, disabling one account stops them signing in to every connected app. Revoke their active sessions at the same time, because an app they're already signed in to can keep them in until that session ends.

Security rules get set once, too. Require a second factor in the identity provider and every connected app inherits it. If you're working toward [SOC 2](/soc-2-readiness) or selling to larger customers, you'll be asked how you grant and remove access, and one directory gives you a clear answer.

## Signing in and having an account are different things

A former employee might be unable to sign in while their account, and everything it owns, still sits in the app. Creating and removing those accounts is called provisioning, and the common standard for it is [SCIM](https://www.rfc-editor.org/rfc/rfc7644).

Many vendors include SSO only on their more expensive plans. Before you sign, ask:

1. Does it support SAML or OpenID Connect with our identity provider?
2. Is SSO in the plan we're buying, or only a higher one?
3. Does it support SCIM, or will we remove accounts by hand?
4. Can we turn off password login, so SSO is the only way in?

Ask the fourth even if the others check out. If staff can still sign in with a password, someone who has left may have a way back in that SSO never closed.

The same questions come back from the other side if you [build your own software](/web-application-development). Larger customers often ask whether your product supports SSO before they'll buy.

## Before the next person leaves

Sit down with your IT team and list which apps require the company login, which allow a separate password and which accounts still get removed by hand. Keep that list with the person responsible for access.

If your own software needs to work with company logins, [tell us about it](/contact).
