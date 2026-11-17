export const HOTEL = {
  name: "The Keystone Hotel Meru",
  shortName: "Keystone Hotel",
  tagline: "Great people. Memorable moments.",
  town: "Makutano",
  county: "Meru",
  address: "Gitoro, Makutano, Meru Town — 100 metres from Consolata Hospital Gitoro",
  postalCode: "60200",
  phonePrimary: "+254 181 405970",
  phoneSecondary: "+254 703 893560",
  phonePrimaryHref: "tel:+254181405970",
  phoneSecondaryHref: "tel:+254703893560",
  whatsappPrimary: "https://wa.me/254181405970",
  whatsappSecondary: "https://wa.me/254703893560",
  email: "thekeystonehotel001@gmail.com",
  websiteCoKe: "www.thekeystonehotelmeru.co.ke",
  websiteCom: "www.keystonehotelmeru.com",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  mapsQuery: "Consolata+Hospital+Gitoro,+Makutano,+Meru,+Kenya",
  mapsEmbed:
    "https://www.google.com/maps?q=Consolata+Hospital+Gitoro,+Makutano,+Meru,+Kenya&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Consolata+Hospital+Gitoro,+Makutano,+Meru,+Kenya",
  hours: "Open 24 hours, every day",
} as const;

/** Build a WhatsApp link with a pre-filled booking message. */
export function waLink(message: string, secondary = false): string {
  const base = secondary ? HOTEL.whatsappSecondary : HOTEL.whatsappPrimary;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function roomBookingMessage(roomName: string): string {
  return `Hello ${HOTEL.name}, I would like to book the ${roomName}. Please share availability and confirm my reservation. Thank you.`;
}

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  priceLabel: string;
  mealPlans: { plan: string; price: string }[];
  image: string;
  positioning: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "standard",
    name: "Standard Room",
    tagline: "Simple, welcoming and affordable",
    priceLabel: "From Ksh. 3,000",
    mealPlans: [
      { plan: "Bed Only", price: "Ksh. 3,000" },
      { plan: "Bed & Breakfast", price: "Ksh. 3,500" },
    ],
    image: "/images/rooms/standard.jpg",
    positioning:
      "The smart choice for business trips and personal stays — everything you need for a comfortable night, at Meru's friendliest rates.",
    features: ["Comfortable en-suite room", "Flat-screen TV", "Wi-Fi", "Tea & coffee"],
  },
  {
    slug: "deluxe",
    name: "Deluxe Room",
    tagline: "Extra comfort for your stay",
    priceLabel: "Rate on enquiry",
    mealPlans: [{ plan: "Bed & Breakfast", price: "Enquire for rate" }],
    image: "/images/rooms/deluxe.jpg",
    positioning:
      "Our mid-tier upgrade for guests who want extra comfort — ideal for leisure and business stays alike. Speak to us for the current rate.",
    features: ["Spacious en-suite room", "Enhanced furnishings", "Flat-screen TV", "Wi-Fi"],
  },
  {
    slug: "executive",
    name: "Executive Room",
    tagline: "An elevated stay for corporate guests",
    priceLabel: "Ksh. 5,500",
    mealPlans: [{ plan: "Bed & Breakfast", price: "Ksh. 5,500" }],
    image: "/images/rooms/executive.jpg",
    positioning:
      "Designed for corporate guests and longer stays — a refined room with breakfast included, so mornings start right.",
    features: ["Premium en-suite room", "Breakfast included", "Dedicated workspace", "Wi-Fi"],
  },
];

export type Facility = {
  title: string;
  icon: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    title: "On-Site Restaurant",
    icon: "restaurant",
    description:
      "Traditional Kenyan favourites and a variety of other meals — perfect for lunch, dinner, casual dates and family outings.",
  },
  {
    title: "Choma Zone & Entertainment",
    icon: "grill",
    description:
      "A dedicated nyama choma area paired with friendly pool-table games — the social heart of the hotel.",
  },
  {
    title: "VIP Lounges",
    icon: "lounge",
    description:
      "Private, exclusive seating areas for guests seeking a quieter, more upscale hospitality setting.",
  },
  {
    title: "Outdoor Gardens",
    icon: "garden",
    description:
      "Landscaped green spaces for relaxation, outdoor moments and family fun days.",
  },
  {
    title: "Conference & Event Facilities",
    icon: "conference",
    description:
      "Indoor and outdoor venues for corporate team building, business meetings, seminars and special celebrations.",
  },
  {
    title: "Car Wash Services",
    icon: "carwash",
    description:
      "Professional on-site vehicle wash for hotel and restaurant guests — leave clean, leave refreshed.",
  },
];

export const facilityIcons: Record<string, string> = {
  restaurant: "M4 3h2l1 5h10l1-5h2M5 8v12M19 8v12M9 12h2m2 0h2m-4 4h2m2 0h2",
  grill: "M4 5h16M8 5v3a4 4 0 0 0 8 0V5M12 12v4m-2 0h4m-8 4h12M6 20l1.5-2m10.5 2-1.5-2",
  lounge: "M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 11h18v6H3zM6 17v2m12-2v2M7 11V9m10 2V9",
  garden: "M12 21v-8m0 0c0-4 3-7 7-7 0 4-3 7-7 7Zm0 0c0-4-3-7-7-7 0 4 3 7 7 7ZM6 21h12",
  conference: "M3 5h18v12H3zM9 21h6m-3-4v4M7 9h6M7 12h4",
  carwash: "M5 16h14M7 16V9h10v7m-8 0v2m6-2v2M9 4l.5 2M12 4l.5 2M15 4l.5 2",
};
