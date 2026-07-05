"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, site } from "@/lib/site";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-hairline bg-bg/85 backdrop-blur-lg"
          : "border-hairline bg-bg/95"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1320px] items-center gap-5 px-8 py-[15px]"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="shrink-0 font-display text-base font-bold tracking-tight text-ink"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-white">lolhi</span><span className="text-blue">dominic</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  className="font-sans text-[0.84rem] font-medium transition-colors text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href as Parameters<typeof Link>[0]["href"]}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`font-sans text-[0.84rem] font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-blue"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Subscribe CTA */}
        <a
          href="/contact"
          className="hidden shrink-0 rounded-pill bg-gradient-to-br from-blue to-pink px-5 py-2 font-sans text-[0.82rem] font-semibold text-bg md:block"
          style={{ color: "#0a0f1c" }}
        >
          Subscribe
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-[8px] border border-blue/55 bg-surface text-white shadow-[0_0_0_1px_rgba(91,206,250,0.12),0_0_18px_rgba(91,206,250,0.16)] transition-colors hover:border-blue hover:bg-surface2 md:hidden"
        >
          <span className="relative block h-[18px] w-6" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-blue transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`border-t border-blue/25 bg-bg shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex max-w-[1320px] flex-col gap-1 px-6 py-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  className="block border-b border-white/10 py-3 font-display text-2xl font-semibold tracking-tight text-white transition-colors hover:text-blue"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href as Parameters<typeof Link>[0]["href"]}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block border-b border-white/10 py-3 font-display text-2xl font-semibold tracking-tight transition-colors ${
                    isActive(link.href) ? "text-blue" : "text-white hover:text-blue"
                  }`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="mt-5 pt-2">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-[8px] bg-gradient-to-br from-blue to-pink px-6 py-3 font-sans text-sm font-bold uppercase tracking-label shadow-[0_10px_24px_rgba(91,206,250,0.18)]"
              style={{ color: "#0a0f1c" }}
            >
              Subscribe
            </a>
          </li>
          <li className="mt-4">
            <a href="https://linkwithpride.com" className="block rounded-[8px] border border-blue/30 bg-blue/10 px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-blue">
              linkwithpride.com &rarr;
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
