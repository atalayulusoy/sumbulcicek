import type { Metadata } from "next";

import { ProductsExplorer } from "@/components/products/products-explorer";
import { buildMetadata } from "@/lib/metadata";
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

export const metadata: Metadata = buildMetadata({
  title: "Çiçeklerimiz",
  description: "SÜMBÜL GARDEN fiyatlı çiçek buketleri, kutu çiçekleri, salon bitkileri, vazoları ve saksıları.",
  pathname: "/products",
});

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const [products, categories, settings] = await Promise.all([
    getProducts(),
    getCategories(),
    getSiteSettings(),
  ]);

  const requestedCategory = searchParams.category;
  const showingLandscapeCategory =
    requestedCategory && landscapeCategorySlugs.includes(requestedCategory);

  const visibleProducts = showingLandscapeCategory
    ? products
    : products.filter((product) => !landscapeCategorySlugs.includes(product.category?.slug ?? ""));
  const visibleCategories = showingLandscapeCategory
    ? categories
    : categories.filter((category) => !landscapeCategorySlugs.includes(category.slug));
  const selectedCategory = categories.find((category) => category.slug === requestedCategory);
  const pageTitle = selectedCategory?.name ?? "Çiçeklerimiz";

  return (
    <div className="container-edge section-space">
      <div className="mb-8">
        <h1 className="font-display text-5xl text-brand sm:text-6xl">{pageTitle}</h1>
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
