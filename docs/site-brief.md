# Site Brief — Creative Direction, Content & Architecture (Locked)

Status: **Locked for build.** This is the reference document for all future work on
lolhidominic.com. It reconciles the answers Dominic gave in the original planning
conversation with what already exists in this Next.js codebase, so we build on top
of the real site instead of re-deciding things mid-implementation.

Stack: **Next.js (App Router) + Tailwind + MDX, deployed on Vercel** — not Astro.
The site already exists and is functional; this brief is about evolving it, not
rebuilding from zero.

---

## 1. Positioning

**Primary job:** all three at once, in this priority order —
1. Personal home on the internet (this is Dominic's real home base, not a funnel)
2. Creator + business hub (content, T-Time Media, Link With Pride, T-Time the series)
3. Portfolio that gets him hired by brands

**One-liner (locked):**
> Dominic is a creator, storyteller, and entrepreneur creating media around
> lifestyle, fashion, and queer culture.

**Audience priority (highest to lowest):**
1. Fans / followers
2. People interested in his businesses/projects
3. People discovering him through Google
4. Other creators
5. Brands / agencies
6. Potential clients

Design implication: the homepage should read like a creator's home first and a
brand pitch deck second. Brand-facing proof (stats, logos, work) supports the
story — it doesn't lead it.

**Personality target:** when someone lands on the site, they should think
*"how can I become a creator like him?"* — aspirational, not corporate.

---

## 2. Visual direction

| Decision | Answer |
|---|---|
| Feel | Playful & masculine, editorial, heavy/experimental — "unlike every other creator website" |
| Experimentation level | 4/4 — unconventional layouts, animation, interactions encouraged |
| Animation | Heavy/editorial |
| Photography | Balanced (not photo-only, not video-only) |
| Modes | Both light and dark mode required |
| Mobile | Extremely important — most discovery happens via social |

**Color system (locked):**
- **Flame red (`#FF4A1C`, already defined as the unused `flame` token) becomes
  the single primary accent**, replacing trans-flag blue/pink (`#5BCEFA` /
  `#F5A9B8`) everywhere — buttons, links, active states, highlights, and the
  footer stripe.
- No secondary trans-flag color motif — red is the whole accent story. Queer
  identity comes through in content and voice (Journal posts, Pride
  partnerships in the work section), not through a reserved color palette.
- Base neutrals (ink/paper/night/bg/surface) carry over from the existing token
  set — they already support both a dark cinematic base and a light mode swap.
- **Action item:** the existing `tailwind.config.ts` needs `darkMode: "class"`
  with a real toggle (it's currently `"media"`, system-preference only, and
  there's no light mode built yet — this is new work, not a tweak).

**Typography:** no fonts requested by Dominic. Recommendation: keep the
existing pairing (Archivo/display serif for headlines, Hanken Grotesk for body,
Newsreader italic for pull quotes/editorial texture) — it's already a
distinctive, non-generic pairing and matches "editorial." Revisit only if a
mockup shows it fighting the new red-forward direction.

---

## 3. Site architecture / navigation

Keep the existing nav shape, Dominic confirmed it's a good start, with these
changes:

| Nav item | Change |
|---|---|
| Home | — |
| About | — |
| Work | Expand into a real `/work` section: brand collaboration wall (logos) + case-study-style entries, not just a "hire me" pitch page. Rename from `/work-with-me` is optional; keep the route, just deepen the content. |
| **T-Time** *(new)* | Umbrella page for the other ventures — T-Time Media LLC, T-Time (the series), Link With Pride. Replaces the standalone `/t-time-media` as the single "other projects" hub, since Q13 confirmed these should be included, visibly, on the main site. |
| Journal | Renamed from "Writing." Existing MDX blog engine and all 3 posts stay as-is. |
| Contact | Combination flow — see §6. |

`Link With Pride`, `Press`, and social links stay as they are structurally
(external link list + footer), just re-skinned in the new palette.

---

## 4. Homepage sections (locked)

In order, top to bottom:

1. **Hero/intro** — yes, keep the existing large-type hero, re-skin in red.
2. **Featured video/reel** — yes, *new*. A YouTube embed near the top, since
   YouTube is a named platform and Dominic wants the site photo/video-balanced.
3. **About (short)** — yes, keep the existing "the story" section.
4. **Stats/social proof** — yes, keep (already exists: 175K+ IG, 100K+ TikTok, etc.).
5. **Brand collaborations (logo wall)** — yes, *new component*. See §5/§7.
6. **Selected work / T-Time hub** — yes, keep, reframed to include T-Time (the series) and Link With Pride.
7. **Testimonials** — yes, *new*. Needs testimonial copy/attribution from Dominic.
8. **Brand-partnership CTA band** — yes, keep existing block.
9. **Contact CTA** — yes, keep existing block.

Not on the homepage: blog/newsletter signup section (Journal is nav-only,
no newsletter exists), digital products (none yet), press callouts (kept on
their own `/press` page instead of crowding the homepage).

---

## 5. New components needed

| Component | Purpose |
|---|---|
| `BrandLogoWall` | Grid of the 16 collaboration logos (§7), links to `/work` |
| `VideoEmbed` / `FeaturedVideo` | Embeds a YouTube video on the homepage and/or `/work` |
| `TestimonialCard` / `TestimonialGrid` | Renders quote + name + role/company |
| `ArticleEmbed` | Renders the Nurx.com article as a pull-quote/preview card linking out (Nurx likely won't allow a true iframe embed — treat as a linked feature card with a pulled excerpt, confirm content with Dominic) |
| `MediaKitSection` | On an `/about` or dedicated `/media-kit` page: downloadable PDF button + interactive on-page stats/bio/logo-usage summary |
| Dark/light mode toggle | Extends `NavBar` — needs `ThemeProvider`/localStorage-backed toggle since Tailwind moves to `class` mode |

Everything else (`NavBar`, `Footer`, `SectionHeader`, `BlogCard` → rename to
`JournalCard`, `ContactForm`) is reused, re-skinned, not rebuilt.

---

## 6. Contact / inquiries

**Locked: combination flow (Q15 = E).**
- General "Contact" → existing `ContactForm` (name/email/subject/message), kept.
- "Work With Me" CTA → same form, but pre-selects a "Brand Inquiry" subject, or
  gets a dedicated brand-inquiry variant of the form (decide during build —
  doesn't need to block this brief).
- Email (`info@lolhidominic.com`) stays visible as a fallback everywhere the
  form appears.
- Media kit (PDF + interactive) is offered from the same area — see §5.

---

## 7. Brand collaborations to feature

Dedicated `/work` section, logo wall + case-study-style entries, featuring:

Plume Clinic, Fossil, Taimi App, Urban Outfitters, PFLAG, UnclosetedMedia,
Celsius, World Pride 2025, LivLarq, Coachella, Threadbeast, Folx Health,
Nothing Tech, My Chefman, Sashiko Studio, Capitol Pride Alliance, Portland
Pride, PRIDE Las Vegas.

**Open item:** need actual logo assets (SVG/PNG, transparent) for all 16 before
this can ship — placeholder wordmarks otherwise.

---

## 8. Other ventures (included, not spun off)

Per Q13, these live inside lolhidominic.com rather than getting separate sites:
- **T-Time Media LLC** — the studio/production entity
- **T-Time (the series)** — the show
- **Link With Pride** — LGBTQ+ travel platform (already has its own page/domain
  referenced; site links out to linkwithpride.com but also gets a summary
  presence here)

---

## 9. Social links (confirmed URLs)

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/lolhidominic |
| TikTok | https://www.tiktok.com/@lolhidominic |
| YouTube | https://youtube.com/@lolhidominic |
| Facebook | https://www.facebook.com/dominicsview |
| Threads | https://www.threads.com/@lolhidominic |

**Note:** the codebase's `lib/site.ts` currently has stale handles/URLs
(`facebook.com/domfactcheck` instead of `dominicsview`, no Threads entry) —
needs to be updated to match the list above during implementation.

---

## 10. Content to pull in

Available now: photos, brand logos (pending actual files, see §7), the Nurx.com
article (link to embed/excerpt — get URL from Dominic), YouTube videos,
testimonials (pending copy), media kit (pending file or content for an
interactive version).

Not available / not needed: Substack or any newsletter platform (none in use,
no newsletter section planned), press clippings beyond what's already on
`/press`.

---

## 11. SEO & infra

- Build with full SEO from the start: metadata, Open Graph, sitemap, canonicals,
  clean URLs, optimized images. (Already partially in place via Next's
  `Metadata` API — extend consistently across new pages.)
- No RSS/schema markup priority beyond standard Article schema on Journal posts.
- Analytics: undecided — flag to Dominic before shipping; Vercel Analytics is
  the path of least resistance since the project is already on Vercel.
- Domain/hosting: `lolhidominic.com` is already connected to Vercel — no
  migration needed, just keep shipping to the existing project.

---

## 12. Explicitly out of scope for now

- No blog/newsletter platform integration (Substack, Beehiiv, etc.)
- No digital products section
- No separate identities for T-Time Media / Link With Pride / T-Time the series
  — they live inside this site (§8)
- No Astro migration

---

## 13. Open items blocking full implementation

1. Actual logo files for the 16 brand collaborations (§7)
2. Testimonial copy + attribution
3. Nurx.com article URL to embed/excerpt
4. Which YouTube video(s) to feature on the homepage
5. Media kit source (existing PDF, or raw content to build one)
6. Analytics decision (Vercel Analytics vs. none vs. other)
7. Brand-inquiry form: same `ContactForm` with a preset subject, or a distinct form — implementation detail, doesn't block starting

Once these land, implementation can proceed section by section against this
brief without further open design questions.
