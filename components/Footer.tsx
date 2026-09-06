import Link from "next/link";
import { navLinks, socials, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="mx-auto max-w-[1320px] px-8 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl font-bold text-ink" style={{ letterSpacing: "-0.03em" }}>
              <span className="text-ink">lolhi</span><span className="text-blue">dominic</span>
            </Link>
            <p className="mt-4 max-w-[28ch] font-serif italic text-lg leading-snug text-ink-muted">
              Creator, storyteller, and brand builder making things that make people feel less alone.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-label text-ink-faint">{site.org}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow mb-4 text-ink-faint">Pages</h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href as Parameters<typeof Link>[0]["href"]} className="font-sans text-sm text-ink-muted transition-colors hover:text-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="eyebrow mb-4 text-ink-faint">Find me</h2>
            <ul className="flex flex-col">
              {socials.map((s) => (
                <li key={s.label} className="flex items-baseline justify-between border-b border-hairline py-2 last:border-0">
                  <a href={s.href} className="font-sans text-sm text-ink-muted transition-colors hover:text-blue">
                    {s.label}
                  </a>
                  <span className="font-mono text-[0.72rem] text-ink-faint">{s.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-hairline pt-6">
          <p className="font-mono text-[11px] tracking-[0.04em] text-ink-faint">&copy; {year} {site.org}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
