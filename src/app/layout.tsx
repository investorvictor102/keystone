import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thekeystonehotelmeru.co.ke"),
  title: {
    default: "The Keystone Hotel Meru — Gitoro, Makutano | Great people. Memorable moments.",
    template: "%s | The Keystone Hotel Meru",
  },
  description:
    "The Keystone Hotel Meru — welcoming accommodation, on-site restaurant, Choma Zone, VIP lounges, gardens and conference facilities in Gitoro, Makutano, Meru Town, 100 metres from Consolata Hospital Gitoro. Open 24 hours daily.",
  keywords: [
    "The Keystone Hotel Meru",
    "Keystone Hotel Makutano",
    "hotel in Meru Town",
    "Gitoro hotel",
    "accommodation Meru County",
    "conference venue Meru",
    "nyama choma Meru",
  ],
  openGraph: {
    title: "The Keystone Hotel Meru — Great people. Memorable moments.",
    description:
      "Welcoming rooms, on-site restaurant, Choma Zone & entertainment, VIP lounges, gardens and event venues in Gitoro, Makutano, Meru Town.",
    type: "website",
    locale: "en_KE",
    siteName: "The Keystone Hotel Meru",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
