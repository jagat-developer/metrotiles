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
import {
  breadcrumbJsonLd,
  collectionJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Explore Metro Tiles & Flooring product categories, including tiles, vinyl, laminate, engineered hardwood, solid hardwood, vanities, wall tiles, and bathroom accessories.",
  path: "/products",
  image: "/images/dome-tile.jpg",
  keywords: [
    "Brampton flooring products",
    "tile showroom Brampton",
    "vinyl flooring Brampton",
    "hardwood flooring Brampton",
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
        title="Premium categories for floors, walls, baths, and finishes."
        description="Browse the product categories customers can compare at Metro's Brampton showroom, from porcelain tile and wall tile to vinyl, laminate, hardwood, vanities, and bathroom accessories."
        image="/images/dome-tile.jpg"
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
            title="Choose by room, material, durability, and finish."
            description="Metro's source catalog includes Bathroom Accessories, Engineered Hardwood, Laminate, Solid Hardwood, Tiles, Vanity, Vinyl, and Wall Tiles."
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
