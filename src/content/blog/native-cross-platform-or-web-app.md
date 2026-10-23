---
title: "Native, cross-platform or web app: how to choose"
image: ../../assets/blog/native-cross-platform-or-web-app-image.jpg
imageAlt: "A teacup, a glass beaker and an enamel mug on a blue table, each filled with milk to the same level"
cover: ../../assets/blog/native-cross-platform-or-web-app.png
description: "How to choose between a native app, a cross-platform app and a web app, based on what the product needs from the phone and who will maintain it."
pubDate: 2026-11-11
relatedPages: ["/services/mobile-development", "/cross-platform-app-development"]
category: software
---

Start with a web app unless the product needs something only an installed app can do well: the camera as a core feature, reliable push notifications, offline work, or a listing in the app stores. If it does need an app, build it cross-platform, and keep fully native code for the few parts that require it.

That's the default we use. The rest of this post covers how to tell which case you're in.

## What the three options mean

A web app runs in the phone's browser. People open a link, and every update you ship reaches them the next time they load the page. A well-built one can also be added to the home screen and look much like an app.

A native app is written separately for each platform, usually in Swift for iOS and Kotlin for Android. You build and maintain two codebases, and each one gets full access to everything the phone offers.

A cross-platform app is written once in a framework such as [React Native](https://reactnative.dev/) or [Flutter](https://flutter.dev/) and shipped to both app stores. Most of the code is shared, and small native pieces fill the gaps where the framework can't reach.

## When a web app is enough

Say a property manager wants tenants to report repairs, attach a photo and check on progress. That's a form, an upload and a status page, and a browser handles all three. A web app also avoids store review, installs and the work of persuading people to download something they'll use twice a year.

Push notifications used to be a reason to go native. Since iOS 16.4, a web app that someone has added to their home screen can [ask for permission to send push notifications](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/). The catch is that step: most people never add a website to their home screen, so for notifications that people actually need to see, an installed app is still more dependable.

For a first version we build responsive web by default. We explain why in our post on [what to build first in an MVP](/blog/mvp-what-to-build-first).

## When you need an app in the store

Some products do need an installed app. The signs are usually clear:

- The camera, location or another sensor is central to the product and used every day.
- People need to work without a signal, in a warehouse or out in the field, and have their changes sync later.
- Notifications are part of how the product works, such as a reminder to take a dose or a message from a driver.
- Customers expect to find you in the App Store or Google Play, or the product sits next to other apps they already use.

One warning on store listings. Apple's review guidelines say an app should do more than act as [a repackaged website](https://developer.apple.com/app-store/review/guidelines/#minimum-functionality). Wrapping your web app in a thin shell to get a store listing tends to fail review, so if you need the listing, build an app.

## Why cross-platform is usually the right app

Once you know you need an app, the next question is whether to write it twice. For most business products the answer is no.

In a typical app, most of the code is business rules, data handling and talking to the server. Those parts behave the same on both platforms, so a cross-platform framework lets you write them once. Each feature is built once, each bug is fixed once, and one team can maintain the whole thing.

The risk is an app that feels slightly wrong on both platforms. We handle that by keeping each platform's conventions where users would notice the difference, such as navigation, gestures and typography. That list is usually shorter than people expect.

Choosing between React Native and Flutter mostly comes down to your team. If your developers already write JavaScript or TypeScript, React Native lets them work in the app. Flutter uses its own language, Dart, and draws its own interface, which some teams prefer for highly custom designs. We pick based on the skills you already have and what the app needs.

## When fully native earns its cost

Writing two native apps makes sense in a narrower set of cases:

- The app lives on the newest platform features, and waiting for a framework to support them would hurt the product.
- Performance is the product, as in heavy graphics, real-time audio or advanced camera work.
- A key hardware or partner SDK only ships for native code and drives most of the app.

Even then, a single native-only requirement rarely justifies two full codebases. Usually we write a small native module for that one part and keep everything else shared.

## The questions to answer first

Before anyone picks a framework, answer these:

1. What does the product need from the phone that a browser can't give it?
2. Do users need to work offline?
3. How important are notifications, and would people add a website to their home screen to get them?
4. Who will maintain this a year from now, and what languages do they know?
5. Do customers expect to find you in an app store?

If the first answer is "nothing" and the last is "no," build a web app. If not, build cross-platform and go native only for the parts that need it.

We cover how we build and launch apps on our [mobile development](/services/mobile-development) page, and how we handle shared code, native modules and store submission on the [cross-platform apps](/cross-platform-app-development) page. If you're weighing this decision now, [tell us what the app has to do](/contact).
