---
title: "Shopify, a custom theme or headless commerce: how to choose"
image: ../../assets/blog/shopify-custom-or-headless-image.jpg
imageAlt: "Three empty shopping baskets, wicker, wire and blue, on a blue floor"
cover: ../../assets/blog/shopify-custom-or-headless.png
description: "How we help stores choose between Shopify, a custom experience on their current platform and a headless front end, and when headless is the wrong call."
pubDate: 2026-09-30
relatedPages: ["/ecommerce-development", "/shopify-development", "/headless-commerce-development"]
---

Fix what's losing sales on the platform you have first, and go headless only when the platform itself is the limit and someone can maintain a separate front end. For most stores, that means Shopify with a custom theme or a better storefront on their current platform.

Traffic is the expensive part of running an online store. Most stores pay for it and then lose it to a slow product page, a search box that can't handle a typo, or a checkout that asks for an account before it takes the money.

When a store owner comes to us with that problem, the first question is usually about platforms. Should they stay on Shopify, rebuild the storefront on what they have, or go headless? Those three options cost very different amounts, so it's worth being clear about what each one buys.

## When Shopify with a custom theme is enough

Shopify gets a store live in a week. The trouble tends to show up later. The theme won't do what the brand needs, the app stack is slowing the site down, and someone is still updating the ERP by hand every morning.

A lot of that is fixable without leaving the platform. Shopify has supported extension points for most of what people assume it can't do:

- A custom theme built from the brand, with sections the marketing team can rearrange, instead of a premium theme carrying code from four other themes.
- Shopify Functions and checkout UI extensions for discount, shipping and payment logic, on surfaces Shopify supports.
- Custom apps for the logic no plugin covers, such as pricing rules or a product builder.
- Integrations that move orders, stock and product data between Shopify and the ERP, 3PL or accounting system.

A surprising amount of Shopify work is subtraction. Most stores carry around a dozen apps, with several doing the same job and all of them loading on every page. We replace or cut the ones that cost speed and monthly fees. Building on supported extension points also means the store keeps upgrading cleanly when Shopify releases changes.

## Rebuilding the storefront on the platform you have

Sometimes the platform is fine and the experience on top of it is the problem. In that case we keep the platform you're on, or help you pick one that won't need replacing in two years, and build the customer-facing layer properly.

That covers every screen between the click and the confirmation:

- A storefront that renders fast on a mid-range phone on mobile data.
- Search that survives typos, with filters people can use and merchandising rules you control.
- A shorter checkout with guest checkout, saved addresses and the wallets customers already have on their phone.
- Inventory and order data synced with the systems the business runs on, so two people buying the last item at once doesn't break stock counts.

We agree on the numbers before we start and report against them after launch: load time, conversion rate per checkout step, average order value and repeat purchase rate.

## When headless commerce is worth it

Headless keeps the engine that handles your carts, orders and tax, and replaces the front end it ships with. The storefront becomes a separate application (Next, Astro or Hydrogen) rendered at the edge, with a CMS your marketing team can publish from without a deploy and a real search index behind it.

It's worth the extra complexity when one of these is your actual problem:

- The theme system can't render what the brand needs.
- You maintain a separate store for every market and want one storefront serving several locales, currencies and brands.
- Marketing waits on a developer every time a landing page changes.
- Platform search misses a large part of your own catalogue.

If none of those is the problem, headless just adds a codebase.

## When we'd talk you out of headless

Headless gets sold much more often than it's warranted, and we'd rather lose the project than build something your team can't maintain. Three situations where we usually recommend against it:

- Your team is two people. Headless adds a codebase, a deploy pipeline and a CMS to look after. Without someone owning the front end, it becomes the part of the business nobody can change.
- The theme is mostly fine. If what you want is design polish and you haven't hit a real platform limit, a custom theme costs a fraction as much and ships months sooner.
- You need it in six weeks. A decoupled build puts most of the work up front. If the deadline can't move, staying on the platform's front end is the honest answer.

## How to decide

Start with what's losing you sales. If the store is slow, the checkout is long or search fails, that can usually be fixed on the platform you have. If the platform itself is the limit and you have people to maintain a separate front end, headless starts to make sense.

You can read more about how we approach [Shopify development](/shopify-development), [custom ecommerce builds](/ecommerce-development) and [headless commerce](/headless-commerce-development). If you're not sure which one fits, [tell us what you're working with](/contact) and we'll talk through the trade-offs.
