# The Keystone Hotel Meru — Website

A fast, professional marketing website for **The Keystone Hotel Meru** — Gitoro, Makutano, Meru Town (100 m from Consolata Hospital Gitoro), Meru, Kenya.

> **Tagline:** Great people. Memorable moments.

Built with **Next.js 16 (App Router, Turbopack) + Tailwind CSS 4 + TypeScript**. All pages are statically prerendered — no database, no backend required.

## Getting started

```bash
npm install     # first time only
npm run dev     # develop at http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Pages

| Route           | Contents                                                        |
| --------------- | --------------------------------------------------------------- |
| `/`             | Hero, stats, rooms preview, facilities, dining, events, location |
| `/rooms`        | Standard / Deluxe / Executive with published rates + WhatsApp buttons |
| `/dining`       | Restaurant, Choma Zone & Entertainment, VIP Lounges, Gardens     |
| `/experiences`  | Conference & event facilities, gardens, car wash, day trips      |
| `/gallery`      | Photo grid                                                       |
| `/contact`      | Booking enquiry form, event/conference quote form, Google Maps embed |

## Where to edit things

- **Business details, rooms, rates, facilities** — `src/lib/site.ts` (single source of truth; WhatsApp links are generated here)
- **Colours, fonts, buttons** — `src/app/globals.css` (Tailwind v4 theme tokens)
- **Header / Footer** — `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`
- **Images** — `public/images/**` (currently stock placeholders — replace with real hotel photos, same file names, no code changes needed)

## Notes / next steps

- Social links currently point to facebook.com / instagram.com — replace `facebook` and `instagram` in `src/lib/site.ts` with the hotel's exact profile URLs.
- The contact page embeds Google Maps around Consolata Hospital Gitoro; adjust `mapsEmbed` / `mapsLink` in `src/lib/site.ts` if the pin needs to move.
- Booking and event enquiry forms open **pre-filled WhatsApp messages** (or email) — matching the hotel's existing workflow, with no backend.
- Metadata (SEO) lives in `src/app/layout.tsx` using the hotel's domain `www.thekeystonehotelmeru.co.ke`.
