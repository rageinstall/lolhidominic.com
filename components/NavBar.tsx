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
    <header className={`sticky top-0 z-50 border-b transition-all duration-200 ${scrolled ? "border-hairline bg-bg/85 backdrop-blur-lg" : "border-hairline bg-bg/95"}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-[1320px] items-center gap-5 px-6 py-[15px] md:px-8">
        <Link href="/" className="shrink-0 font-display text-base font-bold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}><span>lolhi</span><span className="text-blue">dominic</span></Link>
        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {navLinks.map((link) => <li key={link.href}><Link href={link.href as any} aria-current={isActive(link.href) ? "page" : undefined} className={`font-sans text-[0.84rem] font-medium transition-colors ${isActive(link.href) ? "text-blue" : "text-ink-muted hover:text-white"}`}>{link.label}</Link></li>)}
        </ul>
        <Link href="/contact" className="hidden shrink-0 rounded-full bg-white px-5 py-2 font-sans text-[0.82rem] font-semibold text-bg transition hover:bg-blue md:block">Work With Me</Link>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="ml-auto flex h-11 w-11 items-center justify-center rounded-[8px] border border-blue/55 bg-surface text-white md:hidden"><span className="relative block h-[18px] w-6" aria-hidden="true"><span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} /><span className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-blue transition-opacity duration-200 ${open ? "opacity-0" : ""}`} /><span className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} /></span></button>
      </nav>
      <div id="mobile-menu" className={`border-t border-blue/25 bg-bg shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:hidden ${open ? "block" : "hidden"}`}>
        <ul className="mx-auto flex max-w-[1320px] flex-col gap-1 px-6 py-7">
          {navLinks.map((link) => <li key={link.href}><Link href={link.href as any} aria-current={isActive(link.href) ? "page" : undefined} className={`block border-b border-white/10 py-3 font-display text-2xl font-semibold tracking-tight transition-colors ${isActive(link.href) ? "text-blue" : "text-white hover:text-blue"}`}>{link.label}</Link></li>)}
          <li className="mt-5 pt-2"><Link href="/contact" className="inline-flex w-full items-center justify-center rounded-[8px] bg-white px-6 py-3 font-sans text-sm font-bold uppercase tracking-label text-bg transition hover:bg-blue">Work With Me</Link></li>
        </ul>
      </div>
    </header>
  );
}
