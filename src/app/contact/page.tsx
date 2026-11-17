import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import { HOTEL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description:
    "Contact The Keystone Hotel Meru in Gitoro, Makutano — call +254 181 405970 or +254 703 893560, WhatsApp, or email thekeystonehotel001@gmail.com. Open 24 hours daily.",
};

const channels = [
  {
    label: "Call / WhatsApp — Line 1",
    value: HOTEL.phonePrimary,
    href: HOTEL.phonePrimaryHref,
    wa: HOTEL.whatsappPrimary,
    note: "For bookings and general enquiries.",
  },
  {
    label: "Call / WhatsApp — Line 2",
    value: HOTEL.phoneSecondary,
    href: HOTEL.phoneSecondaryHref,
    wa: HOTEL.whatsappSecondary,
    note: "For bookings, events and conferences.",
  },
  {
    label: "Email",
    value: HOTEL.email,
    href: `mailto:${HOTEL.email}`,
    wa: null,
    note: "For group quotes, corporate accounts and events.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Bookings"
        subtitle="Open 24 hours daily — reach us on the line that suits you, or send an enquiry straight from this page."
        image="/images/hero/lobby.jpg"
        alt="The lobby of The Keystone Hotel Meru"
      />

      {/* Channels + booking form */}
      <section className="py-20 md:py-24">
        <div className="container-keystone grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Info side */}
          <div>
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-3 font-display text-3xl text-night-900">We&rsquo;re ready when you are</h2>
            <div className="rule-gold mt-4" />

            <ul className="mt-8 space-y-5">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="card-lift rounded-card border border-ivory-200 bg-white p-6 shadow-sm hover:border-gold-500/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                    {c.label}
                  </p>
                  <p className="mt-1 font-display text-xl text-night-900">{c.value}</p>
                  <p className="mt-1 text-sm text-mist-500">{c.note}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={c.href} className="btn btn-outline-dark !px-4 !py-2 text-[0.7rem]">
                      Call
                    </a>
                    {c.wa && (
                      <a
                        href={waLink(`Hello ${HOTEL.name}, I have an enquiry.`, c.wa === HOTEL.whatsappSecondary)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-gold !px-4 !py-2 text-[0.7rem]"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Location + map embed */}
            <div className="mt-8 overflow-hidden rounded-card border border-ivory-200 bg-white shadow-sm">
              <iframe
                src={HOTEL.mapsEmbed}
                title="Map — The Keystone Hotel Meru, Gitoro, Makutano (100 metres from Consolata Hospital Gitoro)"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Find Us
                </p>
                <p className="mt-2 text-sm leading-relaxed text-night-800">
                  {HOTEL.address}
                  <br />
                  Postal code {HOTEL.postalCode}, Meru, Kenya
                </p>
                <p className="mt-2 text-sm text-mist-500">
                  Just 100 metres from Consolata Hospital Gitoro — ask anyone in Makutano
                  for the Keystone, or follow the pin above.
                </p>
                <a
                  href={HOTEL.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark mt-4 !px-5 !py-2.5 text-[0.7rem]"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Domains */}
            <div className="mt-6 rounded-card bg-night-900 p-6 text-sm text-mist-400">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Online
              </p>
              <p className="mt-2">
                {HOTEL.websiteCoKe} · {HOTEL.websiteCom}
              </p>
              <p className="mt-1">Front desk: {HOTEL.hours}</p>
            </div>
          </div>

          {/* Booking form side */}
          <div className="rounded-card border border-ivory-200 bg-white p-7 shadow-lg shadow-night-950/5 md:p-10">
            <p className="eyebrow">Booking Enquiry</p>
            <h2 className="mt-3 font-display text-3xl text-night-900">Tell us about your stay</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist-500">
              Fill in the details below and your enquiry opens in WhatsApp, ready to send —
              no accounts, no waiting lines.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Event & conference quote form */}
      <section id="events" className="bg-night-900 py-20 md:py-24">
        <div className="container-keystone">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow eyebrow-on-dark">Conferences & Events</p>
            <h2 className="mt-3 font-display text-3xl text-ivory-50 md:text-4xl">
              Request an event or conference quote
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist-400">
              Corporate seminars, team building, garden events and celebrations — tell us
              the plan and we&rsquo;ll respond with a tailored package and quote.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-card border border-white/10 bg-ivory-50 p-7 shadow-2xl md:p-10">
            <EventEnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
