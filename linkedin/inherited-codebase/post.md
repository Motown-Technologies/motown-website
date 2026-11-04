# LinkedIn: inherited-codebase

## Post 1: native text

A healthcare practice handed us a website someone else had built. Nothing was broken, but publishing a change meant asking a developer to run a script.

So our first month shipped nothing new. We made the site run, publish and rebuild the same way every time, so any change could be made and undone on purpose. The practice saw almost none of it, and every later change depended on it.

Over three years the site was rebuilt three times, each for a reason we could name. Search engines couldn't read the pages. Editors kept needing features the admin screen was never built for. Then the framework underneath lost support in April 2026, so we bundled that upgrade with moving editors to Wagtail, a proper editing system. The practice paid for one migration instead of two.

Every step kept a way back. The old system stayed running, switching back took one setting, and the content move copied records without deleting any.

Today patients see the same site, it stays up when the back end doesn't, and editors publish without waiting on a developer.

Taking over a working system? Before agreeing to new features, have the new team publish a change and roll it back in front of you.

## Post 2: carousel (~/Documents/Motown Carousels/inherited-codebase.pdf)

Document title: Taking over a codebase that still works

If you've inherited software someone else built, run these checks before anyone adds a feature. They come from three years on a healthcare practice's website, and the full write-up's in the comments.

## First comment (both posts)

https://motowntech.com/go/inherited-codebase
