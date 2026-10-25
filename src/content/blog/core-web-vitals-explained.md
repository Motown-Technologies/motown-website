---
title: "Why your website feels slow even when it loads fine for you"
image: ../../assets/blog/core-web-vitals-explained-image.jpg
imageAlt: "Three blue spinning tops on an off-white surface with long shadows, one of them tilting"
cover: ../../assets/blog/core-web-vitals-explained.png
description: "What Core Web Vitals reveal about the delay, unresponsive buttons and moving content your visitors experience on your website."
pubDate: 2027-02-03
relatedPages: ["/website-maintenance", "/ecommerce-development"]
category: software
---

Your site may feel quick on your laptop while a customer waits on a phone. Or the page appears promptly, but the booking button does nothing when they tap it. Those are different problems, and a single speed score can hide the distinction.

Core Web Vitals measure three parts of that experience: when the main content appears, how quickly the page reacts and how much the layout moves while loading. They give you a way to discuss a visitor's complaint more precisely than "the website feels slow."

## The three measurements

Google's [Core Web Vitals overview](https://web.dev/articles/vitals) defines the current set and the targets for each.

### Largest Contentful Paint (LCP): how fast the page appears

LCP measures how long it takes for the biggest thing in view, usually a hero image or the main block of text, to show up. A good score is 2.5 seconds or less. A slow LCP is the blank or half-drawn page that makes people hit the back button.

### Interaction to Next Paint (INP): how fast the page responds

INP measures the delay between a visitor's tap, click or keypress and the page visibly reacting. A good score is 200 milliseconds or less, and anything [over 500 milliseconds](https://web.dev/articles/inp) counts as poor. INP replaced an older metric, First Input Delay, as a Core Web Vital in 2024. A poor INP is the button that seems to do nothing, so the visitor taps it again.

### Cumulative Layout Shift (CLS): how much the page jumps

CLS measures how much content moves around after it first appears. A good score is 0.1 or less. A poor CLS is the article that shifts down just as you start reading because an ad loaded above it, or the button that moves as you go to press it.

## How Google measures them

The scores that count come from real Chrome users visiting your site, collected in the Chrome User Experience Report. Google looks at the 75th percentile of visits, split by mobile and desktop. In plain terms, three out of four visits need to meet the target for the page to pass.

Your own visit may be one of the faster ones. You probably visit on a fast laptop on office wifi, and your customers may be on a mid-range phone on mobile data. Include that kind of phone when checking an important customer journey.

## Where to check your scores

Two free Google tools show the numbers.

- [PageSpeed Insights](https://pagespeed.web.dev/) takes any URL and shows the real-visitor scores if your site has enough traffic, plus a lab test run on the spot.
- The Core Web Vitals report in [Google Search Console](https://search.google.com/search-console) groups your pages by status and shows which ones fail and on which measurement.

The lab test and the real-visitor scores often disagree. The lab test runs once under fixed conditions and is useful for finding causes. The real-visitor scores are what Google uses.

## How much they affect search rankings

Google's [page experience guidance](https://developers.google.com/search/docs/appearance/page-experience) says good Core Web Vitals results don't guarantee a top ranking, and that Search "always seeks to show the most relevant content, even if the page experience is sub-par."

Going by that, a fast page with thin content shouldn't expect to beat a slower page that answers the question better. Speed counts most when pages are otherwise similar, and it affects what visitors do once they arrive, whatever brought them there. A slow checkout loses sales regardless of where it ranks.

## What usually causes poor scores

### Slow LCP

Oversized images are the most common culprit, especially a large hero photo served at full resolution to a phone. Slow hosting, web fonts that block the page from drawing and content that only appears after a script runs are the other usual suspects.

### Poor INP

The browser may be busy running too much JavaScript. Chat widgets, tracking tags, heatmap tools and marketing pixels each add a little, and together they keep the browser busy when a visitor tries to tap something.

### High CLS

Images and embeds without reserved space, so the page reflows when they arrive. Cookie banners, ad slots and late-loading fonts that push text around cause it too.

## Why scores get worse over time

A site that passes on launch day rarely stays that way untouched. Say a dental practice launches a fast site. Over the next year someone adds a booking widget, marketing adds two tracking tags, and the new team photos go up straight from the camera. The scores can drift down as those changes accumulate, even if nobody noticed a problem when making each one.

Give someone responsibility for reviewing the scores after changes.

Check one important page on a real phone and compare it with the reporting tools. Try the task a visitor came to do, such as booking or checking out. Keep a record of the scores before adding another widget or tracking tag, so you can see whether that change made the experience worse.
