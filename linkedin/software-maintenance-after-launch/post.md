# LinkedIn: software-maintenance-after-launch

## Post 1: native text

The build's done and working. Then a browser changes, a payment connection needs an update or the contact form stops sending. Who gets the alert, and is fixing it in anyone's budget?

Launch often ends the project with that unsettled. Maintenance keeps the software you already have useful and safe, and needs its own budget line, separate from new features.

The biggest steady part is updates. Every modern app sits on dozens or hundreds of open source packages that put out security fixes. Skip a year and they pile up, each harder to apply than it would've been on time. Browsers, operating systems, hosts and app stores change on their own schedules too.

Monitoring only helps if a person reads the alerts. And the only way to know a backup works is to restore it.

Two same-size products can cost very different amounts to look after. Every integration is an outside company that can change on you. Automated tests, a test copy of the site and a repeatable release process let each update be checked before going live, with less testing by hand. Health or payment data needs faster patching. Each extra platform adds its own updates, and a product left alone for two years usually needs a catch-up project before routine work starts.

Before the build team moves on, write down who gets alerts, who can approve urgent work and what the maintenance budget covers. Give a copy to whoever runs the business and whoever runs the software.

## Post 2: carousel (~/Documents/Motown Carousels/software-maintenance-after-launch.pdf)

Document title: Maintenance handover: settle these before launch

Go through these with your developer before the build ends, while they've still got the whole system in their heads. Each one's a gap that otherwise falls between teams, and the full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/go/software-maintenance-after-launch
