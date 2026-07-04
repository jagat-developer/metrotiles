export type FAQ = {
  question: string;
  answer: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  count: number;
  eyebrow: string;
  image: string;
  description: string;
  intro: string;
  features: string[];
  useCases: string[];
  faqs: FAQ[];
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  description: string;
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

export const productCategories: ProductCategory[] = [
  {
    slug: "bathroom-accessories",
    title: "Bathroom Accessories",
    count: 10,
    eyebrow: "Bath fixtures",
    image: "/images/bath-tub.jpg",
    description:
      "Finishing pieces for bathroom upgrades, shower features, tubs, and renovation-ready bath spaces.",
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
  },
  {
    slug: "engineered-hardwood",
    title: "Engineered Hardwood",
    count: 175,
    eyebrow: "Wood flooring",
    image: "/images/engineered-hardwood.jpg",
    description:
      "Natural wood beauty with added stability for modern homes, condos, and renovation projects.",
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
  },
  {
    slug: "laminate",
    title: "Laminate",
    count: 72,
    eyebrow: "Durable flooring",
    image: "/images/laminate-flooring.webp",
    description:
      "Stylish, durable, and easy-maintenance flooring for busy homes and value-focused projects.",
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
  },
  {
    slug: "solid-hardwood",
    title: "Solid Hardwood",
    count: 43,
    eyebrow: "Timeless flooring",
    image: "/images/solid-hardwood.jpg",
    description:
      "Classic wood flooring selected for warmth, elegance, and long-term home value.",
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
  },
  {
    slug: "tiles",
    title: "Tiles",
    count: 55,
    eyebrow: "Porcelain and ceramic",
    image: "/images/dome-tile.jpg",
    description:
      "Wall, floor, kitchen, bathroom, backsplash, outdoor, and patio tile options in refined finishes.",
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
  },
  {
    slug: "vanity",
    title: "Vanity",
    count: 4,
    eyebrow: "Bathroom furnishings",
    image: "/images/bathroom-tile.jpg",
    description:
      "Bathroom vanity selections and furnishing support for polished renovation finishes.",
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
  },
  {
    slug: "vinyl",
    title: "Vinyl",
    count: 102,
    eyebrow: "Waterproof flooring",
    image: "/images/vinyl-flooring.jpg",
    description:
      "Waterproof, scratch-resistant flooring for basements, kitchens, pets, kids, and modern homes.",
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
  },
  {
    slug: "wall-tiles",
    title: "Wall Tiles",
    count: 3,
    eyebrow: "Feature surfaces",
    image: "/images/bora-bora-tile.jpg",
    description:
      "Decorative wall tile and feature-surface options for kitchens, bathrooms, and commercial spaces.",
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
  },
];

export const services: Service[] = [
  {
    slug: "tiles",
    title: "Tiles",
    eyebrow: "Surface selection",
    image: "/images/dome-tile.jpg",
    description:
      "Sophisticated, durable tile options for walls, floors, bathrooms, kitchens, backsplashes, patios, and outdoor spaces.",
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
    eyebrow: "Finishing details",
    image: "/images/bathroom-tile.jpg",
    description:
      "Fixtures and accessories that complete the room, including toilets, faucets, vanities, sinks, trims, and molding.",
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
    eyebrow: "Flooring selection",
    image: "/images/solid-hardwood.jpg",
    description:
      "Laminate, vinyl, engineered hardwood, and solid hardwood selected for durability, maintenance, and design flexibility.",
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
    eyebrow: "Project support",
    image: "/images/kitchen-showroom.jpg",
    description:
      "Material supply, professional consultation, and custom support for renovations, new builds, and commercial developments.",
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
    image: "/images/solid-hardwood.jpg",
    description:
      "Find vinyl, laminate, engineered hardwood, and solid hardwood flooring in Brampton with expert showroom guidance.",
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
    slug: "tiles",
    title: "Tiles in Brampton",
    eyebrow: "Tile showroom",
    image: "/images/dome-tile.jpg",
    description:
      "Shop ceramic, porcelain, marble-look, wall, floor, bathroom, kitchen, and backsplash tiles in Brampton.",
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
    image: "/images/vinyl-flooring.jpg",
    description:
      "Explore waterproof, scratch-resistant vinyl flooring for Brampton basements, kitchens, rentals, and family homes.",
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
    image: "/images/laminate-flooring.webp",
    description:
      "Shop laminate flooring in Brampton for durable, stylish, and budget-conscious renovation projects.",
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
    image: "/images/engineered-hardwood.jpg",
    description:
      "Compare engineered hardwood flooring in Brampton for modern homes, condos, and premium renovation projects.",
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
    title: "Bathroom Renovation Materials in Brampton",
    eyebrow: "Bathroom tile and fixtures",
    image: "/images/bath-tub.jpg",
    description:
      "Plan bathroom renovations in Brampton with premium tile, vanities, bath fixtures, wall tile, and expert showroom guidance.",
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
  ...services.map((service) => `/services/${service.slug}`),
  ...localTopics.map((topic) => `/brampton/${topic.slug}`),
];
