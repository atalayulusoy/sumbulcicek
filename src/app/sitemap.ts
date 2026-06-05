import type { MetadataRoute } from "next";

import { appEnv } from "@/lib/env";
import { organizationServices } from "@/lib/organization";
import { getProducts } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();

  return [
    {
      url: appEnv.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${appEnv.siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${appEnv.siteUrl}/organizasyon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...organizationServices.map((service) => ({
      url: `${appEnv.siteUrl}/organizasyon/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${appEnv.siteUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt ?? product.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
