# LinkedIn: inherited-codebase

## Post 1: native text

The hardest codebase to inherit is one where nothing is broken.

A multi-site healthcare practice handed us a website someone else had built. It worked. Underneath, every part was fragile, and every fragile part was holding something up.

Our first month produced no features. We spent it making the system runnable, deployable and reproducible, so later changes could be made and undone on purpose.

Over three years the site moved five times, and each move had a reason: search engines couldn't see the pages, a framework was reaching end of support, and editors couldn't publish without a developer.

Every step was built to be reversible. The old API stayed running. Rollback was one setting. The content migration copied records and never deleted them, and the old tables stayed for a month after the switch.

Today the site is 352 pages of static HTML. Editors publish their own content, the site rebuilds itself, and a change that would break it fails in the build before it reaches production.

If you've inherited a codebase, make it reproducible before you change anything.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/inherited-codebase.pdf)

Document title: Inheriting a codebase that still works

How we took over a working healthcare website and changed everything underneath it, one reversible step at a time. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/inherited-codebase?utm_source=linkedin&utm_medium=social&utm_campaign=inherited-codebase
