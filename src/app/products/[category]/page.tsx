import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ContactCTA,
  FAQSection,
  FeatureList,
  RelatedLinks,
} from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProduct, productCategories, services } from "@/lib/data";
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

  return pageMetadata({
    title: `${product.title} in Brampton`,
    description: `${product.description} Compare ${product.title.toLowerCase()} at Metro Tiles & Flooring's Brampton showroom with expert guidance and quote support.`,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: [
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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.title, href: `/products/${product.slug}` },
  ];

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
          items: product.useCases.map((item) => ({
            name: item,
            description: `${item} supported through Metro's ${product.title} category.`,
            path: `/products/${product.slug}`,
          })),
        })}
      />

      <SiteHeader />
      <PageHero
        eyebrow={product.eyebrow}
        title={`${product.title} in Brampton`}
        description={product.intro}
        image={product.image}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Category details
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Compare {product.title.toLowerCase()} by look, performance, and room.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Metro lists {product.count} items in this category on the current
              source catalog. Visit the showroom to confirm availability,
              compare samples, and get advice before ordering.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[6px] bg-stone-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

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
