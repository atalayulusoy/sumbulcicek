import Link from "next/link";

import { Reveal } from "@/components/interactive/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { getIconByName } from "@/lib/icon-map";
import type { Category } from "@/lib/types";

export function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section className="container-edge section-space">
      <Reveal className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Çiçeklerimiz</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Özel gün ve ürün kategorileri</h2>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category, index) => {
          const Icon = getIconByName(category.icon);

          return (
            <Reveal key={category.id} delay={index * 0.05}>
              <Link href={`/products?category=${category.slug}`}>
                <Card className="group h-full transition duration-300 hover:-translate-y-2 hover:shadow-float">
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-muted text-brand shadow-inner transition group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="font-semibold">{category.name}</p>
                      <p className="mt-1 text-sm text-foreground/55">Aynı gün teslimat</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
