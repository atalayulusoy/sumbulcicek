import { prisma } from "@/lib/prisma";
import { homepageSectionDefaults } from "@/lib/constants";
import { fallbackBanners, fallbackCategories, fallbackProducts, fallbackSiteSettings } from "@/lib/data/fallback-data";
import { isDatabaseConfigured } from "@/lib/env";
import { readDashboard } from "@/lib/github-store";
import { parseImages, stringifyDate } from "@/lib/utils";
import type {
  Banner,
  Category,
  DashboardSnapshot,
  HomepageSectionConfig,
  Product,
  ProductStockStatus,
  SiteSettings,
} from "@/lib/types";

type DatabaseRecord = Record<string, unknown>;

function serializeCategory(category: DatabaseRecord | Category): Category {
  const record = category as DatabaseRecord;

  return {
    id: String(record.id),
    name: String(record.name),
    slug: String(record.slug),
    icon: String(record.icon),
    createdAt: stringifyDate(record.createdAt as Date | string),
  };
}

function serializeProduct(product: DatabaseRecord | Product): Product {
  const record = product as DatabaseRecord;
  const category = record.category as DatabaseRecord | undefined;

  return {
    id: String(record.id),
    title: String(record.title),
    slug: String(record.slug),
    description: String(record.description),
    price: Number(record.price),
    discountPrice: record.discountPrice ? Number(record.discountPrice) : null,
    images: parseImages(record.images),
    categoryId: String(record.categoryId),
    category: category ? serializeCategory(category) : undefined,
    featured: Boolean(record.featured),
    stockStatus: String(record.stockStatus) as ProductStockStatus,
    badge: record.badge ? String(record.badge) : null,
    deliveryInfo: record.deliveryInfo ? String(record.deliveryInfo) : null,
    createdAt: stringifyDate(record.createdAt as Date | string),
    updatedAt: record.updatedAt
      ? stringifyDate(record.updatedAt as Date | string)
      : undefined,
  };
}

function serializeBanner(banner: DatabaseRecord | Banner): Banner {
  const record = banner as DatabaseRecord;

  return {
    id: String(record.id),
    title: String(record.title),
    subtitle: String(record.subtitle),
    image: String(record.image),
    buttonText: String(record.buttonText),
    buttonLink: String(record.buttonLink),
    theme: record.theme ? String(record.theme) : null,
    order: Number(record.order ?? 0),
    isActive: Boolean(record.isActive),
    createdAt: stringifyDate(record.createdAt as Date | string),
  };
}

function resolveHomepageSections(value: unknown): HomepageSectionConfig[] {
  if (!Array.isArray(value)) {
    return homepageSectionDefaults;
  }

  const parsed = value
    .map((item) => {
      const section = item as Partial<HomepageSectionConfig>;

      return {
        key: String(section.key),
        label: String(section.label),
        enabled: Boolean(section.enabled),
        order: Number(section.order ?? 0),
      };
    })
    .filter((item) =>
      homepageSectionDefaults.some((defaultSection) => defaultSection.key === item.key),
    ) as HomepageSectionConfig[];

  return parsed.length > 0
    ? parsed.sort((first, second) => first.order - second.order)
    : homepageSectionDefaults;
}

function serializeSiteSettings(settings: DatabaseRecord | SiteSettings | null): SiteSettings {
  if (!settings) {
    return fallbackSiteSettings;
  }

  return {
    id: String(settings.id),
    whatsappNumber: String(settings.whatsappNumber),
    instagram: settings.instagram ? String(settings.instagram) : null,
    address: settings.address ? String(settings.address) : null,
    phone: settings.phone ? String(settings.phone) : null,
    heroTitle: settings.heroTitle ? String(settings.heroTitle) : null,
    heroSubtitle: settings.heroSubtitle ? String(settings.heroSubtitle) : null,
    metaTitle: settings.metaTitle ? String(settings.metaTitle) : null,
    metaDescription: settings.metaDescription ? String(settings.metaDescription) : null,
    aboutTitle: settings.aboutTitle ? String(settings.aboutTitle) : null,
    aboutText: settings.aboutText ? String(settings.aboutText) : null,
    footerText: settings.footerText ? String(settings.footerText) : null,
    deliveryInfo: settings.deliveryInfo ? String(settings.deliveryInfo) : null,
    primaryColor: settings.primaryColor ? String(settings.primaryColor) : null,
    secondaryColor: settings.secondaryColor ? String(settings.secondaryColor) : null,
    accentColor: settings.accentColor ? String(settings.accentColor) : null,
    homepageSections: resolveHomepageSections(settings.homepageSections),
    updatedAt: stringifyDate((settings.updatedAt as Date | string | undefined) ?? new Date()),
  };
}

