# LinkedIn: inherited-codebase

## Post 1: native text

A multi-site healthcare practice handed us a website someone else had built. Nothing was broken, but every change was risky.

Publishing meant a developer running a script. A key to the live system sat in the code, and the site couldn't be rebuilt the same way twice.

We spent the first month making it run, publish and rebuild reliably. That let any change be made and undone on purpose, and everything after depended on it.

Over three years the site moved three times, each move keeping what worked:

• Pages arrived fully built, so search engines could finally read them, and a bad build stopped before anything shipped.
• A pixel-for-pixel rebuild left patients with the same site, but it no longer fetches content while they browse, so it stays up when the back end doesn't.
• Django 4.2, the framework underneath, lost support in April 2026. We bundled that upgrade with moving editors to Wagtail, a proper editing system, so the practice paid for one migration instead of two. The upgrade shipped alone first.

Each step had a way back: the old system stayed running, rollback was one setting, and the content move copied records without deleting any.

Today the site is 352 ready-made pages. Editors publish without a developer, and a breaking change fails in the build before it goes live.

Taking over a working system? Before agreeing to new features, have the new team publish a change and roll it back in front of you.

## Post 2: carousel (~/Documents/Motown Carousels/inherited-codebase.pdf)

Document title: Taking over a codebase that still works

If you've inherited software someone else built, run these checks before anyone adds a feature. They come from three years on a healthcare practice's website, and the full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/blog/inherited-codebase?utm_source=linkedin&utm_medium=social&utm_campaign=inherited-codebase
