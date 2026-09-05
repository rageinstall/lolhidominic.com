// Single source of truth for the personal brand site.

export const site = {
  name: "Dominic Anthony Pérignon",
  shortName: "lolhidominic",
  domain: "lolhidominic.com",
  url: "https://lolhidominic.com",
  org: "T-Time Media LLC",
  title: "Dominic Anthony Pérignon — Creator, Storyteller & Entrepreneur",
  tagline: "Creator, Storyteller & Entrepreneur",
  description:
    "Dominic Pérignon is a creator, storyteller, and entrepreneur making videos, building brands, and telling stories that make people feel less alone.",
  email: "info@lolhidominic.com",
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "T-Time Media", href: "/t-time-media" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = { label: "Work With Me", href: "/work-with-me" };

export const externalLinks: NavLink[] = [
  { label: "Link With Pride", href: "https://linkwithpride.com", external: true },
  { label: "Instagram", href: "https://www.instagram.com/lolhidominic", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@lolhidominic", external: true },
  { label: "YouTube", href: "https://youtube.com/@lolhidominic", external: true },
  { label: "Facebook", href: "https://www.facebook.com/dominicsview", external: true },
];

export const socials = [
  { label: "Instagram", handle: "@lolhidominic", href: "https://www.instagram.com/lolhidominic" },
  { label: "TikTok", handle: "@lolhidominic", href: "https://www.tiktok.com/@lolhidominic" },
  { label: "YouTube", handle: "@lolhidominic", href: "https://youtube.com/@lolhidominic" },
  { label: "Facebook", handle: "@dominicsview", href: "https://www.facebook.com/dominicsview" },
];

// Current, verified audience figures. Update here as numbers change — do not
// invent totals for platforms not tracked (e.g. Facebook, Threads).
export const stats = [
  { value: "175K+", label: "Instagram followers" },
  { value: "100K+", label: "TikTok followers" },
  { value: "1,820", label: "YouTube subscribers" },
  { value: "278K+", label: "Combined across Instagram, TikTok & YouTube" },
];

export const audienceNote = "1.2M+ TikTok views in the last 28 days";

export const categories = [
  "Media Literacy",
  "Trans Life",
  "Internet Culture",
  "Travel & Safety",
  "Representation",
] as const;

export type Category = (typeof categories)[number];
