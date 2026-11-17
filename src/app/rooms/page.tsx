import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { rooms, waLink, roomBookingMessage, HOTEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Rooms and rates at The Keystone Hotel Meru, Makutano — Standard (Bed Only Ksh. 3,000 / Bed & Breakfast Ksh. 3,500), Deluxe (on enquiry) and Executive (Bed & Breakfast Ksh. 5,500).",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Rates"
        subtitle="Simple, welcoming and affordable — three room categories designed for business travellers, families and leisure guests."
        image="/images/rooms/executive.jpg"
        alt="A room at The Keystone Hotel Meru"
      />

      <section className="py-20 md:py-24">
        <div className="container-keystone">
          <SectionHeading
            eyebrow="Accommodation"
            title="Choose your room"
            description="Every room is served by our 24-hour front desk, on-site restaurant and housekeeping team. Book directly on WhatsApp — no middlemen, no waiting."
          />

          <div className="mt-16 space-y-12">
            {rooms.map((room, i) => (
              <article
                key={room.slug}
                className="card-lift grid overflow-hidden rounded-card bg-white shadow-lg shadow-night-950/5 lg:grid-cols-2"
              >
                <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 bg-night-900/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
                    {room.priceLabel}
                  </span>
                </div>
                <div className="flex flex-col p-7 md:p-10">
                  <p className="eyebrow">Room {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 font-display text-3xl text-night-900">{room.name}</h2>
                  <p className="mt-1 text-sm text-gold-600">{room.tagline}</p>
                  <div className="rule-gold mt-4" />
                  <p className="mt-5 leading-relaxed text-mist-500">{room.positioning}</p>

                  <div className="mt-6 rounded-card border border-ivory-200 bg-ivory-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist-500">
                      Published Rates
                    </p>
                    <div className="mt-3 space-y-2">
                      {room.mealPlans.map((m) => (
                        <div key={m.plan} className="flex items-center justify-between text-sm">
                          <span className="text-mist-500">{m.plan}</span>
                          <span className="font-semibold text-night-900">{m.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-night-800">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold-500" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={waLink(roomBookingMessage(room.name))}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-gold !px-6 !py-3"
                    >
                      Book on WhatsApp
                    </a>
                    <Link href="/contact" className="btn btn-outline-dark !px-6 !py-3">
                      Other Enquiries
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-mist-500">
                    Prefer to talk? Call {HOTEL.phonePrimary} or {HOTEL.phoneSecondary}.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-card bg-night-900 p-10 text-center">
            <h2 className="font-display text-2xl text-ivory-50 md:text-3xl">
              Staying as a team, or for many nights?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist-400">
              Ask us about group room blocks and corporate rates for project teams,
              seminars and extended business stays — all handled directly by our team.
            </p>
            <Link href="/contact" className="btn btn-gold mt-7">
              Request a Group Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
