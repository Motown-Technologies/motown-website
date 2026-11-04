---
title: "Core Web Vitals: why your site feels slow to customers"
image: ../../assets/blog/core-web-vitals-explained-image.jpg
imageAlt: "Three blue spinning tops on an off-white surface with long shadows, one of them tilting"
cover: ../../assets/blog/core-web-vitals-explained.png
description: "What Core Web Vitals say about the slow pages, dead buttons and jumping content your visitors run into, and how to check yours on a real phone."
pubDate: 2027-02-03
relatedPages: ["/website-maintenance", "/ecommerce-development"]
category: software
---

Your site feels quick on your laptop. A customer on a phone stares at a half-drawn page, or taps the booking button and nothing happens, so they tap it again. Those are different problems, and a single speed score can hide which one you have.

Core Web Vitals split that experience into three measurements, with targets set in Google's [Core Web Vitals overview](https://web.dev/articles/vitals). They let you talk about a complaint more precisely than "the website feels slow."

## Three ways a page can feel slow

Largest Contentful Paint (LCP) is how long the biggest thing in view, usually a hero image or the main block of text, takes to appear. Good is 2.5 seconds or less. A slow one is the blank page that sends people back to the search results.

Interaction to Next Paint (INP) is the delay between a tap, click or keypress and the page visibly reacting. Good is 200 milliseconds or less, and anything [over 500 milliseconds](https://web.dev/articles/inp) counts as poor. It replaced an older metric, First Input Delay, in 2024. A poor INP is that booking button that seems dead.

Cumulative Layout Shift (CLS) is how much content moves after it first appears. Good is 0.1 or less. A poor score is the button that jumps just as you go to press it.

## Your own visit is the best case

The scores that count come from real Chrome users, split by mobile and desktop, and three out of four visits need to meet each target. You're probably on a fast laptop on office wifi. Your customers may be on a mid-range phone on mobile data.

[PageSpeed Insights](https://pagespeed.web.dev/) shows real-visitor scores for any URL with enough traffic, plus a lab test run on the spot. The Core Web Vitals report in [Google Search Console](https://search.google.com/search-console) shows which pages fail, and on which measurement. When the two disagree, the lab test helps find causes, and the real-visitor scores are what Google uses.

## Checkout matters more than rankings

Google's [page experience guidance](https://developers.google.com/search/docs/appearance/page-experience) says good scores don't guarantee a top ranking, and that Search "always seeks to show the most relevant content, even if the page experience is sub-par." A fast page with thin content shouldn't expect to beat a slower one that answers the question better. Speed counts most in what visitors do once they arrive. A slow checkout loses sales wherever it ranks.

## Sites slow down on their own

The usual causes are ordinary. A hero photo served at full resolution to a phone slows LCP. Chat widgets, tracking tags and marketing pixels each give the browser a little more to do, and together they make taps lag. Images, banners and ad slots with no space set aside push the page around.

Say a dental practice launches a fast site. Over the next year someone adds a booking widget, marketing adds two tracking tags, and the new team photos go up straight from the camera. Nobody sees a problem with any single change, and the scores can still drift down. That's why we think checking them belongs in regular [website maintenance](/website-maintenance), with someone responsible for it.

## One check for this week

Take your most important page and do the task a visitor came for, booking or checking out, on a real phone. Then write down its scores, so the next widget or tracking tag has something to be measured against.

If the numbers worry you, [tell us about your site](/contact).
