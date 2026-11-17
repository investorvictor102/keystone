import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { waLink, HOTEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conferences, Events & Facilities",
  description:
    "Conference and event facilities at The Keystone Hotel Meru — indoor and outdoor venues for team building, meetings, seminars and celebrations, plus gardens, VIP lounges and car wash services.",
};

const services = [
  {
    title: "Conference & Event Facilities",
    image: "/images/amenities/conference.jpg",
    alt: "A conference setup at The Keystone Hotel Meru",
    description:
      "Indoor and outdoor venues suitable for corporate team building, business meetings, seminars and special celebrations. Our team handles setup and catering so you can focus on the agenda.",
    points: [
      "Indoor & outdoor venues",
      "Corporate team building",
      "Business meetings & seminars",
      "Special celebrations",
    ],
  },
  {
    title: "Outdoor Gardens",
    image: "/images/amenities/garden.jpg",
    alt: "The outdoor gardens at The Keystone Hotel Meru",
    description:
      "Landscaped green spaces marketed for relaxation, outdoor moments and family fun days — and a beautiful, open-air option for garden weddings, parties and photo sessions.",
    points: [
      "Relaxation & outdoor moments",
      "Family fun days",
      "Garden parties & ceremonies",
      "Photo-friendly scenery",
    ],
  },
  {
    title: "VIP Lounges & Guest Services",
    image: "/images/hero/lobby.jpg",
    alt: "The lobby and lounge area at The Keystone Hotel Meru",
    description:
      "Private VIP lounges for quieter, upscale moments — plus thoughtful guest services including a professional on-site car wash for hotel and restaurant guests.",
    points: [
      "Private VIP seating areas",
      "Quiet, upscale settings",
      "On-site car wash services",
      "24-hour front desk",
    ],
  },
];

const excursions = [
  {
    name: "Meru National Park",
    description:
      "One of Kenya's most beautiful, wildest parks — big cats, rhinos and river country. We can point you to trusted local operators for game drives.",
  },
  {
    name: "Mount Kenya Foothills",
    description:
      "Forest walks, trout streams and the slopes of Africa's second-highest mountain — an easy day trip from Makutano.",
  },
  {
    name: "Meru Town & Makutano Markets",
    description:
      "Vibrant markets and local culture minutes from our door — our front desk is always ready with directions and tips.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="Conferences, Events & Facilities"
        subtitle="Team building to weddings, seminars to garden parties — Keystone has the venue, the team and the food."
        image="/images/amenities/conference.jpg"
        alt="A conference venue at The Keystone Hotel Meru"
      />

      {/* Services */}
      <section className="py-20 md:py-24">
        <div className="container-keystone">
          <SectionHeading
            eyebrow="At the Hotel"
            title="Spaces and services that elevate your day"
            description="Indoor and outdoor venues, landscaped gardens, private lounges and guest services — all handled by one coordinated team."
          />
          <div className="mt-16 space-y-16">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/10] overflow-hidden rounded-card shadow-xl shadow-night-950/10">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <h2 className="font-display text-3xl text-night-900">{s.title}</h2>
                  <div className="rule-gold mt-4" />
                  <p className="mt-5 leading-relaxed text-mist-500">{s.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-night-800">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold-500" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions */}
      <section className="bg-night-900 py-20 md:py-24">
        <div className="container-keystone">
          <SectionHeading
            dark
            eyebrow="Around Meru"
            title="Adventure starts at our front desk"
            description="Makutano puts you close to the best of Meru County — and our team is happy to help you plan the trip."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {excursions.map((e) => (
              <article
                key={e.name}
                className="rounded-card border border-white/10 bg-night-800 p-8 transition-colors hover:border-gold-500/40"
              >
                <h3 className="font-display text-xl text-ivory-50">{e.name}</h3>
                <div className="rule-gold mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-mist-400">{e.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={waLink(`Hello ${HOTEL.name}, I would like help planning a day trip around Meru.`)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Group & corporate */}
      <section className="py-20 md:py-24">
        <div className="container-keystone max-w-3xl text-center">
          <p className="eyebrow">Groups & Corporate</p>
          <h2 className="mt-3 font-display text-3xl text-night-900 md:text-4xl">
            Bringing a team to Meru?
          </h2>
          <p className="mt-5 leading-relaxed text-mist-500">
            Corporate retreats, county delegations, seminars and workshops — we handle
            group room blocks, conference packages and catering under one coordinated
            quote, delivered straight to your WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-gold">
              Request a Group Quote
            </Link>
            <Link href="/rooms" className="btn btn-outline-dark">
              Browse Rooms & Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
