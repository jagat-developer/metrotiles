import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceGrid } from "@/components/CardGrids";
import { ContactCTA, FAQSection } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { globalFaqs, services } from "@/lib/data";
import {
  breadcrumbJsonLd,
  collectionJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Flooring Contractor and Tile Services in Brampton",
  description:
    "Metro provides flooring contractor guidance, tile services, furnishings, and construction material support for homeowners, contractors, and designers in Brampton.",
  path: "/services",
  image: "/images/showroom/open-showroom-living.jpg",
  keywords: [
    "flooring contractor brampton",
    "flooring company brampton",
    "tile repair brampton",
    "tile supplier brampton",
    "hardwood flooring installation brampton",
    "laminate flooring installation brampton",
  ],
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={collectionJsonLd({
          name: "Metro Tiles & Flooring services",
          description:
            "Tiles, furnishings, flooring, and construction support from Metro Tiles & Flooring.",
          path: "/services",
          items: services.map((service) => ({
            name: service.title,
            description: service.description,
            path: `/services/${service.slug}`,
          })),
        })}
      />
      <JsonLd data={faqJsonLd(globalFaqs)} />

      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Flooring contractor guidance and tile services in Brampton."
        description="Metro provides premium flooring, tile, furnishing, and construction solutions tailored to homeowners, contractors, and interior designers."
        image="/images/showroom/open-showroom-living.jpg"
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Four service pillars"
            title="Tiles, furnishings, flooring, and construction support."
            description="Each service pillar is grounded in Metro's live source content and shaped for practical showroom decision-making."
          />
          <div className="mt-10">
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>

      <FAQSection faqs={globalFaqs} />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
