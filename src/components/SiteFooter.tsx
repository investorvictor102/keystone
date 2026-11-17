import Link from "next/link";
import { HOTEL, waLink } from "@/lib/site";

const quickLinks = [
  { href: "/rooms", label: "Rooms & Rates" },
  { href: "/dining", label: "Dining & Entertainment" },
  { href: "/experiences", label: "Conferences & Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact & Bookings" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-night-950 text-ivory-100">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-keystone flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow eyebrow-on-dark">{HOTEL.tagline}</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl text-ivory-50">
              Your Meru stay begins at Keystone.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink(`Hello ${HOTEL.name}, I would like to make a booking.`)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Book on WhatsApp
            </a>
            <a href={HOTEL.phonePrimaryHref} className="btn btn-outline-light">
              Call {HOTEL.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-keystone grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-gold-500/70">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-500" fill="currentColor" aria-hidden="true">
                <path d="M12 2 3 7v10h4v-7h10v7h4V7l-9-5Zm-1 9h2v6h-2v-6Z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-ivory-50">KEYSTONE</span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Hotel · Meru
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-mist-400">
            {HOTEL.tagline} Meru&rsquo;s welcoming home for accommodation, dining,
            entertainment and events — in the heart of Gitoro, Makutano.
          </p>
          <p className="mt-4 text-xs text-mist-500">
            {HOTEL.websiteCoKe}
            <br />
            {HOTEL.websiteCom}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist-400">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-mist-400">
            <li>Gitoro, Makutano, Meru Town</li>
            <li>100 m from Consolata Hospital Gitoro</li>
            <li>Postal code {HOTEL.postalCode}, Meru, Kenya</li>
            <li>
              <a href={HOTEL.phonePrimaryHref} className="transition-colors hover:text-gold-300">
                {HOTEL.phonePrimary}
              </a>{" "}
              ·{" "}
              <a href={HOTEL.phoneSecondaryHref} className="transition-colors hover:text-gold-300">
                {HOTEL.phoneSecondary}
              </a>
            </li>
            <li>
              <a href={`mailto:${HOTEL.email}`} className="break-all transition-colors hover:text-gold-300">
                {HOTEL.email}
              </a>
            </li>
            <li>{HOTEL.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Follow Us</h3>
          <div className="mt-5 flex gap-3">
            {[
              {
                label: "The Keystone Hotel on Facebook",
                href: HOTEL.facebook,
                d: "M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.6 2.1 15.4 2 14 2c-2.9 0-4.9 1.8-4.9 5V10H6v4h3.1v8H13Z",
              },
              {
                label: "The Keystone Hotel on Instagram",
                href: HOTEL.instagram,
                d: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4a3.8 3.8 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-mist-400 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-mist-500">
            Find &ldquo;The Keystone Hotel&rdquo; on Facebook and Instagram for the latest
            events, offers and moments from the hotel.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-keystone flex flex-col items-center justify-between gap-2 py-6 text-xs text-mist-500 md:flex-row">
          <p>© 2026 The Keystone Hotel Meru, Gitoro — Makutano. All rights reserved.</p>
          <p className="tracking-wide">{HOTEL.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
