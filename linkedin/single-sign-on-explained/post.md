# LinkedIn: single-sign-on-explained

## Post 1: native text

Someone left the company yesterday. Which tools can they still get into?

Email's usually on the offboarding list. The CRM, accounting tool and smaller apps each have their own accounts, which closing the company account may not close.

Single sign-on (SSO) connects those apps to one company login, held in an identity provider like Google Workspace, Microsoft Entra ID or Okta. Staff sign in there, and the app gets a signed message saying who they are, without ever seeing their password.

When someone leaves, you disable that one account and they can't sign in to anything connected to it. Revoke their active sessions at the same time, because an app they're already signed in to can keep them in until that session ends.

There are gaps. SSO handles signing in, and may not remove the accounts inside each app. That's provisioning, usually done with a standard called SCIM. And if an app still allows password login, someone who's left may have a way back in that SSO never closed.

You also set security rules once. Require a second sign-in step in the identity provider and every connected app inherits it. Plenty of vendors keep SSO for pricier plans, so check before you sign.

At your next offboarding review, sit down with IT and list which apps require the company login, which allow a separate password and which accounts still get removed by hand.

The article has four questions to ask a vendor before you buy. Link's in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/single-sign-on-explained.pdf)

Document title: SSO and offboarding: a checklist

Use the first four cards when a vendor demo gets to security, and the last two on the day someone leaves. The full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/blog/single-sign-on-explained?utm_source=linkedin&utm_medium=social&utm_campaign=single-sign-on-explained
