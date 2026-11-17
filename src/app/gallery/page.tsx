import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of The Keystone Hotel Meru — rooms, dining, choma zone, gardens, events and life at the hotel in Makutano.",
};

const photos = [
  { src: "/images/hero/exterior.jpg", alt: "The Keystone Hotel Meru exterior", span: "wide" },
  { src: "/images/hero/lobby.jpg", alt: "The welcoming lobby and lounge", span: "tall" },
  { src: "/images/rooms/standard.jpg", alt: "Standard room", span: "" },
  { src: "/images/dining/restaurant.jpg", alt: "The on-site restaurant", span: "" },
  { src: "/images/amenities/garden.jpg", alt: "The outdoor gardens", span: "wide" },
  { src: "/images/rooms/executive.jpg", alt: "Executive room", span: "" },
  { src: "/images/dining/dish.jpg", alt: "From the choma zone", span: "" },
  { src: "/images/amenities/conference.jpg", alt: "Conference venue", span: "" },
  { src: "/images/rooms/deluxe.jpg", alt: "Deluxe room", span: "tall" },
  { src: "/images/dining/bar.jpg", alt: "VIP lounge setting", span: "" },
  { src: "/images/amenities/events.jpg", alt: "Event venue setup", span: "wide" },
] as const;

const spanClass: Record<string, string> = {
  "": "md:col-span-1 md:row-span-1",
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse of life at Keystone — the rooms, the food, the gardens and the events."
        image="/images/hero/lobby.jpg"
        alt="Inside The Keystone Hotel Meru"
      />

      <section className="py-20 md:py-24">
        <div className="container-keystone">
          <SectionHeading
            eyebrow="Photos"
            title="Moments at Keystone"
            description="Photography never quite does a place justice — but we keep trying. For the full experience, come see it in person."
          />
          <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {photos.map((p) => (
              <figure
                key={p.src}
                className={`group relative overflow-hidden rounded-card ${spanClass[p.span]}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-night-950/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-ivory-50">{p.alt}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
