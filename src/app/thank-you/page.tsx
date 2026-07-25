import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/data";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Thank You | ${site.name}`,
  description:
    "Thank you for contacting Metro Tiles & Flooring. The Brampton showroom team will follow up about your flooring, tile, or renovation material request.",
  alternates: {
    canonical: absoluteUrl("/thank-you"),
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-950">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />

      <SiteHeader />

      <section className="bg-[#f5f3ee] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Thank You", href: "/thank-you" },
            ]}
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-white p-6 sm:p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-800">
                Request received
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">
                Thank you for reaching out.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Metro&apos;s showroom team will review your project details and
                follow up about flooring, tile, bathroom materials, or
                renovation support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="flex h-12 items-center justify-center rounded-[4px] bg-stone-950 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900"
                >
                  Browse products
                </Link>
                <a
                  href={site.phoneHref}
                  className="flex h-12 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-stone-900 transition hover:border-teal-900 hover:text-teal-900"
                >
                  Call now
                </a>
              </div>
            </div>

            <aside className="bg-[#eef8f5] p-6 sm:p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                Showroom details
              </p>
              <div className="mt-6 grid gap-5 text-base leading-7 text-stone-700">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block break-words text-xl font-semibold text-stone-950 hover:text-teal-900"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block break-words text-xl font-semibold text-stone-950 hover:text-teal-900"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Address
                  </p>
                  <p className="mt-1 break-words text-xl font-semibold text-stone-950">
                    {site.address.street}, {site.address.city},{" "}
                    {site.address.region}, {site.address.postalCode}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
