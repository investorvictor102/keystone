"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-night-900/95 backdrop-blur border-b border-white/10 shadow-lg shadow-night-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-keystone flex items-center justify-between gap-4 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Keystone Hotel — home">
          <span className="grid h-11 w-11 place-items-center border border-gold-500/70 bg-night-950/60">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-500" fill="currentColor" aria-hidden="true">
              <path d="M12 2 3 7v10h4v-7h10v7h4V7l-9-5Zm-1 9h2v6h-2v-6Z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-wide text-ivory-50">
              KEYSTONE
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-400">
              Hotel · Meru
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-gold-400" : "text-ivory-100/85 hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-gold !px-5 !py-2.5">
            Book a Room
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center border border-white/20 text-ivory-50 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t border-white/10 bg-night-900/98 backdrop-blur lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-keystone flex flex-col divide-y divide-white/10 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3.5 text-sm font-medium uppercase tracking-[0.16em] ${
                  pathname === link.href ? "text-gold-400" : "text-ivory-100/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-gold my-4 self-start">
              Book a Room
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
