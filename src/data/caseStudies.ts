// Case studies, shared by /case-studies and the homepage's selected work.
// `result` is the plain-language outcome shown on the homepage; clients
// are anonymous and there are no hard numbers, so it describes what changed.
import type { ImageMetadata } from "astro";
// Screens are reconstructions with placeholder data, not client screenshots.
import auctionImage from "../assets/work/auction-operations.png";
import seniorCareImage from "../assets/work/senior-care-concierge.png";
import donationImage from "../assets/work/donation-platform.png";

export interface CaseStudy {
    href: string;
    sector: string;
    title: string;
    body: string;
    stack: string;
    result?: string;
    image?: ImageMetadata;
    imageAlt?: string;
}

export const studies: CaseStudy[] = [
    {
        href: "/case-studies/endoscopy-center",
        sector: "Healthcare, outpatient endoscopy",
        title: "Staff still edit WordPress. Patients never load it.",
        body: "A full WordPress site rebuilt as static HTML with WordPress kept as a headless CMS. Pressing publish is what builds the site, and the CMS can be down without anyone outside the office noticing.",
        stack: "Astro · WPGraphQL · Appwrite Sites",
    },
    {
        href: "/case-studies/healthcare-practice",
        sector: "Healthcare, multi-site practice",
        title: "We inherited their stack. We left them a site that publishes itself.",
        body: "Someone else's React app and a Django admin panel doing duty as a CMS. Three years of quiet work later: a static site, a real authoring experience, and a build that can refuse to deploy.",
        stack: "Astro · Wagtail · Django",
    },
    {
        href: "/case-studies/senior-care-concierge",
        sector: "Senior care, multi-facility",
        title: "A prototype proves the idea. It can't hold someone's name.",
        body: "A concierge team's low-code proof of concept rebuilt as a production application with the same workflow, plus authentication, per-facility isolation, audit trails and PHI handled as PHI.",
        stack: "Laravel · Vue · Postgres",
        result: "Each facility sees only its own records, and every reveal of personal data is logged.",
        image: seniorCareImage,
        imageAlt: "Concierge request list for one facility, with resident names masked, a Reveal button noting that reveals are logged, and an audit timeline.",
    },
    {
        href: "/case-studies/auction-operations",
        sector: "Auction house, internal ops",
        title: "A spreadsheet knows what. It never knows who, or when.",
        body: "Spreadsheets, a photo folder and a group chat replaced by one auditable system of record that runs from intake to catalog to auction, with AI drafting the tedious part and a person approving all of it.",
        stack: "Laravel · Vue · Postgres",
        result: "One record per item from intake to sold, with every change attributed to a person.",
        image: auctionImage,
        imageAlt: "Catalog screen for one lot: four photos of a brass candlestick, an AI-drafted title and description waiting for approval, and a timeline of who changed what.",
    },
    {
        href: "/case-studies/nonprofit-community",
        sector: "Nonprofit, grief support",
        title: "Nobody arrives here wanting to use software.",
        body: "A public site, a members' app and the back office a small nonprofit now runs itself from, built for people arriving in grief, with a Hebrew-calendar memorial at its center.",
        stack: "Laravel · Vue · Inertia",
    },
    {
        href: "/case-studies/donation-platform",
        sector: "Nonprofit fundraising, multi-tenant",
        title: "Screen every donor. Tell none of them.",
        body: "A giving platform that takes payments for other organizations, so sanctions screening, charity verification and retry-safe grants shaped the architecture from the start.",
        stack: "Node · Postgres · Cloudflare Workers",
        result: "Every donor is screened in about half a millisecond, and a flagged gift is declined without naming a watchlist.",
        image: donationImage,
        imageAlt: "A $250 donation showing screening cleared, the charity verified, the grant marked sent, and the screening logged.",
    },
];
