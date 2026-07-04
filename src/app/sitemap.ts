import type { MetadataRoute } from "next";
import { allRoutePaths } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

const highPriorityRoutes = new Set(["/", "/products", "/services", "/quote"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutePaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: highPriorityRoutes.has(path) ? 0.9 : 0.7,
  }));
}
