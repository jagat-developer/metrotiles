import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import type { FAQ } from "@/lib/data";
import { site } from "@/lib/data";

export function FeatureList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl leading-tight text-stone-950">
          {title}
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="bg-[#faf9f6] p-5">
              <p className="text-base font-semibold text-stone-950">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatalogSnapshot({
  eyebrow,
  title,
  description,
  stats,
  tags,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string; detail: string }>;
  tags: string[];
}) {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-[#faf9f6] p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              {description}
            </p>
            {tags.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {tags.slice(0, 8).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="grid bg-white sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-stone-200 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {stat.label}
                </p>
                <p className="mt-3 break-words font-serif text-3xl leading-none text-stone-950 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950">
              Common questions before you visit.
            </h2>
          </div>
          <div className="min-w-0">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA({
  title = "Ready to compare materials in person?",
  description = "Visit Metro's Brampton showroom, call the team, or send project details for a free quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-stone-200 bg-[#eef8f5] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
            Visit the showroom
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-stone-950">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/quote"
            className="flex h-12 items-center justify-center rounded-[4px] bg-stone-950 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900"
          >
            Get a free quote
          </Link>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-stone-900 transition hover:border-teal-900 hover:text-teal-900"
          >
            Visit showroom
          </a>
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string; description: string }>;
}) {
  return (
    <section className="bg-[#f5f3ee] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl leading-tight text-stone-950">
          {title}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[6px] border border-stone-200 bg-white p-5 transition hover:border-teal-800"
            >
              <h3 className="text-xl font-semibold text-stone-950">
                {link.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
