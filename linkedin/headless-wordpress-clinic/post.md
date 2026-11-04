# LinkedIn: headless-wordpress-clinic

## Post 1: native text

At an outpatient endoscopy center we worked with, WordPress could now go down for a week and patients would never notice.

Staff liked editing their site in WordPress. Nobody liked how it loaded. Without a page cache, WordPress builds every page from scratch for each visitor, so a bad plugin update or a slow database could land in front of a patient.

We kept WordPress for editing and built the public site from it ahead of time as plain pages, which developers call headless WordPress. Staff edit the way they always have. Patients never touch WordPress.

The decision we cared most about was publishing. If every edit needed a developer, we'd have traded a slow site for slow publishing. Now an editor presses publish, the site waits ninety seconds so ten quick saves become one rebuild, and the new pages go live only once the whole set is ready. Edits take a minute or two to appear.

If WordPress is down during a build, the build fails and the previous site stays up.

If someone pitches you this setup, ask to watch a full publishing cycle, failed build included, and find out how your editors will notice a failure and who helps them publish again.

## Post 2: carousel (~/Documents/Motown Carousels/headless-wordpress-clinic.pdf)

Document title: Before you go headless with WordPress

Going headless fixes some WordPress problems and leaves others alone. Use this checklist to see if it fits your site, then take the last two questions to whoever would build it.

## First comment (both posts)

https://motowntech.com/go/headless-wordpress-clinic
