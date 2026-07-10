import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  CollectionGrid,
  FeaturedItemGrid,
  LiveProductGrid,
} from "@/components/CardGrids";
import {
  CatalogSnapshot,
  ContactCTA,
  FAQSection,
  FeatureList,
  RelatedLinks,
} from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProduct, productCategories, services } from "@/lib/data";
import { getLiveProductsForRoute } from "@/lib/liveCatalog";
import {
  breadcrumbJsonLd,
  collectionJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map((product) => ({
    category: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category } = await params;
  const product = getProduct(category);

  if (!product) {
    return {};
  }

  const pageTitle = product.pageTitle ?? `${product.title} in Brampton`;

  return pageMetadata({
    title: pageTitle,
    description:
      product.seoDescription ??
      `${product.description} Browse source-backed ${product.title.toLowerCase()} collections at Metro Tiles & Flooring's Brampton showroom.`,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: product.seoKeywords ?? [
      `${product.title} Brampton`,
      `${product.title} showroom`,
      "Metro Tiles and Flooring products",
    ],
  });
}

function relatedServiceLinks(productSlug: string) {
  const serviceSlugs =
    productSlug === "tiles" || productSlug === "wall-tiles"
      ? ["tiles", "furnishings"]
      : productSlug === "bathroom-accessories" || productSlug === "vanity"
        ? ["furnishings", "tiles"]
        : ["flooring", "construction"];

  return serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean)
    .map((service) => ({
      label: service!.title,
      href: `/services/${service!.slug}`,
      description: service!.description,
    }));
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { category } = await params;
  const product = getProduct(category);

  if (!product) {
    notFound();
  }

  const liveProducts = getLiveProductsForRoute(product.slug);
  const sourcePreviewItems = product.collections?.length
    ? []
    : (product.featuredItems ?? []);
  const liveProductItems = liveProducts.map((item) => ({
    name: item.name,
    description: `Source-backed ${product.title.toLowerCase()} selection listed in Metro's live catalog.`,
    path: `/products/${product.slug}`,
  }));
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: `/products/${product.slug}` },
  ];
  const collectionItems =
    product.collections?.map((collection) => ({
      name: collection.title,
      description: collection.description,
      path: `/products/${product.slug}/${collection.slug}`,
    })) ??
    (liveProductItems.length ? liveProductItems : undefined) ??
    product.featuredItems?.map((item) => ({
      name: item.title,
      description: item.description,
      path: `/products/${product.slug}`,
    })) ??
    product.useCases.map((item) => ({
      name: item,
      description: `${item} supported through Metro's ${product.title} category.`,
      path: `/products/${product.slug}`,
    }));

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: `/products/${product.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={collectionJsonLd({
          name: `${product.title} at Metro Tiles & Flooring`,
          description: product.description,
          path: `/products/${product.slug}`,
          items: collectionItems,
        })}
      />

      <SiteHeader />
      <PageHero
        eyebrow={product.eyebrow}
        title={product.pageTitle ?? `${product.title} in Brampton`}
        description={product.intro}
        image={product.image}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {product.collections?.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Source catalog"
              title={`Explore ${product.title} collections.`}
              description="These collections mirror Metro's current live catalog structure while keeping the browsing experience clean, premium, and showroom-focused."
            />
            <div className="mt-10">
              <CollectionGrid
                collections={product.collections}
                basePath={`/products/${product.slug}`}
              />
            </div>
          </div>
        </section>
      ) : sourcePreviewItems.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Source catalog"
              title={`Review ${product.title} source selections.`}
              description="These names and visuals come from Metro's current source catalog. Use them to start the shortlist before confirming availability with the showroom team."
            />
            <div className="mt-10">
              <FeaturedItemGrid items={sourcePreviewItems} />
            </div>
          </div>
        </section>
      ) : null}

      {liveProducts.length ? (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Live product catalog"
              title={
                product.collections?.length
                  ? `Preview source-backed ${product.title} products.`
                  : `Browse live ${product.title} products.`
              }
              description={
                product.collections?.length
                  ? "These cards are pulled from Metro's current live catalog as a quick preview before choosing a focused collection."
                  : "These product cards come from Metro's current live catalog so this page reflects the real showroom product list more closely."
              }
            />
            <div className="mt-10">
              <LiveProductGrid
                items={liveProducts}
                limit={product.collections?.length ? 12 : undefined}
              />
            </div>
          </div>
        </section>
      ) : null}

      <CatalogSnapshot
        eyebrow="Showroom catalog"
        title={`A clearer way to shop ${product.title}.`}
        description={`Metro lists ${product.count} items in this category on the current source catalog. Use the collection families and preview styles above to narrow the direction before visiting the Brampton showroom.`}
        tags={(product.collections ?? [])
          .map((item) => item.title)
          .concat(
            product.collections?.length
              ? product.useCases
              : liveProducts.slice(0, 8).map((item) => item.name)
          )}
        stats={[
          {
            label: "Catalog items",
            value: String(product.count),
            detail: "Current source-catalog count for this Metro category.",
          },
          {
            label: product.collections?.length ? "Collections" : "Previews",
            value: String(
              product.collections?.length ??
                (liveProducts.length || sourcePreviewItems.length)
            ),
            detail: product.collections?.length
              ? "Organized families to compare by brand, series, or product type."
              : "Visible showroom styles to help start the selection process.",
          },
          {
            label: "Next step",
            value: "Visit",
            detail:
              "Bring room details, photos, or plans to compare finishes in person.",
          },
        ]}
      />

      <FeatureList title={`Why choose ${product.title}`} items={product.features} />
      <FeatureList title="Common project uses" items={product.useCases} />
      <FAQSection faqs={product.faqs} />
      <RelatedLinks
        title="Related services"
        links={[
          ...relatedServiceLinks(product.slug),
          {
            label: "Get a free quote",
            href: "/quote",
            description:
              "Send project details to Metro for practical next-step guidance.",
          },
        ]}
      />
      <ContactCTA
        title={`See ${product.title.toLowerCase()} in the showroom.`}
        description="Compare finish, scale, color, and material quality in real lighting before choosing."
      />
      <SiteFooter />
    </main>
  );
}
