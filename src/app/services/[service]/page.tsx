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
import { getService, productCategories, services } from "@/lib/data";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{
    service: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    return {};
  }

  const pageTitle =
    service.pageTitle ?? `${service.title} Services in Brampton`;

  return pageMetadata({
    title: pageTitle,
    description:
      service.seoDescription ??
      `${service.description} Get expert showroom guidance from Metro Tiles & Flooring in Brampton.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: service.seoKeywords ?? [
      `${service.title} services Brampton`,
      `${service.title} Metro Tiles`,
      "Brampton renovation materials",
    ],
  });
}

function relatedProducts(serviceSlug: string) {
  const slugs =
    serviceSlug === "tiles"
      ? ["tiles", "wall-tiles", "bathroom-accessories"]
      : serviceSlug === "furnishings"
        ? ["vanity", "bathroom-accessories", "wall-tiles"]
        : serviceSlug === "flooring"
          ? ["vinyl", "laminate", "engineered-hardwood"]
          : ["tiles", "vinyl", "solid-hardwood"];

  return slugs
    .map((slug) => productCategories.find((product) => product.slug === slug))
    .filter(Boolean)
    .map((product) => ({
      label: product!.title,
      href: `/products/${product!.slug}`,
      description: product!.description,
    }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <SiteHeader />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.pageTitle ?? `${service.title} services in Brampton`}
        description={service.intro}
        image={service.image}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="relative min-h-[440px] overflow-hidden rounded-[6px] bg-stone-100">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              How Metro supports this service
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Practical support from product selection to project planning.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Metro combines showroom comparison, product knowledge, and
              material supply support so customers can choose with more clarity
              before the project starts.
            </p>
          </div>
        </div>
      </section>

      <FeatureList title="What Metro offers" items={service.offerings} />
      <FeatureList title="Why this matters" items={service.benefits} />
      <FAQSection faqs={service.faqs} />
      <RelatedLinks
        title="Related product categories"
        links={[
          ...relatedProducts(service.slug),
          {
            label: "Get a free quote",
            href: "/quote",
            description:
              "Tell Metro about your room, timeline, product needs, and budget.",
          },
        ]}
      />
      <ContactCTA
        title={`Plan your ${service.title.toLowerCase()} project with Metro.`}
        description="Visit the Brampton showroom to compare materials, ask questions, and choose the right next step."
      />
      <SiteFooter />
    </main>
  );
}
