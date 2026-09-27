import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/terms", "/privacy", "/delete-account"];
  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
