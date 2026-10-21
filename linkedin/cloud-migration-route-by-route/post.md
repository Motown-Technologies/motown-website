# LinkedIn: cloud-migration-route-by-route

## Post 1: native text

When we look at a company's AWS, GCP or Azure bill, the expensive part is rarely the compute.

It's egress, capacity reserved for a peak that hardly ever comes, and managed services priced for a scale the business hasn't reached.

Most of a typical app can move to Cloudflare cleanly. A migration starts with a list of every workload, and each one goes into one of three groups: it moves as it is, it needs a bridge, or it stays where it is.

Some of the usual moves:

• API routes go to Workers, billed per request and scaled to zero when traffic is quiet.
• Files in S3 go to R2, which speaks the same S3 API with no egress fees. For apps that serve files, that alone is often the business case.
• Cron jobs become Cron Triggers, and the server that only ran crontab gets retired.

GPU workloads, long-running stateful services and anything behind a hard-won compliance boundary stay put, with Cloudflare in front.

The cutover happens route by route, behind the DNS you already have, and users keep the same URLs throughout.

If your cloud bill has grown faster than your traffic, the full write-up is in the comments.

## Post 2: carousel (carousel.pdf)

Document title: Where your cloud bill actually goes

Most cloud bills pay for egress and idle capacity more than compute. Here's how we decide what moves to Cloudflare, what stays, and how the cutover works. The full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/cloud-migration-route-by-route?utm_source=linkedin&utm_medium=social&utm_campaign=cloud-migration-route-by-route
