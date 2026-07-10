import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA, FAQSection, RelatedLinks } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  getLocalTopic,
  getProduct,
  getService,
  localTopics,
} from "@/lib/data";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type BramptonPageProps = {
  params: Promise<{
    topic: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localTopics.map((topic) => ({
    topic: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: BramptonPageProps): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = getLocalTopic(topicSlug);

  if (!topic) {
    return {};
  }

  return pageMetadata({
    title: topic.title,
    description: topic.description,
    path: `/brampton/${topic.slug}`,
    image: topic.image,
    keywords: topic.seoKeywords ?? [
      topic.title,
      `${topic.title} showroom`,
      "Metro Tiles and Flooring Brampton",
    ],
  });
}

export default async function BramptonTopicPage({ params }: BramptonPageProps) {
  const { topic: topicSlug } = await params;
  const topic = getLocalTopic(topicSlug);

  if (!topic) {
    notFound();
  }

  const relatedProductLinks = topic.relatedProducts
    .map((slug) => getProduct(slug))
    .filter(Boolean)
    .map((product) => ({
      label: product!.title,
      href: `/products/${product!.slug}`,
      description: product!.description,
    }));

  const relatedServiceLinks = topic.relatedServices
    .map((slug) => getService(slug))
    .filter(Boolean)
    .map((service) => ({
      label: service!.title,
      href: `/services/${service!.slug}`,
      description: service!.description,
    }));

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: topic.title, path: `/brampton/${topic.slug}` },
        ])}
      />
      <JsonLd data={faqJsonLd(topic.faqs)} />

      <SiteHeader />
      <PageHero
        eyebrow={topic.eyebrow}
        title={topic.title}
        description={topic.intro}
        image={topic.image}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: topic.title, href: `/brampton/${topic.slug}` },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Local showroom guidance
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Make material decisions with samples, context, and expert advice.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Metro is positioned for Brampton and GTA customers who want to
              compare real materials before committing to a renovation,
              commercial update, or new-build supply decision.
            </p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[6px] bg-stone-100">
            <Image
              src={topic.image}
              alt={topic.title}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {topic.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[6px] border border-stone-200 bg-white p-6"
            >
              <h2 className="text-2xl font-semibold text-stone-950">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection faqs={topic.faqs} />
      <RelatedLinks
        title="Related Metro pages"
        links={[
          ...relatedProductLinks,
          ...relatedServiceLinks,
          {
            label: "Get a free quote",
            href: "/quote",
            description:
              "Share your room, timeline, and material needs with the Metro team.",
          },
        ]}
      />
      <ContactCTA
        title={`Visit Metro for ${topic.title.toLowerCase()}.`}
        description="Use the showroom to compare samples, confirm availability, and get guidance before the project moves forward."
      />
      <SiteFooter />
    </main>
  );
}
