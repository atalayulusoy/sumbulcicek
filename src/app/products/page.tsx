import type { Metadata } from "next";

import { ProductsExplorer } from "@/components/products/products-explorer";
import { buildMetadata } from "@/lib/metadata";
import { organizationCategorySlugs } from "@/lib/organization";
import { getCategories, getProducts, getSiteSettings } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

interface ProductsPageProps {
  searchParams: {
    query?: string;
    category?: string;
    favorites?: string;
  };
}

const landscapeCategorySlugs = [
  "peyzaj-tasarim",
  "bahce-uygulama",
  "peyzaj-bitkileri",
  "rulo-cim",
  "otomatik-sulama",
  "dikey-bahce",
];

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const categories = await getCategories();
  const selectedCategory = categories.find((category) => category.slug === searchParams.category);

  if (selectedCategory) {
    return buildMetadata({
      title: `${selectedCategory.name} | Başakşehir Çiçekçi`,
      description: `${selectedCategory.name} ürünlerini SÜMBÜL GARDEN koleksiyonunda inceleyin. Başakşehir, Kayabaşı, Bahçeşehir ve İstanbul çevresi için WhatsApp ile çiçek siparişi verin.`,
      image: "/og-sumbul-garden.jpg",
      pathname: `/products?category=${selectedCategory.slug}`,
    });
  }

  return buildMetadata({
    title: "Çiçek Siparişi | Başakşehir Çiçekçi",
    description:
      "SÜMBÜL GARDEN çiçek buketleri, kutu çiçekler, orkide, salon bitkileri, vazolar ve saksılar. Başakşehir Kayabaşı çevresi için WhatsApp ile sipariş verin.",
    image: "/og-sumbul-garden.jpg",
    pathname: "/products",
  });
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const [products, categories, settings] = await Promise.all([
    getProducts(),
    getCategories(),
    getSiteSettings(),
  ]);

  const requestedCategory = searchParams.category;
  const showingLandscapeCategory =
    requestedCategory && landscapeCategorySlugs.includes(requestedCategory);
  const showingOrganizationCategory =
    requestedCategory && organizationCategorySlugs.includes(requestedCategory);
  const hiddenCategorySlugs = [...landscapeCategorySlugs, ...organizationCategorySlugs];

  const visibleProducts =
    showingLandscapeCategory || showingOrganizationCategory
      ? products
      : products.filter((product) => !hiddenCategorySlugs.includes(product.category?.slug ?? ""));
  const visibleCategories =
    showingLandscapeCategory || showingOrganizationCategory
      ? categories
      : categories.filter((category) => !hiddenCategorySlugs.includes(category.slug));
  const selectedCategory = categories.find((category) => category.slug === requestedCategory);
  const pageTitle = selectedCategory?.name ?? "Çiçeklerimiz";

  return (
    <div className="container-edge section-space">
      <div className="mb-8">
        <h1 className="font-display text-5xl text-brand sm:text-6xl">{pageTitle}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/65 sm:text-base">
          Başakşehir, Kayabaşı, Bahçeşehir ve İstanbul çevresi için çiçek siparişi, özel gün
          buketleri ve WhatsApp üzerinden hızlı sipariş akışı.
        </p>
      </div>

      <ProductsExplorer
        products={visibleProducts}
        categories={visibleCategories}
        settings={settings}
        initialQuery={searchParams.query}
        initialCategory={searchParams.category}
        initialFavorites={searchParams.favorites === "1"}
      />
    </div>
  );
}
