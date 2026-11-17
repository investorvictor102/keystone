import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
};

export default function PageHero({ title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-night-950">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-night-950/30" />
      <div className="container-keystone relative pb-16 pt-40">
        <p className="eyebrow eyebrow-on-dark">The Keystone Hotel Meru · Gitoro, Makutano</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ivory-50 md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl leading-relaxed text-mist-100/90">{subtitle}</p>
        )}
        <div className="rule-gold mt-6" />
      </div>
    </section>
  );
}
