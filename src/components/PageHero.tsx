import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Get a free quote",
  ctaHref = "/quote",
}: PageHeroProps) {
  return (
    <section className="bg-[#f5f3ee] pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ctaHref}
              className="flex h-12 items-center justify-center rounded-[4px] bg-teal-900 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-stone-950"
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:+19054500001"
              className="flex h-12 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-stone-900 transition hover:border-teal-900 hover:text-teal-900"
            >
              Call now
            </a>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[6px] border border-white bg-stone-100 shadow-[0_34px_100px_rgba(50,44,35,0.14)] lg:min-h-[540px]">
          <Image
            src={image}
            alt={title}
            fill
            preload
            loading="eager"
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
