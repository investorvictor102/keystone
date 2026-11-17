import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { HOTEL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dining & Entertainment",
  description:
    "Dining and entertainment at The Keystone Hotel Meru — on-site restaurant with traditional Kenyan favourites, Choma Zone with pool tables, VIP lounges and outdoor gardens.",
};

const venues = [
  {
    name: "On-Site Restaurant",
    detail: "Traditional Kenyan favourites · Lunch & dinner",
    image: "/images/dining/restaurant.jpg",
    alt: "The on-site restaurant at The Keystone Hotel Meru",
    description:
      "Our restaurant serves traditional Kenyan favourites alongside a variety of other meal options — perfect for lunch, dinner, casual dates and family outings. Expect generous plates, warm service and Meru hospitality at its best.",
    highlights: [
      "Traditional Kenyan favourites",
      "Lunch & dinner served daily",
      "Casual dates & family outings",
      "Friendly, welcoming service",
    ],
  },
  {
    name: "Choma Zone & Entertainment",
    detail: "Nyama choma area · Pool-table games",
    image: "/images/dining/dish.jpg",
    alt: "Choma from the Keystone grill",
    description:
      "The Choma Zone is where Keystone comes alive — a dedicated nyama choma area paired with friendly pool-table games. Round off the week with a rack of well-grilled meat, a cold drink and good company.",
    highlights: [
      "Dedicated nyama choma area",
      "Pool-table games",
      "Great for social gatherings",
      "Weekend energy, every week",
    ],
  },
  {
    name: "VIP Lounges",
    detail: "Private, exclusive seating",
    image: "/images/dining/bar.jpg",
    alt: "A private VIP lounge at The Keystone Hotel Meru",
    description:
      "For guests seeking a quieter, more upscale setting, our VIP lounges offer private, exclusive seating — ideal for discreet meetings, small celebrations or simply unwinding away from the buzz.",
    highlights: [
      "Private, exclusive seating",
      "Discreet business meetings",
      "Small private celebrations",
      "Attentive table service",
    ],
  },
  {
    name: "Outdoor Gardens",
    detail: "Green spaces · Family fun days",
    image: "/images/amenities/garden.jpg",
    alt: "The outdoor gardens at The Keystone Hotel Meru",
    description:
      "Our landscaped gardens are made for outdoor moments — relaxed afternoons, family fun days, photo sessions and open-air refreshments under the Meru sky.",
    highlights: [
      "Landscaped green spaces",
      "Family fun days",
      "Outdoor relaxation",
      "Event-ready lawn spaces",
    ],
  },
];

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="Dining & Entertainment"
        subtitle="From traditional Kenyan favourites to nyama choma and pool tables — Keystone feeds you well and keeps you entertained."
        image="/images/dining/restaurant.jpg"
        alt="The on-site restaurant at The Keystone Hotel Meru"
      />

      <section className="py-20 md:py-24">
        <div className="container-keystone">
          <SectionHeading
            eyebrow="Food & Entertainment"
            title="Four ways to enjoy your day at Keystone"
            description="Whether it is a quiet lunch, a choma afternoon with the crew, a private lounge meeting or a family fun day in the gardens — there is a space here with your name on it."
          />

          <div className="mt-16 space-y-16">
            {venues.map((v, i) => (
              <article
                key={v.name}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-card shadow-xl shadow-night-950/10">
                  <Image
                    src={v.image}
                    alt={v.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <p className="eyebrow">{v.detail}</p>
                  <h2 className="mt-3 font-display text-3xl text-night-900">{v.name}</h2>
                  <div className="rule-gold mt-4" />
                  <p className="mt-5 leading-relaxed text-mist-500">{v.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {v.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-night-800">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-gold-500" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-card bg-night-900 p-10 text-center">
            <h2 className="font-display text-2xl text-ivory-50 md:text-3xl">
              Planning a meal out, a choma afternoon or a private gathering?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist-400">
              Reach us on WhatsApp and we will have a table, the grill or a lounge ready
              for you — {HOTEL.phonePrimary} or {HOTEL.phoneSecondary}.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={waLink(`Hello ${HOTEL.name}, I would like to enquire about dining and entertainment.`)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Message on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
