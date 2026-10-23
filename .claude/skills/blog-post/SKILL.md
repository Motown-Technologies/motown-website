---
name: blog-post
description: Write a new Motown Solutions blog post end to end - draft from facts on the site or from the user, humanize it, generate the title card and (optionally) a Higgsfield image, check it in the dev preview, and write the matching LinkedIn post. Use when asked to write, draft or create a blog post or article for motowntech.com.
---

# Blog post

Posts live in `src/content/blog/<slug>.md`. The schema is in `src/content.config.ts`.
Copy the frontmatter layout of any existing post in `src/content/blog/`.

## 1. Pin down the topic and the facts

Get the topic from the user, or the page to adapt (a case study in
`src/pages/case-studies/`, a landing page in `src/pages/`, or `public/llms.txt`).
Read the source pages before writing.

Posts about Motown's own work use only facts from the site or from the user:
no invented clients, numbers, dates, quotes or results. Case-study clients are
anonymised on the site; keep them that way. If the post needs a fact you don't
have, ask.

General explainers (AI, software, security) may use general technical
knowledge, with these limits:

- No invented statistics, studies, quotes or client stories. Illustrate with
  a plainly hypothetical example ("say a clinic wants...") or a published
  case study.
- Check anything that changes fast (model names, prices, standards, product
  features) on the web while writing, and link the primary source.
- Link to the matching service page so the post connects to what we sell.

## 2. Write the draft

- Title: say what the post covers, not a teaser.
  - Name the topic in the first few words, the way a reader would search
    for it ("MVP", "WordPress migration", "technical due diligence").
  - Say what the reader gets: a decision, a method, or what changed for a
    client. Case-study posts name the kind of client and what was done
    ("How an auction house replaced its spreadsheets with a real app").
  - 45 to 60 characters (Google trims longer titles on mobile); posts have
    no brand suffix in the browser title.
  - Plain sentence case. No riddles, slogans or two-fragment lines
    ("X. Y.") as the whole title; a clever line can open the post instead.
    A colon only to separate topic from angle.
  - Test: someone who reads only the title can say what the post covers
    and whether it's for them.
- Slug: lowercase words joined by hyphens, unique, never a bare number
  (`/blog/2` is pagination).
- Frontmatter: `title`, `description` (one or two sentences; it is also the
  meta description and LinkedIn preview text, so keep it under ~155
  characters), `pubDate` (today unless the user gives a date, YYYY-MM-DD;
  it only orders posts and is not shown on the site),
  `category` (`case-stories` for posts about client work, `ai` for AI
topics, `software` for everything else), `relatedPages` (the site paths the post draws on, e.g.
  `["/case-studies/auction-operations", "/spreadsheet-to-app"]`; those pages
  then list the post under "Related posts"), `draft: true`.
- A future `pubDate` schedules the post: it stays out of the live build
  until that date, and the daily rebuild publishes it. `astro dev` shows it
  with a "Scheduled" label.
- Never date a post before the pages it links to existed
  (`git log --diff-filter=A --format=%ad --date=short -- <page file>`).
- Body: 600-1200 words, `##` headings, short paragraphs. Write like the case
  studies: concrete, first person plural, says what was decided and why.
  Link to the relevant service or case-study pages and end with a line
  pointing to /contact.

## 3. Humanize

Run the `humanizer` skill in embedded mode on the title, description and body.
The final text must have no em or en dashes.

## 4. Title card (always)

```sh
node scripts/title-card.mjs <slug>
```

This writes `src/assets/blog/<slug>.png` and adds `cover:` to the frontmatter.
The card is only the social preview (og:image), never shown on the site.
Re-run it if the title changes. Read the PNG and check that the title fits.

## 5. Post image (every post; about 2 Higgsfield credits each)

The image is the header of the post page and its thumbnail on /blog and the
homepage, so every published post needs one. Higgsfield allows about three
generations at a time on the current plan; submit in groups of three.

First write two things:

- `<scene>`: one sentence describing physical objects that stand for the
  post's idea (for example "a tall stack of paper ledgers beside one slim
  blue binder"). The house style in `scripts/cover-style.txt` is added
  automatically and already bans text, people, screens and AI cliches, so
  don't repeat those rules.
- `<alt text>`: a plain description of what the picture shows.

**With the Higgsfield MCP connector (preferred).** If Higgsfield tools are
available in this session:

1. Get the full prompt: `node scripts/cover-image.mjs <slug> "<scene>" "<alt text>" --dry-run`
2. Generate one image with the connector's `generate_image` tool, using
   that `prompt` verbatim, model `nano_banana_pro`, `aspect_ratio: "21:9"`,
   `resolution: "2k"`, `use_unlim: false` (about 2 credits). Wait for it
   with `jobs_wait` and take the result URL.
3. Save it: `node scripts/cover-image.mjs <slug> --url <image url> "<alt text>"`

**With the API instead.** If there is no connector but `.env` has
`HIGGSFIELD_KEY=<id>:<secret>`:

```sh
node scripts/cover-image.mjs <slug> "<scene>" "<alt text>"
```

If neither is set up, skip this step and tell the user; never ask them to
paste a key into the chat.

The script writes `src/assets/blog/<slug>-image.jpg` and sets `image` and
`imageAlt`. Read the JPG and show it to the user; re-run with a different
scene if they don't like it. Without an image the post page shows contour art,
which is fine.

## 6. Check it

- `npx astro check` must report 0 errors.
- Find the dev server with `npx astro dev status`; start one only if none is
  running. Give the user the URL `/blog/<slug>`.

## 7. LinkedIn post and carousel

Everything for LinkedIn lives in `linkedin/<slug>/` (see
`linkedin/auction-house-spreadsheets/` for a finished example). Run the
`humanizer` skill on all of it.

`post.md` holds two LinkedIn posts and the first comment:

- **Post 1, native text:** the point in the first two lines (that is all
  LinkedIn shows before "see more"), 150-300 words that stand on their own,
  no "read more at the link", no URL.
- **Post 2, carousel:** a document title (the carousel's cover line) and a
  2-3 sentence caption.
- **First comment (both posts):**
  `https://motowntech.com/blog/<slug>?utm_source=linkedin&utm_medium=social&utm_campaign=<slug>`
  (the tracking code shows LinkedIn visits in Vercel Web Analytics).

`carousel.json` holds the slide text:

```json
{ "cover": "hook, under ~55 characters", "slides": [{ "title": "under ~45 characters", "body": "one or two sentences, under ~140 characters" }] }
```

Use 4-6 slides, one point each, drawn from the post. The cover uses the
post's header image, and a closing "read the full write-up" slide is added
automatically. Then render it and check every slide:

```sh
node scripts/carousel.mjs <slug> --png <scratch dir>
```

This writes `~/Documents/Motown Carousels/<slug>.pdf` (upload that to
LinkedIn as a document post; it is not committed). Read the PNGs and fix any
text that wraps badly or overflows.

## 8. Stop

Leave `draft: true`. The user publishes by removing that line. Don't commit,
push or deploy unless asked.
