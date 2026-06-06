import type { MetadataRoute } from "next";

import { appEnv } from "@/lib/env";
import { organizationCategorySlugs, organizationServices } from "@/lib/organization";
import { getCategories, getProducts } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const landscapeCategorySlugs = [
  "peyzaj-tasarim",
  "bahce-uygulama",
  "peyzaj-bitkileri",
  "rulo-cim",
  "otomatik-sulama",
  "dikey-bahce",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const flowerCategories = categories.filter(
    (category) =>
      !landscapeCategorySlugs.includes(category.slug) &&
      !organizationCategorySlugs.includes(category.slug),
  );

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
    {
      url: `${appEnv.siteUrl}/peyzaj`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${appEnv.siteUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${appEnv.siteUrl}/referanslar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...flowerCategories.map((category) => ({
      url: `${appEnv.siteUrl}/products?category=${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: category.slug === "sevgililer-gunu-cicekleri" ? 0.9 : 0.72,
    })),
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
