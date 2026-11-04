# motown-lp

## Git

- **Never add attribution to commit messages.** No `Co-authored-by:` trailers, no
  `Claude-Session:` trailers, no "Generated with Claude Code" footers — in commit
  messages, PR titles, or PR bodies. Commits are authored by the repo owner alone.

## Content

- **Always run generated content through the `humanizer` skill before you
  finish.** This covers page copy, blog posts, LinkedIn posts, carousel text,
  meta descriptions and FAQs: any prose a reader will see. Run it on new
  copy and on rewrites, and do it before reporting the work as done.
- The humanizer removes AI tells. It must not remove opinions, specific
  details or warmth. If a pass leaves a paragraph bland, rewrite it around a
  specific detail instead of accepting the flat version.

## Voice

Write for a non-technical business owner deciding whether to build, buy or
fix software. Be warm and direct: plain words, one clear opinion per post, and
a dry line now and then where the topic allows it. No hype.

**Case stories** (`category: case-stories`) read like a builder's notebook:
what we ran into at a client, what we decided, why, and what we'd do again.

- Open on the most surprising specific detail, not a thesis.
- Headings say what happened or what we learned, not instructions.
- Advice comes out of the story near the end; it doesn't set the structure.

**Explainers** (`software`, `ai`) read like a trusted advisor: open on a moment
the owner recognizes, give a recommendation and its tradeoff, and end on one
thing they can do this week. `backups-vs-disaster-recovery` is the model.

Every post:

- Grounded and human, with substance: the problem the client had, how we
  approached it, and what changed for the people using it.
- Never write about copy or wording changes, or about code we wrote or
  changed (tests, coverage, libraries, implementation). Describe what the
  software does and why, in terms an owner would use.
- Keep it short: about 350 to 600 words for a blog post. Shorter beats
  complete.
- One idea. Cut any section that doesn't serve it; the case study page holds
  the build inventory.
- Say what we think ("We'd skip this." "This is the gap we see most."), but
  only opinions we hold and facts from the site or the user.
- Keep the odd, specific detail. It is the voice. Don't generalize it away.
- "We" for what we did, "you" for the reader's situation. Instructions to the
  reader ("Make sure…", "Also check…") at most once or twice per post.
- Vary sentence length. A short sentence can carry the point.
- LinkedIn: story first for case stories. At most one bulleted list, and not
  in every post.
