"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/bath-tub.jpg",
    alt: "Onyx turquoise tile bathroom with freestanding tub",
    label: "Statement bathrooms",
    title: "Where quality meets elegance.",
    description:
      "Premium tile, flooring, furnishing, and construction solutions for homes, condos, contractors, and designers across the GTA.",
  },
  {
    image: "/images/dome-tile.jpg",
    alt: "Large format neutral tile reception interior",
    label: "Large-format porcelain",
    title: "Surfaces that make the room.",
    description:
      "Explore refined porcelain, marble-look tile, hardwood, vinyl, and finishing materials in Metro's Brampton showroom.",
  },
  {
    image: "/images/bora-bora-tile.jpg",
    alt: "Textured designer tile wall with lamp and decor",
    label: "Designer collections",
    title: "Texture, tone, and scale in real life.",
    description:
      "Compare premium collections in person and get expert guidance before selecting materials for your project.",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (shouldReduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-stone-950 text-white"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            preload={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className={`object-cover transition duration-[1400ms] ease-out ${
              activeSlide === index
                ? "scale-100 opacity-100"
                : "scale-[1.03] opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/82 via-stone-950/38 to-stone-950/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/35" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-8 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl pb-10 sm:pb-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-teal-100">
            Brampton tile and flooring showroom
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
            {currentSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
            {currentSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-[4px] bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 transition hover:bg-teal-100"
            >
              Get a free quote
            </a>
            <a
              href="tel:+19054500001"
              className="flex h-12 items-center justify-center rounded-[4px] border border-white/55 bg-white/10 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white hover:text-stone-950"
            >
              Call now
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12%20-%2072%20Devon%20Road%2C%20Brampton%2C%20ON%20L6T%205B4"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-center rounded-[4px] border border-white/30 bg-stone-950/20 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-white hover:bg-white/15"
            >
              Visit showroom
            </a>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/20 pt-5 text-white md:grid-cols-[1fr_auto] md:items-end">
          <div className="hidden gap-3 sm:grid sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold">GTA</p>
              <p className="mt-1 text-sm text-stone-200">Delivery area</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">2-5</p>
              <p className="mt-1 text-sm text-stone-200">Tile install days</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">1-3</p>
              <p className="mt-1 text-sm text-stone-200">Vinyl install days</p>
            </div>
          </div>

          <div className="grid gap-3 sm:min-w-[360px]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-100">
                {currentSlide.label}
              </p>
              <p className="text-xs text-stone-300">
                0{activeSlide + 1} / 0{slides.length}
              </p>
            </div>
            <div className="flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 flex-1 rounded-full transition ${
                    activeSlide === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Show ${slide.label}`}
                  aria-pressed={activeSlide === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
