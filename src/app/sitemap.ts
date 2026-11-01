import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ROOM_STORIES } from "@/data/hotelData";
import { JAISALMER_GUIDES } from "@/data/guidesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.seo.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/rooms",
    "/experiences",
    "/dining",
    "/jaisalmer-guide",
    "/gallery",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.85,
  }));

  const roomRoutes: MetadataRoute.Sitemap = ROOM_STORIES.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const guideRoutes: MetadataRoute.Sitemap = JAISALMER_GUIDES.map((guide) => ({
    url: `${baseUrl}/jaisalmer-guide/${guide.slug}`,
    lastModified: new Date(guide.updatedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...roomRoutes, ...guideRoutes];
}
