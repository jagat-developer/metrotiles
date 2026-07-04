import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { globalFaqs, site } from "@/lib/data";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { QuoteForm } from "../QuoteForm";

const quoteBenefits = [
  {
    title: "Wide flooring selection",
    body: "Choose from vinyl flooring, laminate flooring, engineered hardwood, and solid hardwood for residential and commercial spaces.",
  },
  {
    title: "Helpful product guidance",
    body: "Metro helps customers compare style, durability, maintenance, moisture resistance, and project fit.",
  },
  {
    title: "Built for real projects",
    body: "From basement renovations to condo upgrades and full-home remodels, Metro helps clients choose flooring that fits the space.",
  },
  {
    title: "Competitive value",
    body: "Metro focuses on quality flooring products at fair prices so customers can balance style, performance, and budget.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Quote",
  description:
    "Request a free quote from Metro Tiles & Flooring for flooring, tiles, furnishings, and construction materials in Brampton and across the GTA.",
  path: "/quote",
  image: "/images/vinyl-flooring.jpg",
  keywords: [
    "free flooring quote Brampton",
    "tile quote Brampton",
    "flooring in Brampton",
    "Metro Tiles quote",
  ],
});

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get a Free Quote", path: "/quote" },
        ])}
      />
      <JsonLd data={faqJsonLd(globalFaqs)} />

      <SiteHeader />
      <PageHero
        eyebrow="Flooring in Brampton"
        title="Tell Metro about your project."
        description="Find the right flooring, tile, furnishing, or construction material for your home, basement, condo, renovation, or commercial project."
        image="/images/vinyl-flooring.jpg"
        ctaLabel="Start quote"
        ctaHref="#quote-form"
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Quote", href: "/quote" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Why choose Metro
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              Quality products, practical guidance, and showroom support.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Metro makes material selection easier for Brampton homeowners,
              contractors, and designers by combining product variety, useful
              guidance, and competitive value in one place.
            </p>
            <div className="mt-8 grid min-w-0 gap-4">
              {quoteBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="min-w-0 rounded-[6px] border border-stone-200 bg-[#faf9f6] p-5"
                >
                  <h3 className="text-lg font-semibold text-stone-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {benefit.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div id="quote-form" className="min-w-0">
            <QuoteForm />
            <div className="mt-6 min-w-0 rounded-[6px] border border-stone-200 bg-[#eef8f5] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-900">
                Contact details
              </p>
              <div className="mt-4 grid min-w-0 gap-3 text-sm text-stone-700">
                <a
                  href={site.phoneHref}
                  className="min-w-0 break-words font-semibold text-stone-950"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="min-w-0 break-words font-semibold text-stone-950"
                >
                  {site.email}
                </a>
                <p className="min-w-0 break-words font-semibold text-stone-950">
                  {site.address.street}, {site.address.city}, {site.address.region},{" "}
                  {site.address.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={globalFaqs} />
      <SiteFooter />
    </main>
  );
}
