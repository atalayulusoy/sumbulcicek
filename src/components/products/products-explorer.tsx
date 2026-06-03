"use client";

import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";
import { Heart, LayoutGrid, RotateCcw, SearchX, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useFavorites } from "@/hooks/use-favorites";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Category, Product, SiteSettings } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductsExplorerProps {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  initialQuery?: string;
  initialCategory?: string;
  initialFavorites?: boolean;
}

export function ProductsExplorer({
  products,
  categories,
  settings,
  initialQuery = "",
  initialCategory = "all",
  initialFavorites = false,
}: ProductsExplorerProps) {
  const { favorites, isFavorite } = useFavorites();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [priceLimit, setPriceLimit] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(initialFavorites);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setFavoritesOnly(initialFavorites);
  }, [initialFavorites]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLocaleLowerCase("tr-TR");

    const results = products.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.title.toLocaleLowerCase("tr-TR").includes(normalizedQuery) ||
        product.description.toLocaleLowerCase("tr-TR").includes(normalizedQuery);

      const matchesCategory = category === "all" || product.category?.slug === category;
      const effectivePrice = product.discountPrice ?? product.price;
      const matchesPrice =
        priceLimit === "all" ||
        (priceLimit === "1000" && effectivePrice <= 1000) ||
        (priceLimit === "1500" && effectivePrice <= 1500) ||
        (priceLimit === "1500+" && effectivePrice >= 1500);
      const matchesFavorites = !favoritesOnly || isFavorite(product.slug);

      return matchesQuery && matchesCategory && matchesPrice && matchesFavorites;
    });

    const sorted = [...results];

    switch (sortBy) {
      case "price-asc":
        sorted.sort(
          (first, second) =>
            (first.discountPrice ?? first.price) - (second.discountPrice ?? second.price),
        );
        break;
      case "price-desc":
        sorted.sort(
          (first, second) =>
            (second.discountPrice ?? second.price) - (first.discountPrice ?? first.price),
        );
        break;
      case "newest":
        sorted.sort(
          (first, second) =>
            new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime(),
        );
        break;
      default:
        sorted.sort((first, second) => Number(second.featured) - Number(first.featured));
        break;
    }

    return sorted;
  }, [category, deferredQuery, favoritesOnly, isFavorite, priceLimit, products, sortBy]);

  const hasActiveFilters =
    category !== "all" || priceLimit !== "all" || favoritesOnly || query.trim().length > 0;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/60 bg-white/75 p-4 shadow-card backdrop-blur-2xl sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <Input
              value={query}
              onChange={(event) => {
                const value = event.target.value;
                startTransition(() => setQuery(value));
              }}
              placeholder="Ürün, renk veya tasarım ara"
              className="h-12 rounded-full"
            />
            <Button
              type="button"
              variant="secondary"
              className="rounded-full"
              onClick={() => setFiltersOpen((current) => !current)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtrele
            </Button>
            <Button
              type="button"
              variant={favoritesOnly ? "default" : "secondary"}
              className="rounded-full"
              onClick={() => setFavoritesOnly((current) => !current)}
            >
              <Heart className={cn("h-4 w-4", favoritesOnly && "fill-current")} />
              Favoriler
              {favorites.length > 0 ? (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px]">
                  {favorites.length}
                </span>
              ) : null}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-surface-outline bg-white/80 px-4 py-3 text-sm text-foreground/60">
              <LayoutGrid className="h-4 w-4 text-brand" />
              {filteredProducts.length} ürün gösteriliyor
            </div>
            {favorites.length > 0 ? (
              <div className="rounded-full border border-[#ffd6e6] bg-[#fff0f6] px-4 py-3 text-sm text-[#b24673]">
                {favorites.length} favori kayıtlı
              </div>
            ) : null}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {filtersOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-4 border-t border-surface-outline pt-5 md:grid-cols-3">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm kategoriler</SelectItem>
                    {categories.map((item) => (
                      <SelectItem key={item.id} value={item.slug}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceLimit} onValueChange={setPriceLimit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Fiyat aralığı" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm fiyatlar</SelectItem>
                    <SelectItem value="1000">1000 TL ve altı</SelectItem>
                    <SelectItem value="1500">1500 TL ve altı</SelectItem>
                    <SelectItem value="1500+">1500 TL ve üzeri</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sıralama" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Öne çıkanlar</SelectItem>
                    <SelectItem value="newest">En yeniler</SelectItem>
                    <SelectItem value="price-asc">Fiyat artan</SelectItem>
                    <SelectItem value="price-desc">Fiyat azalan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {hasActiveFilters ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-5 flex flex-wrap items-center gap-3 border-t border-surface-outline pt-5"
            >
              {query.trim().length > 0 ? (
                <div className="rounded-full bg-brand-muted px-4 py-2 text-sm text-brand">
                  Arama: {query}
                </div>
              ) : null}
              {category !== "all" ? (
                <div className="rounded-full bg-brand-muted px-4 py-2 text-sm text-brand">
                  Kategori: {categories.find((item) => item.slug === category)?.name ?? category}
                </div>
              ) : null}
              {priceLimit !== "all" ? (
                <div className="rounded-full bg-brand-muted px-4 py-2 text-sm text-brand">
                  Fiyat filtresi aktif
                </div>
              ) : null}
              {favoritesOnly ? (
                <div className="rounded-full bg-[#fff0f6] px-4 py-2 text-sm text-[#b24673]">
                  Sadece favoriler
                </div>
              ) : null}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setSortBy("featured");
                  setPriceLimit("all");
                  setFavoritesOnly(false);
                }}
              >
                <RotateCcw className="h-4 w-4" />
                Filtreleri Temizle
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {filteredProducts.length > 0 ? (
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} settings={settings} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-white/60 bg-white/80 p-10 text-center shadow-card backdrop-blur-2xl"
        >
          <SearchX className="mx-auto h-10 w-10 text-brand/55" />
          <h3 className="mt-5 font-display text-3xl">Aradığınız seçim bulunamadı</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-foreground/62">
            Filtreleri biraz genişletin ya da favoriler modunu kapatıp tüm koleksiyona tekrar göz atın.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-6"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setSortBy("featured");
              setPriceLimit("all");
              setFavoritesOnly(false);
            }}
          >
            Filtreleri Sıfırla
          </Button>
        </motion.div>
      )}
    </div>
  );
}
