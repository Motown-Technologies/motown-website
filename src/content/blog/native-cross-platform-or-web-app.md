---
title: "Web app, cross-platform or native app: how to choose"
image: ../../assets/blog/native-cross-platform-or-web-app-image.jpg
imageAlt: "A teacup, a glass beaker and an enamel mug on a blue table, each filled with milk to the same level"
cover: ../../assets/blog/native-cross-platform-or-web-app.png
description: "Choosing between a web app, a cross-platform app and native code starts with what people need from the phone and who maintains it after launch."
pubDate: 2026-11-11
relatedPages: ["/services/mobile-development", "/cross-platform-app-development"]
category: software
---

A tenant reporting a repair needs to describe the problem, attach a photo and find out what happens next. Asking them to install an app first is one more step they didn't ask for. A field worker who uses the same tool all day with no reliable signal has a different problem entirely.

Our default is a web app first. If you do need an app in the store, build it once for both platforms and write native pieces only where you must. The tradeoff is that a web app is easier to ignore on a phone, notifications most of all.

## The three options

A web app runs in the phone's browser. People open a link, and every update reaches them the next time they load the page. A native app is written twice, once for iPhone and once for Android, so you're paying to maintain two apps. A cross-platform app is built once in a framework such as [React Native](https://reactnative.dev/) or [Flutter](https://flutter.dev/) and goes to both app stores.

## When a web app is enough

The tenant needs a form, a photo upload and a status page. A browser handles all of that with no store review and nothing to install. For something people use now and then, persuading them to download an app is real work, and it belongs in the comparison.

Notifications are the catch. Since iOS 16.4, a web app that someone has added to their home screen can [ask to send them push notifications](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/). Most people never add it, so an installed app is still more dependable for notifications people need to see.

For a first version we build responsive web by default, and our post on [what to build first in an MVP](/blog/mvp-what-to-build-first) explains why.

## The signs you need an app in the store

- The camera, location or another sensor is central and used every day.
- People work without a signal, in a warehouse or out in the field, and their changes sync later.
- Notifications are part of how the product works, like a reminder to take a dose.
- Customers expect to find you in the App Store or Google Play.

If it's only the listing you want, don't wrap your website in a thin app shell. Apple's guidelines say an app should do more than act as [a repackaged website](https://developer.apple.com/app-store/review/guidelines/#minimum-functionality), and those tend to fail review.

## Why we'd build it once

Most of a typical business app is rules, data and talking to the server. That part behaves the same on iPhone and Android, so one team can build and maintain it once. The risk is an app that feels slightly wrong on both, so we keep each platform's habits where people would notice, like navigation and gestures. That list is usually shorter than people expect. Which framework to use mostly depends on what your developers already know.

Two fully native apps earn their cost when performance is the product (heavy graphics, real-time audio, advanced camera work) or when the app lives on the newest phone features. A single native-only need rarely justifies that. We usually build that one part natively and share the rest. Our [cross-platform app development](/cross-platform-app-development) page covers how we approach it.

## One thing to do this week

Write down the tasks people need to finish on a phone, including the awkward ones: poor signal, a missed notification. If nothing on that list needs more than a browser, build a web app.

If you're weighing this for a product of your own, [tell us what people need to do with it](/contact).
