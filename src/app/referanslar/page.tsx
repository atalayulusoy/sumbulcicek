import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { getProducts } from "@/lib/services/storefront";
import type { Product } from "@/lib/types";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return buildMetadata({
    title: "Referanslarımız",
    description:
      "SÜMBÜL GARDEN ve SÜMBÜL PEYZAJ tarafından hazırlanan çiçek, organizasyon ve peyzaj referansları.",
    image: "/og-sumbul-garden.jpg",
    pathname: "/referanslar",
  });
}

const referenceKeywords = [
  "peyzaj",
  "bahçe",
  "bahce",
  "rulo",
  "sulama",
  "dikey",
  "organizasyon",
  "açılış",
  "acilis",
  "tasarım",
  "tasarim",
];

function getProductImage(product: Product) {
  return product.images.find(Boolean) ?? "/catalog/landscape/landscape-01.jpg";
}

function isReferenceProduct(product: Product) {
  const searchable = `${product.title} ${product.description} ${product.category?.name ?? ""} ${
    product.category?.slug ?? ""
  }`.toLocaleLowerCase("tr-TR");

  return (
    referenceKeywords.some((keyword) => searchable.includes(keyword)) ||
    product.images.some((image) => image.includes("/landscape/") || image.includes("/uploads/"))
  );
}

export default async function ReferencesPage() {
  const products = await getProducts();
  const referenceProducts = products.filter(isReferenceProduct);
  const visibleProducts = (referenceProducts.length > 0 ? referenceProducts : products).slice(0, 12);
  const heroImage = visibleProducts[0] ? getProductImage(visibleProducts[0]) : "/catalog/landscape/landscape-01.jpg";

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#07170f] px-6 py-16 shadow-card lg:px-12">
          <Image src={heroImage} alt="" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06130d]/96 via-[#06130d]/78 to-[#06130d]/24" />
          <div className="relative z-10 max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
              <Leaf className="h-4 w-4 text-[#d8b081]" />
              SÜMBÜL GARDEN & PEYZAJ
            </div>
            <h1 className="mt-6 font-display text-5xl leading-tight sm:text-7xl">Referanslarımız</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Çiçek tasarımları, organizasyon hazırlıkları ve peyzaj uygulamalarından seçilmiş
              işlerimizi tek sayfada inceleyebilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/iletisim">
                  Keşif ve iletişim
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Ürünleri incele</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Seçili çalışmalar</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Tamamlanan işler ve örnek uygulamalar
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/78 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef3ea]">
                <Image
                  src={getProductImage(product)}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/42">
                  <Images className="h-4 w-4 text-brand" />
                  {product.category?.name ?? "Referans"}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{product.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-foreground/62">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
