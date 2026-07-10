import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/data";

const preferredProductOrder = [
  "engineered-hardwood",
  "vinyl",
  "laminate",
  "solid-hardwood",
  "wall-tiles",
  "bathroom-accessories",
];

function orderedSecondaryProducts(
  products: ProductCategory[],
  featureSlug: string,
) {
  const ordered = preferredProductOrder
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is ProductCategory => Boolean(product));

  const orderedSlugs = new Set([featureSlug, ...ordered.map((product) => product.slug)]);

  return [
    ...ordered,
    ...products.filter((product) => !orderedSlugs.has(product.slug)),
  ].slice(0, 6);
}

export function HomeProductShowcase({
  products,
}: {
  products: ProductCategory[];
}) {
  const featureProduct =
    products.find((product) => product.slug === "tiles") ?? products[0];
  const secondaryProducts = orderedSecondaryProducts(
    products,
    featureProduct.slug,
  );
  const middleProducts = secondaryProducts.slice(0, 4);
  const closingProduct =
    secondaryProducts.find((product) => product.slug === "bathroom-accessories") ??
    secondaryProducts[4] ??
    featureProduct;
  const companionProduct = secondaryProducts.find(
    (product) => product.slug === "wall-tiles",
  );
  const totalSelections = products.reduce(
    (total, product) => total + product.count,
    0,
  );

  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
              Material showroom
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Explore surfaces with a clearer sense of scale, tone, and finish.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-3">
            <div className="bg-[#faf9f6] p-5">
              <p className="font-serif text-3xl text-stone-950">
                {products.length}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Core categories
              </p>
            </div>
            <div className="bg-[#faf9f6] p-5">
              <p className="font-serif text-3xl text-stone-950">
                {totalSelections}+
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Listed selections
              </p>
            </div>
            <div className="bg-[#faf9f6] p-5">
              <p className="font-serif text-3xl text-stone-950">Brampton</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Showroom support
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5">
          <Link
            href={`/products/${featureProduct.slug}`}
            className="group relative isolate flex min-h-[360px] overflow-hidden rounded-[6px] bg-stone-950 text-white shadow-[0_24px_80px_rgba(39,35,29,0.16)] sm:min-h-[420px]"
          >
            <Image
              src={featureProduct.image}
              alt={featureProduct.title}
              fill
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/46 to-stone-950/8" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/64 via-transparent to-stone-950/8" />
            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8 lg:max-w-[62%]">
              <div className="flex flex-wrap gap-2">
                {featureProduct.useCases.slice(0, 3).map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-[4px] border border-white/25 bg-white/[0.12] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                  >
                    {useCase}
                  </span>
                ))}
              </div>

              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-100">
                  Featured category / {featureProduct.count} options
                </p>
                <h3 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                  {featureProduct.title} for walls, floors, baths, and kitchens.
                </h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-stone-100">
                  {featureProduct.description}
                </p>
                <span className="mt-6 inline-flex h-11 items-center justify-center rounded-[4px] bg-white px-5 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 transition group-hover:bg-teal-50">
                  Explore tiles
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {middleProducts.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex min-h-full flex-col overflow-hidden rounded-[6px] border border-stone-200 bg-[#faf9f6] shadow-[0_18px_55px_rgba(40,34,27,0.06)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(40,34,27,0.1)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    0{index + 1} / {product.count} options
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-stone-950">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {product.description}
                  </p>
                  <span className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800 transition group-hover:text-stone-950">
                    View collection
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href={`/products/${closingProduct.slug}`}
            className="group grid overflow-hidden rounded-[6px] border border-stone-200 bg-[#f5f3ee] shadow-[0_18px_60px_rgba(40,34,27,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_78px_rgba(40,34,27,0.12)] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="flex min-h-[260px] flex-col justify-center p-6 sm:p-8 lg:min-h-[320px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Final layer / {closingProduct.count} options
              </p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
                {closingProduct.title} for polished bathroom finishes.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
                {closingProduct.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {closingProduct.collections?.slice(0, 3).map((collection) => (
                  <span
                    key={collection.slug}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600"
                  >
                    {collection.title}
                  </span>
                ))}
                {companionProduct ? (
                  <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                    Pairs with {companionProduct.title}
                  </span>
                ) : null}
              </div>
              <span className="mt-7 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-teal-800 transition group-hover:text-stone-950">
                View finishing options
              </span>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-stone-100 lg:min-h-full">
              <Image
                src={closingProduct.image}
                alt={closingProduct.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f5f3ee]/10" />
            </div>
          </Link>
        </div>

        <div className="mt-5 grid gap-3 border-t border-stone-200 pt-5 text-sm leading-7 text-stone-600 md:grid-cols-[1fr_auto] md:items-center">
          <p>
            Compare tile, hardwood, vinyl, laminate, vanity, and bath finishes
            in one showroom before deciding what belongs in the project.
          </p>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center rounded-[4px] border border-stone-300 bg-white px-5 text-xs font-semibold uppercase tracking-[0.16em] text-stone-950 transition hover:border-teal-900 hover:text-teal-900"
          >
            See all products
          </Link>
        </div>
      </div>
    </section>
  );
}
