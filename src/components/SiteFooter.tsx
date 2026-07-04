import Image from "next/image";
import Link from "next/link";
import { navigation, productCategories, services, site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="relative block h-14 w-[196px]"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/images/metro-logo-white.png"
              alt={site.name}
              fill
              sizes="196px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-7 text-stone-400">
            {site.tagline}
          </p>
          <div className="mt-5 grid min-w-0 gap-2 text-sm text-stone-300">
            <a className="min-w-0 break-words hover:text-white" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a
              className="min-w-0 break-words hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="min-w-0 break-words">
              {site.address.street}, {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Explore
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-300">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Products
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-300">
            {productCategories.slice(0, 5).map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="hover:text-white"
              >
                {product.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Services
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-300">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-stone-500 sm:px-6 lg:px-8">
        Copyright 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
