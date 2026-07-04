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

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
          <Link
            href={`/products/${featureProduct.slug}`}
            className="group relative isolate flex min-h-[430px] overflow-hidden rounded-[6px] bg-stone-950 text-white shadow-[0_24px_80px_rgba(39,35,29,0.16)] sm:min-h-[520px]"
          >
            <Image
              src={featureProduct.image}
              alt={featureProduct.title}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/10" />
            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
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

          <div className="grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {secondaryProducts.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-[#faf9f6] transition hover:bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    0{index + 1} / {product.count} options
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-stone-950">
                    {product.title}
                  </h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-stone-600">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-teal-800 transition group-hover:text-stone-950">
                    View collection
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
