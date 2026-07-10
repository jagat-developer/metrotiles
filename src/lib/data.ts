export type FAQ = {
  question: string;
  answer: string;
};

export type CatalogPreviewItem = {
  title: string;
  image: string;
  sourceUrl: string;
  description: string;
};

export type ProductCollection = {
  slug: string;
  title: string;
  count: number;
  eyebrow: string;
  image: string;
  description: string;
  sourceUrl: string;
  collections?: ProductCollection[];
  featuredItems?: CatalogPreviewItem[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  pageTitle?: string;
  count: number;
  eyebrow: string;
  image: string;
  sourceUrl: string;
  description: string;
  seoDescription?: string;
  seoKeywords?: string[];
  intro: string;
  features: string[];
  useCases: string[];
  faqs: FAQ[];
  collections?: ProductCollection[];
  featuredItems?: CatalogPreviewItem[];
};

export type Service = {
  slug: string;
  title: string;
  pageTitle?: string;
  eyebrow: string;
  image: string;
  description: string;
  seoDescription?: string;
  seoKeywords?: string[];
  intro: string;
  offerings: string[];
  benefits: string[];
  faqs: FAQ[];
};

export type LocalTopic = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  description: string;
  seoKeywords?: string[];
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  faqs: FAQ[];
  relatedProducts: string[];
  relatedServices: string[];
};

export const site = {
  name: "Metro Tiles & Flooring",
  legalName: "Metro Tiles and Flooring",
  url: "https://metrotilesandflooring.com",
  phoneDisplay: "(905) 450-0001",
  phoneHref: "tel:+19054500001",
  email: "metrotilesandflooring2025@gmail.com",
  address: {
    street: "#12 - 72 Devon Road",
    city: "Brampton",
    region: "ON",
    postalCode: "L6T 5B4",
    country: "CA",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=12%20-%2072%20Devon%20Road%2C%20Brampton%2C%20ON%20L6T%205B4",
  tagline:
    "Quality You Can Trust, Style You Deserve - Crafted for Every Space.",
  serviceArea: ["Brampton", "Greater Toronto Area", "Mississauga", "Vaughan"],
};

export const navigation = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Deals", href: "/deals" },
  { label: "Quote", href: "/quote" },
];

const metroSource = (path: string) => `${site.url}${path}`;

const catalogItem = (
  title: string,
  image: string,
  sourceUrl: string,
  description = "Available to compare in Metro's Brampton showroom."
): CatalogPreviewItem => ({
  title,
  image,
  sourceUrl,
  description,
});

