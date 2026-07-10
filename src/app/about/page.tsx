import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA, FeatureList } from "@/components/ContentSections";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { benefits, site } from "@/lib/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Metro Tiles & Flooring Brampton",
  description:
    "Learn about Metro Tiles & Flooring, a Brampton flooring company and tile showroom offering expert advice, direct-import value, and material support.",
  path: "/about",
  image: "/images/showroom/open-showroom-living.jpg",
  keywords: [
    "about Metro Tiles and Flooring",
    "flooring company brampton",
    "flooring companies brampton",
    "brampton flooring company",
    "tiles store in brampton",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <SiteHeader />
      <PageHero
        eyebrow="About Metro"
        title="Where quality, style, and customer satisfaction come together."
        description="Metro is more than a tile and flooring store. The team helps homeowners, contractors, and designers find quality materials, expert advice, and a better showroom experience."
        image="/images/showroom/open-showroom-living.jpg"
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Our story
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              A trusted partner in your design journey.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-stone-600">
            <p>
              At {site.name}, flooring and tiles are more than a surface. They
              are the foundation of a beautiful, comfortable, and lasting space.
              Metro helps customers bring renovation, commercial, and new-build
              visions to life with quality materials and practical guidance.
            </p>
            <p>
              Metro imports directly from factories, reducing middleman friction
              and helping customers access premium flooring and tile options at
              competitive value. The showroom is built for seeing, touching, and
              comparing materials before making a decision.
            </p>
            <p>
              The team supports homeowners, builders, designers, and contractors
              with product selection, bulk pricing conversations, reliable
              supply, and service grounded in real project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ee] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Our mission",
              body: "Help customers create stunning, functional, and long-lasting interiors through top-quality flooring and tile solutions.",
            },
            {
              title: "Our showroom",
              body: "Give customers a place to compare scale, finish, color, texture, and material quality before ordering.",
            },
            {
              title: "Our commitment",
              body: "Curate product ranges, follow industry trends, and improve service so the experience feels clear and useful.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[6px] border border-stone-200 bg-white p-6">
              <h3 className="text-2xl font-semibold text-stone-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="relative min-h-[480px] overflow-hidden rounded-[6px] bg-stone-100">
            <Image
              src="/images/showroom/ash-spa-bathroom.jpg"
              alt="Metro bathroom and vanity showroom inspiration"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Who Metro helps
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Homeowners, contractors, designers, and builders.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Whether you are renovating a home, upgrading a commercial space,
              or designing a new property, Metro helps align material selection
              with budget, style, durability, maintenance, and supply needs.
            </p>
          </div>
        </div>
      </section>

      <FeatureList title="Why customers choose Metro" items={benefits} />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
