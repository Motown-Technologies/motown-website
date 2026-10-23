---
title: "Open source licenses explained for business owners"
image: ../../assets/blog/open-source-licenses-explained-image.jpg
imageAlt: "A nearly finished blue jigsaw puzzle with a few off-white pieces and one black piece standing on its edge next to its empty slot"
cover: ../../assets/blog/open-source-licenses-explained.png
description: "What permissive and copyleft open source licenses ask of you, which ones need a closer look, and how to keep track of them in your own software."
pubDate: 2027-02-10
relatedPages: ["/technical-due-diligence"]
category: software
---

Almost all modern software is built on open source code, and every piece of it comes with a license that says what you may do with it. Most of those licenses only ask you to keep a copyright notice. A few can require you to publish your own source code if you distribute or host the software in certain ways, and those are the ones worth knowing about.

A note before we start: this is a general explanation from a software team, not legal advice. When a license question affects a sale, a raise or a contract, ask a lawyer who works on software licensing.

## Why your software is full of other people's code

Developers rarely write everything from scratch. A typical web application pulls in hundreds of open source packages for things like dates, payments, image handling and the framework itself. Each one is free to use, and each one comes with license terms. Using the code means accepting those terms, whether or not anyone on your side has read them.

Usually that's fine. The question is whether any of those licenses asks for something your business isn't willing to give.

## Permissive licenses: keep the notice

Permissive licenses let you use, change and sell the code in your own product, including closed-source commercial software. The main condition is that you keep the original copyright and license notice.

The two you'll see most are MIT and Apache 2.0. According to [choosealicense.com](https://choosealicense.com/licenses/), a guide maintained by GitHub, both require the notice and neither requires you to share your own source code. Apache 2.0 also includes an explicit patent grant from contributors, which some companies' lawyers prefer.

For most businesses, permissive licenses are the easy case. The work is keeping an accurate list so the notices can be included where they're needed.

## Copyleft licenses: share alike

Copyleft licenses let you use and change the code too, but if you distribute software built on it, you have to make the source available under the same license. The best-known is the GNU General Public License (GPL).

The word that matters is "distribute". If you give or sell someone a copy of the software, such as a desktop program or a device with the code inside, the GPL's conditions apply to what you hand over. If the code only runs on your own servers and users reach it through a browser, the standard GPL generally doesn't treat that as distribution.

There are milder versions. The LGPL lets a separate program use a library without the whole program falling under the same license, as long as it's used through the library's interfaces. The Mozilla Public License (MPL 2.0) applies its sharing conditions file by file, so only changes to the MPL-licensed files themselves have to be shared.

## The AGPL: the one to check first

The GNU Affero General Public License (AGPL) closes the gap that the GPL leaves for hosted software. Choosealicense.com summarises it as treating network use as distribution. If you modify AGPL code and let people use it over a network, you have to make your modified source available to those users.

That's why the AGPL is the license most likely to come up when you build a web application or a SaaS product. It doesn't stop you using the code. It does mean someone should decide on purpose whether an AGPL component belongs in a product whose source you plan to keep private.

## Source-available is a different thing

Some popular projects publish their code under licenses that look open but restrict commercial use, often to stop cloud providers from selling the software as a hosted service. Examples include the Server Side Public License (SSPL) and the Business Source License (BSL).

The Open Source Initiative, which maintains the [list of approved open source licenses](https://opensource.org/licenses), has said plainly that [the SSPL is not an open source license](https://opensource.org/blog/the-sspl-is-not-an-open-source-license), and the BSL isn't on its approved list either. Code under these licenses may still be fine for your use. You just can't assume the usual open source freedoms apply, so read the actual terms or ask your lawyer.

Licenses also change. When a project moves to a new license, the versions released before the change usually keep their old terms, but upgrading past that point means accepting the new ones.

## When licenses start to matter

Day to day, licenses rarely cause problems. They come up at specific moments.

- A sale or investment. An acquirer's reviewers will ask for an inventory of every dependency and its license. We check this as part of [technical due diligence](/technical-due-diligence), alongside whether contractor agreements actually assign the code to your company. We cover the rest of that review in [what technical due diligence checks](/blog/technical-due-diligence-explained).
- An enterprise customer. Large buyers often ask about open source use in security and procurement questionnaires.
- Shipping software to customers. A mobile app, a desktop program or a device brings the GPL's distribution rules into play.

Say a clinic commissions a patient portal and later wants to license it to other clinics as a product. Code that was harmless inside one clinic's private system now ships to other organisations, and the license list suddenly matters.

## How to stay on top of it

You don't need to read every license. You need a list, and someone who looks at it now and then.

1. Ask your developers for a dependency inventory with each license, generated by a tool rather than written by hand. Most package managers and security scanners can produce one.
2. Agree a short policy: permissive licenses are fine, copyleft and source-available ones get reviewed before they're added.
3. Check the inventory again before any sale, raise or major customer contract.

If you want to know what your codebase depends on and what those licenses ask of you, [talk to us](/contact).
