import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { HOTEL, rooms, facilities, facilityIcons, waLink, roomBookingMessage } from "@/lib/site";

const stats = [
  { value: "3", label: "Room Categories" },
  { value: "24/7", label: "Guest Service" },
  { value: "100 m", label: "From Consolata Hospital Gitoro" },
  { value: "2", label: "Direct Booking Lines" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-night-950">
        <Image
          src="/images/hero/exterior.jpg"
          alt="The Keystone Hotel Meru exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 via-night-950/55 to-night-950/20" />
        <div className="container-keystone relative pb-24 pt-40">
          <p className="eyebrow eyebrow-on-dark">Gitoro, Makutano · Meru Town, Kenya</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.1] text-ivory-50 md:text-6xl lg:text-7xl">
            Great people.{" "}
            <span className="text-gold-400">Memorable moments.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-100/90">
            Welcome to The Keystone Hotel Meru — welcoming rooms, a lively choma zone,
            elegant gardens and superb event spaces in the heart of Makutano.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/rooms" className="btn btn-gold">
              Explore Rooms
            </Link>
            <a
              href={waLink(`Hello ${HOTEL.name}, I would like to make a booking enquiry.`)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-b border-ivory-200 bg-ivory-100">
        <div className="container-keystone grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-gold-600 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WELCOME ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-keystone grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Karibu to Keystone"
              title="Makutano's home of warm hospitality"
              description="Located in Gitoro, Makutano — just 100 metres from Consolata Hospital Gitoro — The Keystone Hotel Meru combines the legendary warmth of Meru County with genuinely professional service. Stay with us on business, bring the family for a weekend, or let us host your seminar in our gardens and halls."
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "100 m from Consolata Hospital Gitoro",
                "On-site restaurant & choma zone",
                "Indoor & outdoor event venues",
                "Open 24 hours, every day",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-gold-500/15">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold-600" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-night-800">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/experiences" className="btn btn-outline-dark mt-9">
              Discover Our Facilities
            </Link>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-2xl shadow-night-950/20">
              <Image
                src="/images/hero/lobby.jpg"
                alt="The welcoming interior of The Keystone Hotel Meru"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden w-52 overflow-hidden rounded-card border-4 border-ivory-50 shadow-xl md:block">
              <div className="relative aspect-square">
                <Image
                  src="/images/dining/dish.jpg"
                  alt="A meal from the Keystone kitchen"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROOMS ---------- */}
      <section className="bg-mist-100/60 py-20 md:py-28">
        <div className="container-keystone">
          <SectionHeading
            eyebrow="Rooms & Rates"
            title="Comfort for every traveller"
            description="Three welcoming room categories for business travellers, families and leisure guests — with bed-only and bed & breakfast plans to suit your trip."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.slug}
                className="card-lift group flex flex-col overflow-hidden rounded-card bg-white shadow-lg shadow-night-950/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-night-900/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
                    {room.priceLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-night-900">{room.name}</h3>
                  <p className="mt-1 text-sm text-gold-600">{room.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-500">{room.positioning}</p>
                  <div className="mt-5 flex-1 space-y-2 border-t border-ivory-200 pt-4">
                    {room.mealPlans.map((m) => (
                      <div key={m.plan} className="flex items-center justify-between text-sm">
                        <span className="text-mist-500">{m.plan}</span>
                        <span className="font-semibold text-night-900">{m.price}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={waLink(roomBookingMessage(room.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold mt-6 w-full !px-4 !py-3 text-[0.7rem]"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/rooms" className="btn btn-gold">
              View All Rooms & Rates
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FACILITIES ---------- */}
      <section className="bg-night-900 py-20 md:py-28">
        <div className="container-keystone">
          <SectionHeading
            dark
            eyebrow="Facilities & Services"
            title="Everything you need, under one roof"
            description="From the choma zone to the VIP lounges, the gardens to the conference halls — Keystone is equipped for every hour of your day."
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="text-center sm:text-left">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-card border border-gold-500/40 bg-night-800 sm:mx-0">
                  <svg viewBox="0 0 24 24" className="h-5.5 w-5.5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={facilityIcons[f.icon]} />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg text-ivory-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DINING TEASER ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-keystone grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-2xl shadow-night-950/15 lg:order-1">
            <Image
              src="/images/dining/restaurant.jpg"
              alt="The on-site restaurant at The Keystone Hotel Meru"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Food & Entertainment"
              title="A taste of Meru, served with pride"
              description="Our restaurant serves traditional Kenyan favourites alongside a variety of other meals — while the choma zone keeps the charcoal glowing and the pool table busy. Bring a date, bring the family, bring the whole team."
            />
            <ul className="mt-8 space-y-4">
              {[
                ["On-Site Restaurant", "Traditional Kenyan favourites · Lunch & dinner"],
                ["Choma Zone & Entertainment", "Nyama choma area · Pool-table games"],
                ["VIP Lounges", "Private, exclusive seating · Quiet settings"],
                ["Outdoor Gardens", "Green spaces for family fun days"],
              ].map(([name, detail]) => (
                <li key={name} className="flex items-start justify-between gap-4 border-b border-ivory-200 pb-4">
                  <div>
                    <p className="font-display text-lg text-night-900">{name}</p>
                    <p className="text-sm text-mist-500">{detail}</p>
                  </div>
                  <span className="mt-2 h-2 w-2 flex-none rotate-45 bg-gold-500" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <Link href="/dining" className="btn btn-outline-dark mt-9">
              See Dining & Entertainment
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- EVENTS BANNER ---------- */}
      <section className="relative overflow-hidden bg-night-950 py-24 md:py-32">
        <Image
          src="/images/amenities/events.jpg"
          alt="An elegant event setup at The Keystone Hotel Meru"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/85 to-night-950/40" />
        <div className="container-keystone relative max-w-2xl">
          <p className="eyebrow eyebrow-on-dark">Conferences & Events</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ivory-50 md:text-4xl">
            Indoor and outdoor venues, ready for your occasion
          </h2>
          <p className="mt-5 leading-relaxed text-mist-100/90">
            Corporate team building, business meetings, seminars and special celebrations —
            our indoor and outdoor venues adapt to the day you have planned.
          </p>
          <Link href="/contact" className="btn btn-gold mt-8">
            Request an Event Quote
          </Link>
        </div>
      </section>

      {/* ---------- LOCATION CTA ---------- */}
      <section className="bg-ivory-100 py-20 md:py-28">
        <div className="container-keystone grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Find Us"
              title="Easy to reach, hard to leave"
              description="The Keystone Hotel Meru sits in Gitoro, Makutano — just 100 metres from Consolata Hospital Gitoro, and a short drive from Meru town centre, Meru National Park and the slopes of Mount Kenya."
            />
            <div className="mt-8 space-y-3 text-sm text-night-800">
              <p><strong className="text-night-900">Location:</strong> {HOTEL.address}</p>
              <p><strong className="text-night-900">Postal code:</strong> {HOTEL.postalCode}, Meru, Kenya</p>
              <p><strong className="text-night-900">Reservations:</strong> {HOTEL.phonePrimary} · {HOTEL.phoneSecondary}</p>
              <p><strong className="text-night-900">Email:</strong> {HOTEL.email}</p>
              <p><strong className="text-night-900">Front desk:</strong> {HOTEL.hours}</p>
            </div>
            <a
              href={waLink(`Hello ${HOTEL.name}, I would like to book a room.`)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold mt-9"
            >
              Book Your Stay
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-xl shadow-night-950/10">
            <Image
              src="/images/rooms/standard.jpg"
              alt="A welcoming room at The Keystone Hotel Meru"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
