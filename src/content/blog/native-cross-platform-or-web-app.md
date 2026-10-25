---
title: "Does your business need an app people have to download?"
image: ../../assets/blog/native-cross-platform-or-web-app-image.jpg
imageAlt: "A teacup, a glass beaker and an enamel mug on a blue table, each filled with milk to the same level"
cover: ../../assets/blog/native-cross-platform-or-web-app.png
description: "How to choose a web, cross-platform or native app based on what users need to do and who will maintain it after launch."
pubDate: 2026-11-11
relatedPages: ["/services/mobile-development", "/cross-platform-app-development"]
category: software
---

A tenant reporting a repair needs to describe the problem, attach a photo and find out what happens next. Asking them to install an app first is another step. A field worker who uses the same tool all day without a reliable signal has a different problem.

Start with those situations before choosing between web, cross-platform and native development. Ask what people need from the phone, how often they will use the product and who will maintain it.

## What the three options mean

A web app runs in the phone's browser. People open a link, and every update you ship reaches them the next time they load the page. A well-built one can also be added to the home screen and look much like an app.

A native app is written separately for each platform, usually in Swift for iOS and Kotlin for Android. You build and maintain two codebases, and each one gets full access to everything the phone offers.

A cross-platform app is written once in a framework such as [React Native](https://reactnative.dev/) or [Flutter](https://flutter.dev/) and shipped to both app stores. Most of the code is shared, and small native pieces fill the gaps where the framework can't reach.

## When a web app is enough

For the tenant reporting a repair, the task is a form, a photo upload and a status page. A browser can cover that workflow without a store review or installation. For something used infrequently, the work of persuading people to download an app belongs in the comparison too.

Push notifications used to be a reason to go native. Since iOS 16.4, a web app that someone has added to their home screen can [ask for permission to send push notifications](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/). The user has to add the site to their home screen first. Most people don't take that step, so an installed app is still more dependable for notifications they need to see.

For a first version we build responsive web by default. We explain why in our post on [what to build first in an MVP](/blog/mvp-what-to-build-first).

## When you need an app in the store

Some products do need an installed app. The signs are usually clear:

- The camera, location or another sensor is central to the product and used every day.
- People need to work without a signal, in a warehouse or out in the field, and have their changes sync later.
- Notifications are part of how the product works, such as a reminder to take a dose or a message from a driver.
- Customers expect to find you in the App Store or Google Play, or the product sits next to other apps they already use.

One warning on store listings. Apple's review guidelines say an app should do more than act as [a repackaged website](https://developer.apple.com/app-store/review/guidelines/#minimum-functionality). Wrapping your web app in a thin shell to get a store listing tends to fail review, so if you need the listing, build an app.

## Why cross-platform is usually the right app

Once you know you need an app, the next question is whether to write it twice. For most business products, maintaining two full codebases is hard to justify.

In a typical app, most of the code is business rules, data handling and talking to the server. Those parts behave the same on both platforms, so a cross-platform framework lets you write them once. One team can maintain the shared features and fixes across both platforms.

The risk is an app that feels slightly wrong on both platforms. We handle that by keeping each platform's conventions where users would notice the difference, such as navigation, gestures and typography. That list is usually shorter than people expect.

Choosing between React Native and Flutter mostly comes down to your team. If your developers already write JavaScript or TypeScript, React Native lets them work in the app. Flutter uses its own language, Dart, and draws its own interface, which some teams prefer for highly custom designs. We pick based on the skills you already have and what the app needs.

## When fully native earns its cost

Writing two native apps makes sense in a narrower set of cases:

- The app lives on the newest platform features, and waiting for a framework to support them would hurt the product.
- Performance is the product, as in heavy graphics, real-time audio or advanced camera work.
- A key hardware or partner SDK only ships for native code and drives most of the app.

A single native-only requirement can often be handled without maintaining two full codebases. Usually we write a small native module for that one part and keep everything else shared.

## The questions to answer first

Before anyone picks a framework, answer these:

1. What does the product need from the phone that a browser can't give it?
2. Do users need to work offline?
3. How important are notifications, and would people add a website to their home screen to get them?
4. Who will maintain this a year from now, and what languages do they know?
5. Do customers expect to find you in an app store?

If the first answer is "nothing" and the last is "no," build a web app. If not, build cross-platform and go native only for the parts that need it.

Write down the tasks people need to complete on a phone, including the awkward ones: poor signal, a missed notification or an update waiting for approval. Choose the approach that handles those tasks within the team's budget and maintenance skills.
