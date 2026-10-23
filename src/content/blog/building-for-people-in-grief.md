---
title: "Designing software for people going through grief"
image: ../../assets/blog/building-for-people-in-grief-image.jpg
imageAlt: "A small olive sapling in a pot on a blue windowsill in sunlight"
cover: ../../assets/blog/building-for-people-in-grief.png
description: "People who come to you after a loss have a lot to carry already. What that should change about your forms, tone, dates and member data."
pubDate: 2026-10-07
relatedPages: ["/case-studies/nonprofit-community"]
category: case-stories
---

If the people you serve come to you after a loss, they came for help, and your software is only the way to reach it. Every question, field and button you put in front of them is one more thing to do on a day when they already have plenty to carry. Designing for them mostly means asking less, and asking it gently.

## Ask for less, in smaller pieces

A long form is a small thing on an ordinary day. For someone who lost her mother last month, it can be the reason she closes the tab and means to come back later. Breaking an application into one group of questions at a time makes it feel manageable, and it suits a phone, which is where most people will fill it in.

Empty text boxes deserve the same thought. A grief-support nonprofit we worked with lets members leave a memorial wish for someone else in the community. The app offers a few preset phrases first, and a member can still write her own. Finding words for someone else's loss is hard, and a place to start helps.

Also check that nothing important happens on a single tap without a chance to stop.

## Decide on a tone, and write down what to avoid

Software for hard moments tends to slide toward cold and clinical or toward soft and sentimental. The nonprofit's design brief named four things the product should never look like: clinical, corporate, greeting-card or funereal. A list like that is easy to check a screen against.

The tone can also change with the job. Their public site has to persuade someone to apply, so its voice is warmer. Past the login, the members' app is calmer and made for coming back to.

Then read the words closely. Early copy called the community "peer-led." That described how the organization is run and undersold what a visitor gets, since the support groups and subsidized therapy aren't run by peers. The phrase came out of every page. When the staff rewrote the public copy themselves, we used their version as written. The people who do this work every day usually know how to welcome someone better than any designer does.

## Get the dates that matter exactly right

Many organizations in this space keep track of dates: anniversaries, milestones, a day each year someone wants remembered. If your software sends a reminder for one, it has to arrive on the right day.

For this nonprofit, that date is the Yahrtzeit, the anniversary of a parent's death. It's recorded on the Hebrew calendar, so it falls on a different ordinary date every year, and in a leap year an anniversary in Adar is observed in Adar II. The system works each one out fresh every year, and we treated that as core logic from the start.

So ask early which dates matter to the people you serve, and which calendar they keep them on.

## Treat each member's record as hers

People share a lot with an organization that supports them through something hard. Build the permissions on the assumption that what they share belongs to them. A few questions worth answering before launch:

- Can staff see a real member's account? At the nonprofit, staff who need to preview the members' app on real data sign in as a dedicated test account that can't reach any real member, and every visit goes in the audit log.
- What happens when someone leaves? Closing an account is the member's request. Erasing her personal details is a separate step an admin takes later, and the memorial she made for her parent stays in place.
- Which emails can she turn off? Every kind of bulk email. Only messages about her own account always arrive.

## Let the software keep the rules

Most organizations doing this work are small. This one has a team of four and no engineers on staff, so wherever we could, a rule became something the software enforces itself. Every change has to pass the full test suite before it can be merged. Text never drops below a 4.5:1 contrast ratio, placeholders included. Every admin action is logged, and the destructive ones are limited to a single role. Nobody has to remember any of it during a busy week.

A member should be able to apply, find an event and remember her parent without thinking about the software at all.

The [nonprofit community case study](/case-studies/nonprofit-community) covers the full build. If you're designing for people going through something hard, read how we approach [UI and UX design](/ui-ux-design-services), or [tell us who they are](/contact).
