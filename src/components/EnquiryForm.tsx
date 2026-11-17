"use client";

import { useState } from "react";
import { HOTEL, waLink } from "@/lib/site";

const interestOptions = [
  "Standard Room (Bed Only / Bed & Breakfast)",
  "Deluxe Room (rate on enquiry)",
  "Executive Room (Bed & Breakfast)",
  "Conference / Seminar",
  "Group / Corporate booking",
  "Dining / Choma Zone reservation",
  "Other",
];

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interestOptions[0],
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
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
      `Hello ${HOTEL.name}, I would like to make an enquiry.`,
      ``,
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Interest: ${form.interest}`,
      form.checkIn && `Check-in: ${form.checkIn}`,
      form.checkOut && `Check-out: ${form.checkOut}`,
      form.guests && `Guests: ${form.guests}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-card border border-ivory-200 bg-white px-4 py-3 text-sm text-night-900 outline-none transition-colors placeholder:text-mist-500/70 focus:border-gold-500";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-mist-500";

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number *
        </label>
        <input
          id="phone"
          required
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="+254 ..."
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest" className={labelClass}>
          I&rsquo;m interested in
        </label>
        <select id="interest" value={form.interest} onChange={update("interest")} className={inputClass}>
          {interestOptions.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="checkIn" className={labelClass}>
          Check-in Date
        </label>
        <input id="checkIn" type="date" value={form.checkIn} onChange={update("checkIn")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="checkOut" className={labelClass}>
          Check-out Date
        </label>
        <input id="checkOut" type="date" value={form.checkOut} onChange={update("checkOut")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="guests" className={labelClass}>
          Guests
        </label>
        <input
          id="guests"
          type="number"
          min="1"
          max="20"
          value={form.guests}
          onChange={update("guests")}
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Anything we should know — meal plan preference, special occasions, arrival time..."
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-gold">
          Send via WhatsApp
        </button>
        <p className="text-xs text-mist-500">
          No account needed — your enquiry opens in WhatsApp ({HOTEL.phonePrimary}), ready to send.
        </p>
      </div>
      {sent && (
        <p className="sm:col-span-2 rounded-card border border-gold-500/40 bg-gold-500/10 px-4 py-3 text-sm text-night-800">
          WhatsApp opened with your enquiry details — just press send and our team will
          reply shortly.
        </p>
      )}
    </form>
  );
}
