"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/site";

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

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-black/15 transition-all duration-200 ${scrolled ? "bg-bg/90 backdrop-blur-lg" : "bg-bg"}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-[1380px] items-center gap-5 px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0 font-display text-[1.05rem] font-extrabold tracking-[-0.04em] text-ink">
          lolhi<span className="text-blue">dominic</span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href as any}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-sans text-[0.82rem] font-semibold transition-colors ${isActive(link.href) ? "text-blue" : "text-ink hover:text-blue"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden shrink-0 rounded-full border-[1.5px] border-ink bg-pink px-5 py-2.5 font-sans text-[0.8rem] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-lime md:block">
          Work With Me ↗
        </Link>

        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink bg-lime text-ink md:hidden">
          <span className="relative block h-[16px] w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-menu" className={`border-t border-black/15 bg-bg md:hidden ${open ? "block" : "hidden"}`}>
        <ul className="mx-auto flex max-w-[1380px] flex-col gap-1 px-5 py-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href as any} aria-current={isActive(link.href) ? "page" : undefined} className={`block border-b border-black/15 py-4 font-display text-3xl font-bold tracking-tight transition-colors ${isActive(link.href) ? "text-blue" : "text-ink hover:text-blue"}`}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-5 pt-2">
            <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full border-[1.5px] border-ink bg-pink px-6 py-3.5 font-sans text-sm font-bold text-ink transition hover:bg-lime">
              Work With Me ↗
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
