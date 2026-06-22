import type { MetadataRoute } from "next";

import { istanbulAreaPages } from "@/lib/istanbul-areas";
import { organizationCategorySlugs, organizationServices } from "@/lib/organization";
import { getCategories, getProducts } from "@/lib/services/storefront";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { getRequestSiteUrl } from "@/lib/site-url";

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
  const siteUrl = getRequestSiteUrl();
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const flowerCategories = categories.filter(
    (category) =>
      !landscapeCategorySlugs.includes(category.slug) &&
      !organizationCategorySlugs.includes(category.slug),
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/organizasyon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/peyzaj`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteUrl}/referanslar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/bolge`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.78,
    },
    ...istanbulAreaPages.map((area) => ({
      url: `${siteUrl}/bolge/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: area.type === "locality" ? 0.86 : area.type === "district" ? 0.82 : 0.58,
    })),
    ...seoLandingPages.map((page) => ({
      url: new URL(`/${page.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...flowerCategories.map((category) => ({
      url: `${siteUrl}/products?category=${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: category.slug === "sevgililer-gunu-cicekleri" ? 0.9 : 0.72,
    })),
    ...organizationServices.map((service) => ({
      url: `${siteUrl}/organizasyon/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt ?? product.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
