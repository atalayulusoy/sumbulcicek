import Link from "next/link";

import { Reveal } from "@/components/interactive/reveal";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import type { Product, SiteSettings } from "@/lib/types";

interface FeaturedProductsSectionProps {
  title: string;
  description: string;
  products: Product[];
  settings: SiteSettings;
}

export function FeaturedProductsSection({
  title,
  description,
  products,
  settings,
}: FeaturedProductsSectionProps) {
  return (
    <section className="container-edge section-space pt-4">
      <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Koleksiyon</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/65 sm:text-base">
            {description}
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/products">Tüm Ürünleri Gör</Link>
        </Button>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} settings={settings} index={index} />
        ))}
      </div>
    </section>
  );
}
