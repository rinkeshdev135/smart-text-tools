import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  slug?: string;
  category?: string;
  categoryLabel?: string;
};

export function generatePageMetadata({
  title,
  description,
  slug = "",
  category,
  categoryLabel
}: MetadataInput): Metadata {
  const normalizedSlug = slug.replace(/^\/+/, "");
  const pathname = normalizedSlug ? `/${normalizedSlug}` : "";
  const url = `${siteConfig.url}${pathname}`;

  // Build OG image URL with query params
  const ogParams = new URLSearchParams({ title, description });
  if (category) ogParams.set("category", category);
  if (categoryLabel) ogParams.set("catLabel", categoryLabel);
  const ogImageUrl = `${siteConfig.url}/api/og?${ogParams.toString()}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}
