import type { Metadata } from "next";
import { site } from "./data";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

type BreadcrumbInput = {
  name: string;
  path: string;
};

type ItemListInput = {
  name: string;
  description: string;
  path: string;
  items: Array<{
    name: string;
    description: string;
    path: string;
  }>;
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${cleanPath}`;
}

const coreLocalKeywords = [
  "Metro Tiles and Flooring Brampton",
  "Brampton showroom",
  "renovation materials Brampton",
  "home renovation materials Brampton",
  "flooring and tiles GTA",
];

const serviceLocationKeywordGroups = [
  {
    match: ["tile", "tiles", "wall tile", "backsplash", "porcelain", "ceramic"],
    keywords: [
      "tiles Brampton",
      "tiles store in Brampton",
      "tile supplier Brampton",
      "tile showroom Brampton",
      "bathroom tiles Brampton",
      "kitchen backsplash tile Brampton",
      "tile quote Brampton",
    ],
  },
  {
    match: ["flooring", "floor", "floors", "installation"],
    keywords: [
      "flooring Brampton",
      "flooring company Brampton",
      "flooring contractor Brampton",
      "flooring installation Brampton",
      "flooring showroom Brampton",
      "flooring stores Brampton",
      "flooring quote Brampton",
    ],
  },
  {
    match: ["hardwood", "wood flooring", "engineered hardwood", "solid hardwood"],
    keywords: [
      "hardwood flooring Brampton",
      "wood flooring Brampton",
      "engineered hardwood flooring Brampton",
      "solid hardwood flooring Brampton",
      "hardwood flooring stores in Brampton",
      "flooring showroom Brampton",
    ],
  },
  {
    match: ["vinyl", "spc", "waterproof"],
    keywords: [
      "vinyl flooring Brampton",
      "luxury vinyl flooring Brampton",
      "waterproof flooring Brampton",
      "vinyl plank flooring Brampton",
    ],
  },
  {
    match: ["laminate"],
    keywords: [
      "laminate flooring Brampton",
      "laminate flooring installation Brampton",
      "brampton laminate flooring",
    ],
  },
  {
    match: ["bath", "bathroom", "vanity", "shower", "faucet", "tub"],
    keywords: [
      "bathroom renovation Brampton",
      "bathroom renovation materials Brampton",
      "bathroom vanities Brampton",
      "bathroom fixtures Brampton",
      "shower panels Brampton",
      "bathroom renovation quote Brampton",
    ],
  },
  {
    match: ["construction", "renovation", "contractor", "material support"],
    keywords: [
      "home renovation in Brampton",
      "home renovation contractors Brampton",
      "construction materials Brampton",
      "renovation material supplier Brampton",
    ],
  },
  {
    match: ["quote", "free quote", "request quote"],
    keywords: [
      "free quote Brampton",
      "showroom quote Brampton",
      "renovation material quote Brampton",
    ],
  },
  {
    match: ["deals", "promotion", "promotions", "sale"],
    keywords: [
      "flooring deals Brampton",
      "tile sale Brampton",
      "flooring promotion Brampton",
      "renovation material deals Brampton",
    ],
  },
];

function uniqueKeywords(keywords: string[]) {
  const seen = new Set<string>();

  return keywords.filter((keyword) => {
    const normalized = keyword.trim().toLowerCase();

    if (!normalized || seen.has(normalized)) {
      return false;
    }

    seen.add(normalized);
    return true;
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeywordTerm(haystack: string, term: string) {
  const normalizedTerm = term.toLowerCase().replace(/[-/]/g, " ").trim();
  const pattern = new RegExp(
    `\\b${escapeRegExp(normalizedTerm).replace(/\\s+/g, "\\s+")}\\b`
  );

  return pattern.test(haystack);
}

export function buildSeoKeywords({
  title,
  description,
  path,
  keywords = [],
}: Pick<MetadataInput, "title" | "description" | "path" | "keywords">) {
  const haystack = `${title} ${description} ${path}`
    .toLowerCase()
    .replace(/metro tiles\s*(?:&|and)\s*flooring'?s?/g, "metro")
    .replace(/metro tiles/g, "metro")
    .replace(/[-/]/g, " ");
  const matchedServiceKeywords = serviceLocationKeywordGroups.flatMap((group) =>
    group.match.some((term) => matchesKeywordTerm(haystack, term))
      ? group.keywords
      : []
  );

  return uniqueKeywords([
    ...keywords,
    ...matchedServiceKeywords,
    ...coreLocalKeywords,
  ]).slice(0, 24);
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/showroom/white-bathroom-tiles.jpg",
  keywords = [],
}: MetadataInput): Metadata {
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: buildSeoKeywords({ title, description, path, keywords }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: [
      absoluteUrl("/images/showroom/white-bathroom-tiles.jpg"),
      absoluteUrl("/images/showroom/warm-kitchen-flooring.jpg"),
      absoluteUrl("/images/showroom/open-showroom-living.jpg"),
    ],
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    makesOffer: [
      "Tiles",
      "Flooring",
      "Hardwood flooring",
      "Vinyl flooring",
      "Laminate flooring",
      "Engineered hardwood flooring",
      "Flooring installation",
      "Bathroom renovation materials",
      "Furnishings",
      "Construction materials",
      "Free quotes",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function collectionJsonLd({
  name,
  description,
  path,
  items,
}: ItemListInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(item.path),
        name: item.name,
        description: item.description,
      })),
    },
  };
}
