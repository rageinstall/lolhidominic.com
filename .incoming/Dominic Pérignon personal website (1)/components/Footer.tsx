import Link from "next/link";
import { navLinks, socials, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper-soft dark:border-paper/10 dark:bg-night-soft">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Sign-off, his voice */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tightest text-ink dark:text-paper"
            >
              lolhi<span className="text-flame">dominic</span>
            </Link>
            <p className="mt-4 max-w-sm font-serif text-lg italic leading-snug text-ink/70 dark:text-paper/70">
              Reading culture out loud so the rest of us can stop guessing.
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow mb-4">Pages</h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-sm font-medium text-ink/70 transition-colors hover:text-flame dark:text-paper/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Find him */}
          <div className="md:col-span-4">
            <h2 className="eyebrow mb-4">Find me</h2>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-baseline gap-2"
                  >
                    <span className="font-display text-sm font-medium text-ink/70 transition-colors group-hover:text-flame dark:text-paper/70">
                      {s.label}
                    </span>
                    <span className="text-xs text-ink/40 dark:text-paper/40">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://linkwithpride.com"
                  className="font-display text-sm font-medium text-flame"
                >
                  linkwithpride.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-2 pt-6 text-xs text-ink/50 dark:text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.org}. All rights reserved.
          </p>
          <p className="font-display tracking-tight">
            Built and run out of {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
