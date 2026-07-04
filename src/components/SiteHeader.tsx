import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/lib/data";

type SiteHeaderProps = {
  variant?: "overlay" | "light";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-stone-950/25 text-white backdrop-blur-xl"
          : "sticky top-0 z-50 border-b border-stone-200 bg-[#faf9f6]/95 text-stone-950 backdrop-blur-xl"
      }
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${site.name} home`}
        >
          <span
            className={
              isOverlay
                ? "relative block h-11 w-[150px] sm:w-[190px]"
                : "relative block h-12 w-[160px] sm:w-[198px]"
            }
          >
            <Image
              src={
                isOverlay
                  ? "/images/metro-logo-white.png"
                  : "/images/metro-logo-stone.png"
              }
              alt={site.name}
              fill
              sizes="(min-width: 640px) 198px, 160px"
              className="object-contain object-left"
              priority={isOverlay}
            />
          </span>
        </Link>

        <nav
          className={
            isOverlay
              ? "hidden items-center gap-7 text-sm font-medium text-stone-100 md:flex"
              : "hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex"
          }
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isOverlay
                  ? "transition hover:text-white"
                  : "transition hover:text-stone-950"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className={
              isOverlay
                ? "hidden h-11 items-center rounded-[4px] bg-white px-5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-950 transition hover:bg-teal-100 sm:flex"
                : "hidden h-11 items-center rounded-[4px] bg-stone-950 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-teal-900 sm:flex"
            }
          >
            Get quote
          </Link>

          <details className="group relative md:hidden">
            <summary
              className={
                isOverlay
                  ? "flex h-11 cursor-pointer list-none items-center rounded-[4px] border border-white/25 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                  : "flex h-11 cursor-pointer list-none items-center rounded-[4px] border border-stone-300 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-stone-950"
              }
            >
              Menu
            </summary>
            <div className="absolute right-0 top-14 grid min-w-56 gap-1 rounded-[6px] border border-stone-200 bg-white p-2 text-stone-950 shadow-2xl">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[4px] px-3 py-2 text-sm font-medium hover:bg-stone-100"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="rounded-[4px] px-3 py-2 text-sm font-semibold text-teal-900 hover:bg-stone-100"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
