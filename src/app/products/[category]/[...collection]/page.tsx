import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { SectionIntro } from "@/components/SectionIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getProduct,
  getAllProductCollectionPaths,
  getProductCollectionTrail,
  productCollectionPath,
  site,
  services,
} from "@/lib/data";
import {
  getAllLiveProductRoutePaths,
  getLiveProductForRoute,
  getLiveProductsForRoute,
} from "@/lib/liveCatalog";
import {
  absoluteUrl,
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
  return [
    ...getAllProductCollectionPaths(),
    ...getAllLiveProductRoutePaths(),
  ];
}

export async function generateMetadata({
  params,
}: ProductCollectionPageProps): Promise<Metadata> {
  const { category, collection: collectionSlugs } = await params;
  const data = getProductCollectionTrail(category, collectionSlugs);

  if (data) {
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

  const productDetail = getLiveProductDetailData(category, collectionSlugs);

  if (!productDetail) {
    return {};
  }

  const contextTitle =
    productDetail.collection?.title ?? productDetail.productCategory.title;

  return pageMetadata({
    title: `${productDetail.liveProduct.name} ${contextTitle} in Brampton`,
    description: `View ${productDetail.liveProduct.name}, a source-backed ${contextTitle} selection from Metro Tiles & Flooring's live catalog for showroom comparison and quote requests.`,
    path: productDetail.currentPath,
    image: productDetail.liveProduct.image,
    keywords: [
      `${productDetail.liveProduct.name} Brampton`,
      `${contextTitle} products`,
      ...(productDetail.productCategory.seoKeywords?.slice(0, 3) ?? []),
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

function getLiveProductDetailData(categorySlug: string, routeSlugs: string[]) {
  const productSlug = routeSlugs.at(-1);

  if (!productSlug) {
    return null;
  }

  const collectionSlugs = routeSlugs.slice(0, -1);
  const productCategory = getProduct(categorySlug);

  if (!productCategory) {
    return null;
  }

  const trailData = collectionSlugs.length
    ? getProductCollectionTrail(categorySlug, collectionSlugs)
    : null;

  if (collectionSlugs.length && !trailData) {
    return null;
  }

  const liveProduct = getLiveProductForRoute(
    categorySlug,
    collectionSlugs,
    productSlug
  );

  if (!liveProduct) {
    return null;
  }

  return {
    collection: trailData?.collection,
    collectionSlugs,
    currentPath: productCollectionPath(categorySlug, routeSlugs),
    liveProduct,
    parentPath: collectionSlugs.length
      ? productCollectionPath(categorySlug, collectionSlugs)
      : `/products/${categorySlug}`,
    productCategory,
    trail: trailData?.trail ?? [],
  };
}

type LiveProductDetailData = NonNullable<
  ReturnType<typeof getLiveProductDetailData>
>;

function LiveProductDetailPage({ detail }: { detail: LiveProductDetailData }) {
  const {
    collection,
    collectionSlugs,
    currentPath,
    liveProduct,
    parentPath,
    productCategory,
    trail,
  } = detail;
  const contextTitle = collection?.title ?? productCategory.title;
  const primaryCategory = liveProduct.categories[0]?.name ?? contextTitle;
  const relatedProducts = getLiveProductsForRoute(
    productCategory.slug,
    collectionSlugs
  )
    .filter((item) => item.id !== liveProduct.id)
    .slice(0, 4);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: productCategory.title, href: `/products/${productCategory.slug}` },
    ...trail.map((item, index) => ({
      label: item.title,
      href: productCollectionPath(
        productCategory.slug,
        collectionSlugs.slice(0, index + 1)
      ),
    })),
    { label: liveProduct.name, href: currentPath },
  ];
  const webPageDescription = `Source-backed ${contextTitle} product from Metro's live catalog for showroom comparison and quote requests.`;

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd(
          breadcrumbs.map((item) => ({ name: item.label, path: item.href }))
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${liveProduct.name} at ${site.name}`,
          description: webPageDescription,
          url: absoluteUrl(currentPath),
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(liveProduct.image),
          },
        }}
      />

      <SiteHeader />

      <section className="bg-[#faf9f6] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
            <div className="overflow-hidden rounded-[6px] border border-stone-200 bg-white shadow-[0_28px_90px_rgba(50,44,35,0.08)]">
              <div className="relative aspect-square bg-stone-100 sm:aspect-[5/4]">
                <Image
                  src={liveProduct.image}
                  alt={liveProduct.name}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-teal-800">
                Source product
              </p>
              <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-normal text-stone-950 sm:text-6xl lg:text-7xl">
                {liveProduct.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                {liveProduct.name} is listed in Metro&apos;s live catalog under{" "}
                {contextTitle}. Use this page to confirm the look, save the
                selection, and request showroom guidance before ordering.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[primaryCategory, productCategory.title, "Live catalog"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/quote"
                  className="flex h-12 items-center justify-center rounded-[4px] bg-stone-950 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-teal-900"
                >
                  Get quote
                </Link>
                <a
                  href={site.phoneHref}
                  className="flex h-12 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-5 text-xs font-semibold uppercase tracking-[0.16em] text-stone-900 transition hover:border-teal-900 hover:text-teal-900"
                >
                  Call now
                </a>
                <Link
                  href={parentPath}
                  className="flex h-12 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-5 text-xs font-semibold uppercase tracking-[0.16em] text-stone-900 transition hover:border-teal-900 hover:text-teal-900 sm:col-span-2"
                >
                  Back to collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CatalogSnapshot
        eyebrow="Product guide"
        title={`${liveProduct.name}, ready for showroom comparison.`}
        description={`Metro lists this selection in the current ${contextTitle} source catalog. Confirm finish, dimensions, availability, and installation fit with the Brampton showroom team before ordering.`}
        tags={[
          contextTitle,
          productCategory.title,
          primaryCategory,
          "Brampton showroom",
          "Quote ready",
        ]}
        stats={[
          {
            label: "Source",
            value: "Live",
            detail: "Pulled from Metro's current catalog snapshot.",
          },
          {
            label: "Category",
            value: productCategory.title,
            detail: `Part of Metro's ${productCategory.title.toLowerCase()} showroom catalog.`,
          },
          {
            label: "Next step",
            value: "Quote",
            detail:
              "Share the product name with Metro to confirm availability and fit.",
          },
        ]}
      />

      <FeatureList
        title={`How to review ${liveProduct.name}`}
        items={[
          "Compare the finish in showroom lighting",
          "Confirm current availability before planning installation",
          "Bring room photos, measurements, or design references",
          "Ask Metro about coordinating materials and matching finishes",
        ]}
      />

      {relatedProducts.length ? (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              eyebrow="Related source products"
              title={`More from ${contextTitle}.`}
              description="Continue comparing nearby selections from the same source-backed Metro catalog area."
            />
            <div className="mt-10">
              <LiveProductGrid items={relatedProducts} />
            </div>
          </div>
        </section>
      ) : null}

      <FAQSection faqs={productCategory.faqs} />
      <RelatedLinks
        title="Continue browsing"
        links={[
          {
            label: contextTitle,
            href: parentPath,
            description: `Return to the ${contextTitle} catalog page.`,
          },
          {
            label: productCategory.title,
            href: `/products/${productCategory.slug}`,
            description: `Browse the full ${productCategory.title.toLowerCase()} category.`,
          },
          ...relatedServiceLinks(productCategory.slug),
        ]}
      />
      <ContactCTA
        title={`Ask Metro about ${liveProduct.name}.`}
        description="Share this selection with Metro's showroom team to compare finishes, confirm availability, and request a quote."
      />
      <SiteFooter />
    </main>
  );
}

