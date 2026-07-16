import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/data";
import { buildSeoKeywords, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rootTitle = "Flooring Brampton & Tile Showroom | Metro Tiles & Flooring";
const rootDescription =
  "Metro Tiles & Flooring is a Brampton flooring company and tile showroom for hardwood, vinyl, laminate, tile, bathroom renovation materials, and free quotes.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: rootTitle,
  description: rootDescription,
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
  keywords: buildSeoKeywords({
    title: rootTitle,
    description: rootDescription,
    path: "/",
    keywords: [
      "Metro Tiles and Flooring",
      "flooring Brampton",
      "tiles Brampton",
      "tiles store in Brampton",
      "hardwood flooring Brampton",
      "wood flooring Brampton",
      "vinyl flooring Brampton",
      "laminate flooring Brampton",
      "flooring company Brampton",
      "bathroom renovation materials",
    ],
  }),
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
        <Script
          async
          id="roomvoAssistant"
          type="text/javascript"
          data-locale="en-us"
          data-position="bottom-right"
          src="https://www.roomvo.com/static/scripts/b2b/common/assistant.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