async function withFallback<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  if (!isDatabaseConfigured) {
    return fallback;
  }

  try {
    return await query();
  } catch (error) {
    console.warn("[storefront:fallback]", error);
    return fallback;
  }
}

export async function getCategories() {
  if (!isDatabaseConfigured) {
    try {
      const dashboard = await readDashboard();
      return dashboard.categories.map((c) => serializeCategory(c));
    } catch {
      return fallbackCategories;
    }
  }

  const fallback = fallbackCategories;

  return withFallback(
    async () => {
      const categories = await prisma.category.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });

      return categories.map(serializeCategory);
    },
    fallback,
  );
}

export async function getProducts() {
  if (!isDatabaseConfigured) {
    try {
      const dashboard = await readDashboard();
      return dashboard.products.map((p) => serializeProduct(p));
    } catch {
      return fallbackProducts;
    }
  }

  const fallback = fallbackProducts;

  return withFallback(
    async () => {
      const products = await prisma.product.findMany({
        include: {
          category: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return products.map(serializeProduct);
    },
    fallback,
  );
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.filter((product) => product.featured).slice(0, 6);
}

export async function getProductBySlug(slug: string) {
  if (!isDatabaseConfigured) {
    try {
      const dashboard = await readDashboard();
      const product = dashboard.products.find((item) => item.slug === slug);
      return product ? serializeProduct(product) : null;
    } catch {
      return fallbackProducts.find((product) => product.slug === slug) ?? null;
    }
  }

  const fallback = fallbackProducts.find((product) => product.slug === slug) ?? null;

  return withFallback(
    async () => {
      const product = await prisma.product.findUnique({
        where: { slug },
        include: { category: true },
      });

      return product ? serializeProduct(product) : null;
    },
    fallback,
  );
}

export async function getBanners() {
  if (!isDatabaseConfigured) {
    try {
      const dashboard = await readDashboard();
      return dashboard.banners.filter((b) => b.isActive).map((b) => serializeBanner(b));
    } catch {
      return fallbackBanners;
    }
  }

  const fallback = fallbackBanners;

  return withFallback(
    async () => {
      const banners = await prisma.banner.findMany({
        where: { isActive: true },
        orderBy: {
          order: "asc",
        },
      });

      return banners.map(serializeBanner);
    },
    fallback,
  );
}

export async function getSiteSettings() {
  if (!isDatabaseConfigured) {
    try {
      const dashboard = await readDashboard();
      return serializeSiteSettings(dashboard.settings);
    } catch {
      return fallbackSiteSettings;
    }
  }

  return withFallback(
    async () => {
      const settings = await prisma.siteSettings.findUnique({
        where: { id: "site-settings" },
      });

      return serializeSiteSettings(settings);
    },
    fallbackSiteSettings,
  );
}

export async function getHomePageData() {
  const [categories, featuredProducts, banners, settings] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
    getBanners(),
    getSiteSettings(),
  ]);

  return { categories, featuredProducts, banners, settings };
}

export async function getSimilarProducts(product: Product, limit = 4) {
  const products = await getProducts();

  return products
    .filter((candidate) => candidate.slug !== product.slug)
    .sort((first, second) => {
      const scoreFirst =
        Number(first.categoryId === product.categoryId) + Number(first.featured === product.featured);
      const scoreSecond =
        Number(second.categoryId === product.categoryId) +
        Number(second.featured === product.featured);

      return scoreSecond - scoreFirst;
    })
    .slice(0, limit);
}

export async function getDashboardSnapshot(): Promise<DashboardSnapshot> {
  const [products, categories, banners, settings] = await Promise.all([
    getProducts(),
    getCategories(),
    getBanners(),
    getSiteSettings(),
  ]);

  return {
    products,
    categories,
    banners,
    settings,
    metrics: {
      totalProducts: products.length,
      totalCategories: categories.length,
      totalBanners: banners.length,
      featuredProducts: products.filter((product) => product.featured).length,
    },
    isFallback: !isDatabaseConfigured,
  };
}