export const productCategories: ProductCategory[] = [
  {
    slug: "bathroom-accessories",
    title: "Bathroom Accessories",
    pageTitle: "Bathroom Renovation Materials in Brampton",
    count: 10,
    eyebrow: "Bath fixtures",
    image: "/images/showroom/grey-statement-bathroom.jpg",
    sourceUrl: metroSource("/product-category/bathroom-accessories/"),
    description:
      "Finishing pieces for bathroom upgrades, shower features, tubs, and renovation-ready bath spaces.",
    seoDescription:
      "Plan bathroom renovation materials in Brampton with bath tubs, shower panels, faucets, vanities, wall tile, and showroom guidance from Metro Tiles & Flooring.",
    seoKeywords: [
      "bathroom renovation brampton",
      "bathroom renovation materials brampton",
      "home renovation contractors brampton",
      "bathroom fixtures brampton",
    ],
    intro:
      "Metro helps homeowners and contractors complete bathroom projects with accessories and fixture-ready selections that coordinate with tile, vanity, and flooring choices.",
    features: [
      "Bathroom-focused finishes",
      "Designed to pair with tile and vanity selections",
      "Useful for renovations and new builds",
      "Showroom guidance for matching materials",
    ],
    useCases: [
      "Bathroom renovations",
      "Feature walls",
      "Shower and tub updates",
      "Condo and basement bath projects",
    ],
    faqs: [
      {
        question: "Can Metro help match bathroom accessories with tile?",
        answer:
          "Yes. The showroom team can help compare finishes, tile tones, vanity styles, and fixtures so the bathroom feels cohesive.",
      },
      {
        question: "Are bathroom accessories available for renovation projects?",
        answer:
          "Yes. Metro supports both small upgrades and full bathroom renovation material planning.",
      },
    ],
    collections: [
      {
        slug: "bath-tubs",
        title: "Bath Tubs",
        count: 5,
        eyebrow: "Freestanding baths",
        image: "/images/showroom/grey-statement-bathroom.jpg",
        description:
          "Freestanding bathtub options for bathroom renovation and spa-style upgrades.",
        sourceUrl: metroSource(
          "/product-category/bathroom-accessories/bath-tubs/"
        ),
        featuredItems: [
          catalogItem(
            "307- 1650",
            "/images/catalog/bathroom-accessories/bath-tub-307-1650.webp",
            metroSource("/product/307-1650/")
          ),
          catalogItem(
            "310-1700",
            "/images/catalog/bathroom-accessories/bath-tub-310-1700.webp",
            metroSource("/product/310-1700/")
          ),
          catalogItem(
            "324-1500/1700",
            "/images/catalog/bathroom-accessories/bath-tub-324.webp",
            metroSource("/product/324-1500-1700/")
          ),
        ],
      },
      {
        slug: "faucet-and-other-accessories",
        title: "Faucet and other Accessories",
        count: 2,
        eyebrow: "Bath hardware",
        image: "/images/catalog/bathroom-accessories/faucet-accessories.jpg",
        description:
          "Faucet and bath hardware selections for polished bathroom finishing.",
        sourceUrl: metroSource(
          "/product-category/bathroom-accessories/faucet-and-other-accessories/"
        ),
        featuredItems: [
          catalogItem(
            "5 piece bathroom hardware set",
            "/images/catalog/bathroom-accessories/hardware-set.jpg",
            metroSource("/product/5-piece-bathroom-hardware-set/")
          ),
          catalogItem(
            "Bathroom Faucet Set",
            "/images/catalog/bathroom-accessories/bathroom-faucet-set.jpg",
            metroSource("/product/bathroom-faucet-set/")
          ),
        ],
      },
      {
        slug: "shower-panels",
        title: "Shower Panels",
        count: 3,
        eyebrow: "Shower systems",
        image: "/images/showroom/charcoal-bathroom-suite.jpg",
        description:
          "Shower panel and spray-system options for modern bathroom upgrades.",
        sourceUrl: metroSource(
          "/product-category/bathroom-accessories/shower-panels/"
        ),
        featuredItems: [
          catalogItem(
            "5 in 1 shower panel",
            "/images/catalog/bathroom-accessories/5-in-1-shower-panel.webp",
            metroSource("/product/5-in-1-shower-panel/")
          ),
          catalogItem(
            "8-Jet Shower Tower Shower Panel System",
            "/images/catalog/bathroom-accessories/8-jet-shower-panel.webp",
            metroSource("/product/8-jet-shower-tower-shower-panel-system/")
          ),
          catalogItem(
            "Shower head with handheld Spray Combo",
            "/images/catalog/bathroom-accessories/handheld-spray-combo.webp",
            metroSource("/product/shower-head-with-handheld-spray-combo/")
          ),
        ],
      },
    ],
  },
  {
    slug: "engineered-hardwood",
    title: "Engineered Hardwood",
    pageTitle: "Engineered Hardwood Flooring in Brampton",
    count: 175,
    eyebrow: "Wood flooring",
    image: "/images/showroom/soft-bedroom-flooring.jpg",
    sourceUrl: metroSource("/product-category/engineered-hardwood/"),
    description:
      "Natural wood beauty with added stability for modern homes, condos, and renovation projects.",
    seoDescription:
      "Compare engineered hardwood flooring in Brampton for condos, homes, living rooms, and renovation projects with Metro showroom guidance.",
    seoKeywords: [
      "engineered hardwood flooring in brampton",
      "engineered hardwood brampton",
      "hardwood flooring brampton",
      "wood flooring brampton",
    ],
    intro:
      "Engineered hardwood is a practical choice when customers want the warmth of real wood with improved dimensional stability for everyday living.",
    features: [
      "Real wood appearance",
      "Stable construction",
      "Strong choice for main living areas",
      "Available in modern tones and widths",
    ],
    useCases: [
      "Living rooms",
      "Bedrooms",
      "Condo upgrades",
      "Whole-home renovations",
    ],
    faqs: [
      {
        question: "Why choose engineered hardwood?",
        answer:
          "It balances natural wood character with durability and stability, making it useful for many residential spaces.",
      },
      {
        question: "Can Metro help compare hardwood options?",
        answer:
          "Yes. Metro helps customers compare color, finish, maintenance, and project suitability before ordering.",
      },
    ],
    collections: [
      {
        slug: "cs",
        title: "CS",
        count: 74,
        eyebrow: "Engineered collection",
        image: "/images/catalog/engineered-hardwood/cs.webp",
        description:
          "CS engineered hardwood collections spanning refined plank, herringbone, and classic wood looks.",
        sourceUrl: metroSource("/product-category/engineered-hardwood/cs/"),
        collections: [
          {
            slug: "brand-surfaces",
            title: "BRAND SURFACES",
            count: 16,
            eyebrow: "CS series",
            image: "/images/catalog/engineered-hardwood/brand-surfaces.jpg",
            description:
              "Brand Surfaces engineered hardwood styles from the CS catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/cs/brand-surfaces/"
            ),
          },
          {
            slug: "lucid-plank-herringbone",
            title: "LUCID (Plank & Herringbone)",
            count: 20,
            eyebrow: "CS series",
            image:
              "/images/catalog/engineered-hardwood/lucid-plank-herringbone.webp",
            description:
              "Lucid plank and herringbone engineered hardwood looks.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/cs/lucid-plank-herringbone/"
            ),
          },
          {
            slug: "novella",
            title: "NOVELLA",
            count: 13,
            eyebrow: "CS series",
            image: "/images/catalog/engineered-hardwood/novella.webp",
            description:
              "Novella engineered hardwood options for warm, elevated interiors.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/cs/novella/"
            ),
          },
          {
            slug: "origins",
            title: "ORIGINS",
            count: 25,
            eyebrow: "CS series",
            image: "/images/catalog/engineered-hardwood/origins.webp",
            description:
              "Origins engineered hardwood selections with natural wood character.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/cs/origins/"
            ),
          },
        ],
      },
      {
        slug: "naf",
        title: "NAF",
        count: 23,
        eyebrow: "Engineered collection",
        image: "/images/catalog/engineered-hardwood/naf.webp",
        description:
          "NAF engineered hardwood options for durable, design-forward floors.",
        sourceUrl: metroSource("/product-category/engineered-hardwood/naf/"),
      },
      {
        slug: "northernest",
        title: "Northernest",
        count: 61,
        eyebrow: "Engineered collection",
        image: "/images/catalog/engineered-hardwood/northernest.jpg",
        description:
          "Northernest engineered hardwood selections for residential renovations and premium rooms.",
        sourceUrl: metroSource(
          "/product-category/engineered-hardwood/northernest/"
        ),
        collections: [
          {
            slug: "european-oak-collection",
            title: "EUROPEAN OAK COLLECTION",
            count: 6,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-54-european-oak-collection.jpg",
            description:
              "European Oak Collection engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/european-oak-collection/"
            ),
          },
          {
            slug: "inspiration-series",
            title: "INSPIRATION SERIES",
            count: 5,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-57-inspiration-series.jpg",
            description:
              "Inspiration Series engineered hardwood looks from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/inspiration-series/"
            ),
          },
          {
            slug: "nation-collection",
            title: "NATION COLLECTION",
            count: 6,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-49-nation-collection.jpg",
            description:
              "Nation Collection engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/nation-collection/"
            ),
          },
          {
            slug: "oak",
            title: "OAK",
            count: 5,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-59-oak.jpg",
            description:
              "Oak engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/oak/"
            ),
          },
          {
            slug: "performance-series",
            title: "PERFORMANCE SERIES",
            count: 7,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-56-performance-series.jpg",
            description:
              "Performance Series engineered hardwood options from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/performance-series/"
            ),
          },
          {
            slug: "vintage-series",
            title: "VINTAGE SERIES",
            count: 14,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-55-vintage-series.jpg",
            description:
              "Vintage Series engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/vintage-series/"
            ),
          },
          {
            slug: "we-the-north",
            title: "WE THE NORTH",
            count: 12,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-53-we-the-north.jpeg",
            description:
              "We The North engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/we-the-north/"
            ),
          },
          {
            slug: "winery-collection",
            title: "WINERY COLLECTION",
            count: 6,
            eyebrow: "Northernest series",
            image: "/images/live-catalog/cat-58-winery-collection.jpg",
            description:
              "Winery Collection engineered hardwood selections from the Northernest live catalog.",
            sourceUrl: metroSource(
              "/product-category/engineered-hardwood/northernest/winery-collection/"
            ),
          },
        ],
      },
      {
        slug: "toucan",
        title: "Toucan",
        count: 7,
        eyebrow: "Engineered collection",
        image: "/images/catalog/engineered-hardwood/toucan.webp",
        description:
          "Toucan engineered hardwood styles available through Metro's source catalog.",
        sourceUrl: metroSource(
          "/product-category/engineered-hardwood/toucan/"
        ),
      },
      {
        slug: "woden-flooring",
        title: "Woden Flooring",
        count: 10,
        eyebrow: "Engineered collection",
        image: "/images/catalog/engineered-hardwood/woden-flooring.jpg",
        description:
          "Woden Flooring engineered hardwood looks for natural, warm interiors.",
        sourceUrl: metroSource(
          "/product-category/engineered-hardwood/woden-flooring/"
        ),
      },
    ],
  },
  {
    slug: "laminate",
    title: "Laminate",
    pageTitle: "Laminate Flooring in Brampton",
    count: 72,
    eyebrow: "Durable flooring",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
    sourceUrl: metroSource("/product-category/laminate/"),
    description:
      "Stylish, durable, and easy-maintenance flooring for busy homes and value-focused projects.",
    seoDescription:
      "Shop laminate flooring in Brampton for durable wood-look floors, renovation value, and practical showroom guidance from Metro Tiles & Flooring.",
    seoKeywords: [
      "laminate flooring brampton",
      "laminate flooring installation brampton",
      "brampton laminate flooring",
      "flooring brampton",
    ],
    intro:
      "Laminate flooring gives customers a practical way to create a clean wood-look surface while balancing performance, style, and budget.",
    features: [
      "Low-maintenance surface",
      "Wood-look styling",
      "Budget-conscious options",
      "Good for everyday household traffic",
    ],
    useCases: [
      "Rental updates",
      "Bedrooms",
      "Family rooms",
      "Fast renovation projects",
    ],
    faqs: [
      {
        question: "Is laminate flooring easy to maintain?",
        answer:
          "Yes. Laminate is selected by many customers for its simple maintenance and everyday durability.",
      },
      {
        question: "Can laminate work for a quick renovation?",
        answer:
          "Yes. Metro can help compare laminate options for timeline, room use, and budget.",
      },
    ],
    collections: [
      {
        slug: "cs-floors",
        title: "CS Floors",
        count: 8,
        eyebrow: "Laminate collection",
        image: "/images/catalog/laminate/cs-floors.webp",
        description:
          "CS Floors laminate styles for clean wood-look renovation projects.",
        sourceUrl: metroSource("/product-category/laminate/cs-floors/"),
        featuredItems: [
          catalogItem(
            "Akita",
            "/images/catalog/laminate/akita.webp",
            metroSource("/product/akita/")
          ),
          catalogItem(
            "Akita Herringbone",
            "/images/catalog/laminate/akita-herringbone.webp",
            metroSource("/product/akita-herringbone/")
          ),
          catalogItem(
            "Nagasaki",
            "/images/catalog/laminate/nagasaki.webp",
            metroSource("/product/nagasaki/")
          ),
        ],
      },
      {
        slug: "toucan-flooring-laminate",
        title: "Toucan Flooring",
        count: 33,
        eyebrow: "Laminate collection",
        image: "/images/catalog/laminate/toucan-flooring.webp",
        description:
          "Toucan Flooring laminate selections across water-resistant and 12mm series options.",
        sourceUrl: metroSource(
          "/product-category/laminate/toucan-flooring-laminate/"
        ),
        featuredItems: [
          catalogItem(
            "TF6003W",
            "/images/catalog/laminate/tf6003w.webp",
            metroSource("/product/tf6003w/")
          ),
          catalogItem(
            "TF6010-F",
            "/images/catalog/laminate/tf6010-f.webp",
            metroSource("/product/tf6010-f/")
          ),
        ],
      },
    ],
  },
  {
    slug: "solid-hardwood",
    title: "Solid Hardwood",
    pageTitle: "Solid Hardwood Flooring in Brampton",
    count: 43,
    eyebrow: "Timeless flooring",
    image: "/images/showroom/fireplace-flooring.jpg",
    sourceUrl: metroSource("/product-category/solid-hardwood/"),
    description:
      "Classic wood flooring selected for warmth, elegance, and long-term home value.",
    seoDescription:
      "Explore solid hardwood flooring in Brampton, compare wood tones and finishes, and get guidance for premium home renovation projects.",
    seoKeywords: [
      "hardwood flooring brampton",
      "wood flooring brampton",
      "hardwood flooring stores in brampton",
      "solid hardwood flooring brampton",
    ],
    intro:
      "Solid hardwood brings a timeless material presence to interiors and remains a premium choice for customers who want long-lasting natural flooring.",
    features: [
      "Natural wood construction",
      "Classic, high-value finish",
      "Warm interior character",
      "Strong design longevity",
    ],
    useCases: [
      "Primary living spaces",
      "Traditional interiors",
      "Premium renovations",
      "Home value upgrades",
    ],
    faqs: [
      {
        question: "Does hardwood add value to a home?",
        answer:
          "Hardwood is often selected for its long-term appeal, warmth, and perceived home value.",
      },
      {
        question: "Can Metro advise on solid vs engineered hardwood?",
        answer:
          "Yes. Metro can help compare performance, room conditions, maintenance, and desired look.",
      },
    ],
    featuredItems: [
      catalogItem(
        "Antique Ebony (White Oak)",
        "/images/catalog/solid-hardwood/antique-ebony-white-oak.jpg",
        metroSource("/product/antique-ebony-white-oak/")
      ),
      catalogItem(
        "Barewood (Maple)",
        "/images/catalog/solid-hardwood/barewood-maple.jpg",
        metroSource("/product/maple-barewood/")
      ),
      catalogItem(
        "Barewood (Red Oak)",
        "/images/catalog/solid-hardwood/barewood-red-oak.jpg",
        metroSource("/product/barewood-red-oak/")
      ),
      catalogItem(
        "Black Powder (White Oak)",
        "/images/catalog/solid-hardwood/black-powder-white-oak.jpg",
        metroSource("/product/black-powder-white-oak/")
      ),
      catalogItem(
        "Charcoal (Maple)",
        "/images/catalog/solid-hardwood/charcoal-maple.jpg",
        metroSource("/product/charcoal-maple/")
      ),
      catalogItem(
        "Driftwood (Red Oak) Superior Series",
        "/images/catalog/solid-hardwood/driftwood-red-oak.jpg",
        metroSource("/product/driftwood-red-oak-superior-series/")
      ),
    ],
  },
  {
    slug: "tiles",
    title: "Tiles",
    pageTitle: "Tiles in Brampton",
    count: 55,
    eyebrow: "Porcelain and ceramic",
    image: "/images/showroom/white-bathroom-tiles.jpg",
    sourceUrl: metroSource("/product-category/tiles/"),
    description:
      "Wall, floor, kitchen, bathroom, backsplash, outdoor, and patio tile options in refined finishes.",
    seoDescription:
      "Visit Metro for tiles in Brampton, including porcelain, ceramic, wall, floor, bathroom, kitchen, backsplash, outdoor, and patio tile options.",
    seoKeywords: [
      "tiles brampton",
      "tiles store in brampton",
      "tile supplier brampton",
      "tiles shop in brampton",
      "tile places brampton",
    ],
    intro:
      "Metro offers curated tiles for modern and classic interiors, with options across ceramic, porcelain, marble-look, and natural-stone-inspired surfaces.",
    features: [
      "Wall and floor applications",
      "Kitchen and bathroom options",
      "Backsplash, patio, and outdoor uses",
      "Wide range of colors, textures, and finishes",
    ],
    useCases: [
      "Bathroom tile",
      "Kitchen backsplash",
      "Large-format floors",
      "Outdoor and patio surfaces",
    ],
    faqs: [
      {
        question: "Can I see tiles in person before choosing?",
        answer:
          "Yes. Metro encourages customers to visit the Brampton showroom to compare scale, texture, finish, and lighting.",
      },
      {
        question: "Does Metro carry tiles for walls and floors?",
        answer:
          "Yes. Metro carries tile options for walls, floors, backsplashes, bathrooms, kitchens, and outdoor areas.",
      },
    ],
    collections: [
      {
        slug: "anatolia",
        title: "Anatolia",
        count: 24,
        eyebrow: "Tile collection",
        image: "/images/showroom/white-bathroom-tiles.jpg",
        description:
          "Anatolia tile collections with refined porcelain surfaces and series-led selections.",
        sourceUrl: metroSource("/product-category/tiles/anatolia/"),
        collections: [
          {
            slug: "majesto-series",
            title: "Majesto Series",
            count: 21,
            eyebrow: "Anatolia series",
            image: "/images/catalog/tiles/majesto-series.webp",
            description:
              "Majesto Series tile looks from Anatolia's source catalog.",
            sourceUrl: metroSource(
              "/product-category/tiles/anatolia/majesto-series/"
            ),
          },
          {
            slug: "form-series",
            title: "Form Series",
            count: 1,
            eyebrow: "Anatolia series",
            image: "/images/catalog/tiles/form-series.webp",
            description:
              "Form Series tile selection from Anatolia's source catalog.",
            sourceUrl: metroSource(
              "/product-category/tiles/anatolia/form-series/"
            ),
          },
        ],
      },
      {
        slug: "baldocer",
        title: "Baldocer",
        count: 11,
        eyebrow: "Tile collection",
        image: "/images/showroom/diamonds-luxury-bath.jpg",
        description:
          "Baldocer tile selections with marble-look, stone-look, and decorative surfaces.",
        sourceUrl: metroSource("/product-category/tiles/baldocer/"),
        featuredItems: [
          catalogItem(
            "Adaggio",
            "/images/catalog/tiles/adaggio.jpg",
            metroSource("/product/adaggio/")
          ),
          catalogItem(
            "Agate",
            "/images/catalog/tiles/agate.jpg",
            metroSource("/product/agate/")
          ),
          catalogItem(
            "Amber Champagne",
            "/images/catalog/tiles/amber-champagne.jpg",
            metroSource("/product/amber-champagne/")
          ),
          catalogItem(
            "Bora-Bora",
            "/images/catalog/tiles/bora-bora.jpg",
            metroSource("/product/bora-bora/")
          ),
          catalogItem(
            "Dome",
            "/images/catalog/tiles/dome-anthracite.jpg",
            metroSource("/product/dome/")
          ),
        ],
      },
      {
        slug: "gayafores",
        title: "Gayafores",
        count: 8,
        eyebrow: "Tile collection",
        image: "/images/showroom/sage-pool-lounge-tile.jpg",
        description:
          "Gayafores tile options for decorative, marble-look, and porcelain-inspired spaces.",
        sourceUrl: metroSource("/product-category/tiles/gayafores/"),
      },
      {
        slug: "la-platera",
        title: "La Platera",
        count: 6,
        eyebrow: "Tile collection",
        image: "/images/showroom/asphalt-floral-tub.jpg",
        description:
          "La Platera tile selections for walls, baths, and refined surface design.",
        sourceUrl: metroSource("/product-category/tiles/la-platera/"),
      },
      {
        slug: "undefasa",
        title: "Undefasa",
        count: 5,
        eyebrow: "Tile collection",
        image: "/images/showroom/floral-wall-tile-bathroom.jpg",
        description:
          "Undefasa tile surfaces for practical, polished room finishes.",
        sourceUrl: metroSource("/product-category/tiles/undefasa/"),
      },
    ],
  },
  {
    slug: "vanity",
    title: "Vanity",
    pageTitle: "Bathroom Vanities in Brampton",
    count: 4,
    eyebrow: "Bathroom furnishings",
    image: "/images/showroom/ash-spa-bathroom.jpg",
    sourceUrl: metroSource("/product-category/vanity/"),
    description:
      "Bathroom vanity selections and furnishing support for polished renovation finishes.",
    seoDescription:
      "Browse bathroom vanities in Brampton and coordinate vanity, faucet, fixture, tile, and flooring choices with Metro showroom support.",
    seoKeywords: [
      "bathroom vanities brampton",
      "bathroom renovation brampton",
      "bathroom furnishings brampton",
      "vanity brampton",
    ],
    intro:
      "Vanities and bathroom furnishings help connect the practical needs of the room with the tile, flooring, faucet, and fixture palette.",
    features: [
      "Bathroom renovation support",
      "Coordinates with tile and fixtures",
      "Useful for full-room planning",
      "Showroom selection guidance",
    ],
    useCases: [
      "Ensuite upgrades",
      "Powder rooms",
      "Rental bathroom refreshes",
      "Full bathroom renovations",
    ],
    faqs: [
      {
        question: "Can Metro help coordinate a vanity with tiles?",
        answer:
          "Yes. Metro can help coordinate vanity, tile, faucet, and fixture selections for a more complete bathroom plan.",
      },
      {
        question: "Are vanities part of Metro furnishings?",
        answer:
          "Yes. Metro includes vanities and other finishing products within its furnishing support.",
      },
    ],
    collections: [
      {
        slug: "freestanding-vanity",
        title: "Freestanding Vanity",
        count: 2,
        eyebrow: "Bathroom vanity",
        image: "/images/catalog/vanity/freestanding-vanity.png",
        description:
          "Freestanding vanity styles for bathroom renovation and furnishing plans.",
        sourceUrl: metroSource("/product-category/vanity/freestanding-vanity/"),
        featuredItems: [
          catalogItem(
            "Miami",
            "/images/catalog/vanity/miami-freestanding.png",
            metroSource("/product/miami-2/")
          ),
          catalogItem(
            "Montreal",
            "/images/catalog/vanity/montreal-freestanding.png",
            metroSource("/product/montreal-2/")
          ),
        ],
      },
      {
        slug: "wall-mount-vanity",
        title: "Wall Mount Vanity",
        count: 2,
        eyebrow: "Bathroom vanity",
        image: "/images/catalog/vanity/wall-mount-vanity.png",
        description:
          "Wall mount vanity styles for streamlined bathroom layouts.",
        sourceUrl: metroSource("/product-category/vanity/wall-mount-vanity/"),
        featuredItems: [
          catalogItem(
            "Miami",
            "/images/catalog/vanity/miami-wall-mount.webp",
            metroSource("/product/miami/")
          ),
          catalogItem(
            "Montreal",
            "/images/catalog/vanity/montreal-wall-mount.webp",
            metroSource("/product/montreal/")
          ),
        ],
      },
    ],
  },
  {
    slug: "vinyl",
    title: "Vinyl",
    pageTitle: "Vinyl Flooring in Brampton",
    count: 102,
    eyebrow: "Waterproof flooring",
    image: "/images/showroom/open-showroom-living.jpg",
    sourceUrl: metroSource("/product-category/vinyl/"),
    description:
      "Waterproof, scratch-resistant flooring for basements, kitchens, pets, kids, and modern homes.",
    seoDescription:
      "Explore vinyl flooring in Brampton, including waterproof and scratch-resistant flooring for basements, kitchens, rentals, pets, and family homes.",
    seoKeywords: [
      "vinyl flooring brampton",
      "vinyl flooring in brampton",
      "luxury vinyl tiles in brampton",
      "waterproof flooring brampton",
    ],
    intro:
      "Vinyl flooring is a strong option for customers who need practical performance, moisture resistance, and flexible design choices.",
    features: [
      "Waterproof options",
      "Scratch-resistant performance",
      "Suitable for moisture-prone areas",
      "Broad style selection",
    ],
    useCases: [
      "Basements",
      "Kitchens",
      "Laundry areas",
      "Pet and family homes",
    ],
    faqs: [
      {
        question: "Is vinyl flooring good for basements?",
        answer:
          "Yes. Metro carries waterproof vinyl flooring that is commonly selected for basements and moisture-prone rooms.",
      },
      {
        question: "Can vinyl handle pets and kids?",
        answer:
          "Vinyl is often chosen for scratch resistance, easier care, and everyday household durability.",
      },
    ],
    collections: [
      {
        slug: "cs-flooring",
        title: "CS Flooring",
        count: 18,
        eyebrow: "Vinyl collection",
        image: "/images/catalog/vinyl/cs-flooring.jpg",
        description:
          "CS Flooring vinyl options across SPC and WPC performance selections.",
        sourceUrl: metroSource("/product-category/vinyl/cs-flooring/"),
        featuredItems: [
          catalogItem(
            "7mm SPC- Eddi",
            "/images/catalog/vinyl/eddi-7mm-spc.webp",
            metroSource("/product/eddi-7mm-spc/")
          ),
          catalogItem(
            "7mm SPC- Ellis",
            "/images/catalog/vinyl/ellis-7mm-spc.webp",
            metroSource("/product/ellis-7mm-spc/")
          ),
          catalogItem(
            "7mm SPC- Ernest",
            "/images/catalog/vinyl/ernest-7mm-spc.webp",
            metroSource("/product/ernest-7mm-spc/")
          ),
        ],
      },
      {
        slug: "harbinger-floors",
        title: "Harbinger Floors",
        count: 78,
        eyebrow: "Vinyl collection",
        image: "/images/catalog/vinyl/harbinger-floors.webp",
        description:
          "Harbinger Floors vinyl collections for acoustic, contract, and everyday flooring needs.",
        sourceUrl: metroSource("/product-category/vinyl/harbinger-floors/"),
        collections: [
          {
            slug: "contract-series",
            title: "Contract Series",
            count: 13,
            eyebrow: "Harbinger series",
            image: "/images/catalog/vinyl/contract-series.jpg",
            description:
              "Contract Series vinyl flooring from Harbinger Floors.",
            sourceUrl: metroSource(
              "/product-category/vinyl/harbinger-floors/contract-series/"
            ),
          },
          {
            slug: "craftsman-series",
            title: "Craftsman Series",
            count: 20,
            eyebrow: "Harbinger series",
            image: "/images/catalog/vinyl/craftsman-series.webp",
            description:
              "Craftsman Series vinyl flooring from Harbinger Floors.",
            sourceUrl: metroSource(
              "/product-category/vinyl/harbinger-floors/craftsman-series/"
            ),
          },
          {
            slug: "signature-acoustic-click",
            title: "Signature Acoustic Click",
            count: 32,
            eyebrow: "Harbinger series",
            image: "/images/catalog/vinyl/signature-acoustic-click.webp",
            description:
              "Signature Acoustic Click vinyl flooring from Harbinger Floors.",
            sourceUrl: metroSource(
              "/product-category/vinyl/harbinger-floors/signature-acoustic-click/"
            ),
          },
          {
            slug: "the-quiet-zone-series",
            title: "The Quiet Zone Series",
            count: 13,
            eyebrow: "Harbinger series",
            image: "/images/catalog/vinyl/quiet-zone-series.webp",
            description:
              "The Quiet Zone Series vinyl flooring from Harbinger Floors.",
            sourceUrl: metroSource(
              "/product-category/vinyl/harbinger-floors/the-quiet-zone-series/"
            ),
          },
        ],
      },
      {
        slug: "northernest-hardwood-flooring",
        title: "Northernest Hardwood Flooring",
        count: 6,
        eyebrow: "Vinyl collection",
        image: "/images/catalog/vinyl/northernest-hardwood-flooring.jpg",
        description:
          "Northernest vinyl flooring looks for clean residential renovations.",
        sourceUrl: metroSource(
          "/product-category/vinyl/northernest-hardwood-flooring/"
        ),
        featuredItems: [
          catalogItem(
            "Beach House- 7mm SPC",
            "/images/catalog/vinyl/beach-house-spc.jpeg",
            metroSource("/product/beach-house-7mm-spc/")
          ),
          catalogItem(
            "Bianco-7mm SPC",
            "/images/catalog/vinyl/bianco-spc.jpeg",
            metroSource("/product/bianco-7mm-spc/")
          ),
        ],
      },
    ],
  },
  {
    slug: "wall-tiles",
    title: "Wall Tiles",
    pageTitle: "Wall Tiles and Tile Supplier in Brampton",
    count: 3,
    eyebrow: "Feature surfaces",
    image: "/images/showroom/floral-wall-tile-bathroom.jpg",
    sourceUrl: metroSource("/product-category/wall-tiles/"),
    description:
      "Decorative wall tile and feature-surface options for kitchens, bathrooms, and commercial spaces.",
    seoDescription:
      "Compare wall tiles in Brampton for backsplashes, bathroom walls, accent walls, feature surfaces, and tile supplier showroom guidance.",
    seoKeywords: [
      "wall tiles brampton",
      "tile supplier brampton",
      "tiles shop in brampton",
      "tiles store in brampton",
      "tile repair brampton",
    ],
    intro:
      "Wall tiles help create texture, color, and visual focus in bathrooms, kitchens, backsplashes, and display areas.",
    features: [
      "Feature-wall applications",
      "Backsplash-friendly finishes",
      "Texture and color options",
      "Works with modern and classic interiors",
    ],
    useCases: [
      "Kitchen backsplashes",
      "Bathroom walls",
      "Accent walls",
      "Retail and office interiors",
    ],
    faqs: [
      {
        question: "Can wall tile be used as a backsplash?",
        answer:
          "Yes. Wall tiles are commonly used for backsplashes, bathroom walls, and feature surfaces.",
      },
      {
        question: "Can Metro help choose grout and finish direction?",
        answer:
          "Yes. The team can help compare tile tone, finish, scale, and visual direction in the showroom.",
      },
    ],
    featuredItems: [
      catalogItem(
        "Marlow",
        "/images/catalog/wall-tiles/marlow.webp",
        metroSource("/product/marlow/")
      ),
      catalogItem(
        "Soho",
        "/images/catalog/wall-tiles/soho.webp",
        metroSource("/product/subway-tile/")
      ),
      catalogItem(
        "Terramoda",
        "/images/catalog/wall-tiles/terramoda.webp",
        metroSource("/product/terramoda/")
      ),
    ],
  },
];

