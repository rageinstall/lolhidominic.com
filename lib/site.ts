// Single source of truth for navigation, socials, and platform links.
// Update once here and every NavBar / Footer / page stays in sync.

export const site = {
  name: "Dominic Anthony Pérignon",
  shortName: "lolhidominic",
  domain: "lolhidominic.com",
  url: "https://lolhidominic.com",
  org: "T-Time Media LLC",
  // One line, his voice, used in metadata + footer.
  tagline:
    "Dominic sharing weed, travel, cooking, movies, and gaming from a real-life perspective.",
  description:
    "A personal site for travel notes, weed life, cooking experiments, movie reactions, and the everyday thoughts of Dominic Anthony Pérignon.",
  email: "info@lolhidominic.com",
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

// Internal pages, in nav order.
export const navLinks: NavLink[] = [
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Press", href: "/press" },
  { label: "Link With Pride", href: "/link-with-pride" },
  { label: "Contact", href: "/contact" },
];

// External destinations. linkwithpride first, then the social handles.
export const externalLinks: NavLink[] = [
  { label: "Link With Pride", href: "https://linkwithpride.com", external: true },
  { label: "Instagram", href: "https://instagram.com/lolhidominic", external: true },
  { label: "Threads", href: "https://threads.com/@lolhidominic", external: true },
  { label: "YouTube", href: "https://youtube.com/@lolhidominic", external: true },
  { label: "Facebook", href: "https://facebook.com/domfactcheck", external: true },
];

export const socials = [
  { label: "Instagram", handle: "@lolhidominic", href: "https://instagram.com/lolhidominic" },
  { label: "Threads", handle: "@lolhidominic", href: "https://threads.com/@lolhidominic" },
  { label: "YouTube", handle: "@lolhidominic", href: "https://youtube.com/@lolhidominic" },
  { label: "Facebook", handle: "@domfactcheck", href: "https://instagram.com/domfactcheck" },
];

// Blog topics. These drive both front matter validation and the filter UI.
export const categories = [
  "Media Literacy",
  "Trans Life",
  "Internet Culture",
  "Travel & Safety",
  "Representation",
] as const;

export type Category = (typeof categories)[number];
