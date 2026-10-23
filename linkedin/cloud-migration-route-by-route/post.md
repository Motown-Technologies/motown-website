# LinkedIn: cloud-migration-route-by-route

## Post 1: native text

If your cloud bill has grown faster than your traffic, the cause is rarely compute.

Look at a recent invoice. The big lines are usually egress on every file users download, servers sized for a peak that hardly ever comes, and a load balancer, firewall and CDN that each bill separately.

A cheaper platform can fix that. The worry is the move itself: one weekend where everything switches at once and any problem reaches every user.

You don't have to migrate that way. A few things make it gradual:

• List every workload and sort it into three groups: moves as it is, needs a bridge, or stays where it is.
• Be honest about what stays. GPU work, long-running stateful services and hard-won compliance boundaries are often best left alone.
• Move one route at a time behind the DNS you already control, so users keep the same URLs throughout.
• Start where savings are high and risk is low. File storage is often first, because moving it removes egress fees without touching application code.

Then look at the bill after the easy moves and decide on the rest.

We wrote up how to read the invoice and decide what moves. Link in the comments.

## Post 2: carousel (~/Documents/Motown Carousels/cloud-migration-route-by-route.pdf)

Document title: Cut your cloud bill without a risky cutover

Most cloud bills pay for egress and idle capacity more than compute. How to read yours, decide what moves and migrate one route at a time. The full write-up is in the comments.

## First comment (both posts)

https://motowntech.com/blog/cloud-migration-route-by-route?utm_source=linkedin&utm_medium=social&utm_campaign=cloud-migration-route-by-route
