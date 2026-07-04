import Image from "next/image";
import Link from "next/link";
import type { ProductCategory, Service } from "@/lib/data";

export function ProductGrid({ products }: { products: ProductCategory[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[6px] border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group bg-white"
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
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
              {product.eyebrow} / {product.count}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-stone-950">
              {product.title}
            </h3>
            <p className="mt-3 min-h-20 text-sm leading-6 text-stone-600">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
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
