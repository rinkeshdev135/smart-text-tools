import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { tools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = tools.map((tool) => ({
    url: `${siteConfig.url}/${tool.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1
    },
    ...toolEntries
  ];
}
