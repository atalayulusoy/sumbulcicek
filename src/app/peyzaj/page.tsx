import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Leaf, Ruler, Sprout } from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { getCategories, getProducts, getSiteSettings } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return buildMetadata({
    title: "Başakşehir Peyzaj | Bahçe Tasarımı ve Rulo Çim",
    description:
      "SÜMBÜL PEYZAJ bahçe tasarımı, rulo çim, bitkilendirme, otomatik sulama ve dikey bahçe uygulamaları.",
    image: "/og-sumbul-garden.jpg",
    pathname: "/peyzaj",
  });
}

const landscapeCategorySlugs = [
  "peyzaj-tasarim",
  "bahce-uygulama",
  "peyzaj-bitkileri",
  "rulo-cim",
  "otomatik-sulama",
  "dikey-bahce",
];

const services = [
  {
    icon: Ruler,
    title: "Alan planlama",
    description: "Bahçenin ölçüsü, güneş alma durumu ve kullanım ihtiyacına göre yerleşim kurgusu hazırlanır.",
  },
  {
    icon: Sprout,
    title: "Bitkilendirme",
    description: "Kaliteli bitki çeşitleriyle ağaç, çalı, mevsimlik ve saksılı bitki seçimi yapılır.",
  },
  {
    icon: Droplets,
    title: "Sulama ve bakım",
    description: "Otomatik sulama, rulo çim, bakım ve drenaj ihtiyaçları proje kapsamına göre planlanır.",
  },
];

export default async function PeyzajPage() {
  const [products, categories, settings] = await Promise.all([
    getProducts(),
    getCategories(),
    getSiteSettings(),
  ]);
  const landscapeProducts = products.filter((product) =>
    landscapeCategorySlugs.includes(product.category?.slug ?? ""),
  );
  const landscapeCategories = categories.filter((category) =>
    landscapeCategorySlugs.includes(category.slug),
  );

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#07170f] px-6 py-16 shadow-card lg:px-12">
          <Image
            src="/catalog/landscape/landscape-01.jpg"
            alt=""
            fill
            className="object-cover opacity-38"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06130d]/96 via-[#06130d]/82 to-[#06130d]/28" />
          <div className="relative z-10 max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
              <Leaf className="h-4 w-4 text-[#d8b081]" />
              SÜMBÜL PEYZAJ
            </div>
            <h1 className="mt-6 font-display text-5xl leading-tight sm:text-7xl">
              Modern bahçe tasarımı ve profesyonel peyzaj uygulamaları.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Bahçeşehir, Bahçekent, Başakşehir ve Esenyurt bölgesinde rulo çim,
              bitkilendirme, otomatik sulama, dikey bahçe ve dış mekan düzenleme işleri için
              keşif ve teklif akışı oluşturuyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#peyzaj-isleri">
                  Peyzaj işlerim
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Çiçek koleksiyonu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/65">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge pb-12">
        <div className="rounded-[2rem] border border-white/60 bg-white/78 p-5 shadow-card backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Peyzaj kategorileri
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {landscapeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="rounded-full border border-surface-outline bg-white/80 px-4 py-2 text-sm text-foreground/70 transition hover:bg-brand-muted hover:text-brand"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="peyzaj-isleri" className="container-edge section-space pt-0">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Peyzaj işlerim</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            SÜMBÜL PEYZAJ hizmetleri
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/68">
            Kaliteli bitki çeşitleri, profesyonel peyzaj uygulamaları ve modern bahçe tasarımları
            için hizmet kartlarını inceleyin. Açıklama, fiyat ve görseller admin panelden
            değiştirilebilir.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {landscapeProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} settings={settings} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
