---
title: "Your online store is losing sales. Is the platform really the problem?"
image: ../../assets/blog/shopify-custom-or-headless-image.jpg
imageAlt: "Three empty shopping baskets, wicker, wire and blue, on a blue floor"
cover: ../../assets/blog/shopify-custom-or-headless.png
description: "How to distinguish storefront problems from platform limits before committing to a Shopify rebuild or headless commerce."
pubDate: 2026-09-30
relatedPages: ["/ecommerce-development", "/shopify-development", "/headless-commerce-development"]
category: software
---

You pay to bring people to the store, then watch them leave before checkout. A platform rebuild is one possible response, but it may not address the reason they left. A slow product page, poor search and a difficult checkout need different repairs.

Find the point where the shopping journey is failing before choosing between Shopify, a custom storefront and headless commerce. Compare the cost of repairing that part of the journey with a full rebuild.

## When Shopify with a custom theme is enough

Over time, the theme won't do what the brand needs, the app stack is slowing the site down, and someone is still updating the ERP by hand every morning.

Check what can be repaired on the existing platform. Shopify has supported extension points for most of what people assume it can't do:

- A custom theme built from the brand, with sections the marketing team can rearrange, instead of a premium theme carrying code from four other themes.
- Shopify Functions and checkout UI extensions for discount, shipping and payment logic, on surfaces Shopify supports.
- Custom apps for the logic no plugin covers, such as pricing rules or a product builder.
- Integrations that move orders, stock and product data between Shopify and the ERP, 3PL or accounting system.

Review the installed apps before adding another one. Check for overlapping jobs, unused features and scripts loaded on pages that don't need them. Removing an app also means checking what it was responsible for, so make each change separately and test the purchase flow.

## Rebuilding the storefront on the platform you have

Sometimes the platform can support the work, but the storefront makes it difficult. Ask the team to distinguish what can be fixed in the current theme from what requires a different front end.

Review the shopping journey, including:

- A storefront that renders fast on a mid-range phone on mobile data.
- Search that survives typos, with filters people can use and merchandising rules you control.
- A shorter checkout with guest checkout, saved addresses and the wallets customers already have on their phone.
- Inventory and order data synced with the systems the business runs on, so two people buying the last item at once doesn't break stock counts.

Agree which numbers would show improvement before the work starts: load time, conversion rate at each checkout step, average order value or repeat purchase rate. Keep the measures tied to the problem you chose to solve.

## When headless commerce is worth it

Headless keeps the engine that handles your carts, orders and tax, and replaces the front end it ships with. The storefront becomes a separate application (Next, Astro or Hydrogen) rendered at the edge, with a CMS your marketing team can publish from without a deploy and a real search index behind it.

Consider the extra complexity when the platform is causing problems such as:

- The theme system can't render what the brand needs.
- You maintain a separate store for every market and want one storefront serving several locales, currencies and brands.
- Marketing waits on a developer every time a landing page changes.
- Platform search misses a large part of your own catalog.

## When the extra system is too much to maintain

The extra front end becomes your team's responsibility after launch. Consider that cost carefully in these situations:

- Your team is two people. Headless adds a codebase, a deploy pipeline and a CMS to look after. Without someone owning the front end, it becomes the part of the business nobody can change.
- The theme is mostly fine. If what you want is design polish and you haven't hit a real platform limit, a custom theme costs a fraction as much and ships months sooner.
- You need it in six weeks. A decoupled build puts most of the work up front. If the deadline can't move, keeping the platform's front end may be more practical.

## How to decide

Start with what's losing you sales. If the store is slow, the checkout is long or search fails, that can usually be fixed on the platform you have. If the platform itself is the limit and you have people to maintain a separate front end, headless starts to make sense.

Try a purchase on a mid-range phone before choosing a platform. Record where finding a product or completing checkout becomes difficult, then ask which problems can be fixed in the current store. Compare a platform change against that smaller scope, including who will maintain each option.
