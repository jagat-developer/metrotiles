import Image from "next/image";
import type { Metadata } from "next";
import { ServiceGrid } from "@/components/CardGrids";
import { FAQSection } from "@/components/ContentSections";
import { CustomerFeedbackCarousel } from "@/components/CustomerFeedbackCarousel";
import { HomeProductShowcase } from "@/components/HomeProductShowcase";
import { JsonLd } from "@/components/JsonLd";
import { SectionIntro } from "@/components/SectionIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  benefits,
  brandNames,
  globalFaqs,
  productCategories,
  reviews,
  services,
  site,
} from "@/lib/data";
import { collectionJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { HeroCarousel } from "./HeroCarousel";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = pageMetadata({
  title: "Flooring Brampton & Tile Showroom | Metro Tiles & Flooring",
  description:
    "Metro Tiles & Flooring is a Brampton flooring company and tile showroom for hardwood, vinyl, laminate, tile, bathroom renovation materials, and free quotes.",
  path: "/",
  image: "/images/showroom/ash-spa-bathroom.jpg",
  keywords: [
    "Metro Tiles and Flooring",
    "flooring brampton",
    "flooring company brampton",
    "flooring companies brampton",
    "tiles store in brampton",
    "tiles brampton",
    "hardwood flooring brampton",
    "wood flooring brampton",
  ],
});

const showroomMoments = [
  {
    title: "Bright bath suites",
    description: "Marble-look tile, tubs, and fixtures viewed as a complete room.",
    image: "/images/showroom/white-bathroom-tiles.jpg",
  },
  {
    title: "Warm flooring palettes",
    description: "Wood-look surfaces paired with kitchen and furnishing finishes.",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
  },
  {
    title: "Feature wall direction",
    description: "Decorative wall tile ideas for bathrooms and accent spaces.",
    image: "/images/showroom/floral-wall-tile-bathroom.jpg",
  },
  {
    title: "Open-plan materials",
    description: "Flooring, stone surfaces, and finishes considered together.",
    image: "/images/showroom/open-showroom-living.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd data={faqJsonLd(globalFaqs)} />
      <JsonLd
        data={collectionJsonLd({
          name: "Metro Tiles & Flooring product categories",
          description:
            "Tile, flooring, bathroom, vanity, vinyl, laminate, hardwood, and wall tile categories available through Metro Tiles & Flooring.",
          path: "/products",
          items: productCategories.map((product) => ({
            name: product.title,
            description: product.description,
            path: `/products/${product.slug}`,
          })),
        })}
      />

      <SiteHeader />
      <HeroCarousel />

      <HomeProductShowcase products={productCategories} />

      <section className="bg-[#faf9f6] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                Showroom inspiration
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                See finishes in rooms, not just as samples.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-stone-600 lg:justify-self-end">
              The strongest material decisions happen when tile, flooring,
              fixtures, and furnishings are viewed together with light, scale,
              and surrounding finishes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {showroomMoments.map((moment, index) => (
              <article
                key={moment.title}
                className={`group relative isolate min-h-[320px] overflow-hidden rounded-[6px] bg-stone-900 shadow-[0_24px_80px_rgba(50,44,35,0.12)] ${
                  index === 0 ? "lg:col-span-2 lg:min-h-[520px]" : ""
                } ${index === 3 ? "lg:col-span-2" : ""}`}
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes={
                    index === 0 || index === 3
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 100vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/78 via-stone-950/16 to-transparent" />
                <div className="relative z-10 flex min-h-[inherit] flex-col justify-end p-5 sm:p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {moment.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-stone-100">
                    {moment.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-stone-200 bg-[#f5f3ee] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Our services"
            title="From selection to supply, Metro supports the full project."
            description="Metro provides premium flooring, tile, furnishing, and construction solutions tailored to homeowners, contractors, and interior designers."
          />
          <div className="mt-10">
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>

      <section id="why" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden rounded-[6px] bg-stone-100">
              <Image
                src="/images/showroom/sage-pool-lounge-tile.jpg"
                alt="Premium tile and flooring lounge display"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                Why choose Metro
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Expert guidance, durable materials, and value without the guesswork.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                Metro helps customers compare products in person, match materials
                to their space, and keep pricing transparent from selection
                through installation.
              </p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="bg-[#faf9f6] p-5">
                    <p className="text-base font-semibold text-stone-950">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-[4px] bg-stone-950 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900"
              >
                Plan your visit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                Brands and collections
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
                A showroom built for comparing texture, scale, and finish.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-stone-300 lg:justify-self-end">
              Inspired by premium catalog experiences, this section keeps the
              focus on Metro carried brands and the materials customers can
              explore in person.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[440px] overflow-hidden rounded-[6px] bg-stone-800">
              <Image
                src="/images/showroom/sunset-kitchen-island.jpg"
                alt="Premium kitchen island with warm stone-look finish"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid content-between gap-6 rounded-[6px] border border-white/10 bg-white/[0.04] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Brands we carry
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {brandNames.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-[4px] border border-white/15 bg-white/[0.06] px-3 py-2 text-sm text-stone-100"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-2xl font-semibold">Need samples?</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  Visit the Brampton showroom to see finishes in real lighting,
                  compare options, and get guidance before you order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feedback" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                Customer feedback
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                Customers call out the selection, pricing, and helpful service.
              </h2>
            </div>
            <div className="min-w-0">
              <CustomerFeedbackCarousel reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={globalFaqs} />

      <section id="contact" className="border-t border-stone-200 bg-[#eef8f5] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Get a free quote
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              Stop by the showroom or tell Metro about your project.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-700">
              Explore a wide selection, get expert advice, and find the right
              flooring and tiles for your next renovation or new build.
            </p>

            <div className="mt-8 grid min-w-0 gap-4 text-stone-800">
              <a
                className="min-w-0 break-words text-lg font-semibold text-stone-950 hover:text-teal-900"
                href={site.phoneHref}
              >
                {site.phoneDisplay}
              </a>
              <a
                className="min-w-0 break-words text-lg font-semibold text-stone-950 hover:text-teal-900"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <p className="min-w-0 break-words text-lg font-semibold text-stone-950">
                {site.address.street}, {site.address.city}, {site.address.region},{" "}
                {site.address.postalCode}
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
