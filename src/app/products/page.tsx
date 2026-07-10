import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductGrid } from "@/components/CardGrids";
import { ContactCTA, FAQSection } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { globalFaqs, productCategories } from "@/lib/data";
import { liveCatalogTotals } from "@/lib/liveCatalog";
import {
  breadcrumbJsonLd,
  collectionJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tiles Store in Brampton and Flooring Products",
  description:
    "Explore Metro product categories for tiles in Brampton, hardwood flooring, vinyl flooring, laminate flooring, vanities, wall tiles, and bathroom accessories.",
  path: "/products",
  image: "/images/showroom/warm-kitchen-flooring.jpg",
  keywords: [
    "tiles store in brampton",
    "tiles brampton",
    "tile supplier brampton",
    "flooring brampton",
    "vinyl flooring brampton",
    "laminate flooring brampton",
    "hardwood flooring brampton",
  ],
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <JsonLd
        data={collectionJsonLd({
          name: "Metro Tiles & Flooring products",
          description:
            "Product categories available through Metro Tiles & Flooring in Brampton.",
          path: "/products",
          items: productCategories.map((product) => ({
            name: product.title,
            description: product.description,
            path: `/products/${product.slug}`,
          })),
        })}
      />
      <JsonLd data={faqJsonLd(globalFaqs)} />

      <SiteHeader />
      <PageHero
        eyebrow="Product showroom"
        title="Tiles, flooring, hardwood, vinyl, and laminate in Brampton."
        description="Browse the product categories customers can compare at Metro's Brampton showroom, from porcelain tile and wall tile to vinyl, laminate, hardwood, vanities, and bathroom accessories."
        image="/images/showroom/warm-kitchen-flooring.jpg"
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Category showroom"
            title="Choose by category, collection, room, and finish."
            description={`Metro's source catalog snapshot includes ${liveCatalogTotals.products} live products across ${liveCatalogTotals.categories} categories and collections for tiles, vinyl, laminate, engineered hardwood, solid hardwood, vanity, wall tile, and bathroom accessories.`}
          />
          <div className="mt-10">
            <ProductGrid products={productCategories} />
          </div>
        </div>
      </section>

      <FAQSection faqs={globalFaqs} />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
