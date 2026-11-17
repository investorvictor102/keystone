type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl leading-tight md:text-[2.5rem] ${
          dark ? "text-ivory-50" : "text-night-900"
        }`}
      >
        {title}
      </h2>
      <div className={`rule-gold mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className={`mt-5 leading-relaxed ${dark ? "text-mist-400" : "text-mist-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
