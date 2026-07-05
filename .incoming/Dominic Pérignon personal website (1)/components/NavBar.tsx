"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, site } from "@/lib/site";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md dark:border-paper/10 dark:bg-night/85">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tightest text-ink dark:text-paper"
        >
          lolhi<span className="text-flame">dominic</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-display text-sm font-medium tracking-tight transition-colors hover:text-flame ${
                  isActive(link.href)
                    ? "text-flame"
                    : "text-ink/70 dark:text-paper/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform duration-300 ease-editorial dark:bg-paper ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity duration-200 dark:bg-paper ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ease-editorial dark:bg-paper ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-1 border-t border-ink/10 px-5 py-6 dark:border-paper/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-2 font-display text-2xl font-bold tracking-tight ${
                  isActive(link.href)
                    ? "text-flame"
                    : "text-ink dark:text-paper"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 border-t border-ink/10 pt-4 dark:border-paper/10">
            <a
              href="https://linkwithpride.com"
              className="block py-2 font-display text-base font-semibold text-ink/60 dark:text-paper/60"
            >
              linkwithpride.com
            </a>
            <a
              href="https://instagram.com/lolhidominic"
              className="block py-2 font-display text-base font-semibold text-ink/60 dark:text-paper/60"
            >
              @lolhidominic
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
