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
import {
  getAllProductCollectionPaths,
  getProductCollectionTrail,
  productCollectionPath,
  services,
} from "@/lib/data";
import { getLiveProductsForRoute } from "@/lib/liveCatalog";
import {
  breadcrumbJsonLd,
  collectionJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/lib/seo";

type ProductCollectionPageProps = {
  params: Promise<{
    category: string;
    collection: string[];
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProductCollectionPaths();
}

export async function generateMetadata({
  params,
}: ProductCollectionPageProps): Promise<Metadata> {
  const { category, collection: collectionSlugs } = await params;
  const data = getProductCollectionTrail(category, collectionSlugs);

  if (!data) {
    return {};
  }

  return pageMetadata({
    title: `${data.collection.title} in Brampton`,
    description: `${data.collection.description} Browse source-backed ${data.collection.title} previews and related collections at Metro Tiles & Flooring.`,
    path: productCollectionPath(data.product.slug, collectionSlugs),
    image: data.collection.image,
    keywords: [
      `${data.collection.title} Brampton`,
      `${data.product.title} collection`,
      ...(data.product.seoKeywords?.slice(0, 3) ?? []),
      "Metro Tiles and Flooring catalog",
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

export default async function ProductCollectionPage({
  params,
}: ProductCollectionPageProps) {
  const { category, collection: collectionSlugs } = await params;
  const data = getProductCollectionTrail(category, collectionSlugs);

  if (!data) {
    notFound();
  }

  const { product, collection, trail } = data;
  const currentPath = productCollectionPath(product.slug, collectionSlugs);
  const liveProducts = getLiveProductsForRoute(product.slug, collectionSlugs);
  const parentPath =
    collectionSlugs.length > 1
      ? productCollectionPath(product.slug, collectionSlugs.slice(0, -1))
      : `/products/${product.slug}`;
  const sourcePreviewItems =
    collection.featuredItems ??
    (collection.collections?.length
      ? []
      : [
          {
            title: collection.title,
            image: collection.image,
            sourceUrl: collection.sourceUrl,
            description:
              "Source-backed collection available to review with Metro's showroom team.",
          },
        ]);
  const previewItems =
    liveProducts.length > 0 ? [] : sourcePreviewItems;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: `/products/${product.slug}` },
    ...trail.map((item, index) => ({
      label: item.title,
      href: productCollectionPath(product.slug, collectionSlugs.slice(0, index + 1)),
    })),
  ];
  const jsonItems =
    collection.collections?.map((item) => ({
      name: item.title,
      description: item.description,
      path: `${currentPath}/${item.slug}`,
    })) ??
    (liveProducts.length
      ? liveProducts.map((item) => ({
          name: item.name,
          description: `Source-backed ${collection.title} selection listed in Metro's live catalog.`,
          path: currentPath,
        }))
      : undefined) ??
    previewItems.map((item) => ({
      name: item.title,
      description: item.description,
      path: currentPath,
    }));
  const continueLinks = [
    {
      label: product.title,
      href: `/products/${product.slug}`,
      description: `Return to the main ${product.title.toLowerCase()} category.`,
    },
    ...(parentPath === `/products/${product.slug}`
      ? []
      : [
          {
            label: "Parent collection",
            href: parentPath,
            description:
              "Move up one level in the source-backed Metro catalog structure.",
          },
        ]),
    ...relatedServiceLinks(product.slug),
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd(
          breadcrumbs.map((item) => ({ name: item.label, path: item.href }))
        )}
      />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={collectionJsonLd({
          name: `${collection.title} at Metro Tiles & Flooring`,
          description: collection.description,
          path: currentPath,
          items:
            jsonItems.length > 0
              ? jsonItems
              : [
                  {
                    name: collection.title,
                    description: collection.description,
                    path: currentPath,
                  },
                ],
        })}
      />

      <SiteHeader />
      <PageHero
        eyebrow={collection.eyebrow}
        title={`${collection.title} in Brampton`}
        description={collection.description}
        image={collection.image}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {collection.collections?.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Source catalog"
              title={`Browse ${collection.title} series.`}
              description="Nested collections follow Metro's live catalog structure and keep browsing focused on real showroom categories."
            />
            <div className="mt-10">
              <CollectionGrid
                collections={collection.collections}
                basePath={currentPath}
              />
            </div>
          </div>
        </section>
      ) : sourcePreviewItems.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Source catalog"
              title={`Review ${collection.title} source selections.`}
              description="These source-backed cards come from Metro's catalog structure before the live product list, so the page starts with the showroom context first."
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
                collection.collections?.length
                  ? `Preview ${collection.title} products.`
                  : `Browse ${collection.title} products.`
              }
              description={
                collection.collections?.length
                  ? "These source-backed products are shown as a quick preview before choosing a tighter series."
                  : "These product cards come from Metro's current live catalog and keep the collection aligned with the real product list."
              }
            />
            <div className="mt-10">
              <LiveProductGrid
                items={liveProducts}
                limit={collection.collections?.length ? 12 : undefined}
              />
            </div>
          </div>
        </section>
      ) : null}

      <CatalogSnapshot
        eyebrow="Collection guide"
        title={`${collection.title} selections, organized for showroom review.`}
        description={`Metro lists ${collection.count} items in this collection on the current source catalog. The page highlights the most useful series, previews, and next steps above before an in-person comparison.`}
        tags={(collection.collections ?? [])
          .map((item) => item.title)
          .concat(
            collection.collections?.length
              ? []
              : liveProducts.length
                ? liveProducts.slice(0, 10).map((item) => item.name)
                : sourcePreviewItems.map((item) => item.title)
          )}
        stats={[
          {
            label: "Catalog items",
            value: String(collection.count),
            detail: "Current source-catalog count for this collection.",
          },
          {
            label: collection.collections?.length ? "Subcollections" : "Previews",
            value: String(
              collection.collections?.length ??
                (liveProducts.length || sourcePreviewItems.length)
            ),
            detail: collection.collections?.length
              ? "Series or families to compare before choosing a finish."
              : "Visible selections from Metro's source-backed catalog.",
          },
          {
            label: "Category",
            value: product.title,
            detail: `Part of Metro's ${product.title.toLowerCase()} showroom catalog.`,
          },
        ]}
      />

      <FeatureList
        title="How to shop this collection"
        items={[
          "Compare colors and finishes in showroom lighting",
          "Confirm current availability before ordering",
          "Bring room measurements or project plans",
          "Ask for guidance across matching materials",
        ]}
      />
      <FAQSection faqs={product.faqs} />
      <RelatedLinks
        title="Continue browsing"
        links={continueLinks}
      />
      <ContactCTA
        title={`Ask Metro about ${collection.title}.`}
        description="Bring your room details, renovation goals, and preferred finishes to compare options with the showroom team."
      />
      <SiteFooter />
    </main>
  );
}
