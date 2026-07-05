# lolhidominic.com

Personal blog and content hub for **Dominic Anthony Pérignon**. Built with Next.js (App Router), Tailwind CSS, and MDX. Operated under T-Time Media LLC.

---

## File tree

```
lolhidominic/
├── app/
│   ├── layout.tsx                  # Root layout: fonts, NavBar, Footer, SkipNav
│   ├── globals.css                 # Tailwind base + editorial component classes
│   ├── page.tsx                    # Home
│   ├── blog/
│   │   ├── page.tsx                # Blog index (filterable, all posts)
│   │   └── [slug]/
│   │       └── page.tsx            # Individual post (MDX via next-mdx-remote/rsc)
│   ├── about/
│   │   └── page.tsx
│   ├── work-with-me/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── link-with-pride/
│   │   └── page.tsx
│   └── press/
│       └── page.tsx
│
├── components/
│   ├── SkipNav.tsx                 # Accessibility skip link
│   ├── NavBar.tsx                  # Sticky top nav + mobile hamburger drawer
│   ├── Footer.tsx                  # Page links, socials, copyright
│   ├── SectionHeader.tsx           # Reusable eyebrow + heading + supporting text
│   ├── BlogCard.tsx                # Post card: cover image, category, title, excerpt, meta
│   ├── BlogFilter.tsx              # Client-side category filter + post grid
│   └── ContactForm.tsx             # Name / email / subject / message form
│
├── lib/
│   ├── site.ts                     # Single source of truth: nav, socials, categories, metadata
│   └── posts.ts                    # File-based MDX reader: getAllPosts, getPost, getFeaturedPost
│
├── content/
│   └── blog/
│       ├── algorithm-not-broken.mdx
│       ├── trans-travel-framework.mdx
│       └── both-sides-trans-coverage.mdx
│
├── public/
│   └── images/
│       └── blog/                   # Cover images referenced in MDX front matter
│
├── mdx-components.tsx              # MDX component overrides (hooks into next-mdx-remote)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Adding a blog post

Create a new `.mdx` file in `content/blog/`. Filename becomes the URL slug.

### Front matter schema

```yaml
---
title: string          # Required. The post headline.
excerpt: string        # Required. 1-2 sentences. Shown on cards and in meta descriptions.
category: string       # Required. Must be one of the Category union in lib/site.ts:
                       #   "Media Literacy" | "Trans Life" | "Internet Culture"
                       #   | "Travel & Safety" | "Representation"
date: string           # Required. ISO 8601, e.g. "2026-05-14"
cover: string          # Required. Path under /public, e.g. "/images/blog/my-post.jpg"
coverAlt: string       # Required. Real descriptive alt text. Never "hero image" or "blog cover."
featured: boolean      # Optional. true pins this post as the featured card on the home page.
                       # Only one post should be featured at a time.
---
```

### Body conventions

- **Headings**: Use `## H2` for main sections, `### H3` for sub-sections. No H1 inside posts (the page renders the title as H1).
- **Pull quotes**: Markdown blockquotes (`> ...`) render as editorial serif pull quotes via `.prose-editorial blockquote`.
- **Bold text**: Use `**bold**` for emphasis. Not for decoration.
- **Links**: Standard Markdown `[text](url)`. External links open in the same tab by default; override in `mdx-components.tsx` if needed.
- **No images inside MDX bodies**: Use the cover image. If you need an inline figure, add an `<Image>` component import to `mdx-components.tsx` first.

---

## Categories

Defined as a const in `lib/site.ts`. To add a new category:

1. Add it to the `categories` array in `lib/site.ts`.
2. The `BlogFilter` component picks it up automatically.
3. Use the exact string in your MDX front matter.

---

## Design tokens (Tailwind)

| Token | Value | Usage |
|---|---|---|
| `ink` | `#14110F` | Primary text, borders |
| `paper` | `#F4F0E9` | Page background (light mode) |
| `flame` | `#FF4A1C` | The single accent. Use sparingly. |
| `taupe` | `#9B8B7A` | Secondary/muted text |
| `night` | `#0E0D0C` | Dark mode background |
| `font-display` | Archivo | Headlines, nav, labels, buttons |
| `font-sans` | Hanken Grotesk | Body copy |
| `font-serif` | Newsreader (italic) | Pull quotes, footer tagline, texture |

---

## Contact form

`ContactForm.tsx` currently confirms locally (no backend). To wire a real endpoint:

1. Replace the `handleSubmit` function with a `fetch()` to your endpoint or form service (Formspree, Resend, etc.).
2. Add error state alongside `"sent"`.

---

## Dark mode

Handled via Tailwind `dark:` classes using `darkMode: "media"` (system preference). No manual toggle. To add one: switch `tailwind.config.ts` to `darkMode: "class"` and add a toggle to `NavBar.tsx`.

---

## Deployment

Standard Next.js build:

```bash
npm install
npm run dev     # local dev
npm run build   # production build
npm run start   # serve production build
```

Images in `public/images/blog/` are served statically. Add real covers matching the `cover` paths in each MDX file before going to production.
# LolHiDominic