export default async function ProductCollectionPage({
  params,
}: ProductCollectionPageProps) {
  const { category, collection: collectionSlugs } = await params;
  const data = getProductCollectionTrail(category, collectionSlugs);

  if (!data) {
    const productDetail = getLiveProductDetailData(category, collectionSlugs);

    if (!productDetail) {
      notFound();
    }

    return <LiveProductDetailPage detail={productDetail} />;
  }

  const { product, collection, trail } = data;
  const currentPath = productCollectionPath(product.slug, collectionSlugs);
  const liveProducts = getLiveProductsForRoute(product.slug, collectionSlugs);
  const parentPath =
    collectionSlugs.length > 1
      ? productCollectionPath(product.slug, collectionSlugs.slice(0, -1))
      : `/products/${product.slug}`;
  const childCollections = collection.collections ?? [];
  const hasChildCollections = childCollections.length > 0;
  const showLiveProductsAsSource = !hasChildCollections && liveProducts.length > 0;
  const sourcePreviewItems =
    showLiveProductsAsSource
      ? []
      : collection.featuredItems ??
        (hasChildCollections
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

      {hasChildCollections ? (
        <section className="bg-[#faf9f6] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10">
              <SectionIntro
                eyebrow="Source catalog"
                title={`Browse ${collection.title} series.`}
                description="Nested collections follow Metro's live catalog structure and keep browsing focused on real showroom categories."
                headingLevel="h1"
              />
            </div>
            <div className="mt-10">
              <CollectionGrid
                collections={childCollections}
                basePath={currentPath}
              />
            </div>
          </div>
        </section>
      ) : showLiveProductsAsSource ? (
        <section className="bg-[#faf9f6] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10">
              <SectionIntro
                eyebrow="Source catalog"
                title={`Browse ${collection.title} products.`}
                description="These products are pulled from Metro's live source catalog so the collection page shows real showroom selections with product imagery and quote-ready details."
                headingLevel="h1"
              />
            </div>
            <div className="mt-10">
              <LiveProductGrid items={liveProducts} />
            </div>
          </div>
        </section>
      ) : sourcePreviewItems.length ? (
        <section className="bg-[#faf9f6] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10">
              <SectionIntro
                eyebrow="Source catalog"
                title={`Review ${collection.title} source selections.`}
                description="These source-backed cards come from Metro's catalog structure before the live product list, so the page starts with the showroom context first."
                headingLevel="h1"
              />
            </div>
            <div className="mt-10">
              <FeaturedItemGrid items={sourcePreviewItems} />
            </div>
          </div>
        </section>
      ) : null}

      {hasChildCollections && liveProducts.length ? (
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
                limit={12}
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
            label: hasChildCollections ? "Subcollections" : "Products",
            value: String(
              hasChildCollections
                ? childCollections.length
                : liveProducts.length || sourcePreviewItems.length
            ),
            detail: hasChildCollections
              ? "Series or families to compare before choosing a finish."
              : "Visible product selections from Metro's source-backed catalog.",
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
