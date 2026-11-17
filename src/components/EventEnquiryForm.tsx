"use client";

import { useState } from "react";
import { HOTEL } from "@/lib/site";

const eventTypes = [
  "Corporate meeting / seminar",
  "Team building",
  "Garden event / family fun day",
  "Wedding / celebration",
  "Chora zone social gathering",
  "Other",
];

const cateringOptions = ["Yes, please quote catering", "No, venue only", "Not sure yet"];

export default function EventEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    phone: "",
    eventType: eventTypes[0],
    date: "",
    guests: "50",
    catering: cateringOptions[0],
    message: "",
    sendVia: "whatsapp",
  });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello ${HOTEL.name}, I would like a quote for an event.`,
      ``,
      `Name: ${form.name}`,
      form.organisation && `Organisation: ${form.organisation}`,
      form.phone && `Phone: ${form.phone}`,
      `Event type: ${form.eventType}`,
      form.date && `Preferred date: ${form.date}`,
      form.guests && `Expected guests: ${form.guests}`,
      `Catering: ${form.catering}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Event quote request — ${form.eventType}`;
    const mailto = `mailto:${HOTEL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    const whatsapp = `${HOTEL.whatsappSecondary}?text=${encodeURIComponent(text)}`;

    window.open(form.sendVia === "email" ? mailto : whatsapp, form.sendVia === "email" ? "_self" : "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-card border border-ivory-200 bg-white px-4 py-3 text-sm text-night-900 outline-none transition-colors placeholder:text-mist-500/70 focus:border-gold-500";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist-500";

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="evName" className={labelClass}>
          Contact Person *
        </label>
        <input
          id="evName"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="evOrg" className={labelClass}>
          Organisation / Company
        </label>
        <input
          id="evOrg"
          value={form.organisation}
          onChange={update("organisation")}
          placeholder="Optional"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="evPhone" className={labelClass}>
          Phone Number *
        </label>
        <input
          id="evPhone"
          required
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="+254 ..."
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="evType" className={labelClass}>
          Event Type
        </label>
        <select id="evType" value={form.eventType} onChange={update("eventType")} className={inputClass}>
          {eventTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="evDate" className={labelClass}>
          Preferred Date
        </label>
        <input id="evDate" type="date" value={form.date} onChange={update("date")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="evGuests" className={labelClass}>
          Expected Guests
        </label>
        <input
          id="evGuests"
          type="number"
          min="1"
          max="1000"
          value={form.guests}
          onChange={update("guests")}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="evCatering" className={labelClass}>
          Catering
        </label>
        <select id="evCatering" value={form.catering} onChange={update("catering")} className={inputClass}>
          {cateringOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="evMessage" className={labelClass}>
          Tell us about the event
        </label>
        <textarea
          id="evMessage"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Indoor or outdoor? Sound system? Room block for guests? Anything else..."
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <span className={labelClass}>Send via</span>
        <div className="flex gap-4">
          {[
            { id: "whatsapp", label: "WhatsApp" },
            { id: "email", label: "Email" },
          ].map((opt) => (
            <label
              key={opt.id}
              className="flex cursor-pointer items-center gap-2 rounded-card border border-ivory-200 bg-white px-4 py-2.5 text-sm text-night-900 has-checked:border-gold-500"
            >
              <input
                type="radio"
                name="sendVia"
                value={opt.id}
                checked={form.sendVia === opt.id}
                onChange={update("sendVia")}
                className="accent-gold-600"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-gold">
          Request Event Quote
        </button>
        <p className="text-xs text-mist-500">
          Quotes are sent straight to our events team — WhatsApp ({HOTEL.phoneSecondary}) or {HOTEL.email}.
        </p>
      </div>
      {sent && (
        <p className="sm:col-span-2 rounded-card border border-gold-500/40 bg-gold-500/10 px-4 py-3 text-sm text-night-800">
          Your event details are ready to send — press send in the app that just opened,
          and our events team will get back to you with a quote.
        </p>
      )}
    </form>
  );
}
