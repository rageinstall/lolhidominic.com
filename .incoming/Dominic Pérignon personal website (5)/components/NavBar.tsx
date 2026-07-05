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
          lolhi<span className="text-blue">dominic</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-sans text-[0.84rem] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-blue"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
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
          className="ml-auto flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`border-t border-hairline bg-bg md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-2.5 font-display text-2xl font-semibold tracking-tight transition-colors ${
                  isActive(link.href) ? "text-blue" : "text-ink"
                }`}
                style={{ letterSpacing: "-0.02em" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-6 border-t border-hairline pt-6">
            <a
              href="/contact"
              className="inline-flex rounded-pill bg-gradient-to-br from-blue to-pink px-6 py-2.5 font-sans text-sm font-semibold"
              style={{ color: "#0a0f1c" }}
            >
              Subscribe
            </a>
          </li>
          <li className="mt-4">
            <a href="https://linkwithpride.com" className="block py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-blue">
              linkwithpride.com &rarr;
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
