// Generated from Metro WooCommerce Store API on 2026-07-10. Do not edit entries by hand; regenerate from the live source catalog.

export type LiveCatalogCategory = {
  id: number;
  name: string;
  slug: string;
  parentId: number;
  count: number;
  path: string[];
  sourceUrl: string;
  image: string;
};

export type LiveCatalogProduct = {
  id: number;
  name: string;
  slug: string;
  sourceUrl: string;
  image: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
    path: string[];
  }>;
  categoryIds: number[];
  categoryPaths: string[];
};

export const liveCatalogCategories: LiveCatalogCategory[] = [
  {
    "id": 34,
    "name": "Bathroom Accessories",
    "slug": "bathroom-accessories",
    "parentId": 0,
    "count": 10,
    "path": [
      "bathroom-accessories"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/bathroom-accessories/",
    "image": "/images/live-catalog/cat-34-bathroom-accessories.webp"
  },
  {
    "id": 73,
    "name": "Bath Tubs",
    "slug": "bath-tubs",
    "parentId": 34,
    "count": 5,
    "path": [
      "bathroom-accessories",
      "bath-tubs"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/bathroom-accessories/bath-tubs/",
    "image": "/images/live-catalog/cat-73-bath-tubs.webp"
  },
  {
    "id": 75,
    "name": "Faucet and other Accessories",
    "slug": "faucet-and-other-accessories",
    "parentId": 34,
    "count": 2,
    "path": [
      "bathroom-accessories",
      "faucet-and-other-accessories"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/bathroom-accessories/faucet-and-other-accessories/",
    "image": "/images/live-catalog/cat-75-faucet-and-other-accessories.jpg"
  },
  {
    "id": 74,
    "name": "Shower Panels",
    "slug": "shower-panels",
    "parentId": 34,
    "count": 3,
    "path": [
      "bathroom-accessories",
      "shower-panels"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/bathroom-accessories/shower-panels/",
    "image": "/images/live-catalog/cat-74-shower-panels.webp"
  },
  {
    "id": 20,
    "name": "Engineered Hardwood",
    "slug": "engineered-hardwood",
    "parentId": 0,
    "count": 175,
    "path": [
      "engineered-hardwood"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/",
    "image": "/images/live-catalog/cat-20-engineered-hardwood.jpg"
  },
  {
    "id": 60,
    "name": "CS",
    "slug": "cs",
    "parentId": 20,
    "count": 74,
    "path": [
      "engineered-hardwood",
      "cs"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/cs/",
    "image": "/images/live-catalog/cat-60-cs.webp"
  },
  {
    "id": 72,
    "name": "BRAND SURFACES",
    "slug": "brand-surfaces",
    "parentId": 60,
    "count": 16,
    "path": [
      "engineered-hardwood",
      "cs",
      "brand-surfaces"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/cs/brand-surfaces/",
    "image": "/images/live-catalog/cat-72-brand-surfaces.jpg"
  },
  {
    "id": 61,
    "name": "LUCID (Plank & Herringbone)",
    "slug": "lucid-plank-herringbone",
    "parentId": 60,
    "count": 20,
    "path": [
      "engineered-hardwood",
      "cs",
      "lucid-plank-herringbone"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/cs/lucid-plank-herringbone/",
    "image": "/images/live-catalog/cat-61-lucid-plank-herringbone.webp"
  },
  {
    "id": 62,
    "name": "NOVELLA",
    "slug": "novella",
    "parentId": 60,
    "count": 13,
    "path": [
      "engineered-hardwood",
      "cs",
      "novella"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/cs/novella/",
    "image": "/images/live-catalog/cat-62-novella.webp"
  },
  {
    "id": 71,
    "name": "ORIGINS",
    "slug": "origins",
    "parentId": 60,
    "count": 25,
    "path": [
      "engineered-hardwood",
      "cs",
      "origins"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/cs/origins/",
    "image": "/images/live-catalog/cat-71-origins.webp"
  },
  {
    "id": 50,
    "name": "NAF",
    "slug": "naf",
    "parentId": 20,
    "count": 23,
    "path": [
      "engineered-hardwood",
      "naf"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/naf/",
    "image": "/images/live-catalog/cat-50-naf.webp"
  },
  {
    "id": 48,
    "name": "Northernest",
    "slug": "northernest",
    "parentId": 20,
    "count": 61,
    "path": [
      "engineered-hardwood",
      "northernest"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/",
    "image": "/images/live-catalog/cat-48-northernest.jpg"
  },
  {
    "id": 54,
    "name": "EUROPEAN OAK COLLECTION",
    "slug": "european-oak-collection",
    "parentId": 48,
    "count": 6,
    "path": [
      "engineered-hardwood",
      "northernest",
      "european-oak-collection"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/european-oak-collection/",
    "image": "/images/live-catalog/cat-54-european-oak-collection.jpg"
  },
  {
    "id": 57,
    "name": "INSPIRATION SERIES",
    "slug": "inspiration-series",
    "parentId": 48,
    "count": 5,
    "path": [
      "engineered-hardwood",
      "northernest",
      "inspiration-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/inspiration-series/",
    "image": "/images/live-catalog/cat-57-inspiration-series.jpg"
  },
  {
    "id": 49,
    "name": "NATION COLLECTION",
    "slug": "nation-collection",
    "parentId": 48,
    "count": 6,
    "path": [
      "engineered-hardwood",
      "northernest",
      "nation-collection"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/nation-collection/",
    "image": "/images/live-catalog/cat-49-nation-collection.jpg"
  },
  {
    "id": 59,
    "name": "OAK",
    "slug": "oak",
    "parentId": 48,
    "count": 5,
    "path": [
      "engineered-hardwood",
      "northernest",
      "oak"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/oak/",
    "image": "/images/live-catalog/cat-59-oak.jpg"
  },
  {
    "id": 56,
    "name": "PERFORMANCE SERIES",
    "slug": "performance-series",
    "parentId": 48,
    "count": 7,
    "path": [
      "engineered-hardwood",
      "northernest",
      "performance-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/performance-series/",
    "image": "/images/live-catalog/cat-56-performance-series.jpg"
  },
  {
    "id": 55,
    "name": "VINTAGE SERIES",
    "slug": "vintage-series",
    "parentId": 48,
    "count": 14,
    "path": [
      "engineered-hardwood",
      "northernest",
      "vintage-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/vintage-series/",
    "image": "/images/live-catalog/cat-55-vintage-series.jpg"
  },
  {
    "id": 53,
    "name": "WE THE NORTH",
    "slug": "we-the-north",
    "parentId": 48,
    "count": 12,
    "path": [
      "engineered-hardwood",
      "northernest",
      "we-the-north"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/we-the-north/",
    "image": "/images/live-catalog/cat-53-we-the-north.jpeg"
  },
  {
    "id": 58,
    "name": "WINERY COLLECTION",
    "slug": "winery-collection",
    "parentId": 48,
    "count": 6,
    "path": [
      "engineered-hardwood",
      "northernest",
      "winery-collection"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/northernest/winery-collection/",
    "image": "/images/live-catalog/cat-58-winery-collection.jpg"
  },
  {
    "id": 51,
    "name": "Toucan",
    "slug": "toucan",
    "parentId": 20,
    "count": 7,
    "path": [
      "engineered-hardwood",
      "toucan"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/toucan/",
    "image": "/images/live-catalog/cat-51-toucan.webp"
  },
  {
    "id": 52,
    "name": "Woden Flooring",
    "slug": "woden-flooring",
    "parentId": 20,
    "count": 10,
    "path": [
      "engineered-hardwood",
      "woden-flooring"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/engineered-hardwood/woden-flooring/",
    "image": "/images/live-catalog/cat-52-woden-flooring.jpg"
  },
  {
    "id": 21,
    "name": "Laminate",
    "slug": "laminate",
    "parentId": 0,
    "count": 72,
    "path": [
      "laminate"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/laminate/",
    "image": "/images/live-catalog/cat-21-laminate.webp"
  },
  {
    "id": 47,
    "name": "CS Floors",
    "slug": "cs-floors",
    "parentId": 21,
    "count": 8,
    "path": [
      "laminate",
      "cs-floors"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/laminate/cs-floors/",
    "image": "/images/live-catalog/cat-47-cs-floors.webp"
  },
  {
    "id": 46,
    "name": "Toucan Flooring",
    "slug": "toucan-flooring-laminate",
    "parentId": 21,
    "count": 33,
    "path": [
      "laminate",
      "toucan-flooring-laminate"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/laminate/toucan-flooring-laminate/",
    "image": "/images/live-catalog/cat-46-toucan-flooring-laminate.webp"
  },
  {
    "id": 23,
    "name": "Solid Hardwood",
    "slug": "solid-hardwood",
    "parentId": 0,
    "count": 43,
    "path": [
      "solid-hardwood"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/solid-hardwood/",
    "image": "/images/live-catalog/cat-23-solid-hardwood.jpg"
  },
  {
    "id": 24,
    "name": "Tiles",
    "slug": "tiles",
    "parentId": 0,
    "count": 55,
    "path": [
      "tiles"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/",
    "image": "/images/live-catalog/cat-24-tiles.jpg"
  },
  {
    "id": 30,
    "name": "Anatolia",
    "slug": "anatolia",
    "parentId": 24,
    "count": 24,
    "path": [
      "tiles",
      "anatolia"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/anatolia/",
    "image": "/images/live-catalog/cat-30-anatolia.webp"
  },
  {
    "id": 31,
    "name": "Form Series",
    "slug": "form-series",
    "parentId": 30,
    "count": 1,
    "path": [
      "tiles",
      "anatolia",
      "form-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/anatolia/form-series/",
    "image": "/images/live-catalog/cat-31-form-series.webp"
  },
  {
    "id": 18,
    "name": "Majesto Series",
    "slug": "majesto-series",
    "parentId": 30,
    "count": 21,
    "path": [
      "tiles",
      "anatolia",
      "majesto-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/anatolia/majesto-series/",
    "image": "/images/live-catalog/cat-18-majesto-series.webp"
  },
  {
    "id": 27,
    "name": "Baldocer",
    "slug": "baldocer",
    "parentId": 24,
    "count": 11,
    "path": [
      "tiles",
      "baldocer"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/baldocer/",
    "image": "/images/live-catalog/cat-27-baldocer.jpg"
  },
  {
    "id": 28,
    "name": "Gayafores",
    "slug": "gayafores",
    "parentId": 24,
    "count": 8,
    "path": [
      "tiles",
      "gayafores"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/gayafores/",
    "image": "/images/live-catalog/cat-28-gayafores.webp"
  },
  {
    "id": 29,
    "name": "La Platera",
    "slug": "la-platera",
    "parentId": 24,
    "count": 6,
    "path": [
      "tiles",
      "la-platera"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/la-platera/",
    "image": "/images/live-catalog/cat-29-la-platera.jpg"
  },
  {
    "id": 26,
    "name": "Undefasa",
    "slug": "undefasa",
    "parentId": 24,
    "count": 5,
    "path": [
      "tiles",
      "undefasa"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/tiles/undefasa/",
    "image": "/images/live-catalog/cat-26-undefasa.jpg"
  },
  {
    "id": 76,
    "name": "Vanity",
    "slug": "vanity",
    "parentId": 0,
    "count": 4,
    "path": [
      "vanity"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vanity/",
    "image": "/images/live-catalog/cat-76-vanity.png"
  },
  {
    "id": 77,
    "name": "Freestanding Vanity",
    "slug": "freestanding-vanity",
    "parentId": 76,
    "count": 2,
    "path": [
      "vanity",
      "freestanding-vanity"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vanity/freestanding-vanity/",
    "image": "/images/live-catalog/cat-77-freestanding-vanity.png"
  },
  {
    "id": 78,
    "name": "Wall Mount Vanity",
    "slug": "wall-mount-vanity",
    "parentId": 76,
    "count": 2,
    "path": [
      "vanity",
      "wall-mount-vanity"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vanity/wall-mount-vanity/",
    "image": "/images/live-catalog/cat-78-wall-mount-vanity.png"
  },
  {
    "id": 22,
    "name": "Vinyl",
    "slug": "vinyl",
    "parentId": 0,
    "count": 102,
    "path": [
      "vinyl"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/",
    "image": "/images/live-catalog/cat-22-vinyl.jpg"
  },
  {
    "id": 36,
    "name": "CS Flooring",
    "slug": "cs-flooring",
    "parentId": 22,
    "count": 18,
    "path": [
      "vinyl",
      "cs-flooring"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/cs-flooring/",
    "image": "/images/live-catalog/cat-36-cs-flooring.jpg"
  },
  {
    "id": 39,
    "name": "Harbinger Floors",
    "slug": "harbinger-floors",
    "parentId": 22,
    "count": 78,
    "path": [
      "vinyl",
      "harbinger-floors"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/harbinger-floors/",
    "image": "/images/live-catalog/cat-39-harbinger-floors.webp"
  },
  {
    "id": 42,
    "name": "Contract Series",
    "slug": "contract-series",
    "parentId": 39,
    "count": 13,
    "path": [
      "vinyl",
      "harbinger-floors",
      "contract-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/harbinger-floors/contract-series/",
    "image": "/images/live-catalog/cat-42-contract-series.jpg"
  },
  {
    "id": 41,
    "name": "Craftsman Series",
    "slug": "craftsman-series",
    "parentId": 39,
    "count": 20,
    "path": [
      "vinyl",
      "harbinger-floors",
      "craftsman-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/harbinger-floors/craftsman-series/",
    "image": "/images/live-catalog/cat-41-craftsman-series.webp"
  },
  {
    "id": 44,
    "name": "Signature Acoustic Click",
    "slug": "signature-acoustic-click",
    "parentId": 39,
    "count": 32,
    "path": [
      "vinyl",
      "harbinger-floors",
      "signature-acoustic-click"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/harbinger-floors/signature-acoustic-click/",
    "image": "/images/live-catalog/cat-44-signature-acoustic-click.webp"
  },
  {
    "id": 43,
    "name": "The Quiet Zone Series",
    "slug": "the-quiet-zone-series",
    "parentId": 39,
    "count": 13,
    "path": [
      "vinyl",
      "harbinger-floors",
      "the-quiet-zone-series"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/harbinger-floors/the-quiet-zone-series/",
    "image": "/images/live-catalog/cat-43-the-quiet-zone-series.webp"
  },
  {
    "id": 38,
    "name": "Northernest Hardwood Flooring",
    "slug": "northernest-hardwood-flooring",
    "parentId": 22,
    "count": 6,
    "path": [
      "vinyl",
      "northernest-hardwood-flooring"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/vinyl/northernest-hardwood-flooring/",
    "image": "/images/live-catalog/cat-38-northernest-hardwood-flooring.jpg"
  },
  {
    "id": 32,
    "name": "Wall tiles",
    "slug": "wall-tiles",
    "parentId": 0,
    "count": 3,
    "path": [
      "wall-tiles"
    ],
    "sourceUrl": "https://metrotilesandflooring.com/product-category/wall-tiles/",
    "image": "/images/live-catalog/cat-32-wall-tiles.webp"
  }
];

export const liveCatalogProducts: LiveCatalogProduct[] = [
  {
    "id": 2570,
    "name": "Amber Champagne",
    "slug": "amber-champagne",
    "sourceUrl": "https://metrotilesandflooring.com/product/amber-champagne/",
    "image": "/images/live-catalog/prod-2570-amber-champagne.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 2567,
    "name": "Golden Eye",
    "slug": "golden-eye-glitter",
    "sourceUrl": "https://metrotilesandflooring.com/product/golden-eye-glitter/",
    "image": "/images/live-catalog/prod-2567-golden-eye-glitter.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 2563,
    "name": "Miami",
    "slug": "miami-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/miami-2/",
    "image": "/images/live-catalog/prod-2563-miami-2.png",
    "categories": [
      {
        "id": 77,
        "name": "Freestanding Vanity",
        "slug": "freestanding-vanity",
        "path": [
          "vanity",
          "freestanding-vanity"
        ]
      }
    ],
    "categoryIds": [
      77
    ],
    "categoryPaths": [
      "vanity/freestanding-vanity"
    ]
  },
  {
    "id": 2558,
    "name": "Montreal",
    "slug": "montreal-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/montreal-2/",
    "image": "/images/live-catalog/prod-2558-montreal-2.png",
    "categories": [
      {
        "id": 77,
        "name": "Freestanding Vanity",
        "slug": "freestanding-vanity",
        "path": [
          "vanity",
          "freestanding-vanity"
        ]
      }
    ],
    "categoryIds": [
      77
    ],
    "categoryPaths": [
      "vanity/freestanding-vanity"
    ]
  },
  {
    "id": 2548,
    "name": "Miami",
    "slug": "miami",
    "sourceUrl": "https://metrotilesandflooring.com/product/miami/",
    "image": "/images/live-catalog/prod-2548-miami.webp",
    "categories": [
      {
        "id": 78,
        "name": "Wall Mount Vanity",
        "slug": "wall-mount-vanity",
        "path": [
          "vanity",
          "wall-mount-vanity"
        ]
      }
    ],
    "categoryIds": [
      78
    ],
    "categoryPaths": [
      "vanity/wall-mount-vanity"
    ]
  },
  {
    "id": 2528,
    "name": "Montreal",
    "slug": "montreal",
    "sourceUrl": "https://metrotilesandflooring.com/product/montreal/",
    "image": "/images/live-catalog/prod-2528-montreal.webp",
    "categories": [
      {
        "id": 78,
        "name": "Wall Mount Vanity",
        "slug": "wall-mount-vanity",
        "path": [
          "vanity",
          "wall-mount-vanity"
        ]
      }
    ],
    "categoryIds": [
      78
    ],
    "categoryPaths": [
      "vanity/wall-mount-vanity"
    ]
  },
  {
    "id": 2315,
    "name": "Siros",
    "slug": "siros",
    "sourceUrl": "https://metrotilesandflooring.com/product/siros/",
    "image": "/images/live-catalog/prod-2315-siros.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 2309,
    "name": "Aureus",
    "slug": "aureus",
    "sourceUrl": "https://metrotilesandflooring.com/product/aureus/",
    "image": "/images/live-catalog/prod-2309-aureus.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 2303,
    "name": "Roos",
    "slug": "roos",
    "sourceUrl": "https://metrotilesandflooring.com/product/roos/",
    "image": "/images/live-catalog/prod-2303-roos.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 2299,
    "name": "Raku",
    "slug": "raku",
    "sourceUrl": "https://metrotilesandflooring.com/product/raku/",
    "image": "/images/live-catalog/prod-2299-raku.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 2293,
    "name": "Kromo",
    "slug": "kromo",
    "sourceUrl": "https://metrotilesandflooring.com/product/kromo/",
    "image": "/images/live-catalog/prod-2293-kromo.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 2263,
    "name": "Bathroom Faucet Set",
    "slug": "bathroom-faucet-set",
    "sourceUrl": "https://metrotilesandflooring.com/product/bathroom-faucet-set/",
    "image": "/images/live-catalog/prod-2263-bathroom-faucet-set.jpg",
    "categories": [
      {
        "id": 75,
        "name": "Faucet and other Accessories",
        "slug": "faucet-and-other-accessories",
        "path": [
          "bathroom-accessories",
          "faucet-and-other-accessories"
        ]
      }
    ],
    "categoryIds": [
      75
    ],
    "categoryPaths": [
      "bathroom-accessories/faucet-and-other-accessories"
    ]
  },
  {
    "id": 2253,
    "name": "5 piece bathroom hardware set",
    "slug": "5-piece-bathroom-hardware-set",
    "sourceUrl": "https://metrotilesandflooring.com/product/5-piece-bathroom-hardware-set/",
    "image": "/images/live-catalog/prod-2253-5-piece-bathroom-hardware-set.jpg",
    "categories": [
      {
        "id": 75,
        "name": "Faucet and other Accessories",
        "slug": "faucet-and-other-accessories",
        "path": [
          "bathroom-accessories",
          "faucet-and-other-accessories"
        ]
      }
    ],
    "categoryIds": [
      75
    ],
    "categoryPaths": [
      "bathroom-accessories/faucet-and-other-accessories"
    ]
  },
  {
    "id": 2248,
    "name": "Shower head with handheld Spray Combo",
    "slug": "shower-head-with-handheld-spray-combo",
    "sourceUrl": "https://metrotilesandflooring.com/product/shower-head-with-handheld-spray-combo/",
    "image": "/images/live-catalog/prod-2248-shower-head-with-handheld-spray-combo.webp",
    "categories": [
      {
        "id": 74,
        "name": "Shower Panels",
        "slug": "shower-panels",
        "path": [
          "bathroom-accessories",
          "shower-panels"
        ]
      }
    ],
    "categoryIds": [
      74
    ],
    "categoryPaths": [
      "bathroom-accessories/shower-panels"
    ]
  },
  {
    "id": 2245,
    "name": "5 in 1 shower panel",
    "slug": "5-in-1-shower-panel",
    "sourceUrl": "https://metrotilesandflooring.com/product/5-in-1-shower-panel/",
    "image": "/images/live-catalog/prod-2245-5-in-1-shower-panel.webp",
    "categories": [
      {
        "id": 74,
        "name": "Shower Panels",
        "slug": "shower-panels",
        "path": [
          "bathroom-accessories",
          "shower-panels"
        ]
      }
    ],
    "categoryIds": [
      74
    ],
    "categoryPaths": [
      "bathroom-accessories/shower-panels"
    ]
  },
  {
    "id": 2224,
    "name": "8-Jet Shower Tower Shower Panel System",
    "slug": "8-jet-shower-tower-shower-panel-system",
    "sourceUrl": "https://metrotilesandflooring.com/product/8-jet-shower-tower-shower-panel-system/",
    "image": "/images/live-catalog/prod-2224-8-jet-shower-tower-shower-panel-system.webp",
    "categories": [
      {
        "id": 74,
        "name": "Shower Panels",
        "slug": "shower-panels",
        "path": [
          "bathroom-accessories",
          "shower-panels"
        ]
      }
    ],
    "categoryIds": [
      74
    ],
    "categoryPaths": [
      "bathroom-accessories/shower-panels"
    ]
  },
  {
    "id": 2217,
    "name": "Whisper White",
    "slug": "whisper-white",
    "sourceUrl": "https://metrotilesandflooring.com/product/whisper-white/",
    "image": "/images/live-catalog/prod-2217-whisper-white.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2215,
    "name": "Wesley",
    "slug": "wesley",
    "sourceUrl": "https://metrotilesandflooring.com/product/wesley/",
    "image": "/images/live-catalog/prod-2215-wesley.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2213,
    "name": "Ventura",
    "slug": "ventura",
    "sourceUrl": "https://metrotilesandflooring.com/product/ventura/",
    "image": "/images/live-catalog/prod-2213-ventura.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2211,
    "name": "Summerland",
    "slug": "summerland",
    "sourceUrl": "https://metrotilesandflooring.com/product/summerland/",
    "image": "/images/live-catalog/prod-2211-summerland.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2208,
    "name": "Sausalito",
    "slug": "sausalito",
    "sourceUrl": "https://metrotilesandflooring.com/product/sausalito/",
    "image": "/images/live-catalog/prod-2208-sausalito.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2206,
    "name": "Santa Maria",
    "slug": "santa-maria",
    "sourceUrl": "https://metrotilesandflooring.com/product/santa-maria/",
    "image": "/images/live-catalog/prod-2206-santa-maria.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2204,
    "name": "Offshore Grey",
    "slug": "offshore-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/offshore-grey/",
    "image": "/images/live-catalog/prod-2204-offshore-grey.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2202,
    "name": "Napa Valley",
    "slug": "napa-valley",
    "sourceUrl": "https://metrotilesandflooring.com/product/napa-valley/",
    "image": "/images/live-catalog/prod-2202-napa-valley.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2200,
    "name": "Moss Landing",
    "slug": "moss-landing",
    "sourceUrl": "https://metrotilesandflooring.com/product/moss-landing/",
    "image": "/images/live-catalog/prod-2200-moss-landing.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2198,
    "name": "Morro Bay",
    "slug": "morro-bay",
    "sourceUrl": "https://metrotilesandflooring.com/product/morro-bay/",
    "image": "/images/live-catalog/prod-2198-morro-bay.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2196,
    "name": "Monterey",
    "slug": "monterey",
    "sourceUrl": "https://metrotilesandflooring.com/product/monterey/",
    "image": "/images/live-catalog/prod-2196-monterey.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2194,
    "name": "Midtown Brown",
    "slug": "midtown-brown",
    "sourceUrl": "https://metrotilesandflooring.com/product/midtown-brown/",
    "image": "/images/live-catalog/prod-2194-midtown-brown.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2192,
    "name": "Margaret",
    "slug": "margret",
    "sourceUrl": "https://metrotilesandflooring.com/product/margret/",
    "image": "/images/live-catalog/prod-2192-margret.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2190,
    "name": "Great Sur",
    "slug": "great-sur",
    "sourceUrl": "https://metrotilesandflooring.com/product/great-sur/",
    "image": "/images/live-catalog/prod-2190-great-sur.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2188,
    "name": "Electric Grey",
    "slug": "electric-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/electric-grey/",
    "image": "/images/live-catalog/prod-2188-electric-grey.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2186,
    "name": "Baywood",
    "slug": "baywood",
    "sourceUrl": "https://metrotilesandflooring.com/product/baywood/",
    "image": "/images/live-catalog/prod-2186-baywood.webp",
    "categories": [
      {
        "id": 72,
        "name": "BRAND SURFACES",
        "slug": "brand-surfaces",
        "path": [
          "engineered-hardwood",
          "cs",
          "brand-surfaces"
        ]
      }
    ],
    "categoryIds": [
      72
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/brand-surfaces"
    ]
  },
  {
    "id": 2181,
    "name": "Maxine",
    "slug": "maxine-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/maxine-2/",
    "image": "/images/live-catalog/prod-2181-maxine-2.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2178,
    "name": "Leah",
    "slug": "leah",
    "sourceUrl": "https://metrotilesandflooring.com/product/leah/",
    "image": "/images/live-catalog/prod-2178-leah.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2176,
    "name": "Evelyn",
    "slug": "evelyn",
    "sourceUrl": "https://metrotilesandflooring.com/product/evelyn/",
    "image": "/images/live-catalog/prod-2176-evelyn.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2173,
    "name": "Emily",
    "slug": "emily",
    "sourceUrl": "https://metrotilesandflooring.com/product/emily/",
    "image": "/images/live-catalog/prod-2173-emily.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2171,
    "name": "Constance",
    "slug": "constance",
    "sourceUrl": "https://metrotilesandflooring.com/product/constance/",
    "image": "/images/live-catalog/prod-2171-constance.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2169,
    "name": "Charlotte",
    "slug": "charlotte",
    "sourceUrl": "https://metrotilesandflooring.com/product/charlotte/",
    "image": "/images/live-catalog/prod-2169-charlotte.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2167,
    "name": "Tiffany",
    "slug": "tiffany",
    "sourceUrl": "https://metrotilesandflooring.com/product/tiffany/",
    "image": "/images/live-catalog/prod-2167-tiffany.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2165,
    "name": "Sedrick",
    "slug": "sedrick",
    "sourceUrl": "https://metrotilesandflooring.com/product/sedrick/",
    "image": "/images/live-catalog/prod-2165-sedrick.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2163,
    "name": "Kinsey",
    "slug": "kinsey",
    "sourceUrl": "https://metrotilesandflooring.com/product/kinsey/",
    "image": "/images/live-catalog/prod-2163-kinsey.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2161,
    "name": "Kate",
    "slug": "kate",
    "sourceUrl": "https://metrotilesandflooring.com/product/kate/",
    "image": "/images/live-catalog/prod-2161-kate.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2159,
    "name": "Hamsphire",
    "slug": "hamsphire",
    "sourceUrl": "https://metrotilesandflooring.com/product/hamsphire/",
    "image": "/images/live-catalog/prod-2159-hamsphire.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2157,
    "name": "Grayson",
    "slug": "grayson",
    "sourceUrl": "https://metrotilesandflooring.com/product/grayson/",
    "image": "/images/live-catalog/prod-2157-grayson.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2154,
    "name": "Subtle White",
    "slug": "subtle-white",
    "sourceUrl": "https://metrotilesandflooring.com/product/subtle-white/",
    "image": "/images/live-catalog/prod-2154-subtle-white.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2152,
    "name": "Shoreline Grey",
    "slug": "shoreline-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/shoreline-grey/",
    "image": "/images/live-catalog/prod-2152-shoreline-grey.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2150,
    "name": "Poly Pony",
    "slug": "poly-pony",
    "sourceUrl": "https://metrotilesandflooring.com/product/poly-pony/",
    "image": "/images/live-catalog/prod-2150-poly-pony.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2148,
    "name": "Planetary Silver",
    "slug": "planetary-silver",
    "sourceUrl": "https://metrotilesandflooring.com/product/planetary-silver/",
    "image": "/images/live-catalog/prod-2148-planetary-silver.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2146,
    "name": "Yorkshire",
    "slug": "yorkshire",
    "sourceUrl": "https://metrotilesandflooring.com/product/yorkshire/",
    "image": "/images/live-catalog/prod-2146-yorkshire.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2144,
    "name": "Surrey Hills",
    "slug": "surrey-hills",
    "sourceUrl": "https://metrotilesandflooring.com/product/surrey-hills/",
    "image": "/images/live-catalog/prod-2144-surrey-hills.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2142,
    "name": "Royal Pile",
    "slug": "royal-pile",
    "sourceUrl": "https://metrotilesandflooring.com/product/royal-pile/",
    "image": "/images/live-catalog/prod-2142-royal-pile.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2140,
    "name": "Duchy Estate",
    "slug": "duchy-estate",
    "sourceUrl": "https://metrotilesandflooring.com/product/duchy-estate/",
    "image": "/images/live-catalog/prod-2140-duchy-estate.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2138,
    "name": "Astoria",
    "slug": "astoria",
    "sourceUrl": "https://metrotilesandflooring.com/product/astoria/",
    "image": "/images/live-catalog/prod-2138-astoria.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2135,
    "name": "Warm Heritage",
    "slug": "warm-heritage",
    "sourceUrl": "https://metrotilesandflooring.com/product/warm-heritage/",
    "image": "/images/live-catalog/prod-2135-warm-heritage.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2133,
    "name": "Nottingham",
    "slug": "nottingham-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/nottingham-2/",
    "image": "/images/live-catalog/prod-2133-nottingham-2.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2131,
    "name": "Greysmith",
    "slug": "greysmith",
    "sourceUrl": "https://metrotilesandflooring.com/product/greysmith/",
    "image": "/images/live-catalog/prod-2131-greysmith.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2129,
    "name": "Forest Trail",
    "slug": "forest-trail",
    "sourceUrl": "https://metrotilesandflooring.com/product/forest-trail/",
    "image": "/images/live-catalog/prod-2129-forest-trail.webp",
    "categories": [
      {
        "id": 71,
        "name": "ORIGINS",
        "slug": "origins",
        "path": [
          "engineered-hardwood",
          "cs",
          "origins"
        ]
      }
    ],
    "categoryIds": [
      71
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/origins"
    ]
  },
  {
    "id": 2126,
    "name": "Tolkein",
    "slug": "tolkein",
    "sourceUrl": "https://metrotilesandflooring.com/product/tolkein/",
    "image": "/images/live-catalog/prod-2126-tolkein.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2124,
    "name": "Twain",
    "slug": "twain",
    "sourceUrl": "https://metrotilesandflooring.com/product/twain/",
    "image": "/images/live-catalog/prod-2124-twain.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2122,
    "name": "Lewis",
    "slug": "lewis",
    "sourceUrl": "https://metrotilesandflooring.com/product/lewis/",
    "image": "/images/live-catalog/prod-2122-lewis.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2120,
    "name": "Woolf",
    "slug": "woolf",
    "sourceUrl": "https://metrotilesandflooring.com/product/woolf/",
    "image": "/images/live-catalog/prod-2120-woolf.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2118,
    "name": "Steinbeck",
    "slug": "steinbeck",
    "sourceUrl": "https://metrotilesandflooring.com/product/steinbeck/",
    "image": "/images/live-catalog/prod-2118-steinbeck.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2116,
    "name": "Rowling",
    "slug": "rowling",
    "sourceUrl": "https://metrotilesandflooring.com/product/rowling/",
    "image": "/images/live-catalog/prod-2116-rowling.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2114,
    "name": "Orwell",
    "slug": "orwell",
    "sourceUrl": "https://metrotilesandflooring.com/product/orwell/",
    "image": "/images/live-catalog/prod-2114-orwell.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2109,
    "name": "Hemingway",
    "slug": "hemingway",
    "sourceUrl": "https://metrotilesandflooring.com/product/hemingway/",
    "image": "/images/live-catalog/prod-2109-hemingway.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2107,
    "name": "Fitzgerald",
    "slug": "fitzgerald",
    "sourceUrl": "https://metrotilesandflooring.com/product/fitzgerald/",
    "image": "/images/live-catalog/prod-2107-fitzgerald.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2105,
    "name": "Dickens",
    "slug": "dickens",
    "sourceUrl": "https://metrotilesandflooring.com/product/dickens/",
    "image": "/images/live-catalog/prod-2105-dickens.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2103,
    "name": "Austen",
    "slug": "austen",
    "sourceUrl": "https://metrotilesandflooring.com/product/austen/",
    "image": "/images/live-catalog/prod-2103-austen.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2101,
    "name": "Atwood",
    "slug": "atwood",
    "sourceUrl": "https://metrotilesandflooring.com/product/atwood/",
    "image": "/images/live-catalog/prod-2101-atwood.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2099,
    "name": "Alcott",
    "slug": "alcott",
    "sourceUrl": "https://metrotilesandflooring.com/product/alcott/",
    "image": "/images/live-catalog/prod-2099-alcott.webp",
    "categories": [
      {
        "id": 62,
        "name": "NOVELLA",
        "slug": "novella",
        "path": [
          "engineered-hardwood",
          "cs",
          "novella"
        ]
      }
    ],
    "categoryIds": [
      62
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/novella"
    ]
  },
  {
    "id": 2095,
    "name": "Herringbone- Tranquil",
    "slug": "herringbone-tranquil",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-tranquil/",
    "image": "/images/live-catalog/prod-2095-herringbone-tranquil.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2093,
    "name": "Herringbone- Soothe",
    "slug": "herringbone-soothe",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-soothe/",
    "image": "/images/live-catalog/prod-2093-herringbone-soothe.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2091,
    "name": "Herringbone- Senses",
    "slug": "herringbone-senses",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-senses/",
    "image": "/images/live-catalog/prod-2091-herringbone-senses.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2089,
    "name": "Herringbone- Enhance",
    "slug": "herringbone-enhance",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-enhance/",
    "image": "/images/live-catalog/prod-2089-herringbone-enhance.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2087,
    "name": "Herringbone- Calm",
    "slug": "herringbone-calm",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-calm/",
    "image": "/images/live-catalog/prod-2087-herringbone-calm.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2085,
    "name": "Herringbone- Pure",
    "slug": "herringbone-pure",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-pure/",
    "image": "/images/live-catalog/prod-2085-herringbone-pure.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2083,
    "name": "Herringbone- Pristine",
    "slug": "herringbone-pristine",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-pristine/",
    "image": "/images/live-catalog/prod-2083-herringbone-pristine.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2081,
    "name": "Herringbone- Nature",
    "slug": "herringbone-nature",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-nature/",
    "image": "/images/live-catalog/prod-2081-herringbone-nature.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2079,
    "name": "Herringbone- Essence",
    "slug": "herringbone-essence",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-essence/",
    "image": "/images/live-catalog/prod-2079-herringbone-essence.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2077,
    "name": "Herringbone- Bare",
    "slug": "herringbone-bare",
    "sourceUrl": "https://metrotilesandflooring.com/product/herringbone-bare/",
    "image": "/images/live-catalog/prod-2077-herringbone-bare.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2075,
    "name": "Plank- Tranquil",
    "slug": "plank-tranquil",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-tranquil/",
    "image": "/images/live-catalog/prod-2075-plank-tranquil.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2073,
    "name": "Plank- Soothe",
    "slug": "plank-soothe",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-soothe/",
    "image": "/images/live-catalog/prod-2073-plank-soothe.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2071,
    "name": "Plank- Senses",
    "slug": "plank-senses",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-senses/",
    "image": "/images/live-catalog/prod-2071-plank-senses.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2069,
    "name": "Plank- Enhance",
    "slug": "plank-enhance",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-enhance/",
    "image": "/images/live-catalog/prod-2069-plank-enhance.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2067,
    "name": "Plank- Calm",
    "slug": "plank-calm",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-calm/",
    "image": "/images/live-catalog/prod-2067-plank-calm.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2065,
    "name": "Plank- Pure",
    "slug": "plank-pure",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-pure/",
    "image": "/images/live-catalog/prod-2065-plank-pure.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2063,
    "name": "Plank- Pristine",
    "slug": "plank-pristine",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-pristine/",
    "image": "/images/live-catalog/prod-2063-plank-pristine.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2058,
    "name": "Plank- Nature",
    "slug": "plank-nature",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-nature/",
    "image": "/images/live-catalog/prod-2058-plank-nature.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2056,
    "name": "Plank- Essence",
    "slug": "plank-essence",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-essence/",
    "image": "/images/live-catalog/prod-2056-plank-essence.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2054,
    "name": "Plank- Bare",
    "slug": "plank-bare",
    "sourceUrl": "https://metrotilesandflooring.com/product/plank-bare/",
    "image": "/images/live-catalog/prod-2054-plank-bare.webp",
    "categories": [
      {
        "id": 61,
        "name": "LUCID (Plank & Herringbone)",
        "slug": "lucid-plank-herringbone",
        "path": [
          "engineered-hardwood",
          "cs",
          "lucid-plank-herringbone"
        ]
      }
    ],
    "categoryIds": [
      61
    ],
    "categoryPaths": [
      "engineered-hardwood/cs/lucid-plank-herringbone"
    ]
  },
  {
    "id": 2050,
    "name": "Smokehouse",
    "slug": "smokehouse",
    "sourceUrl": "https://metrotilesandflooring.com/product/smokehouse/",
    "image": "/images/live-catalog/prod-2050-smokehouse.jpg",
    "categories": [
      {
        "id": 59,
        "name": "OAK",
        "slug": "oak",
        "path": [
          "engineered-hardwood",
          "northernest",
          "oak"
        ]
      }
    ],
    "categoryIds": [
      59
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/oak"
    ]
  },
  {
    "id": 2048,
    "name": "Pacific Coast",
    "slug": "pacific-coast",
    "sourceUrl": "https://metrotilesandflooring.com/product/pacific-coast/",
    "image": "/images/live-catalog/prod-2048-pacific-coast.jpg",
    "categories": [
      {
        "id": 59,
        "name": "OAK",
        "slug": "oak",
        "path": [
          "engineered-hardwood",
          "northernest",
          "oak"
        ]
      }
    ],
    "categoryIds": [
      59
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/oak"
    ]
  },
  {
    "id": 2046,
    "name": "Grey Timber",
    "slug": "grey-timber",
    "sourceUrl": "https://metrotilesandflooring.com/product/grey-timber/",
    "image": "/images/live-catalog/prod-2046-grey-timber.jpg",
    "categories": [
      {
        "id": 59,
        "name": "OAK",
        "slug": "oak",
        "path": [
          "engineered-hardwood",
          "northernest",
          "oak"
        ]
      }
    ],
    "categoryIds": [
      59
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/oak"
    ]
  },
  {
    "id": 2044,
    "name": "Damask",
    "slug": "damask",
    "sourceUrl": "https://metrotilesandflooring.com/product/damask/",
    "image": "/images/live-catalog/prod-2044-damask.jpg",
    "categories": [
      {
        "id": 59,
        "name": "OAK",
        "slug": "oak",
        "path": [
          "engineered-hardwood",
          "northernest",
          "oak"
        ]
      }
    ],
    "categoryIds": [
      59
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/oak"
    ]
  },
  {
    "id": 2042,
    "name": "Borado",
    "slug": "borado",
    "sourceUrl": "https://metrotilesandflooring.com/product/borado/",
    "image": "/images/live-catalog/prod-2042-borado.jpg",
    "categories": [
      {
        "id": 59,
        "name": "OAK",
        "slug": "oak",
        "path": [
          "engineered-hardwood",
          "northernest",
          "oak"
        ]
      }
    ],
    "categoryIds": [
      59
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/oak"
    ]
  },
  {
    "id": 2040,
    "name": "Smoky Mountain",
    "slug": "smoky-mountain",
    "sourceUrl": "https://metrotilesandflooring.com/product/smoky-mountain/",
    "image": "/images/live-catalog/prod-2040-smoky-mountain.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2038,
    "name": "Old Country",
    "slug": "old-country",
    "sourceUrl": "https://metrotilesandflooring.com/product/old-country/",
    "image": "/images/live-catalog/prod-2038-old-country.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2036,
    "name": "Oak Chestnut",
    "slug": "oak-chestnut",
    "sourceUrl": "https://metrotilesandflooring.com/product/oak-chestnut/",
    "image": "/images/live-catalog/prod-2036-oak-chestnut.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2034,
    "name": "Falcon Grey",
    "slug": "falcon-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/falcon-grey/",
    "image": "/images/showroom/soft-bedroom-flooring.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2032,
    "name": "Black Cedar",
    "slug": "black-cedar",
    "sourceUrl": "https://metrotilesandflooring.com/product/black-cedar/",
    "image": "/images/live-catalog/prod-2032-black-cedar.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2030,
    "name": "Ash Grey",
    "slug": "ash-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/ash-grey/",
    "image": "/images/live-catalog/prod-2030-ash-grey.jpg",
    "categories": [
      {
        "id": 58,
        "name": "WINERY COLLECTION",
        "slug": "winery-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "winery-collection"
        ]
      }
    ],
    "categoryIds": [
      58
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/winery-collection"
    ]
  },
  {
    "id": 2028,
    "name": "Manhattan",
    "slug": "manhattan",
    "sourceUrl": "https://metrotilesandflooring.com/product/manhattan/",
    "image": "/images/live-catalog/prod-2028-manhattan.jpg",
    "categories": [
      {
        "id": 57,
        "name": "INSPIRATION SERIES",
        "slug": "inspiration-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "inspiration-series"
        ]
      }
    ],
    "categoryIds": [
      57
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/inspiration-series"
    ]
  },
  {
    "id": 2026,
    "name": "Bristol",
    "slug": "bristol",
    "sourceUrl": "https://metrotilesandflooring.com/product/bristol/",
    "image": "/images/live-catalog/prod-2026-bristol.jpg",
    "categories": [
      {
        "id": 57,
        "name": "INSPIRATION SERIES",
        "slug": "inspiration-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "inspiration-series"
        ]
      }
    ],
    "categoryIds": [
      57
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/inspiration-series"
    ]
  },
  {
    "id": 2024,
    "name": "Elegant",
    "slug": "elegant",
    "sourceUrl": "https://metrotilesandflooring.com/product/elegant/",
    "image": "/images/live-catalog/prod-2024-elegant.jpeg",
    "categories": [
      {
        "id": 57,
        "name": "INSPIRATION SERIES",
        "slug": "inspiration-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "inspiration-series"
        ]
      }
    ],
    "categoryIds": [
      57
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/inspiration-series"
    ]
  },
  {
    "id": 2022,
    "name": "Kodiak",
    "slug": "kodiak",
    "sourceUrl": "https://metrotilesandflooring.com/product/kodiak/",
    "image": "/images/live-catalog/prod-2022-kodiak.jpg",
    "categories": [
      {
        "id": 57,
        "name": "INSPIRATION SERIES",
        "slug": "inspiration-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "inspiration-series"
        ]
      }
    ],
    "categoryIds": [
      57
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/inspiration-series"
    ]
  },
  {
    "id": 2020,
    "name": "African Hickory",
    "slug": "african-hickory",
    "sourceUrl": "https://metrotilesandflooring.com/product/african-hickory/",
    "image": "/images/live-catalog/prod-2020-african-hickory.jpg",
    "categories": [
      {
        "id": 57,
        "name": "INSPIRATION SERIES",
        "slug": "inspiration-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "inspiration-series"
        ]
      }
    ],
    "categoryIds": [
      57
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/inspiration-series"
    ]
  },
  {
    "id": 2017,
    "name": "Truffle",
    "slug": "truffle",
    "sourceUrl": "https://metrotilesandflooring.com/product/truffle/",
    "image": "/images/live-catalog/prod-2017-truffle.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2015,
    "name": "Smoke",
    "slug": "smoke",
    "sourceUrl": "https://metrotilesandflooring.com/product/smoke/",
    "image": "/images/live-catalog/prod-2015-smoke.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2013,
    "name": "Mid Oak",
    "slug": "mid-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/mid-oak/",
    "image": "/images/live-catalog/prod-2013-mid-oak.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2011,
    "name": "Light Grey",
    "slug": "light-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/light-grey/",
    "image": "/images/live-catalog/prod-2011-light-grey.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2009,
    "name": "Kentucky",
    "slug": "kentucky",
    "sourceUrl": "https://metrotilesandflooring.com/product/kentucky/",
    "image": "/images/live-catalog/prod-2009-kentucky.jpeg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2007,
    "name": "Hazelnut",
    "slug": "hazelnut-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/hazelnut-2/",
    "image": "/images/live-catalog/prod-2007-hazelnut-2.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2005,
    "name": "Grey Stone",
    "slug": "grey-stone-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/grey-stone-2/",
    "image": "/images/live-catalog/prod-2005-grey-stone-2.jpg",
    "categories": [
      {
        "id": 56,
        "name": "PERFORMANCE SERIES",
        "slug": "performance-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "performance-series"
        ]
      }
    ],
    "categoryIds": [
      56
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/performance-series"
    ]
  },
  {
    "id": 2003,
    "name": "Zeus",
    "slug": "zeus-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/zeus-2/",
    "image": "/images/live-catalog/prod-2003-zeus-2.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 2001,
    "name": "Versailles",
    "slug": "versailles",
    "sourceUrl": "https://metrotilesandflooring.com/product/versailles/",
    "image": "/images/live-catalog/prod-2001-versailles.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1999,
    "name": "Venice",
    "slug": "venice",
    "sourceUrl": "https://metrotilesandflooring.com/product/venice/",
    "image": "/images/live-catalog/prod-1999-venice.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1996,
    "name": "Titan",
    "slug": "sand-dune",
    "sourceUrl": "https://metrotilesandflooring.com/product/sand-dune/",
    "image": "/images/live-catalog/prod-1996-sand-dune.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1994,
    "name": "Pollo",
    "slug": "pollo",
    "sourceUrl": "https://metrotilesandflooring.com/product/pollo/",
    "image": "/images/live-catalog/prod-1994-pollo.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1992,
    "name": "Petrus",
    "slug": "petrus",
    "sourceUrl": "https://metrotilesandflooring.com/product/petrus/",
    "image": "/images/live-catalog/prod-1992-petrus.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1990,
    "name": "Pegasus",
    "slug": "pegasus",
    "sourceUrl": "https://metrotilesandflooring.com/product/pegasus/",
    "image": "/images/live-catalog/prod-1990-pegasus.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1988,
    "name": "Nautilus",
    "slug": "nautilus",
    "sourceUrl": "https://metrotilesandflooring.com/product/nautilus/",
    "image": "/images/live-catalog/prod-1988-nautilus.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1986,
    "name": "Mitis",
    "slug": "mitis",
    "sourceUrl": "https://metrotilesandflooring.com/product/mitis/",
    "image": "/images/live-catalog/prod-1986-mitis.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1982,
    "name": "Hermes",
    "slug": "canvas",
    "sourceUrl": "https://metrotilesandflooring.com/product/canvas/",
    "image": "/images/live-catalog/prod-1982-canvas.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1980,
    "name": "Buckigham",
    "slug": "buckigham",
    "sourceUrl": "https://metrotilesandflooring.com/product/buckigham/",
    "image": "/images/live-catalog/prod-1980-buckigham.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1978,
    "name": "Barcelona",
    "slug": "barcelona",
    "sourceUrl": "https://metrotilesandflooring.com/product/barcelona/",
    "image": "/images/live-catalog/prod-1978-barcelona.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1976,
    "name": "Atlantis",
    "slug": "atlantis",
    "sourceUrl": "https://metrotilesandflooring.com/product/atlantis/",
    "image": "/images/live-catalog/prod-1976-atlantis.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1974,
    "name": "Albatross",
    "slug": "albatross",
    "sourceUrl": "https://metrotilesandflooring.com/product/albatross/",
    "image": "/images/live-catalog/prod-1974-albatross.jpg",
    "categories": [
      {
        "id": 55,
        "name": "VINTAGE SERIES",
        "slug": "vintage-series",
        "path": [
          "engineered-hardwood",
          "northernest",
          "vintage-series"
        ]
      }
    ],
    "categoryIds": [
      55
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/vintage-series"
    ]
  },
  {
    "id": 1970,
    "name": "Latte",
    "slug": "latte-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/latte-2/",
    "image": "/images/live-catalog/prod-1970-latte-2.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1968,
    "name": "SBB-8 Yukon White",
    "slug": "sbb-8-yukon-white",
    "sourceUrl": "https://metrotilesandflooring.com/product/sbb-8-yukon-white/",
    "image": "/images/live-catalog/prod-1968-sbb-8-yukon-white.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1966,
    "name": "SBB-7 Malmo",
    "slug": "sbb-7-malmo",
    "sourceUrl": "https://metrotilesandflooring.com/product/sbb-7-malmo/",
    "image": "/images/live-catalog/prod-1966-sbb-7-malmo.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1964,
    "name": "SBB-3 White Pine",
    "slug": "sbb-3-white-pine",
    "sourceUrl": "https://metrotilesandflooring.com/product/sbb-3-white-pine/",
    "image": "/images/live-catalog/prod-1964-sbb-3-white-pine.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1961,
    "name": "SBB-4 Athena",
    "slug": "athena",
    "sourceUrl": "https://metrotilesandflooring.com/product/athena/",
    "image": "/images/live-catalog/prod-1961-athena.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1959,
    "name": "SBB-1 Gothenburg",
    "slug": "sbb-1-gothenburg",
    "sourceUrl": "https://metrotilesandflooring.com/product/sbb-1-gothenburg/",
    "image": "/images/live-catalog/prod-1959-sbb-1-gothenburg.jpg",
    "categories": [
      {
        "id": 54,
        "name": "EUROPEAN OAK COLLECTION",
        "slug": "european-oak-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "european-oak-collection"
        ]
      }
    ],
    "categoryIds": [
      54
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/european-oak-collection"
    ]
  },
  {
    "id": 1957,
    "name": "Woodland",
    "slug": "woodland",
    "sourceUrl": "https://metrotilesandflooring.com/product/woodland/",
    "image": "/images/live-catalog/prod-1957-woodland.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1955,
    "name": "SBB-2 Snowdrift",
    "slug": "sbb-2-snowdrift",
    "sourceUrl": "https://metrotilesandflooring.com/product/sbb-2-snowdrift/",
    "image": "/images/live-catalog/prod-1955-sbb-2-snowdrift.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1953,
    "name": "Sand Oak",
    "slug": "sand-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/sand-oak/",
    "image": "/images/live-catalog/prod-1953-sand-oak.jpeg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1951,
    "name": "Prestige Oak",
    "slug": "prestige-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/prestige-oak/",
    "image": "/images/live-catalog/prod-1951-prestige-oak.jpeg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1949,
    "name": "Frozen Oak",
    "slug": "frozen-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/frozen-oak/",
    "image": "/images/live-catalog/prod-1949-frozen-oak.jpeg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1947,
    "name": "Cinder",
    "slug": "cinder",
    "sourceUrl": "https://metrotilesandflooring.com/product/cinder/",
    "image": "/images/live-catalog/prod-1947-cinder.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1945,
    "name": "Chelsea Oak",
    "slug": "chelsea-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/chelsea-oak/",
    "image": "/images/live-catalog/prod-1945-chelsea-oak.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1943,
    "name": "Canyon Oak",
    "slug": "canyon-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/canyon-oak/",
    "image": "/images/live-catalog/prod-1943-canyon-oak.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1941,
    "name": "Black Walnut",
    "slug": "black-walnut",
    "sourceUrl": "https://metrotilesandflooring.com/product/black-walnut/",
    "image": "/images/live-catalog/prod-1941-black-walnut.jpeg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1939,
    "name": "Birol",
    "slug": "birol",
    "sourceUrl": "https://metrotilesandflooring.com/product/birol/",
    "image": "/images/live-catalog/prod-1939-birol.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1937,
    "name": "Barista",
    "slug": "barista",
    "sourceUrl": "https://metrotilesandflooring.com/product/barista/",
    "image": "/images/live-catalog/prod-1937-barista.jpg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1935,
    "name": "American Oak",
    "slug": "american-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/american-oak/",
    "image": "/images/live-catalog/prod-1935-american-oak.jpeg",
    "categories": [
      {
        "id": 53,
        "name": "WE THE NORTH",
        "slug": "we-the-north",
        "path": [
          "engineered-hardwood",
          "northernest",
          "we-the-north"
        ]
      }
    ],
    "categoryIds": [
      53
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/we-the-north"
    ]
  },
  {
    "id": 1930,
    "name": "Pala",
    "slug": "pala",
    "sourceUrl": "https://metrotilesandflooring.com/product/pala/",
    "image": "/images/live-catalog/prod-1930-pala.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1928,
    "name": "Moxie",
    "slug": "moxie",
    "sourceUrl": "https://metrotilesandflooring.com/product/moxie/",
    "image": "/images/live-catalog/prod-1928-moxie.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1925,
    "name": "Ardor",
    "slug": "ardor",
    "sourceUrl": "https://metrotilesandflooring.com/product/ardor/",
    "image": "/images/live-catalog/prod-1925-ardor.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1923,
    "name": "Karsia",
    "slug": "karsia",
    "sourceUrl": "https://metrotilesandflooring.com/product/karsia/",
    "image": "/images/live-catalog/prod-1923-karsia.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1921,
    "name": "Reverie",
    "slug": "reverie",
    "sourceUrl": "https://metrotilesandflooring.com/product/reverie/",
    "image": "/images/live-catalog/prod-1921-reverie.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1919,
    "name": "Wolfsburg",
    "slug": "wolfsburg",
    "sourceUrl": "https://metrotilesandflooring.com/product/wolfsburg/",
    "image": "/images/live-catalog/prod-1919-wolfsburg.jpg",
    "categories": [
      {
        "id": 49,
        "name": "NATION COLLECTION",
        "slug": "nation-collection",
        "path": [
          "engineered-hardwood",
          "northernest",
          "nation-collection"
        ]
      }
    ],
    "categoryIds": [
      49
    ],
    "categoryPaths": [
      "engineered-hardwood/northernest/nation-collection"
    ]
  },
  {
    "id": 1915,
    "name": "Akita Herringbone",
    "slug": "akita-herringbone",
    "sourceUrl": "https://metrotilesandflooring.com/product/akita-herringbone/",
    "image": "/images/live-catalog/prod-1915-akita-herringbone.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1913,
    "name": "Uji",
    "slug": "uji",
    "sourceUrl": "https://metrotilesandflooring.com/product/uji/",
    "image": "/images/live-catalog/prod-1913-uji.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1911,
    "name": "Noto",
    "slug": "noto",
    "sourceUrl": "https://metrotilesandflooring.com/product/noto/",
    "image": "/images/live-catalog/prod-1911-noto.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1909,
    "name": "Shikoku",
    "slug": "shikoku",
    "sourceUrl": "https://metrotilesandflooring.com/product/shikoku/",
    "image": "/images/live-catalog/prod-1909-shikoku.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1907,
    "name": "Nikko",
    "slug": "nikko",
    "sourceUrl": "https://metrotilesandflooring.com/product/nikko/",
    "image": "/images/live-catalog/prod-1907-nikko.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1905,
    "name": "Nara",
    "slug": "nara",
    "sourceUrl": "https://metrotilesandflooring.com/product/nara/",
    "image": "/images/live-catalog/prod-1905-nara.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1903,
    "name": "Nagasaki",
    "slug": "nagasaki",
    "sourceUrl": "https://metrotilesandflooring.com/product/nagasaki/",
    "image": "/images/live-catalog/prod-1903-nagasaki.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1901,
    "name": "Akita",
    "slug": "akita",
    "sourceUrl": "https://metrotilesandflooring.com/product/akita/",
    "image": "/images/live-catalog/prod-1901-akita.webp",
    "categories": [
      {
        "id": 47,
        "name": "CS Floors",
        "slug": "cs-floors",
        "path": [
          "laminate",
          "cs-floors"
        ]
      }
    ],
    "categoryIds": [
      47
    ],
    "categoryPaths": [
      "laminate/cs-floors"
    ]
  },
  {
    "id": 1896,
    "name": "TF6021-F",
    "slug": "tf6021-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6021-f/",
    "image": "/images/live-catalog/prod-1896-tf6021-f.jpg",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1894,
    "name": "TF6019-F",
    "slug": "tf6019-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6019-f/",
    "image": "/images/live-catalog/prod-1894-tf6019-f.jpg",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1891,
    "name": "TF6012-F",
    "slug": "tf6012-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6012-f/",
    "image": "/images/live-catalog/prod-1891-tf6012-f.jpg",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1888,
    "name": "TF6011-F",
    "slug": "tf6011-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6011-f/",
    "image": "/images/live-catalog/prod-1888-tf6011-f.jpg",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1885,
    "name": "TF6019W",
    "slug": "tf6019w",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6019w/",
    "image": "/images/live-catalog/prod-1885-tf6019w.jpg",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1882,
    "name": "TF6010-F",
    "slug": "tf6010-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6010-f/",
    "image": "/images/live-catalog/prod-1882-tf6010-f.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1879,
    "name": "TF6601 Mesilla",
    "slug": "tf6601-mesilla",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6601-mesilla/",
    "image": "/images/live-catalog/prod-1879-tf6601-mesilla.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1876,
    "name": "TF6602 Santa Rosa",
    "slug": "tf6602-santa-rosa",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6602-santa-rosa/",
    "image": "/images/live-catalog/prod-1876-tf6602-santa-rosa.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1873,
    "name": "TF6603 Santa Fe",
    "slug": "tf6603-santa-fe",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6603-santa-fe/",
    "image": "/images/live-catalog/prod-1873-tf6603-santa-fe.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1870,
    "name": "TF6604 Roswell",
    "slug": "tf6604-roswell",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6604-roswell/",
    "image": "/images/live-catalog/prod-1870-tf6604-roswell.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1867,
    "name": "TF6605 Taos",
    "slug": "tf6605-taos",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6605-taos/",
    "image": "/images/live-catalog/prod-1867-tf6605-taos.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1864,
    "name": "TF6606 Cedar Crest",
    "slug": "tf6606-cedar-crest",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6606-cedar-crest/",
    "image": "/images/live-catalog/prod-1864-tf6606-cedar-crest.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1861,
    "name": "TF6607 Edgewood",
    "slug": "tf6607-edgewood",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6607-edgewood/",
    "image": "/images/live-catalog/prod-1861-tf6607-edgewood.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1858,
    "name": "TF6608 Silver City",
    "slug": "tf6608-silver-city",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6608-silver-city/",
    "image": "/images/live-catalog/prod-1858-tf6608-silver-city.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1855,
    "name": "TF6609 Reserve",
    "slug": "tf6609-reserve",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6609-reserve/",
    "image": "/images/live-catalog/prod-1855-tf6609-reserve.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1852,
    "name": "TF6610 Gila",
    "slug": "tf6610-gila",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6610-gila/",
    "image": "/images/live-catalog/prod-1852-tf6610-gila.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1849,
    "name": "TF6611 Las Cruces",
    "slug": "tf6611-las-cruces",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6611-las-cruces/",
    "image": "/images/live-catalog/prod-1849-tf6611-las-cruces.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1846,
    "name": "TF6612 Melrose",
    "slug": "tf6612-melrose",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6612-melrose/",
    "image": "/images/live-catalog/prod-1846-tf6612-melrose.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1838,
    "name": "TF6003W",
    "slug": "tf6003w",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6003w/",
    "image": "/images/live-catalog/prod-1838-tf6003w.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1835,
    "name": "TF6203W",
    "slug": "tf6203w",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6203w/",
    "image": "/images/live-catalog/prod-1835-tf6203w.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1832,
    "name": "TF6206W",
    "slug": "tf6206w",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6206w/",
    "image": "/images/live-catalog/prod-1832-tf6206w.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1830,
    "name": "TF6309-F",
    "slug": "tf6309-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf6309-f/",
    "image": "/images/live-catalog/prod-1830-tf6309-f.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1828,
    "name": "TF8308-F Ferret",
    "slug": "tf8308-f-ferret",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8308-f-ferret/",
    "image": "/images/live-catalog/prod-1828-tf8308-f-ferret.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1826,
    "name": "TF8312-F Lynx",
    "slug": "tf8312-f-lynx",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8312-f-lynx/",
    "image": "/images/live-catalog/prod-1826-tf8312-f-lynx.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1824,
    "name": "TF8301-F Arctic Hare",
    "slug": "tf8301-f-arctic-hare",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8301-f-arctic-hare/",
    "image": "/images/live-catalog/prod-1824-tf8301-f-arctic-hare.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1822,
    "name": "TF8302-F Beaver",
    "slug": "tf8302-f-beaver",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8302-f-beaver/",
    "image": "/images/live-catalog/prod-1822-tf8302-f-beaver.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1820,
    "name": "TF8304-F Pika",
    "slug": "tf8304-f-pika",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8304-f-pika/",
    "image": "/images/live-catalog/prod-1820-tf8304-f-pika.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1818,
    "name": "TF8303-F Caribou",
    "slug": "tf8303-f-caribou",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8303-f-caribou/",
    "image": "/images/live-catalog/prod-1818-tf8303-f-caribou.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1816,
    "name": "TF8305-F Otter",
    "slug": "tf8305-f-otter",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8305-f-otter/",
    "image": "/images/live-catalog/prod-1816-tf8305-f-otter.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1814,
    "name": "TF8306-F Canadian Goose",
    "slug": "tf8306-f-canadian-goose",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8306-f-canadian-goose/",
    "image": "/images/live-catalog/prod-1814-tf8306-f-canadian-goose.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1810,
    "name": "TF8309-F Grizzly",
    "slug": "tf8309-f-grizzly",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8309-f-grizzly/",
    "image": "/images/live-catalog/prod-1810-tf8309-f-grizzly.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1808,
    "name": "TF8310-F Walrus",
    "slug": "tf8310-f-walrus",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8310-f-walrus/",
    "image": "/images/live-catalog/prod-1808-tf8310-f-walrus.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1805,
    "name": "TF8311-F Chipmunk",
    "slug": "tf8311-f-chipmunk",
    "sourceUrl": "https://metrotilesandflooring.com/product/tf8311-f-chipmunk/",
    "image": "/images/live-catalog/prod-1805-tf8311-f-chipmunk.webp",
    "categories": [
      {
        "id": 46,
        "name": "Toucan Flooring",
        "slug": "toucan-flooring-laminate",
        "path": [
          "laminate",
          "toucan-flooring-laminate"
        ]
      }
    ],
    "categoryIds": [
      46
    ],
    "categoryPaths": [
      "laminate/toucan-flooring-laminate"
    ]
  },
  {
    "id": 1798,
    "name": "Bantame",
    "slug": "bantame",
    "sourceUrl": "https://metrotilesandflooring.com/product/bantame/",
    "image": "/images/live-catalog/prod-1798-bantame.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1794,
    "name": "Basalt",
    "slug": "basalt",
    "sourceUrl": "https://metrotilesandflooring.com/product/basalt/",
    "image": "/images/live-catalog/prod-1794-basalt.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1790,
    "name": "Marmo",
    "slug": "marmo",
    "sourceUrl": "https://metrotilesandflooring.com/product/marmo/",
    "image": "/images/live-catalog/prod-1790-marmo.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1786,
    "name": "Selene",
    "slug": "selene",
    "sourceUrl": "https://metrotilesandflooring.com/product/selene/",
    "image": "/images/live-catalog/prod-1786-selene.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1782,
    "name": "Nero",
    "slug": "nero",
    "sourceUrl": "https://metrotilesandflooring.com/product/nero/",
    "image": "/images/live-catalog/prod-1782-nero.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1778,
    "name": "York",
    "slug": "york",
    "sourceUrl": "https://metrotilesandflooring.com/product/york/",
    "image": "/images/live-catalog/prod-1778-york.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1774,
    "name": "Sheffield",
    "slug": "sheffield",
    "sourceUrl": "https://metrotilesandflooring.com/product/sheffield/",
    "image": "/images/live-catalog/prod-1774-sheffield.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1770,
    "name": "Durham",
    "slug": "durham",
    "sourceUrl": "https://metrotilesandflooring.com/product/durham/",
    "image": "/images/live-catalog/prod-1770-durham.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1766,
    "name": "Chester",
    "slug": "chester",
    "sourceUrl": "https://metrotilesandflooring.com/product/chester/",
    "image": "/images/live-catalog/prod-1766-chester.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1762,
    "name": "Derby",
    "slug": "derby",
    "sourceUrl": "https://metrotilesandflooring.com/product/derby/",
    "image": "/images/live-catalog/prod-1762-derby.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1758,
    "name": "Poole",
    "slug": "poole",
    "sourceUrl": "https://metrotilesandflooring.com/product/poole/",
    "image": "/images/live-catalog/prod-1758-poole.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1754,
    "name": "Birmingham",
    "slug": "birmingham",
    "sourceUrl": "https://metrotilesandflooring.com/product/birmingham/",
    "image": "/images/live-catalog/prod-1754-birmingham.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1750,
    "name": "Exeter",
    "slug": "exeter",
    "sourceUrl": "https://metrotilesandflooring.com/product/exeter/",
    "image": "/images/live-catalog/prod-1750-exeter.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1746,
    "name": "Plymouth",
    "slug": "plymouth",
    "sourceUrl": "https://metrotilesandflooring.com/product/plymouth/",
    "image": "/images/live-catalog/prod-1746-plymouth.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1742,
    "name": "Truro",
    "slug": "truro",
    "sourceUrl": "https://metrotilesandflooring.com/product/truro/",
    "image": "/images/live-catalog/prod-1742-truro.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1738,
    "name": "Colchester",
    "slug": "colchester",
    "sourceUrl": "https://metrotilesandflooring.com/product/colchester/",
    "image": "/images/live-catalog/prod-1738-colchester.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1734,
    "name": "Kaya",
    "slug": "kaya",
    "sourceUrl": "https://metrotilesandflooring.com/product/kaya/",
    "image": "/images/live-catalog/prod-1734-kaya.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1730,
    "name": "Marengo Grey",
    "slug": "marengo-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/marengo-grey/",
    "image": "/images/live-catalog/prod-1730-marengo-grey.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1726,
    "name": "Amtico Grey",
    "slug": "amtico-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/amtico-grey/",
    "image": "/images/live-catalog/prod-1726-amtico-grey.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1721,
    "name": "Tropez Limestone",
    "slug": "tropez-limestone",
    "sourceUrl": "https://metrotilesandflooring.com/product/tropez-limestone/",
    "image": "/images/live-catalog/prod-1721-tropez-limestone.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1717,
    "name": "Gaudi",
    "slug": "gaudi",
    "sourceUrl": "https://metrotilesandflooring.com/product/gaudi/",
    "image": "/images/live-catalog/prod-1717-gaudi.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1713,
    "name": "Canterbury",
    "slug": "canterbury",
    "sourceUrl": "https://metrotilesandflooring.com/product/canterbury/",
    "image": "/images/live-catalog/prod-1713-canterbury.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1709,
    "name": "Cardiff",
    "slug": "cardiff",
    "sourceUrl": "https://metrotilesandflooring.com/product/cardiff/",
    "image": "/images/live-catalog/prod-1709-cardiff.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1705,
    "name": "Nottingham",
    "slug": "nottingham",
    "sourceUrl": "https://metrotilesandflooring.com/product/nottingham/",
    "image": "/images/live-catalog/prod-1705-nottingham.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1701,
    "name": "Sussex",
    "slug": "sussex",
    "sourceUrl": "https://metrotilesandflooring.com/product/sussex/",
    "image": "/images/live-catalog/prod-1701-sussex.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1697,
    "name": "Knoxville",
    "slug": "knoxville",
    "sourceUrl": "https://metrotilesandflooring.com/product/knoxville/",
    "image": "/images/live-catalog/prod-1697-knoxville.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1693,
    "name": "Cornwall",
    "slug": "cornwall",
    "sourceUrl": "https://metrotilesandflooring.com/product/cornwall/",
    "image": "/images/live-catalog/prod-1693-cornwall.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1689,
    "name": "San Antonio",
    "slug": "san-antonio",
    "sourceUrl": "https://metrotilesandflooring.com/product/san-antonio/",
    "image": "/images/live-catalog/prod-1689-san-antonio.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1685,
    "name": "Alexandria",
    "slug": "alexandria",
    "sourceUrl": "https://metrotilesandflooring.com/product/alexandria/",
    "image": "/images/live-catalog/prod-1685-alexandria.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1681,
    "name": "Aberdeen",
    "slug": "aberdeen",
    "sourceUrl": "https://metrotilesandflooring.com/product/aberdeen/",
    "image": "/images/live-catalog/prod-1681-aberdeen.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1677,
    "name": "Churchill",
    "slug": "churchill",
    "sourceUrl": "https://metrotilesandflooring.com/product/churchill/",
    "image": "/images/live-catalog/prod-1677-churchill.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1673,
    "name": "Dublin",
    "slug": "dublin",
    "sourceUrl": "https://metrotilesandflooring.com/product/dublin/",
    "image": "/images/live-catalog/prod-1673-dublin.webp",
    "categories": [
      {
        "id": 44,
        "name": "Signature Acoustic Click",
        "slug": "signature-acoustic-click",
        "path": [
          "vinyl",
          "harbinger-floors",
          "signature-acoustic-click"
        ]
      }
    ],
    "categoryIds": [
      44
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/signature-acoustic-click"
    ]
  },
  {
    "id": 1668,
    "name": "Amuse",
    "slug": "amuse",
    "sourceUrl": "https://metrotilesandflooring.com/product/amuse/",
    "image": "/images/live-catalog/prod-1668-amuse.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1664,
    "name": "Vik",
    "slug": "vik",
    "sourceUrl": "https://metrotilesandflooring.com/product/vik/",
    "image": "/images/live-catalog/prod-1664-vik.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1660,
    "name": "Bianco",
    "slug": "bianco",
    "sourceUrl": "https://metrotilesandflooring.com/product/bianco/",
    "image": "/images/live-catalog/prod-1660-bianco.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1656,
    "name": "Night Sky",
    "slug": "night-sky",
    "sourceUrl": "https://metrotilesandflooring.com/product/night-sky/",
    "image": "/images/live-catalog/prod-1656-night-sky.jpg",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1652,
    "name": "Mountain Fog",
    "slug": "mountain-fog",
    "sourceUrl": "https://metrotilesandflooring.com/product/mountain-fog/",
    "image": "/images/live-catalog/prod-1652-mountain-fog.jpg",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1648,
    "name": "Coastal Fog",
    "slug": "coastal-fog",
    "sourceUrl": "https://metrotilesandflooring.com/product/coastal-fog/",
    "image": "/images/live-catalog/prod-1648-coastal-fog.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1644,
    "name": "Cirrus",
    "slug": "cirrus",
    "sourceUrl": "https://metrotilesandflooring.com/product/cirrus/",
    "image": "/images/live-catalog/prod-1644-cirrus.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1640,
    "name": "Cumulus",
    "slug": "cumulus",
    "sourceUrl": "https://metrotilesandflooring.com/product/cumulus/",
    "image": "/images/live-catalog/prod-1640-cumulus.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1636,
    "name": "Munich",
    "slug": "munich",
    "sourceUrl": "https://metrotilesandflooring.com/product/munich/",
    "image": "/images/live-catalog/prod-1636-munich.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1632,
    "name": "Sea Salt",
    "slug": "sea-salt",
    "sourceUrl": "https://metrotilesandflooring.com/product/sea-salt/",
    "image": "/images/live-catalog/prod-1632-sea-salt.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1628,
    "name": "Copenhagen",
    "slug": "copenhagen",
    "sourceUrl": "https://metrotilesandflooring.com/product/copenhagen/",
    "image": "/images/live-catalog/prod-1628-copenhagen.webp",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1624,
    "name": "Serene",
    "slug": "serene",
    "sourceUrl": "https://metrotilesandflooring.com/product/serene/",
    "image": "/images/live-catalog/prod-1624-serene.jpg",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1619,
    "name": "Nimbus",
    "slug": "nimbus",
    "sourceUrl": "https://metrotilesandflooring.com/product/nimbus/",
    "image": "/images/live-catalog/prod-1619-nimbus.jpg",
    "categories": [
      {
        "id": 43,
        "name": "The Quiet Zone Series",
        "slug": "the-quiet-zone-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "the-quiet-zone-series"
        ]
      }
    ],
    "categoryIds": [
      43
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/the-quiet-zone-series"
    ]
  },
  {
    "id": 1604,
    "name": "Tanzania",
    "slug": "3mm-craftsman-series-tanzania",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-tanzania/",
    "image": "/images/live-catalog/prod-1604-3mm-craftsman-series-tanzania.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1600,
    "name": "Kenya",
    "slug": "3mm-craftsman-series-kenya",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-kenya/",
    "image": "/images/live-catalog/prod-1600-3mm-craftsman-series-kenya.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1596,
    "name": "Botswana",
    "slug": "3mm-craftsman-series-botswana",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-botswana/",
    "image": "/images/live-catalog/prod-1596-3mm-craftsman-series-botswana.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1592,
    "name": "Angola",
    "slug": "3mm-craftsman-series-angola",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-angola/",
    "image": "/images/live-catalog/prod-1592-3mm-craftsman-series-angola.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1588,
    "name": "Madagascar",
    "slug": "3mm-craftsman-series-madagascar",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-madagascar/",
    "image": "/images/live-catalog/prod-1588-3mm-craftsman-series-madagascar.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1584,
    "name": "Zambia",
    "slug": "3mm-craftsman-series-zambia",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-zambia/",
    "image": "/images/live-catalog/prod-1584-3mm-craftsman-series-zambia.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1580,
    "name": "Namibia",
    "slug": "3mm-craftsman-series-namibia",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-namibia/",
    "image": "/images/live-catalog/prod-1580-3mm-craftsman-series-namibia.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1576,
    "name": "Terrazzo",
    "slug": "3mm-craftsman-series-terrazzo",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-terrazzo/",
    "image": "/images/live-catalog/prod-1576-3mm-craftsman-series-terrazzo.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1572,
    "name": "Burmese Teak",
    "slug": "3mm-craftsman-series-burmese-teak",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-burmese-teak/",
    "image": "/images/live-catalog/prod-1572-3mm-craftsman-series-burmese-teak.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1568,
    "name": "Farmhouse Nordic",
    "slug": "3mm-craftsman-series-farmhouse-nordic",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-farmhouse-nordic/",
    "image": "/images/live-catalog/prod-1568-3mm-craftsman-series-farmhouse-nordic.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1564,
    "name": "Farmhouse Umber",
    "slug": "3mm-craftsman-series-farmhouse-umber",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-farmhouse-umber/",
    "image": "/images/live-catalog/prod-1564-3mm-craftsman-series-farmhouse-umber.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1560,
    "name": "Paris",
    "slug": "3mm-craftsman-series-paris",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-paris/",
    "image": "/images/live-catalog/prod-1560-3mm-craftsman-series-paris.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1556,
    "name": "Bali",
    "slug": "3mm-craftsman-series-bali",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-bali/",
    "image": "/images/live-catalog/prod-1556-3mm-craftsman-series-bali.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1552,
    "name": "Tonga",
    "slug": "3mm-craftsman-series-tonga",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-tonga/",
    "image": "/images/live-catalog/prod-1552-3mm-craftsman-series-tonga.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1548,
    "name": "Brunei",
    "slug": "3mm-craftsman-series-brunei",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-brunei/",
    "image": "/images/live-catalog/prod-1548-3mm-craftsman-series-brunei.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1544,
    "name": "Jakarta",
    "slug": "3mm-craftsman-series-jakarta",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-jakarta/",
    "image": "/images/live-catalog/prod-1544-3mm-craftsman-series-jakarta.webp",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1540,
    "name": "Gobi",
    "slug": "3mm-craftsman-series-gobi",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-gobi/",
    "image": "/images/live-catalog/prod-1540-3mm-craftsman-series-gobi.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1535,
    "name": "Horizon",
    "slug": "3mm-craftsman-series-horizon",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-horizon/",
    "image": "/images/live-catalog/prod-1535-3mm-craftsman-series-horizon.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1531,
    "name": "Topeka",
    "slug": "3mm-craftsman-series-topeka",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-topeka/",
    "image": "/images/live-catalog/prod-1531-3mm-craftsman-series-topeka.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1527,
    "name": "Beachcomber",
    "slug": "3mm-craftsman-series-beachcomber",
    "sourceUrl": "https://metrotilesandflooring.com/product/3mm-craftsman-series-beachcomber/",
    "image": "/images/live-catalog/prod-1527-3mm-craftsman-series-beachcomber.jpg",
    "categories": [
      {
        "id": 41,
        "name": "Craftsman Series",
        "slug": "craftsman-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "craftsman-series"
        ]
      }
    ],
    "categoryIds": [
      41
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/craftsman-series"
    ]
  },
  {
    "id": 1519,
    "name": "Brisbane",
    "slug": "2mm-contract-series-brisbane",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-brisbane/",
    "image": "/images/live-catalog/prod-1519-2mm-contract-series-brisbane.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1515,
    "name": "Cairns",
    "slug": "2mm-contract-series-cairns",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-cairns/",
    "image": "/images/live-catalog/prod-1515-2mm-contract-series-cairns.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1511,
    "name": "Marla",
    "slug": "2mm-contract-series-marla",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-marla/",
    "image": "/images/live-catalog/prod-1511-2mm-contract-series-marla.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1508,
    "name": "Sydney",
    "slug": "2mm-contract-series-sydney",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-sydney/",
    "image": "/images/live-catalog/prod-1508-2mm-contract-series-sydney.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1504,
    "name": "Canberra",
    "slug": "2mm-contract-series-canberra",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-canberra/",
    "image": "/images/live-catalog/prod-1504-2mm-contract-series-canberra.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1500,
    "name": "Winton",
    "slug": "2mm-contract-series-winton",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-contract-series-winton/",
    "image": "/images/live-catalog/prod-1500-2mm-contract-series-winton.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1496,
    "name": "Perth",
    "slug": "2mm-perth",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-perth/",
    "image": "/images/live-catalog/prod-1496-2mm-perth.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1492,
    "name": "Melbourne",
    "slug": "2mm-melbourne",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-melbourne/",
    "image": "/images/live-catalog/prod-1492-2mm-melbourne.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1489,
    "name": "Sienna",
    "slug": "2mm-sienna",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-sienna/",
    "image": "/images/live-catalog/prod-1489-2mm-sienna.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1485,
    "name": "Tumbleweed",
    "slug": "2mm-tumbleweed",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-tumbleweed/",
    "image": "/images/live-catalog/prod-1485-2mm-tumbleweed.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1481,
    "name": "Bonsai Maple",
    "slug": "2mm-bonsai-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-bonsai-maple/",
    "image": "/images/live-catalog/prod-1481-2mm-bonsai-maple.webp",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1477,
    "name": "Savannah Oak",
    "slug": "2mm-savannah-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-savannah-oak/",
    "image": "/images/live-catalog/prod-1477-2mm-savannah-oak.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1472,
    "name": "Coventry Spice",
    "slug": "2mm-coventry-spice",
    "sourceUrl": "https://metrotilesandflooring.com/product/2mm-coventry-spice/",
    "image": "/images/live-catalog/prod-1472-2mm-coventry-spice.jpg",
    "categories": [
      {
        "id": 42,
        "name": "Contract Series",
        "slug": "contract-series",
        "path": [
          "vinyl",
          "harbinger-floors",
          "contract-series"
        ]
      }
    ],
    "categoryIds": [
      42
    ],
    "categoryPaths": [
      "vinyl/harbinger-floors/contract-series"
    ]
  },
  {
    "id": 1469,
    "name": "Maple Fog- 7mm SPC",
    "slug": "maple-fog-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/maple-fog-7mm-spc/",
    "image": "/images/live-catalog/prod-1469-maple-fog-7mm-spc.jpg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1466,
    "name": "Bianco-7mm SPC",
    "slug": "bianco-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/bianco-7mm-spc/",
    "image": "/images/live-catalog/prod-1466-bianco-7mm-spc.jpeg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1464,
    "name": "Urban Safari- 7mm SPC",
    "slug": "urban-safari-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/urban-safari-7mm-spc/",
    "image": "/images/live-catalog/prod-1464-urban-safari-7mm-spc.jpeg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1462,
    "name": "Beach House- 7mm SPC",
    "slug": "beach-house-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/beach-house-7mm-spc/",
    "image": "/images/live-catalog/prod-1462-beach-house-7mm-spc.jpeg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1460,
    "name": "Marbella- 7mm SPC",
    "slug": "marbella-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/marbella-7mm-spc/",
    "image": "/images/live-catalog/prod-1460-marbella-7mm-spc.jpg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1458,
    "name": "Saffiano- 7mm SPC",
    "slug": "saffiano-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/saffiano-7mm-spc/",
    "image": "/images/live-catalog/prod-1458-saffiano-7mm-spc.jpg",
    "categories": [
      {
        "id": 38,
        "name": "Northernest Hardwood Flooring",
        "slug": "northernest-hardwood-flooring",
        "path": [
          "vinyl",
          "northernest-hardwood-flooring"
        ]
      }
    ],
    "categoryIds": [
      38
    ],
    "categoryPaths": [
      "vinyl/northernest-hardwood-flooring"
    ]
  },
  {
    "id": 1431,
    "name": "9mm WPC (EVION Collection)- Yara",
    "slug": "yara-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/yara-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1431-yara-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1429,
    "name": "9mm WPC (EVION Collection)- Sora",
    "slug": "sora-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/sora-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1429-sora-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1427,
    "name": "9MM WPC (EVION Collection)- Ruvo",
    "slug": "ruvo-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/ruvo-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1427-ruvo-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1425,
    "name": "9MM WPC (EVION Collection)- Noa",
    "slug": "noa-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/noa-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1425-noa-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1423,
    "name": "9mm WPC (EVION Collection)- Mizu",
    "slug": "mizu-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/mizu-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1423-mizu-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1421,
    "name": "9mm WPC (EVION Collection)- Lumi",
    "slug": "lumi-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/lumi-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1421-lumi-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1419,
    "name": "9mm WPC (EVION Collection)- Eska",
    "slug": "eska-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/eska-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1419-eska-9mm-wpc-evion-collection.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1418,
    "name": "9mm WPC (EVION Collection)- Arno",
    "slug": "arno-9mm-wpc-evion-collection",
    "sourceUrl": "https://metrotilesandflooring.com/product/arno-9mm-wpc-evion-collection/",
    "image": "/images/live-catalog/prod-1418-arno-9mm-wpc-evion-collection.jpg",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1416,
    "name": "7mm SPC- Ross",
    "slug": "ross-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/ross-7mm-spc/",
    "image": "/images/live-catalog/prod-1416-ross-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1414,
    "name": "7mm SPC- Rosie",
    "slug": "rosie-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/rosie-7mm-spc/",
    "image": "/images/live-catalog/prod-1414-rosie-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1412,
    "name": "7mm SPC- Phoebe",
    "slug": "phoebe-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/phoebe-7mm-spc/",
    "image": "/images/live-catalog/prod-1412-phoebe-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1410,
    "name": "7mm SPC- Percy",
    "slug": "percy-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/percy-7mm-spc/",
    "image": "/images/live-catalog/prod-1410-percy-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1408,
    "name": "7mm SPC- Nadine",
    "slug": "nadine-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/nadine-7mm-spc/",
    "image": "/images/live-catalog/prod-1408-nadine-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1406,
    "name": "7mm SPC- Lesley",
    "slug": "lesley-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/lesley-7mm-spc/",
    "image": "/images/live-catalog/prod-1406-lesley-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1404,
    "name": "7mm SPC- Ernest",
    "slug": "ernest-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/ernest-7mm-spc/",
    "image": "/images/live-catalog/prod-1404-ernest-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1402,
    "name": "7mm SPC- Ellis",
    "slug": "ellis-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/ellis-7mm-spc/",
    "image": "/images/live-catalog/prod-1402-ellis-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1400,
    "name": "7mm SPC- Eddi",
    "slug": "eddi-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/eddi-7mm-spc/",
    "image": "/images/live-catalog/prod-1400-eddi-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1397,
    "name": "7mm SPC-Dawson",
    "slug": "dawson-7mm-spc",
    "sourceUrl": "https://metrotilesandflooring.com/product/dawson-7mm-spc/",
    "image": "/images/live-catalog/prod-1397-dawson-7mm-spc.webp",
    "categories": [
      {
        "id": 36,
        "name": "CS Flooring",
        "slug": "cs-flooring",
        "path": [
          "vinyl",
          "cs-flooring"
        ]
      }
    ],
    "categoryIds": [
      36
    ],
    "categoryPaths": [
      "vinyl/cs-flooring"
    ]
  },
  {
    "id": 1387,
    "name": "Driftwood (Red Oak) Superior Series",
    "slug": "driftwood-red-oak-superior-series",
    "sourceUrl": "https://metrotilesandflooring.com/product/driftwood-red-oak-superior-series/",
    "image": "/images/live-catalog/prod-1387-driftwood-red-oak-superior-series.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1385,
    "name": "Slate (Red Oak) Superior Series",
    "slug": "slate-red-oak-superior-series",
    "sourceUrl": "https://metrotilesandflooring.com/product/slate-red-oak-superior-series/",
    "image": "/images/live-catalog/prod-1385-slate-red-oak-superior-series.jpeg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1383,
    "name": "Umber (Red Oak) Superior Series",
    "slug": "umber-red-oak-superior-series",
    "sourceUrl": "https://metrotilesandflooring.com/product/umber-red-oak-superior-series/",
    "image": "/images/live-catalog/prod-1383-umber-red-oak-superior-series.jpeg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1381,
    "name": "Gunsmith (Red Oak) Essential Series",
    "slug": "gunsmith-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/gunsmith-red-oak/",
    "image": "/images/live-catalog/prod-1381-gunsmith-red-oak.jpeg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1379,
    "name": "Black Powder (White Oak)",
    "slug": "black-powder-white-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/black-powder-white-oak/",
    "image": "/images/live-catalog/prod-1379-black-powder-white-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1377,
    "name": "Antique Ebony (White Oak)",
    "slug": "antique-ebony-white-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/antique-ebony-white-oak/",
    "image": "/images/live-catalog/prod-1377-antique-ebony-white-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1375,
    "name": "Imperial (Maple)",
    "slug": "imperial-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/imperial-maple/",
    "image": "/images/live-catalog/prod-1375-imperial-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1373,
    "name": "Dark Mocha (Maple)",
    "slug": "dark-mocha-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/dark-mocha-maple/",
    "image": "/images/live-catalog/prod-1373-dark-mocha-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1371,
    "name": "Mackenzie (Maple)",
    "slug": "mackenzie-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/mackenzie-maple/",
    "image": "/images/live-catalog/prod-1371-mackenzie-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1369,
    "name": "Hemlock (Maple)",
    "slug": "hemlock-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/hemlock-maple/",
    "image": "/images/live-catalog/prod-1369-hemlock-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1367,
    "name": "Fraser (Maple)",
    "slug": "fraser-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/fraser-maple/",
    "image": "/images/live-catalog/prod-1367-fraser-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1365,
    "name": "Subruce (Maple)",
    "slug": "subruce-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/subruce-maple/",
    "image": "/images/live-catalog/prod-1365-subruce-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1362,
    "name": "Western (Red Oak)",
    "slug": "western-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/western-red-oak/",
    "image": "/images/live-catalog/prod-1362-western-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1360,
    "name": "Walnut (Red Oak)",
    "slug": "walnut-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/walnut-red-oak/",
    "image": "/images/live-catalog/prod-1360-walnut-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1358,
    "name": "Vine (Red Oak)",
    "slug": "vine-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/vine-red-oak/",
    "image": "/images/live-catalog/prod-1358-vine-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1356,
    "name": "Sierra (Red Oak)",
    "slug": "sierra-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/sierra-red-oak/",
    "image": "/images/live-catalog/prod-1356-sierra-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1354,
    "name": "Pearl (Red Oak)",
    "slug": "pearl-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/pearl-red-oak/",
    "image": "/images/live-catalog/prod-1354-pearl-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1352,
    "name": "Natural (Red Oak)",
    "slug": "natural-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/natural-red-oak/",
    "image": "/images/live-catalog/prod-1352-natural-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1350,
    "name": "Nevada (Red Oak)",
    "slug": "nevada-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/nevada-red-oak/",
    "image": "/images/live-catalog/prod-1350-nevada-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1348,
    "name": "Moka (Red Oak)",
    "slug": "moka-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/moka-red-oak/",
    "image": "/images/live-catalog/prod-1348-moka-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1346,
    "name": "Haze (Red Oak)",
    "slug": "haze-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/haze-red-oak/",
    "image": "/images/live-catalog/prod-1346-haze-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1342,
    "name": "Gunstock (Red Oak)",
    "slug": "gunstock-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/gunstock-red-oak/",
    "image": "/images/live-catalog/prod-1342-gunstock-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1339,
    "name": "Golden (Red Oak)",
    "slug": "golden-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/golden-red-oak/",
    "image": "/images/live-catalog/prod-1339-golden-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1337,
    "name": "Graphite (Red Oak)",
    "slug": "graphite-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/graphite-red-oak/",
    "image": "/images/live-catalog/prod-1337-graphite-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1335,
    "name": "Cherry (Red Oak)",
    "slug": "cherry-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/cherry-red-oak/",
    "image": "/images/live-catalog/prod-1335-cherry-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1333,
    "name": "Cream (Red Oak)",
    "slug": "cream-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/cream-red-oak/",
    "image": "/images/live-catalog/prod-1333-cream-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1331,
    "name": "Butterscotch (Red Oak)",
    "slug": "butterscotch-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/butterscotch-red-oak/",
    "image": "/images/live-catalog/prod-1331-butterscotch-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1329,
    "name": "Barewood (Red Oak)",
    "slug": "barewood-red-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/barewood-red-oak/",
    "image": "/images/live-catalog/prod-1329-barewood-red-oak.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1327,
    "name": "Gunstock (Maple)",
    "slug": "gunstock-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/gunstock-maple/",
    "image": "/images/live-catalog/prod-1327-gunstock-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1325,
    "name": "Western (Maple)",
    "slug": "western-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/western-maple/",
    "image": "/images/live-catalog/prod-1325-western-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1323,
    "name": "Walnut (Maple)",
    "slug": "walnut-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/walnut-maple/",
    "image": "/images/live-catalog/prod-1323-walnut-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1321,
    "name": "Vine (Maple)",
    "slug": "vine-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/vine-maple/",
    "image": "/images/live-catalog/prod-1321-vine-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1319,
    "name": "Urban Grey (Maple)",
    "slug": "urban-grey-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/urban-grey-maple/",
    "image": "/images/live-catalog/prod-1319-urban-grey-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1317,
    "name": "Savana (Maple)",
    "slug": "savana-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/savana-maple/",
    "image": "/images/live-catalog/prod-1317-savana-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1315,
    "name": "Natural (Maple)",
    "slug": "natural-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/natural-maple/",
    "image": "/images/live-catalog/prod-1315-natural-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1313,
    "name": "Moka (Maple)",
    "slug": "moka-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/moka-maple/",
    "image": "/images/live-catalog/prod-1313-moka-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1311,
    "name": "Haze (Maple)",
    "slug": "haze-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/haze-maple/",
    "image": "/images/live-catalog/prod-1311-haze-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1309,
    "name": "Graphite (Maple)",
    "slug": "graphite-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/graphite-maple/",
    "image": "/images/live-catalog/prod-1309-graphite-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1307,
    "name": "Edison (Maple)",
    "slug": "edison-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/edison-maple/",
    "image": "/images/live-catalog/prod-1307-edison-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1305,
    "name": "Cinnamon (Maple)",
    "slug": "cinnamon-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/cinnamon-maple/",
    "image": "/images/live-catalog/prod-1305-cinnamon-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1303,
    "name": "Cherry (Maple)",
    "slug": "cherry-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/cherry-maple/",
    "image": "/images/live-catalog/prod-1303-cherry-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1301,
    "name": "Charcoal (Maple)",
    "slug": "charcoal-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/charcoal-maple/",
    "image": "/images/live-catalog/prod-1301-charcoal-maple.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1298,
    "name": "Barewood (Maple)",
    "slug": "maple-barewood",
    "sourceUrl": "https://metrotilesandflooring.com/product/maple-barewood/",
    "image": "/images/live-catalog/prod-1298-maple-barewood.jpg",
    "categories": [
      {
        "id": 23,
        "name": "Solid Hardwood",
        "slug": "solid-hardwood",
        "path": [
          "solid-hardwood"
        ]
      }
    ],
    "categoryIds": [
      23
    ],
    "categoryPaths": [
      "solid-hardwood"
    ]
  },
  {
    "id": 1291,
    "name": "329-1500/1700",
    "slug": "329-1500-1700",
    "sourceUrl": "https://metrotilesandflooring.com/product/329-1500-1700/",
    "image": "/images/live-catalog/prod-1291-329-1500-1700.webp",
    "categories": [
      {
        "id": 73,
        "name": "Bath Tubs",
        "slug": "bath-tubs",
        "path": [
          "bathroom-accessories",
          "bath-tubs"
        ]
      }
    ],
    "categoryIds": [
      73
    ],
    "categoryPaths": [
      "bathroom-accessories/bath-tubs"
    ]
  },
  {
    "id": 1289,
    "name": "325-1500/1700",
    "slug": "325-1500-1700",
    "sourceUrl": "https://metrotilesandflooring.com/product/325-1500-1700/",
    "image": "/images/live-catalog/prod-1289-325-1500-1700.webp",
    "categories": [
      {
        "id": 73,
        "name": "Bath Tubs",
        "slug": "bath-tubs",
        "path": [
          "bathroom-accessories",
          "bath-tubs"
        ]
      }
    ],
    "categoryIds": [
      73
    ],
    "categoryPaths": [
      "bathroom-accessories/bath-tubs"
    ]
  },
  {
    "id": 1287,
    "name": "324-1500/1700",
    "slug": "324-1500-1700",
    "sourceUrl": "https://metrotilesandflooring.com/product/324-1500-1700/",
    "image": "/images/live-catalog/prod-1287-324-1500-1700.webp",
    "categories": [
      {
        "id": 73,
        "name": "Bath Tubs",
        "slug": "bath-tubs",
        "path": [
          "bathroom-accessories",
          "bath-tubs"
        ]
      }
    ],
    "categoryIds": [
      73
    ],
    "categoryPaths": [
      "bathroom-accessories/bath-tubs"
    ]
  },
  {
    "id": 1285,
    "name": "310-1700",
    "slug": "310-1700",
    "sourceUrl": "https://metrotilesandflooring.com/product/310-1700/",
    "image": "/images/live-catalog/prod-1285-310-1700.webp",
    "categories": [
      {
        "id": 73,
        "name": "Bath Tubs",
        "slug": "bath-tubs",
        "path": [
          "bathroom-accessories",
          "bath-tubs"
        ]
      }
    ],
    "categoryIds": [
      73
    ],
    "categoryPaths": [
      "bathroom-accessories/bath-tubs"
    ]
  },
  {
    "id": 1283,
    "name": "307- 1650",
    "slug": "307-1650",
    "sourceUrl": "https://metrotilesandflooring.com/product/307-1650/",
    "image": "/images/live-catalog/prod-1283-307-1650.webp",
    "categories": [
      {
        "id": 73,
        "name": "Bath Tubs",
        "slug": "bath-tubs",
        "path": [
          "bathroom-accessories",
          "bath-tubs"
        ]
      }
    ],
    "categoryIds": [
      73
    ],
    "categoryPaths": [
      "bathroom-accessories/bath-tubs"
    ]
  },
  {
    "id": 1215,
    "name": "Soho",
    "slug": "subway-tile",
    "sourceUrl": "https://metrotilesandflooring.com/product/subway-tile/",
    "image": "/images/live-catalog/prod-1215-subway-tile.webp",
    "categories": [
      {
        "id": 32,
        "name": "Wall tiles",
        "slug": "wall-tiles",
        "path": [
          "wall-tiles"
        ]
      }
    ],
    "categoryIds": [
      32
    ],
    "categoryPaths": [
      "wall-tiles"
    ]
  },
  {
    "id": 1208,
    "name": "Marlow",
    "slug": "marlow",
    "sourceUrl": "https://metrotilesandflooring.com/product/marlow/",
    "image": "/images/live-catalog/prod-1208-marlow.webp",
    "categories": [
      {
        "id": 32,
        "name": "Wall tiles",
        "slug": "wall-tiles",
        "path": [
          "wall-tiles"
        ]
      }
    ],
    "categoryIds": [
      32
    ],
    "categoryPaths": [
      "wall-tiles"
    ]
  },
  {
    "id": 1195,
    "name": "Terramoda",
    "slug": "terramoda",
    "sourceUrl": "https://metrotilesandflooring.com/product/terramoda/",
    "image": "/images/live-catalog/prod-1195-terramoda.webp",
    "categories": [
      {
        "id": 32,
        "name": "Wall tiles",
        "slug": "wall-tiles",
        "path": [
          "wall-tiles"
        ]
      }
    ],
    "categoryIds": [
      32
    ],
    "categoryPaths": [
      "wall-tiles"
    ]
  },
  {
    "id": 1192,
    "name": "Satin",
    "slug": "satin-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/satin-2/",
    "image": "/images/live-catalog/prod-1192-satin-2.webp",
    "categories": [
      {
        "id": 30,
        "name": "Anatolia",
        "slug": "anatolia",
        "path": [
          "tiles",
          "anatolia"
        ]
      }
    ],
    "categoryIds": [
      30
    ],
    "categoryPaths": [
      "tiles/anatolia"
    ]
  },
  {
    "id": 1187,
    "name": "Industria",
    "slug": "industria",
    "sourceUrl": "https://metrotilesandflooring.com/product/industria/",
    "image": "/images/live-catalog/prod-1187-industria.webp",
    "categories": [
      {
        "id": 30,
        "name": "Anatolia",
        "slug": "anatolia",
        "path": [
          "tiles",
          "anatolia"
        ]
      }
    ],
    "categoryIds": [
      30
    ],
    "categoryPaths": [
      "tiles/anatolia"
    ]
  },
  {
    "id": 1150,
    "name": "Decorative tiles",
    "slug": "decorative-tiles",
    "sourceUrl": "https://metrotilesandflooring.com/product/decorative-tiles/",
    "image": "/images/live-catalog/prod-1150-decorative-tiles.webp",
    "categories": [
      {
        "id": 31,
        "name": "Form Series",
        "slug": "form-series",
        "path": [
          "tiles",
          "anatolia",
          "form-series"
        ]
      }
    ],
    "categoryIds": [
      31
    ],
    "categoryPaths": [
      "tiles/anatolia/form-series"
    ]
  },
  {
    "id": 1145,
    "name": "Verdi Alpi",
    "slug": "verdi-alpi",
    "sourceUrl": "https://metrotilesandflooring.com/product/verdi-alpi/",
    "image": "/images/live-catalog/prod-1145-verdi-alpi.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1142,
    "name": "Sahara Noir",
    "slug": "sahara-noir",
    "sourceUrl": "https://metrotilesandflooring.com/product/sahara-noir/",
    "image": "/images/live-catalog/prod-1142-sahara-noir.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1138,
    "name": "Calacatta Noir",
    "slug": "calacatta-noir",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-noir/",
    "image": "/images/live-catalog/prod-1138-calacatta-noir.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1134,
    "name": "Pietra Imperiale",
    "slug": "pietra-imperiale",
    "sourceUrl": "https://metrotilesandflooring.com/product/pietra-imperiale/",
    "image": "/images/live-catalog/prod-1134-pietra-imperiale.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1130,
    "name": "Forge Elegenza",
    "slug": "forge-elegenza",
    "sourceUrl": "https://metrotilesandflooring.com/product/forge-elegenza/",
    "image": "/images/live-catalog/prod-1130-forge-elegenza.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1127,
    "name": "Ceppo Di Gre",
    "slug": "ceppo-di-gre",
    "sourceUrl": "https://metrotilesandflooring.com/product/ceppo-di-gre/",
    "image": "/images/live-catalog/prod-1127-ceppo-di-gre.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1123,
    "name": "Atlantic Ocean",
    "slug": "atlantic-ocean",
    "sourceUrl": "https://metrotilesandflooring.com/product/atlantic-ocean/",
    "image": "/images/live-catalog/prod-1123-atlantic-ocean.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1119,
    "name": "Foresta",
    "slug": "foresta",
    "sourceUrl": "https://metrotilesandflooring.com/product/foresta/",
    "image": "/images/live-catalog/prod-1119-foresta.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1115,
    "name": "Travertino Classico",
    "slug": "travertino-classico",
    "sourceUrl": "https://metrotilesandflooring.com/product/travertino-classico/",
    "image": "/images/live-catalog/prod-1115-travertino-classico.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1112,
    "name": "French Vanilla",
    "slug": "french-vanilla",
    "sourceUrl": "https://metrotilesandflooring.com/product/french-vanilla/",
    "image": "/images/live-catalog/prod-1112-french-vanilla.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1110,
    "name": "Taj Mahal",
    "slug": "taj-mahal-2",
    "sourceUrl": "https://metrotilesandflooring.com/product/taj-mahal-2/",
    "image": "/images/live-catalog/prod-1110-taj-mahal-2.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1106,
    "name": "Arabescato Corchia",
    "slug": "arabescato-corchia",
    "sourceUrl": "https://metrotilesandflooring.com/product/arabescato-corchia/",
    "image": "/images/live-catalog/prod-1106-arabescato-corchia.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1102,
    "name": "Crystal Bianco",
    "slug": "crystal-bianco",
    "sourceUrl": "https://metrotilesandflooring.com/product/crystal-bianco/",
    "image": "/images/live-catalog/prod-1102-crystal-bianco.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1075,
    "name": "Calacatta Cremo",
    "slug": "calacatta-cremo",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-cremo/",
    "image": "/images/live-catalog/prod-1075-calacatta-cremo.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1072,
    "name": "Bianco Stratura",
    "slug": "bianco-stratura",
    "sourceUrl": "https://metrotilesandflooring.com/product/bianco-stratura/",
    "image": "/images/live-catalog/prod-1072-bianco-stratura.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1068,
    "name": "Calacatta Corchia",
    "slug": "calacatta-corchia",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-corchia/",
    "image": "/images/live-catalog/prod-1068-calacatta-corchia.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1064,
    "name": "Statuario",
    "slug": "statuario",
    "sourceUrl": "https://metrotilesandflooring.com/product/statuario/",
    "image": "/images/live-catalog/prod-1064-statuario.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1061,
    "name": "Bianco Gioia",
    "slug": "bianco-gioia",
    "sourceUrl": "https://metrotilesandflooring.com/product/bianco-gioia/",
    "image": "/images/live-catalog/prod-1061-bianco-gioia.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1058,
    "name": "Calacatta Oro",
    "slug": "calacatta-oro",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-oro/",
    "image": "/images/live-catalog/prod-1058-calacatta-oro.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1055,
    "name": "Calacatta Borghini",
    "slug": "calacatta-borghini",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-borghini/",
    "image": "/images/live-catalog/prod-1055-calacatta-borghini.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1051,
    "name": "Ariel Bianco",
    "slug": "ariel-bianco",
    "sourceUrl": "https://metrotilesandflooring.com/product/ariel-bianco/",
    "image": "/images/live-catalog/prod-1051-ariel-bianco.webp",
    "categories": [],
    "categoryIds": [],
    "categoryPaths": []
  },
  {
    "id": 1022,
    "name": "Allure",
    "slug": "allure",
    "sourceUrl": "https://metrotilesandflooring.com/product/allure/",
    "image": "/images/live-catalog/prod-1022-allure.jpg",
    "categories": [
      {
        "id": 29,
        "name": "La Platera",
        "slug": "la-platera",
        "path": [
          "tiles",
          "la-platera"
        ]
      }
    ],
    "categoryIds": [
      29
    ],
    "categoryPaths": [
      "tiles/la-platera"
    ]
  },
  {
    "id": 1016,
    "name": "Verona",
    "slug": "verona",
    "sourceUrl": "https://metrotilesandflooring.com/product/verona/",
    "image": "/images/live-catalog/prod-1016-verona.jpg",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 1011,
    "name": "Topaz Gold",
    "slug": "topaz-gold",
    "sourceUrl": "https://metrotilesandflooring.com/product/topaz-gold/",
    "image": "/images/live-catalog/prod-1011-topaz-gold.jpg",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 1007,
    "name": "Taj Mahal",
    "slug": "taj-mahal",
    "sourceUrl": "https://metrotilesandflooring.com/product/taj-mahal/",
    "image": "/images/live-catalog/prod-1007-taj-mahal.webp",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 998,
    "name": "Deco Artis",
    "slug": "deco-artis",
    "sourceUrl": "https://metrotilesandflooring.com/product/deco-artis/",
    "image": "/images/live-catalog/prod-998-deco-artis.webp",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 995,
    "name": "Calacatta Monet",
    "slug": "calacatta-monet",
    "sourceUrl": "https://metrotilesandflooring.com/product/calacatta-monet/",
    "image": "/images/live-catalog/prod-995-calacatta-monet.jpg",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 990,
    "name": "Brasilea",
    "slug": "brasilea",
    "sourceUrl": "https://metrotilesandflooring.com/product/brasilea/",
    "image": "/images/live-catalog/prod-990-brasilea.webp",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 985,
    "name": "Brick",
    "slug": "brick",
    "sourceUrl": "https://metrotilesandflooring.com/product/brick/",
    "image": "/images/live-catalog/prod-985-brick.jpg",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 980,
    "name": "Austral",
    "slug": "austral",
    "sourceUrl": "https://metrotilesandflooring.com/product/austral/",
    "image": "/images/live-catalog/prod-980-austral.jpg",
    "categories": [
      {
        "id": 28,
        "name": "Gayafores",
        "slug": "gayafores",
        "path": [
          "tiles",
          "gayafores"
        ]
      }
    ],
    "categoryIds": [
      28
    ],
    "categoryPaths": [
      "tiles/gayafores"
    ]
  },
  {
    "id": 973,
    "name": "Onyx",
    "slug": "onyx",
    "sourceUrl": "https://metrotilesandflooring.com/product/onyx/",
    "image": "/images/live-catalog/prod-973-onyx.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 969,
    "name": "Adaggio",
    "slug": "adaggio",
    "sourceUrl": "https://metrotilesandflooring.com/product/adaggio/",
    "image": "/images/live-catalog/prod-969-adaggio.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 961,
    "name": "Stoneland",
    "slug": "stoneland",
    "sourceUrl": "https://metrotilesandflooring.com/product/stoneland/",
    "image": "/images/live-catalog/prod-961-stoneland.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 955,
    "name": "Slate",
    "slug": "slate",
    "sourceUrl": "https://metrotilesandflooring.com/product/slate/",
    "image": "/images/live-catalog/prod-955-slate.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 948,
    "name": "Dome",
    "slug": "dome",
    "sourceUrl": "https://metrotilesandflooring.com/product/dome/",
    "image": "/images/live-catalog/prod-948-dome.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 938,
    "name": "Concept",
    "slug": "concept",
    "sourceUrl": "https://metrotilesandflooring.com/product/concept/",
    "image": "/images/live-catalog/prod-938-concept.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 933,
    "name": "Bora-Bora",
    "slug": "bora-bora",
    "sourceUrl": "https://metrotilesandflooring.com/product/bora-bora/",
    "image": "/images/live-catalog/prod-933-bora-bora.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 918,
    "name": "Asphalt",
    "slug": "asphalt",
    "sourceUrl": "https://metrotilesandflooring.com/product/asphalt/",
    "image": "/images/live-catalog/prod-918-asphalt.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 912,
    "name": "Agate",
    "slug": "agate",
    "sourceUrl": "https://metrotilesandflooring.com/product/agate/",
    "image": "/images/live-catalog/prod-912-agate.jpg",
    "categories": [
      {
        "id": 27,
        "name": "Baldocer",
        "slug": "baldocer",
        "path": [
          "tiles",
          "baldocer"
        ]
      }
    ],
    "categoryIds": [
      27
    ],
    "categoryPaths": [
      "tiles/baldocer"
    ]
  },
  {
    "id": 908,
    "name": "Ottawa",
    "slug": "ottawa",
    "sourceUrl": "https://metrotilesandflooring.com/product/ottawa/",
    "image": "/images/live-catalog/prod-908-ottawa.jpg",
    "categories": [
      {
        "id": 26,
        "name": "Undefasa",
        "slug": "undefasa",
        "path": [
          "tiles",
          "undefasa"
        ]
      }
    ],
    "categoryIds": [
      26
    ],
    "categoryPaths": [
      "tiles/undefasa"
    ]
  },
  {
    "id": 905,
    "name": "Essenza",
    "slug": "essenza",
    "sourceUrl": "https://metrotilesandflooring.com/product/essenza/",
    "image": "/images/live-catalog/prod-905-essenza.jpg",
    "categories": [
      {
        "id": 26,
        "name": "Undefasa",
        "slug": "undefasa",
        "path": [
          "tiles",
          "undefasa"
        ]
      }
    ],
    "categoryIds": [
      26
    ],
    "categoryPaths": [
      "tiles/undefasa"
    ]
  },
  {
    "id": 902,
    "name": "Diverso",
    "slug": "diverso",
    "sourceUrl": "https://metrotilesandflooring.com/product/diverso/",
    "image": "/images/live-catalog/prod-902-diverso.jpg",
    "categories": [
      {
        "id": 26,
        "name": "Undefasa",
        "slug": "undefasa",
        "path": [
          "tiles",
          "undefasa"
        ]
      }
    ],
    "categoryIds": [
      26
    ],
    "categoryPaths": [
      "tiles/undefasa"
    ]
  },
  {
    "id": 900,
    "name": "Bali Stone",
    "slug": "bali",
    "sourceUrl": "https://metrotilesandflooring.com/product/bali/",
    "image": "/images/live-catalog/prod-900-bali.jpg",
    "categories": [
      {
        "id": 26,
        "name": "Undefasa",
        "slug": "undefasa",
        "path": [
          "tiles",
          "undefasa"
        ]
      }
    ],
    "categoryIds": [
      26
    ],
    "categoryPaths": [
      "tiles/undefasa"
    ]
  },
  {
    "id": 898,
    "name": "Ardesia",
    "slug": "ardesia",
    "sourceUrl": "https://metrotilesandflooring.com/product/ardesia/",
    "image": "/images/live-catalog/prod-898-ardesia.jpg",
    "categories": [
      {
        "id": 26,
        "name": "Undefasa",
        "slug": "undefasa",
        "path": [
          "tiles",
          "undefasa"
        ]
      }
    ],
    "categoryIds": [
      26
    ],
    "categoryPaths": [
      "tiles/undefasa"
    ]
  },
  {
    "id": 683,
    "name": "Onda Gray",
    "slug": "onda-gray",
    "sourceUrl": "https://metrotilesandflooring.com/product/onda-gray/",
    "image": "/images/live-catalog/prod-683-onda-gray.jpg",
    "categories": [
      {
        "id": 24,
        "name": "Tiles",
        "slug": "tiles",
        "path": [
          "tiles"
        ]
      }
    ],
    "categoryIds": [
      24
    ],
    "categoryPaths": [
      "tiles"
    ]
  },
  {
    "id": 650,
    "name": "Robusto",
    "slug": "robusto",
    "sourceUrl": "https://metrotilesandflooring.com/product/robusto/",
    "image": "/images/live-catalog/prod-650-robusto.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 648,
    "name": "Natural Oak",
    "slug": "natural-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/natural-oak/",
    "image": "/images/live-catalog/prod-648-natural-oak.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 646,
    "name": "Eastern Oak",
    "slug": "eastern-oak",
    "sourceUrl": "https://metrotilesandflooring.com/product/eastern-oak/",
    "image": "/images/live-catalog/prod-646-eastern-oak.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 644,
    "name": "City Mood",
    "slug": "city-mood",
    "sourceUrl": "https://metrotilesandflooring.com/product/city-mood/",
    "image": "/images/live-catalog/prod-644-city-mood.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 642,
    "name": "Antique Dark",
    "slug": "antique-dark",
    "sourceUrl": "https://metrotilesandflooring.com/product/antique-dark/",
    "image": "/images/live-catalog/prod-642-antique-dark.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 640,
    "name": "American Walnut",
    "slug": "american-walnut",
    "sourceUrl": "https://metrotilesandflooring.com/product/american-walnut/",
    "image": "/images/live-catalog/prod-640-american-walnut.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 638,
    "name": "Sunlight",
    "slug": "sunlight",
    "sourceUrl": "https://metrotilesandflooring.com/product/sunlight/",
    "image": "/images/live-catalog/prod-638-sunlight.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 636,
    "name": "Iron",
    "slug": "iron",
    "sourceUrl": "https://metrotilesandflooring.com/product/iron/",
    "image": "/images/live-catalog/prod-636-iron.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 633,
    "name": "Grey Stone",
    "slug": "grey-stone",
    "sourceUrl": "https://metrotilesandflooring.com/product/grey-stone/",
    "image": "/images/live-catalog/prod-633-grey-stone.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 630,
    "name": "Torino",
    "slug": "torino",
    "sourceUrl": "https://metrotilesandflooring.com/product/torino/",
    "image": "/images/live-catalog/prod-630-torino.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 627,
    "name": "Aruba",
    "slug": "aruba",
    "sourceUrl": "https://metrotilesandflooring.com/product/aruba/",
    "image": "/images/live-catalog/prod-627-aruba.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 623,
    "name": "Rubato",
    "slug": "rubato",
    "sourceUrl": "https://metrotilesandflooring.com/product/rubato/",
    "image": "/images/live-catalog/prod-623-rubato.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 621,
    "name": "Smoke Oyster",
    "slug": "smoke-oyster",
    "sourceUrl": "https://metrotilesandflooring.com/product/smoke-oyster/",
    "image": "/images/live-catalog/prod-621-smoke-oyster.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 618,
    "name": "Apollo",
    "slug": "apollo",
    "sourceUrl": "https://metrotilesandflooring.com/product/apollo/",
    "image": "/images/live-catalog/prod-618-apollo.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 610,
    "name": "Colorado",
    "slug": "colorado",
    "sourceUrl": "https://metrotilesandflooring.com/product/colorado/",
    "image": "/images/live-catalog/prod-610-colorado.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 608,
    "name": "Alaska",
    "slug": "alaska",
    "sourceUrl": "https://metrotilesandflooring.com/product/alaska/",
    "image": "/images/live-catalog/prod-608-alaska.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 604,
    "name": "Nevada",
    "slug": "nevada",
    "sourceUrl": "https://metrotilesandflooring.com/product/nevada/",
    "image": "/images/live-catalog/prod-604-nevada.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 601,
    "name": "Georgia",
    "slug": "georgia",
    "sourceUrl": "https://metrotilesandflooring.com/product/georgia/",
    "image": "/images/live-catalog/prod-601-georgia.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 598,
    "name": "Montana",
    "slug": "montana",
    "sourceUrl": "https://metrotilesandflooring.com/product/montana/",
    "image": "/images/live-catalog/prod-598-montana.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 596,
    "name": "Americano",
    "slug": "americano",
    "sourceUrl": "https://metrotilesandflooring.com/product/americano/",
    "image": "/images/live-catalog/prod-596-americano.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 594,
    "name": "Latte",
    "slug": "latte",
    "sourceUrl": "https://metrotilesandflooring.com/product/latte/",
    "image": "/images/live-catalog/prod-594-latte.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 591,
    "name": "Cappuccino",
    "slug": "cappuccino",
    "sourceUrl": "https://metrotilesandflooring.com/product/cappuccino/",
    "image": "/images/live-catalog/prod-591-cappuccino.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 588,
    "name": "Natural",
    "slug": "natural",
    "sourceUrl": "https://metrotilesandflooring.com/product/natural/",
    "image": "/images/live-catalog/prod-588-natural.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 585,
    "name": "Tan",
    "slug": "tan",
    "sourceUrl": "https://metrotilesandflooring.com/product/tan/",
    "image": "/images/live-catalog/prod-585-tan.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 582,
    "name": "Da Vinci",
    "slug": "da-vinci",
    "sourceUrl": "https://metrotilesandflooring.com/product/da-vinci/",
    "image": "/images/live-catalog/prod-582-da-vinci.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 579,
    "name": "Picasso",
    "slug": "picasso",
    "sourceUrl": "https://metrotilesandflooring.com/product/picasso/",
    "image": "/images/live-catalog/prod-579-picasso.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 576,
    "name": "Trinidad",
    "slug": "trinidad",
    "sourceUrl": "https://metrotilesandflooring.com/product/trinidad/",
    "image": "/images/live-catalog/prod-576-trinidad.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 574,
    "name": "Lisbon",
    "slug": "lisbon",
    "sourceUrl": "https://metrotilesandflooring.com/product/lisbon/",
    "image": "/images/live-catalog/prod-574-lisbon.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 572,
    "name": "Cascade",
    "slug": "cascade",
    "sourceUrl": "https://metrotilesandflooring.com/product/cascade/",
    "image": "/images/live-catalog/prod-572-cascade.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 569,
    "name": "Country Brown",
    "slug": "country-brown",
    "sourceUrl": "https://metrotilesandflooring.com/product/country-brown/",
    "image": "/images/live-catalog/prod-569-country-brown.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 564,
    "name": "Coffee",
    "slug": "coffee",
    "sourceUrl": "https://metrotilesandflooring.com/product/coffee/",
    "image": "/images/live-catalog/prod-564-coffee.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 561,
    "name": "Bronze",
    "slug": "bronze",
    "sourceUrl": "https://metrotilesandflooring.com/product/bronze/",
    "image": "/images/live-catalog/prod-561-bronze.jpg",
    "categories": [
      {
        "id": 50,
        "name": "NAF",
        "slug": "naf",
        "path": [
          "engineered-hardwood",
          "naf"
        ]
      }
    ],
    "categoryIds": [
      50
    ],
    "categoryPaths": [
      "engineered-hardwood/naf"
    ]
  },
  {
    "id": 472,
    "name": "Zeus",
    "slug": "zeus",
    "sourceUrl": "https://metrotilesandflooring.com/product/zeus/",
    "image": "/images/live-catalog/prod-472-zeus.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 469,
    "name": "Poseidon",
    "slug": "poseidon",
    "sourceUrl": "https://metrotilesandflooring.com/product/poseidon/",
    "image": "/images/live-catalog/prod-469-poseidon.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 466,
    "name": "Artemis",
    "slug": "artemis",
    "sourceUrl": "https://metrotilesandflooring.com/product/artemis/",
    "image": "/images/live-catalog/prod-466-artemis.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 463,
    "name": "Rustic Sage",
    "slug": "rustic-sage",
    "sourceUrl": "https://metrotilesandflooring.com/product/rustic-sage/",
    "image": "/images/live-catalog/prod-463-rustic-sage.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 457,
    "name": "Antique Maple",
    "slug": "antique-maple",
    "sourceUrl": "https://metrotilesandflooring.com/product/antique-maple/",
    "image": "/images/live-catalog/prod-457-antique-maple.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 453,
    "name": "Sahara",
    "slug": "sahara",
    "sourceUrl": "https://metrotilesandflooring.com/product/sahara/",
    "image": "/images/live-catalog/prod-453-sahara.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 450,
    "name": "Space Grey",
    "slug": "space-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/space-grey/",
    "image": "/images/live-catalog/prod-450-space-grey.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 401,
    "name": "Tusk",
    "slug": "tusk",
    "sourceUrl": "https://metrotilesandflooring.com/product/tusk/",
    "image": "/images/live-catalog/prod-401-tusk.png",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 396,
    "name": "Satin",
    "slug": "satin",
    "sourceUrl": "https://metrotilesandflooring.com/product/satin/",
    "image": "/images/live-catalog/prod-396-satin.png",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 391,
    "name": "Silk",
    "slug": "silk",
    "sourceUrl": "https://metrotilesandflooring.com/product/silk/",
    "image": "/images/live-catalog/prod-391-silk.png",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 386,
    "name": "Cashmere",
    "slug": "cashmere",
    "sourceUrl": "https://metrotilesandflooring.com/product/cashmere/",
    "image": "/images/live-catalog/prod-386-cashmere.jpg",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 381,
    "name": "Shadow",
    "slug": "shadow",
    "sourceUrl": "https://metrotilesandflooring.com/product/shadow/",
    "image": "/images/live-catalog/prod-381-shadow.jpg",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 376,
    "name": "Oyster",
    "slug": "oyster",
    "sourceUrl": "https://metrotilesandflooring.com/product/oyster/",
    "image": "/images/live-catalog/prod-376-oyster.png",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 372,
    "name": "SKU: TF1119-F",
    "slug": "sku-tf1119-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf1119-f/",
    "image": "/images/live-catalog/prod-372-sku-tf1119-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 368,
    "name": "SKU: TF1108-F",
    "slug": "sku-tf1108-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf1108-f/",
    "image": "/images/live-catalog/prod-368-sku-tf1108-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 364,
    "name": "SKU: TF3101-F",
    "slug": "sku-tf3101-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf3101-f/",
    "image": "/images/live-catalog/prod-364-sku-tf3101-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 360,
    "name": "SKU: TF6011-F",
    "slug": "sku-tf6011-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf6011-f/",
    "image": "/images/live-catalog/prod-360-sku-tf6011-f.jpg",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 355,
    "name": "SKU: TF6008-F",
    "slug": "sku-tf6008-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf6008-f/",
    "image": "/images/live-catalog/prod-355-sku-tf6008-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 350,
    "name": "SKU: TF6012-F",
    "slug": "sku-tf6012-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf6012-f/",
    "image": "/images/live-catalog/prod-350-sku-tf6012-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 346,
    "name": "SKU: TF6101-F",
    "slug": "sku-tf6101-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf6101-f/",
    "image": "/images/live-catalog/prod-346-sku-tf6101-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 342,
    "name": "SKU: TF7007-F",
    "slug": "sku-tf7007-f",
    "sourceUrl": "https://metrotilesandflooring.com/product/sku-tf7007-f/",
    "image": "/images/live-catalog/prod-342-sku-tf7007-f.png",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 337,
    "name": "Hazelnut",
    "slug": "hazelnut",
    "sourceUrl": "https://metrotilesandflooring.com/product/hazelnut/",
    "image": "/images/live-catalog/prod-337-hazelnut.png",
    "categories": [
      {
        "id": 51,
        "name": "Toucan",
        "slug": "toucan",
        "path": [
          "engineered-hardwood",
          "toucan"
        ]
      }
    ],
    "categoryIds": [
      51
    ],
    "categoryPaths": [
      "engineered-hardwood/toucan"
    ]
  },
  {
    "id": 330,
    "name": "Plain",
    "slug": "plain",
    "sourceUrl": "https://metrotilesandflooring.com/product/plain/",
    "image": "/images/live-catalog/prod-330-plain.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 327,
    "name": "Terra",
    "slug": "terra",
    "sourceUrl": "https://metrotilesandflooring.com/product/terra/",
    "image": "/images/live-catalog/prod-327-terra.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 324,
    "name": "Meteor",
    "slug": "meteor",
    "sourceUrl": "https://metrotilesandflooring.com/product/meteor/",
    "image": "/images/live-catalog/prod-324-meteor.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 321,
    "name": "Glacier",
    "slug": "glacier",
    "sourceUrl": "https://metrotilesandflooring.com/product/glacier/",
    "image": "/images/live-catalog/prod-321-glacier.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 318,
    "name": "Basin",
    "slug": "basin",
    "sourceUrl": "https://metrotilesandflooring.com/product/basin/",
    "image": "/images/live-catalog/prod-318-basin.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 315,
    "name": "Cliff",
    "slug": "cliff",
    "sourceUrl": "https://metrotilesandflooring.com/product/cliff/",
    "image": "/images/live-catalog/prod-315-cliff.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 312,
    "name": "Marsh",
    "slug": "marsh",
    "sourceUrl": "https://metrotilesandflooring.com/product/marsh/",
    "image": "/images/live-catalog/prod-312-marsh.webp",
    "categories": [
      {
        "id": 21,
        "name": "Laminate",
        "slug": "laminate",
        "path": [
          "laminate"
        ]
      }
    ],
    "categoryIds": [
      21
    ],
    "categoryPaths": [
      "laminate"
    ]
  },
  {
    "id": 271,
    "name": "Raven",
    "slug": "raven",
    "sourceUrl": "https://metrotilesandflooring.com/product/raven/",
    "image": "/images/live-catalog/prod-271-raven.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 268,
    "name": "Charcoal",
    "slug": "charcoal",
    "sourceUrl": "https://metrotilesandflooring.com/product/charcoal/",
    "image": "/images/live-catalog/prod-268-charcoal.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 265,
    "name": "Husky",
    "slug": "husky",
    "sourceUrl": "https://metrotilesandflooring.com/product/husky/",
    "image": "/images/live-catalog/prod-265-husky.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 262,
    "name": "Maxine",
    "slug": "maxine",
    "sourceUrl": "https://metrotilesandflooring.com/product/maxine/",
    "image": "/images/live-catalog/prod-262-maxine.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 258,
    "name": "Timberwolf",
    "slug": "timberwolf",
    "sourceUrl": "https://metrotilesandflooring.com/product/timberwolf/",
    "image": "/images/live-catalog/prod-258-timberwolf.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 255,
    "name": "Noble",
    "slug": "noble",
    "sourceUrl": "https://metrotilesandflooring.com/product/noble/",
    "image": "/images/live-catalog/prod-255-noble.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 251,
    "name": "Skye",
    "slug": "skye",
    "sourceUrl": "https://metrotilesandflooring.com/product/skye/",
    "image": "/images/live-catalog/prod-251-skye.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 246,
    "name": "White Coffee",
    "slug": "white-coffee",
    "sourceUrl": "https://metrotilesandflooring.com/product/white-coffee/",
    "image": "/images/live-catalog/prod-246-white-coffee.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 240,
    "name": "Hudson",
    "slug": "hudson",
    "sourceUrl": "https://metrotilesandflooring.com/product/hudson/",
    "image": "/images/live-catalog/prod-240-hudson.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  },
  {
    "id": 237,
    "name": "Modern Grey",
    "slug": "modern-grey",
    "sourceUrl": "https://metrotilesandflooring.com/product/modern-grey/",
    "image": "/images/live-catalog/prod-237-modern-grey.webp",
    "categories": [
      {
        "id": 52,
        "name": "Woden Flooring",
        "slug": "woden-flooring",
        "path": [
          "engineered-hardwood",
          "woden-flooring"
        ]
      }
    ],
    "categoryIds": [
      52
    ],
    "categoryPaths": [
      "engineered-hardwood/woden-flooring"
    ]
  }
];

function routeKey(categorySlug: string, collectionSlugs: string[] = []) {
  return [categorySlug, ...collectionSlugs].filter(Boolean).join("/");
}

export function getLiveCategoryForRoute(
  categorySlug: string,
  collectionSlugs: string[] = []
) {
  const key = routeKey(categorySlug, collectionSlugs);
  return liveCatalogCategories.find(
    (category) => category.path.join("/") === key
  );
}

export function getLiveChildCategoriesForRoute(
  categorySlug: string,
  collectionSlugs: string[] = []
) {
  const category = getLiveCategoryForRoute(categorySlug, collectionSlugs);

  if (!category) {
    return [];
  }

  return liveCatalogCategories.filter(
    (candidate) => candidate.parentId === category.id
  );
}

// Metro's category endpoint returns these Majesto products for category 18,
// but the product payload omits category metadata. Keep the route mapping here.
const inferredProductCategoryPaths: Record<number, string[]> = {
  1051: ["tiles/anatolia/majesto-series"],
  1055: ["tiles/anatolia/majesto-series"],
  1058: ["tiles/anatolia/majesto-series"],
  1061: ["tiles/anatolia/majesto-series"],
  1064: ["tiles/anatolia/majesto-series"],
  1068: ["tiles/anatolia/majesto-series"],
  1072: ["tiles/anatolia/majesto-series"],
  1075: ["tiles/anatolia/majesto-series"],
  1102: ["tiles/anatolia/majesto-series"],
  1106: ["tiles/anatolia/majesto-series"],
  1110: ["tiles/anatolia/majesto-series"],
  1112: ["tiles/anatolia/majesto-series"],
  1115: ["tiles/anatolia/majesto-series"],
  1119: ["tiles/anatolia/majesto-series"],
  1123: ["tiles/anatolia/majesto-series"],
  1127: ["tiles/anatolia/majesto-series"],
  1130: ["tiles/anatolia/majesto-series"],
  1134: ["tiles/anatolia/majesto-series"],
  1138: ["tiles/anatolia/majesto-series"],
  1142: ["tiles/anatolia/majesto-series"],
  1145: ["tiles/anatolia/majesto-series"],
};

function productCategoryPaths(product: LiveCatalogProduct) {
  return product.categoryPaths.length
    ? product.categoryPaths
    : (inferredProductCategoryPaths[product.id] ?? product.categoryPaths);
}

function productWithInferredCategories(product: LiveCatalogProduct) {
  const categoryPaths = productCategoryPaths(product);

  if (categoryPaths === product.categoryPaths) {
    return product;
  }

  const categories = categoryPaths
    .map((path) =>
      liveCatalogCategories.find(
        (category) => category.path.join("/") === path
      )
    )
    .filter((category): category is LiveCatalogCategory => Boolean(category))
    .map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      path: category.path,
    }));

  return {
    ...product,
    categories,
    categoryIds: categories.map((category) => category.id),
    categoryPaths,
  };
}

export function getLiveProductsForRoute(
  categorySlug: string,
  collectionSlugs: string[] = []
) {
  const category = getLiveCategoryForRoute(categorySlug, collectionSlugs);

  if (!category) {
    return [];
  }

  const path = category.path.join("/");
  return liveCatalogProducts
    .map(productWithInferredCategories)
    .filter((product) =>
      product.categoryPaths.some(
        (categoryPath) =>
          categoryPath === path || categoryPath.startsWith(`${path}/`)
      )
    );
}

export function getLiveCatalogProducts() {
  return liveCatalogProducts.map(productWithInferredCategories);
}

export function liveProductPath(product: LiveCatalogProduct) {
  const [categoryPath] = productCategoryPaths(product);

  if (!categoryPath) {
    return "/products";
  }

  return `/products/${categoryPath}/${product.slug}`;
}

export function getLiveProductForRoute(
  categorySlug: string,
  collectionSlugs: string[],
  productSlug: string
) {
  const path = routeKey(categorySlug, collectionSlugs);

  return getLiveCatalogProducts().find(
    (product) =>
      product.slug === productSlug &&
      product.categoryPaths.some((categoryPath) => categoryPath === path)
  );
}

export function getAllLiveProductRoutePaths() {
  const seen = new Set<string>();
  const paths: Array<{ category: string; collection: string[] }> = [];

  for (const product of getLiveCatalogProducts()) {
    for (const categoryPath of product.categoryPaths) {
      const [category, ...collections] = categoryPath.split("/");

      if (!category) {
        continue;
      }

      const collection = [...collections, product.slug];
      const key = `${category}/${collection.join("/")}`;

      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      paths.push({ category, collection });
    }
  }

  return paths;
}

export const liveCatalogTotals = {
  categories: liveCatalogCategories.length,
  products: liveCatalogProducts.length,
};
