import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { deals } from "@/lib/data";
import { breadcrumbJsonLd, collectionJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Deals",
  description:
    "View current Metro Tiles & Flooring promotions and showroom deal highlights for tile, flooring, and renovation material planning in Brampton.",
  path: "/deals",
  image: "/images/deals/feb-sale.jpg",
  keywords: [
    "flooring deals Brampton",
    "tile sale Brampton",
    "Metro Tiles deals",
    "flooring promotion Brampton",
  ],
});

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Deals", path: "/deals" },
        ])}
      />
      <JsonLd
        data={collectionJsonLd({
          name: "Metro Tiles & Flooring deals",
          description:
            "Current deal and promotion highlights from Metro Tiles & Flooring.",
          path: "/deals",
          items: deals.map((deal) => ({
            name: deal.title,
            description: deal.description,
            path: "/deals",
          })),
        })}
      />

      <SiteHeader />
      <PageHero
        eyebrow="Current promotions"
        title="Showroom deals for smarter renovation planning."
        description="Browse current Metro promotion highlights, then visit the showroom or request a quote to confirm availability, product details, and project fit."
        image="/images/deals/feb-sale.jpg"
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Deals", href: "/deals" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                Deal gallery
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Product-led offers, verified in the showroom.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-stone-600 lg:justify-self-end">
              Deal availability can change. Use this page as a premium preview,
              then contact Metro to confirm current products, quantities, and
              project suitability.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {deals.map((deal) => (
              <article
                key={deal.title}
                className="overflow-hidden rounded-[6px] border border-stone-200 bg-[#faf9f6]"
              >
                <div className="relative aspect-[4/3] bg-stone-100">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-stone-950">
                    {deal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {deal.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="See what is available before you plan the room."
        description="Call Metro or send project details to confirm current deal availability, product fit, and quote options."
      />
      <SiteFooter />
    </main>
  );
}
