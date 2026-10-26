# LinkedIn: headless-wordpress-clinic

## Post 1: native text

If your staff like editing in WordPress and the complaints are about how the site loads for visitors, you may not need to leave it.

Without a page cache, WordPress builds each page from scratch on every visit, using its database and a stack of plugins. A cache helps, but visitors still hit the live install, so a bad plugin update or database problem can reach them.

An outpatient endoscopy center we worked with was in that spot. We kept WordPress for editing and built the public site from it ahead of time as plain pages, which developers call "headless WordPress." Staff edit the way they always have. A slow database or plugin update is now a staff annoyance patients never see.

Publishing had to stay one button, or we'd have traded a slow site for slow publishing. A small plugin spots a published change and waits ninety seconds, so ten quick saves become one rebuild. The new pages replace the old ones only once the whole set is ready. Edits take a minute or two to show up.

The build has to be strict, too. A renamed field should stop it with a clear error, and missing content should never get real-looking placeholder text. If WordPress is down mid-build, the build fails and the old site stays up.

Weighing this? Ask to watch a full publishing cycle, failed build included, and find out how editors will notice a failure and who helps them publish again.

## Post 2: carousel (~/Documents/Motown Carousels/headless-wordpress-clinic.pdf)

Document title: Before you go headless with WordPress

Going headless fixes some WordPress problems and leaves others alone. Use this checklist to see if it fits your site, then take the last two questions to whoever would build it.

## First comment (both posts)

https://motowntech.com/go/headless-wordpress-clinic
