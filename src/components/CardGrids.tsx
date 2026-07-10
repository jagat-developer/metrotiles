import Image from "next/image";
import Link from "next/link";
import type {
  CatalogPreviewItem,
  ProductCategory,
  ProductCollection,
  Service,
} from "@/lib/data";
import type { LiveCatalogProduct } from "@/lib/liveCatalog";

export function ProductGrid({ products }: { products: ProductCategory[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group flex min-h-full flex-col bg-white"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
              {product.eyebrow} / {product.count} items
            </p>
            <h3 className="mt-2 text-xl font-semibold text-stone-950">
              {product.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              {product.description}
            </p>
            <div className="mt-auto pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                {product.collections?.length
                  ? `${product.collections.length} collections`
                  : `${product.featuredItems?.length ?? 0} previews`}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(product.collections ?? product.featuredItems ?? [])
                  .slice(0, 3)
                  .map((item) => (
                    <span
                      key={item.title}
                      className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600"
                    >
                      {item.title}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CollectionGrid({
  collections,
  basePath,
}: {
  collections: ProductCollection[];
  basePath: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection) => (
        <Link
          key={collection.slug}
          href={`${basePath}/${collection.slug}`}
          className="group overflow-hidden rounded-[6px] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(50,44,35,0.06)] transition hover:-translate-y-1 hover:border-teal-800 hover:shadow-[0_24px_70px_rgba(50,44,35,0.1)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-800 shadow-lg backdrop-blur">
              {collection.count} items
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
              {collection.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-950">
              {collection.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {collection.description}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
              {collection.collections?.length
                ? `${collection.collections.length} subcollections`
                : `${collection.featuredItems?.length ?? 0} previews`}
            </p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold text-teal-900">
              Explore collection
              <span className="ml-2 transition group-hover:translate-x-1">
                -&gt;
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function FeaturedItemGrid({
  items,
}: {
  items: CatalogPreviewItem[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.sourceUrl}
          className="group overflow-hidden rounded-[6px] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(50,44,35,0.06)] transition hover:-translate-y-1 hover:border-teal-800 hover:shadow-[0_24px_70px_rgba(50,44,35,0.1)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-800 shadow-lg backdrop-blur">
              Preview
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
              Showroom selection
            </p>
            <h3 className="mt-2 text-xl font-semibold text-stone-950">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {item.description}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/quote"
                className="flex h-10 items-center justify-center rounded-[4px] bg-stone-950 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900"
              >
                Ask about it
              </Link>
              <Link
                href="/quote"
                className="flex h-10 items-center justify-center rounded-[4px] border border-stone-300 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-stone-800 transition hover:border-teal-900 hover:text-teal-900"
              >
                Get quote
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function LiveProductGrid({
  items,
  limit,
}: {
  items: LiveCatalogProduct[];
  limit?: number;
}) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;
  const hiddenCount = items.length - visibleItems.length;

  if (!visibleItems.length) {
    return null;
  }

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleItems.map((item) => {
          const primaryCategory = item.categories[0]?.name ?? "Live catalog";

          return (
            <article
              key={item.id}
              className="group flex min-h-full flex-col overflow-hidden rounded-[6px] border border-stone-200 bg-white shadow-[0_18px_55px_rgba(50,44,35,0.06)] transition hover:-translate-y-1 hover:border-teal-800 hover:shadow-[0_24px_70px_rgba(50,44,35,0.1)]"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-800 shadow-lg backdrop-blur">
                  Live catalog
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                  {primaryCategory}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-stone-950">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Source-backed selection currently listed in Metro&apos;s live
                  catalog for showroom comparison.
                </p>
                <div className="mt-auto flex flex-col gap-2 pt-5">
                  <Link
                    href="/quote"
                    className="flex h-10 items-center justify-center rounded-[4px] bg-stone-950 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900"
                  >
                    Ask about it
                  </Link>
                  <Link
                    href="/quote"
                    className="flex h-10 items-center justify-center rounded-[4px] border border-stone-300 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-stone-800 transition hover:border-teal-900 hover:text-teal-900"
                  >
                    Get quote
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {hiddenCount > 0 ? (
        <div className="mt-8 rounded-[6px] border border-stone-200 bg-white p-5 text-sm leading-7 text-stone-600">
          Showing {visibleItems.length} of {items.length} source-backed products.
          Open the focused collection pages for the complete showroom set.
        </div>
      ) : null}
    </div>
  );
}

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group grid gap-4 rounded-[6px] border border-stone-200 bg-white p-4 shadow-[0_16px_50px_rgba(50,44,35,0.06)] sm:grid-cols-[180px_1fr]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-stone-100 sm:aspect-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="180px"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="py-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
              0{index + 1} / {service.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-950">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