export const services: Service[] = [
  {
    slug: "tiles",
    title: "Tiles",
    pageTitle: "Tile Services and Tile Repair in Brampton",
    eyebrow: "Surface selection",
    image: "/images/showroom/white-bathroom-tiles.jpg",
    description:
      "Sophisticated, durable tile options for walls, floors, bathrooms, kitchens, backsplashes, patios, and outdoor spaces.",
    seoDescription:
      "Get tile services in Brampton for wall tile, floor tile, bathroom tile, backsplash tile, outdoor tile, supplier guidance, and tile repair planning.",
    seoKeywords: [
      "tile repair brampton",
      "tile supplier brampton",
      "tiles brampton",
      "tiles store in brampton",
      "tiles shop in brampton",
    ],
    intro:
      "Tiles offer a blend of sophistication, durability, and functionality. Metro helps customers select colors, textures, finishes, and formats that complement the room and project goals.",
    offerings: [
      "Ceramic, porcelain, marble-look, and natural-stone-inspired tiles",
      "Wall, floor, kitchen, bathroom, backsplash, outdoor, and patio options",
      "Large-format and decorative feature surfaces",
      "Guidance on color, texture, finish, and scale",
    ],
    benefits: [
      "Durable surfaces",
      "Premium visual impact",
      "Broad design range",
      "Useful for residential and commercial projects",
    ],
    faqs: [
      {
        question: "Can Metro help choose tile for a bathroom?",
        answer:
          "Yes. Metro helps customers compare bathroom tile options for walls, floors, shower areas, and accent details.",
      },
      {
        question: "Do you carry outdoor and patio tile options?",
        answer:
          "Yes. Metro's tile selection includes options for outdoor and patio applications.",
      },
    ],
  },
  {
    slug: "furnishings",
    title: "Furnishings",
    pageTitle: "Bathroom Furnishings and Fixtures in Brampton",
    eyebrow: "Finishing details",
    image: "/images/showroom/ash-spa-bathroom.jpg",
    description:
      "Fixtures and accessories that complete the room, including toilets, faucets, vanities, sinks, trims, and molding.",
    seoDescription:
      "Coordinate bathroom furnishings in Brampton, including vanities, faucets, sinks, toilets, trims, and fixture selections for renovation projects.",
    seoKeywords: [
      "bathroom furnishings brampton",
      "bathroom renovation brampton",
      "bathroom vanities brampton",
      "home renovation in brampton",
    ],
    intro:
      "The right furnishings create a cohesive and polished aesthetic. Metro supports finishing selections that improve both the function and appearance of the space.",
    offerings: [
      "Toilets, faucets, vanities, and sinks",
      "Trims, molding, and finishing details",
      "Bathroom and interior upgrade support",
      "Coordination with tile and flooring selections",
    ],
    benefits: [
      "More cohesive finishes",
      "Better room planning",
      "Practical showroom support",
      "Durable, design-conscious choices",
    ],
    faqs: [
      {
        question: "Does Metro sell bathroom furnishings?",
        answer:
          "Yes. Metro offers bathroom-focused furnishings and finishing products such as vanities, sinks, faucets, and related details.",
      },
      {
        question: "Can furnishings be selected alongside tile?",
        answer:
          "Yes. The showroom team can help coordinate furnishings with tile, flooring, and fixture selections.",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    pageTitle: "Flooring Services and Flooring Contractor in Brampton",
    eyebrow: "Flooring selection",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
    description:
      "Laminate, vinyl, engineered hardwood, and solid hardwood selected for durability, maintenance, and design flexibility.",
    seoDescription:
      "Metro supports flooring in Brampton with vinyl, laminate, engineered hardwood, solid hardwood, flooring contractor guidance, and installation planning.",
    seoKeywords: [
      "flooring brampton",
      "flooring contractor brampton",
      "flooring company brampton",
      "flooring companies brampton",
      "hardwood flooring installation brampton",
      "laminate flooring installation brampton",
    ],
    intro:
      "The right flooring transforms a space. Metro offers flooring solutions selected for durability, ease of installation, and aesthetic versatility.",
    offerings: [
      "Laminate flooring",
      "Vinyl flooring",
      "Engineered hardwood",
      "Solid hardwood",
    ],
    benefits: [
      "Long-term durability",
      "Style and budget flexibility",
      "Residential and commercial options",
      "Guidance for moisture, maintenance, and room use",
    ],
    faqs: [
      {
        question: "What flooring options does Metro carry?",
        answer:
          "Metro carries laminate, vinyl, engineered hardwood, and solid hardwood flooring options.",
      },
      {
        question: "Can Metro help compare flooring for basements?",
        answer:
          "Yes. Metro can help compare vinyl, laminate, and other flooring based on moisture, durability, and room conditions.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    pageTitle: "Home Renovation Material Support in Brampton",
    eyebrow: "Project support",
    image: "/images/showroom/open-showroom-living.jpg",
    description:
      "Material supply, professional consultation, and custom support for renovations, new builds, and commercial developments.",
    seoDescription:
      "Get home renovation material support in Brampton for flooring, tile, furnishings, construction supply, and project-ready showroom guidance.",
    seoKeywords: [
      "home renovation in brampton",
      "home renovation contractors brampton",
      "home renovation company brampton",
      "bathroom renovation brampton",
    ],
    intro:
      "Beyond flooring and tiles, Metro offers construction support and material supply for contractors, architects, designers, homeowners, and project teams.",
    offerings: [
      "Material supply for flooring, tiles, and furnishings",
      "Professional consultation by project needs and budget",
      "Custom material-selection support",
      "Bulk and project-ready supply for builders and designers",
    ],
    benefits: [
      "One showroom for multiple material needs",
      "Better project coordination",
      "Support for residential and commercial work",
      "Reliable supply for larger projects",
    ],
    faqs: [
      {
        question: "Does Metro support contractors and designers?",
        answer:
          "Yes. Metro partners with contractors, architects, and designers for material supply and project support.",
      },
      {
        question: "Can Metro help with custom material selection?",
        answer:
          "Yes. Metro provides personalized recommendations based on project specifications, budget, and design goals.",
      },
    ],
  },
];

export const localTopics: LocalTopic[] = [
  {
    slug: "flooring",
    title: "Flooring in Brampton",
    eyebrow: "Local flooring showroom",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
    description:
      "Find vinyl, laminate, engineered hardwood, and solid hardwood flooring in Brampton with expert showroom guidance.",
    seoKeywords: [
      "flooring brampton",
      "flooring company brampton",
      "flooring companies brampton",
      "brampton flooring company",
      "flooring contractor brampton",
    ],
    intro:
      "Metro Tiles & Flooring helps Brampton homeowners, contractors, and designers compare flooring options for homes, basements, condos, renovations, and commercial projects.",
    sections: [
      {
        title: "Built for real Brampton projects",
        body: "From basement renovations to condo upgrades and full-home remodels, Metro helps customers choose flooring that fits the space, timeline, and budget.",
      },
      {
        title: "Practical product guidance",
        body: "The team helps compare style, durability, maintenance, and moisture resistance so customers can choose confidently.",
      },
      {
        title: "Selection across key flooring types",
        body: "Metro carries vinyl, laminate, engineered hardwood, and solid hardwood for residential and commercial spaces.",
      },
    ],
    faqs: [
      {
        question: "What flooring does Metro offer in Brampton?",
        answer:
          "Metro offers vinyl, laminate, engineered hardwood, and solid hardwood flooring from its Brampton showroom.",
      },
      {
        question: "Can Metro help choose flooring for a basement?",
        answer:
          "Yes. Metro helps customers compare moisture-resistant and durable flooring options for basements.",
      },
    ],
    relatedProducts: ["vinyl", "laminate", "engineered-hardwood", "solid-hardwood"],
    relatedServices: ["flooring", "construction"],
  },
  {
    slug: "hardwood-flooring",
    title: "Hardwood Flooring in Brampton",
    eyebrow: "Hardwood showroom",
    image: "/images/showroom/fireplace-flooring.jpg",
    description:
      "Compare hardwood flooring in Brampton, including solid hardwood, engineered hardwood, wood tones, plank styles, and showroom guidance.",
    seoKeywords: [
      "hardwood flooring brampton",
      "wood flooring brampton",
      "hardwood flooring stores in brampton",
      "engineered hardwood flooring in brampton",
      "solid hardwood flooring brampton",
    ],
    intro:
      "Metro helps Brampton customers compare hardwood flooring options across solid hardwood, engineered hardwood, plank width, finish, color, and project suitability.",
    sections: [
      {
        title: "Solid and engineered hardwood in one showroom",
        body: "Customers can compare the warmth of solid hardwood with the stability of engineered hardwood before choosing a direction for bedrooms, living rooms, stairs, or open-concept spaces.",
      },
      {
        title: "Wood flooring guidance for real rooms",
        body: "Metro helps match wood tone, finish, durability, and maintenance needs to the room, lighting, lifestyle, budget, and renovation timeline.",
      },
      {
        title: "Built for Brampton renovation decisions",
        body: "Seeing hardwood samples beside vinyl, laminate, tile, and furnishing finishes makes it easier to avoid mismatched tones and choose a floor that fits the whole project.",
      },
    ],
    faqs: [
      {
        question: "Does Metro carry hardwood flooring in Brampton?",
        answer:
          "Yes. Metro carries solid hardwood and engineered hardwood options and helps customers compare wood flooring choices in the Brampton showroom.",
      },
      {
        question: "Should I choose solid hardwood or engineered hardwood?",
        answer:
          "Metro can help compare room conditions, maintenance, finish, stability, and budget so customers can choose the hardwood flooring type that fits the project.",
      },
    ],
    relatedProducts: ["solid-hardwood", "engineered-hardwood", "laminate", "vinyl"],
    relatedServices: ["flooring", "construction"],
  },
  {
    slug: "tiles",
    title: "Tiles in Brampton",
    eyebrow: "Tile showroom",
    image: "/images/showroom/white-bathroom-tiles.jpg",
    description:
      "Shop ceramic, porcelain, marble-look, wall, floor, bathroom, kitchen, and backsplash tiles in Brampton.",
    seoKeywords: [
      "tiles brampton",
      "tiles store in brampton",
      "tile supplier brampton",
      "tiles shop in brampton",
      "tile places brampton",
    ],
    intro:
      "Metro helps customers explore tile scale, texture, color, and finish in person before choosing materials for bathrooms, kitchens, patios, and interiors.",
    sections: [
      {
        title: "Tile for walls, floors, and feature areas",
        body: "Metro carries tile options for bathrooms, kitchens, backsplashes, outdoor areas, patios, and large-format interior floors.",
      },
      {
        title: "Premium showroom comparison",
        body: "Seeing tile in real light helps customers compare tone, texture, gloss, and visual movement before ordering.",
      },
      {
        title: "Guidance for classic and modern interiors",
        body: "Metro supports both modern minimal spaces and classic interiors with ceramic, porcelain, marble-look, and stone-look options.",
      },
    ],
    faqs: [
      {
        question: "Can I shop bathroom tiles at Metro?",
        answer:
          "Yes. Metro carries bathroom wall and floor tile options, including feature and shower-area selections.",
      },
      {
        question: "Does Metro carry backsplash tile?",
        answer:
          "Yes. Metro carries wall and backsplash tile options for kitchens and feature surfaces.",
      },
    ],
    relatedProducts: ["tiles", "wall-tiles", "bathroom-accessories"],
    relatedServices: ["tiles", "furnishings"],
  },
  {
    slug: "vinyl-flooring",
    title: "Vinyl Flooring in Brampton",
    eyebrow: "Waterproof flooring",
    image: "/images/showroom/open-showroom-living.jpg",
    description:
      "Explore waterproof, scratch-resistant vinyl flooring for Brampton basements, kitchens, rentals, and family homes.",
    seoKeywords: [
      "vinyl flooring brampton",
      "vinyl flooring in brampton",
      "luxury vinyl tiles in brampton",
      "waterproof flooring brampton",
    ],
    intro:
      "Vinyl flooring is a practical option for moisture-prone and high-traffic rooms where customers want style, comfort, and easier maintenance.",
    sections: [
      {
        title: "Strong for basements and moisture-prone spaces",
        body: "Waterproof vinyl options are commonly selected for basements, kitchens, laundry areas, and active households.",
      },
      {
        title: "Designed for everyday living",
        body: "Scratch-resistant vinyl helps support homes with pets, children, and regular foot traffic.",
      },
      {
        title: "Compare options in the showroom",
        body: "Metro helps customers evaluate color, plank style, thickness, installation needs, and budget before selecting vinyl.",
      },
    ],
    faqs: [
      {
        question: "Is vinyl flooring waterproof?",
        answer:
          "Metro carries waterproof vinyl flooring options that are commonly selected for basements, kitchens, and moisture-prone rooms.",
      },
      {
        question: "Is vinyl flooring good for pets?",
        answer:
          "Vinyl is often selected for scratch resistance, easy care, and everyday family durability.",
      },
    ],
    relatedProducts: ["vinyl", "laminate", "engineered-hardwood"],
    relatedServices: ["flooring"],
  },
  {
    slug: "laminate-flooring",
    title: "Laminate Flooring in Brampton",
    eyebrow: "Durable value flooring",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
    description:
      "Shop laminate flooring in Brampton for durable, stylish, and budget-conscious renovation projects.",
    seoKeywords: [
      "laminate flooring brampton",
      "laminate flooring installation brampton",
      "brampton laminate flooring",
      "flooring brampton",
    ],
    intro:
      "Laminate flooring helps customers create a clean wood-look finish with practical maintenance and strong value.",
    sections: [
      {
        title: "A practical renovation choice",
        body: "Laminate works well for bedrooms, family rooms, rentals, and fast renovation projects where style and budget both matter.",
      },
      {
        title: "Wood-look without the same maintenance",
        body: "Metro helps customers compare laminate finishes that create warmth and visual texture while staying easy to maintain.",
      },
      {
        title: "Guidance before ordering",
        body: "The team can help compare room conditions, underlayment, durability, and timeline before selection.",
      },
    ],
    faqs: [
      {
        question: "Is laminate flooring budget-friendly?",
        answer:
          "Laminate is often selected by customers who want a durable wood-look floor while managing project budget.",
      },
      {
        question: "Can Metro help select laminate for rentals?",
        answer:
          "Yes. Metro can help compare laminate options for durability, maintenance, and quick renovation needs.",
      },
    ],
    relatedProducts: ["laminate", "vinyl", "solid-hardwood"],
    relatedServices: ["flooring"],
  },
  {
    slug: "engineered-hardwood",
    title: "Engineered Hardwood in Brampton",
    eyebrow: "Premium wood flooring",
    image: "/images/showroom/soft-bedroom-flooring.jpg",
    description:
      "Compare engineered hardwood flooring in Brampton for modern homes, condos, and premium renovation projects.",
    seoKeywords: [
      "engineered hardwood flooring in brampton",
      "engineered hardwood brampton",
      "hardwood flooring brampton",
      "wood flooring brampton",
    ],
    intro:
      "Engineered hardwood gives customers the warmth of wood with added stability, making it a strong option for many Brampton interiors.",
    sections: [
      {
        title: "Wood character with added stability",
        body: "Engineered hardwood is useful for customers who want natural wood appearance while considering performance and room conditions.",
      },
      {
        title: "Premium look for living spaces",
        body: "Metro helps compare colors, plank widths, finishes, and design direction for living rooms, bedrooms, and open-concept homes.",
      },
      {
        title: "Guided comparison",
        body: "Customers can compare engineered hardwood with solid hardwood, laminate, and vinyl to choose the right fit.",
      },
    ],
    faqs: [
      {
        question: "Is engineered hardwood real wood?",
        answer:
          "Engineered hardwood is selected for its real wood appearance and stable construction.",
      },
      {
        question: "Can Metro compare engineered and solid hardwood?",
        answer:
          "Yes. Metro can help compare durability, room suitability, finish, maintenance, and budget.",
      },
    ],
    relatedProducts: ["engineered-hardwood", "solid-hardwood", "laminate"],
    relatedServices: ["flooring"],
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovation in Brampton",
    eyebrow: "Bathroom tile and fixtures",
    image: "/images/showroom/grey-statement-bathroom.jpg",
    description:
      "Plan bathroom renovation in Brampton with premium tile, vanities, bath fixtures, wall tile, and expert showroom guidance.",
    seoKeywords: [
      "bathroom renovation brampton",
      "home renovation in brampton",
      "home renovation contractors brampton",
      "home renovation company brampton",
      "cost of bathroom renovation canada",
    ],
    intro:
      "Metro supports bathroom renovation projects with tile, wall surfaces, vanities, fixtures, and coordinated finishing materials.",
    sections: [
      {
        title: "Renovate for function and style",
        body: "Bathrooms often need renovation because of age, moisture, layout issues, style changes, or resale goals. Metro helps customers start with the right materials.",
      },
      {
        title: "Coordinate the full room",
        body: "Tile, wall surfaces, vanity, faucet, sink, trims, and flooring should work together. Metro's showroom helps customers compare these choices in one place.",
      },
      {
        title: "Avoid expensive mismatch decisions",
        body: "Seeing finishes in person helps customers avoid tone, scale, and texture mismatches before ordering materials.",
      },
    ],
    faqs: [
      {
        question: "Can Metro help with bathroom renovation materials?",
        answer:
          "Yes. Metro helps with tile, wall surfaces, bath accessories, vanities, fixtures, and coordinated material selection.",
      },
      {
        question: "Can I visit the showroom before choosing bathroom tile?",
        answer:
          "Yes. Visiting the Brampton showroom is recommended so customers can compare tile in real light.",
      },
    ],
    relatedProducts: ["bathroom-accessories", "vanity", "tiles", "wall-tiles"],
    relatedServices: ["tiles", "furnishings", "construction"],
  },
  {
    slug: "flooring-installation",
    title: "Flooring Installation in Brampton",
    eyebrow: "Installation planning",
    image: "/images/showroom/warm-kitchen-flooring.jpg",
    description:
      "Plan flooring installation in Brampton for hardwood, laminate, vinyl, and tile projects with Metro's showroom and contractor guidance.",
    seoKeywords: [
      "flooring contractor brampton",
      "hardwood flooring installation brampton",
      "laminate flooring installation brampton",
      "tile repair brampton",
      "flooring company brampton",
    ],
    intro:
      "Metro helps Brampton homeowners, contractors, and designers plan flooring installation by matching material choices with room conditions, timelines, and project needs.",
    sections: [
      {
        title: "Installation starts with the right product",
        body: "Flooring performance depends on product choice, room conditions, underlayment, moisture needs, and installation approach. Metro helps customers compare those details early.",
      },
      {
        title: "Support across hardwood, laminate, vinyl, and tile",
        body: "Customers can plan hardwood flooring installation, laminate flooring installation, vinyl flooring, and tile-related work with product guidance from one showroom.",
      },
      {
        title: "A practical next step before ordering",
        body: "Bring room photos, measurements, timelines, or builder details so Metro can help narrow materials and point the project toward the right installation path.",
      },
    ],
    faqs: [
      {
        question: "Does Metro help with flooring installation in Brampton?",
        answer:
          "Yes. Metro provides installation support through experienced installers and helps customers plan the right flooring choice before installation.",
      },
      {
        question: "Can Metro help with hardwood or laminate flooring installation?",
        answer:
          "Yes. Metro helps customers compare hardwood, laminate, vinyl, and tile options and plan installation needs around the room and project timeline.",
      },
    ],
    relatedProducts: ["solid-hardwood", "engineered-hardwood", "laminate", "vinyl"],
    relatedServices: ["flooring", "tiles", "construction"],
  },
];

export const reviews = [
  {
    name: "Aryanna Kumar",
    text: "Chetna was very helpful and they had excellent product quality.",
  },
  {
    name: "Ajwinder Singh",
    text: "Great variety of tiles available at very reasonable prices.",
  },
  {
    name: "Donna McPherson",
    text: "They took the time to understand our needs, vision, and budget. We found everything we needed.",
  },
];

export const benefits = [
  "Superior craftsmanship",
  "Affordable luxury",
  "Customer satisfaction",
  "Expert advice",
  "Showroom experience",
  "Fast and reliable delivery",
];

export const globalFaqs: FAQ[] = [
  {
    question: "What makes Metro products high quality?",
    answer:
      "Metro sources premium flooring, tiles, toilets, faucets, and finishing materials with a focus on durability, style, and longevity.",
  },
  {
    question: "Does Metro provide expert product guidance?",
    answer:
      "Yes. Metro helps customers choose materials based on budget, lifestyle, lighting, decor, and project requirements.",
  },
  {
    question: "Does Metro offer installation support?",
    answer:
      "Yes. Metro provides professional installation services through experienced installers for flooring needs.",
  },
  {
    question: "Does Metro deliver in Brampton and nearby areas?",
    answer:
      "Yes. Metro delivers across the GTA, including routes from Barrie to Niagara Falls and Kitchener to Oshawa.",
  },
];

export const deals = [
  {
    title: "Featured tile promotion",
    image: "/images/deals/kube-roos.jpg",
    description:
      "A product-led deal feature for customers looking for current tile and flooring opportunities.",
  },
  {
    title: "Seasonal flooring sale",
    image: "/images/deals/feb-sale.jpg",
    description:
      "A showroom promotion designed to help customers start renovation planning with better value.",
  },
  {
    title: "Sale flyer",
    image: "/images/deals/sale-flyer.jpg",
    description:
      "Visit Metro for current availability, product details, and showroom guidance on active deals.",
  },
];

export const brandNames = [
  "Baldocer",
  "Gayafores",
  "Harbinger",
  "La Platera",
  "Floressa Floors",
  "Designer imports",
];

export function getProduct(slug: string) {
  return productCategories.find((product) => product.slug === slug);
}

function findCollectionTrail(
  collections: ProductCollection[] | undefined,
  slugs: string[]
): ProductCollection[] | null {
  if (!collections || slugs.length === 0) {
    return null;
  }

  const [currentSlug, ...rest] = slugs;
  const collection = collections.find((item) => item.slug === currentSlug);

  if (!collection) {
    return null;
  }

  if (rest.length === 0) {
    return [collection];
  }

  const childTrail = findCollectionTrail(collection.collections, rest);
  return childTrail ? [collection, ...childTrail] : null;
}

export function getProductCollectionTrail(
  categorySlug: string,
  collectionSlugs: string[]
) {
  const product = getProduct(categorySlug);

  if (!product) {
    return null;
  }

  const trail = findCollectionTrail(product.collections, collectionSlugs);

  if (!trail) {
    return null;
  }

  return {
    product,
    trail,
    collection: trail[trail.length - 1],
  };
}

export function getProductCollection(
  categorySlug: string,
  collectionSlugs: string[]
) {
  return getProductCollectionTrail(categorySlug, collectionSlugs)?.collection;
}

function collectProductCollectionPaths(
  category: string,
  collections: ProductCollection[] | undefined,
  parent: string[] = []
): Array<{ category: string; collection: string[] }> {
  if (!collections) {
    return [];
  }

  return collections.flatMap((collection) => {
    const collectionPath = [...parent, collection.slug];

    return [
      { category, collection: collectionPath },
      ...collectProductCollectionPaths(
        category,
        collection.collections,
        collectionPath
      ),
    ];
  });
}

export function getAllProductCollectionPaths() {
  return productCategories.flatMap((product) =>
    collectProductCollectionPaths(product.slug, product.collections)
  );
}

export function productCollectionPath(
  category: string,
  collection: string[]
) {
  return `/products/${category}/${collection.join("/")}`;
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLocalTopic(slug: string) {
  return localTopics.find((topic) => topic.slug === slug);
}

export const staticRoutes = [
  "/",
  "/products",
  "/services",
  "/about",
  "/deals",
  "/quote",
];

export const allRoutePaths = [
  ...staticRoutes,
  ...productCategories.map((product) => `/products/${product.slug}`),
  ...getAllProductCollectionPaths().map(({ category, collection }) =>
    productCollectionPath(category, collection)
  ),
  ...services.map((service) => `/services/${service.slug}`),
  ...localTopics.map((topic) => `/brampton/${topic.slug}`),
];
