// Verified projects only. Do not add unverified clients, campaigns, or claims here.
export type Project = {
  slug: string;
  title: string;
  type: string;
  body: string;
  href: string;
  external?: boolean;
};

export const projects: Project[] = [
  {
    slug: "t-time-media",
    title: "T-Time Media",
    type: "Studio",
    body: "The creative studio behind Dominic's work — video, brand building, sponsored campaigns, and experiences.",
    href: "/t-time-media",
  },
  {
    slug: "link-with-pride",
    title: "Link With Pride",
    type: "Platform",
    body: "A platform built from zero focused on travel and LGBTQ+ experiences.",
    href: "/link-with-pride",
  },
  {
    slug: "domfactcheck",
    title: "@domfactcheck",
    type: "Media",
    body: "A fact-checking and media-literacy project launched as a sub-brand.",
    href: "https://instagram.com/domfactcheck",
    external: true,
  },
  {
    slug: "lolhidominic",
    title: "LolHiDominic",
    type: "Creator",
    body: "Dominic's personal creator platform and storytelling feed.",
    href: "https://instagram.com/lolhidominic",
    external: true,
  },
];
