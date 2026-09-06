// Single source of truth for the personal brand site.

export const site = {
  name: "Dominic Pérignon",
  shortName: "lolhidominic",
  domain: "lolhidominic.com",
  url: "https://lolhidominic.com",
  org: "T-Time Media LLC",
  tagline: "Creator, storyteller, and brand builder.",
  description:
    "Dominic Pérignon is a Los Angeles-based creator, storyteller, and brand builder making videos, building brands, and telling stories that make people feel less alone.",
  email: "info@lolhidominic.com",
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work-with-me" },
  { label: "T-Time Media", href: "/t-time-media" },
  { label: "Contact", href: "/contact" },
];

export const externalLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com/lolhidominic", external: true },
  { label: "TikTok", href: "https://tiktok.com/@lolhidominic", external: true },
  { label: "YouTube", href: "https://youtube.com/@lolhidominic", external: true },
  { label: "Facebook", href: "https://facebook.com/lolhidominic", external: true },
];

export const socials = [
  { label: "Instagram", handle: "@lolhidominic", href: "https://instagram.com/lolhidominic" },
  { label: "TikTok", handle: "@lolhidominic", href: "https://tiktok.com/@lolhidominic" },
  { label: "YouTube", handle: "@lolhidominic", href: "https://youtube.com/@lolhidominic" },
  { label: "Facebook", handle: "@lolhidominic", href: "https://facebook.com/lolhidominic" },
];

export const categories = [
  "Media Literacy",
  "Trans Life",
  "Internet Culture",
  "Travel & Safety",
  "Representation",
] as const;

export type Category = (typeof categories)[number];
