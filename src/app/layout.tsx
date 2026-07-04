import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/data";
import { localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: "Metro Tiles & Flooring | Brampton Tile and Flooring Showroom",
  description:
    "Metro Tiles & Flooring offers premium tiles, flooring, furnishings, construction materials, expert guidance, and free quotes in Brampton and across the GTA.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Metro Tiles and Flooring",
    "Brampton tile showroom",
    "flooring Brampton",
    "tiles Brampton",
    "vinyl flooring",
    "laminate flooring",
    "engineered hardwood",
    "bathroom renovation materials",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
