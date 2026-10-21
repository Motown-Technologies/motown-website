# LinkedIn: headless-wordpress-clinic

## Post 1: native text

An endoscopy center's staff liked editing their website in WordPress. Nobody liked how it loaded for patients.

The usual fix is to replace WordPress. That also takes away the one tool the office already knows. We kept WordPress for editing and moved it out of the way of every patient.

The public site is now plain pages, built ahead of time. WordPress holds the content and only runs when someone publishes. A patient loading a page never touches it.

That changes what can go wrong. A slow database or a plugin update on the editing side used to slow down the public site. Now it's an inconvenience for staff, and patients don't notice.

Publishing still works the way it always did. An editor presses publish, a small plugin waits ninety seconds so a burst of edits becomes one job, and the site rebuilds. If a build fails, the previous version stays up.

The build also checks every piece of content before using it, so a renamed field stops the build with a clear error and the live site stays as it was.

If your team is happy in WordPress and the problem is how the site performs, replacing the CMS is usually the expensive answer.

Full write-up in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/headless-wordpress-clinic.pdf)

Document title: Keep WordPress. Take it off the public site.

How an endoscopy center kept WordPress for its staff and stopped patients from waiting on it. Swipe through, and the full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/headless-wordpress-clinic?utm_source=linkedin&utm_medium=social&utm_campaign=headless-wordpress-clinic
