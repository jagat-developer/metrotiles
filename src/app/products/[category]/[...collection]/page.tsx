import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollectionGrid, FeaturedItemGrid } from "@/components/CardGrids";
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
  const parentPath =
    collectionSlugs.length > 1
      ? productCollectionPath(product.slug, collectionSlugs.slice(0, -1))
      : `/products/${product.slug}`;
  const previewItems =
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

      <CatalogSnapshot
        eyebrow="Collection guide"
        title={`${collection.title} selections, organized for showroom review.`}
        description={`Metro lists ${collection.count} items in this collection on the current source catalog. The page highlights the most useful series, previews, and next steps before an in-person comparison.`}
        tags={(collection.collections ?? previewItems).map((item) => item.title)}
        stats={[
          {
            label: "Catalog items",
            value: String(collection.count),
            detail: "Current source-catalog count for this collection.",
          },
          {
            label: collection.collections?.length ? "Subcollections" : "Previews",
            value: String(collection.collections?.length ?? previewItems.length),
            detail: collection.collections?.length
              ? "Series or families to compare before choosing a finish."
              : "Visible selections from the live Metro catalog.",
          },
          {
            label: "Category",
            value: product.title,
            detail: `Part of Metro's ${product.title.toLowerCase()} showroom catalog.`,
          },
        ]}
      />

      {collection.collections?.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Subcollections"
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
      ) : null}

      {previewItems.length ? (
        <section className="bg-[#faf9f6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Showroom previews"
              title={`Preview ${collection.title} selections.`}
              description="These names and visuals come from Metro's current source catalog. The page is designed for inquiry and showroom comparison, not checkout."
            />
            <div className="mt-10">
              <FeaturedItemGrid items={previewItems} />
            </div>
          </div>
        </section>
      ) : null}

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
