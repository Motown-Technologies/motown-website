# Motown Solutions: product marketing context

Read by marketing skills (seo-audit, ai-seo, copywriting, ...) before they ask
questions. Facts here come from the site and the LinkedIn page; lines marked
TODO need the owner's input.

## Company

- Name: Motown Solutions. Site: https://motowntech.com
- What it is: a small services company (2-10 people) that designs, builds and
  rescues custom software. Not a SaaS product.
- Location: New York, NY (per the LinkedIn page). Phone +1-845-925-2661,
  contact@motowntech.com. Usually replies within 24 hours.
- LinkedIn tagline: "Custom software and AI for companies that have outgrown
  spreadsheets and off-the-shelf tools."

## Services

- Custom software and web applications, enterprise software, APIs, cloud apps
- AI development: AI agents, RAG, LLM fine-tuning, custom models, MLOps
- Web design and development, ecommerce (Shopify, headless commerce)
- Mobile apps (iOS, Android, cross-platform)
- Automation: workflow automation, business process automation, RPA, data
  integration, freight EDI
- Consulting: fractional CTO, technical due diligence, IT strategy, SOC 2
  readiness, software selection, startup consulting
- Problem-led landing pages: MVP development, prototype to production,
  spreadsheet to app, migrate from WordPress, legacy system modernization,
  cloud migration

## Proof

Six anonymised case studies: an auction house's operations system, a
multi-tenant donation platform, an endoscopy center (headless WordPress), a
multi-site healthcare practice, a grief-support nonprofit, a senior-care
concierge app. Thirteen blog posts adapted from these and the landing pages.

## Audience

- Founders and non-technical teams who need a first version built
- Operations leads at companies running on spreadsheets, low-code or aging
  internal systems
- Healthcare, nonprofit and regulated businesses that need careful handling of
  sensitive data
- Investors and acquirers (technical due diligence)

## Voice

Plain, specific, first person plural. No hype, no em dashes. Copy goes through
the humanizer skill. Clients stay anonymous.

## SEO

- Primary goal: qualified project inquiries through /contact.
- Region: based in New York, NY, serving clients US-wide (location in
  Organization JSON-LD, About and Contact; not in page titles).
- TODO: priority keywords.
- TODO: top competitors.
- TODO: Search Console access and current organic traffic baseline.
- Blog posts show no dates and carry no datePublished (owner decision).
- Service and landing pages: the H1 is the small label naming the service
  (matches the title keyword); the big slogan below it is a <p>.
- Site notes: Astro static site, deployed to GitHub Pages by
  .github/workflows/deploy.yaml on push to main (a Vercel project exists but
  is not production); sitemap, canonical, Open Graph and
  JSON-LD in BaseLayout; llms.txt and Markdown versions of every page for
  agents; blog at /blog with related-post links on source pages.
