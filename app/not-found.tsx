import Link from "next/link";

const helpfulLinks = [
  { label: "About Dominic", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "T-Time Media", href: "/t-time-media" },
  { label: "Writing", href: "/blog" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Press", href: "/press" },
  { label: "Link With Pride", href: "/link-with-pride" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="max-w-[14ch] font-display text-display-lg font-black text-white text-balance">
        That link has left the chat.
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
        The page you were looking for does not exist yet, moved, or got mistyped. These are the
        live sections of the site.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {helpfulLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href as Parameters<typeof Link>[0]["href"]}
            className="bg-bg px-6 py-5 font-display text-lg font-bold text-white transition-colors hover:bg-surface hover:text-flame"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
