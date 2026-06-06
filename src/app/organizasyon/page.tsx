import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PartyPopper } from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import {
  isOrganizationProduct,
  organizationServices,
} from "@/lib/organization";
import { getProducts, getSiteSettings } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Başakşehir Organizasyon | Balon ve Parti Süsleme",
  description:
    "SÜMBÜL GARDEN balon çeşitleri, parti malzemeleri, baby shower, kız isteme, düğün, nişan ve doğum günü organizasyonları.",
  image: "/catalog/organization/organization-09.jpg",
  pathname: "/organizasyon",
});

export default async function OrganizationPage() {
  const [products, settings] = await Promise.all([getProducts(), getSiteSettings()]);
  const organizationProducts = products.filter(isOrganizationProduct).slice(0, 8);

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#07170f] px-6 py-16 shadow-card lg:px-12">
          <Image
            src="/catalog/organization/organization-09.jpg"
            alt=""
            fill
            className="object-cover opacity-42"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06130d]/96 via-[#06130d]/78 to-[#06130d]/24" />
          <div className="relative z-10 max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
              <PartyPopper className="h-4 w-4 text-[#d8b081]" />
              SÜMBÜL ORGANİZASYON
            </div>
            <h1 className="mt-6 font-display text-5xl leading-tight sm:text-7xl">
              Balon, parti ve özel gün organizasyonları.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Baby shower, kız isteme, düğün, nişan, doğum günü, balon çeşitleri ve parti
              malzemelerini tek organizasyon alanında topladık.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Organizasyon</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            İhtiyacınız olan konsepti seçin
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {organizationServices.map((service) => (
            <Link
              key={service.slug}
              href={`/organizasyon/${service.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/78 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef3ea]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/62">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  İncele
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {organizationProducts.length > 0 ? (
        <section className="container-edge section-space pt-0">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Öne çıkanlar</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
              Organizasyon ürünleri
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {organizationProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} settings={settings} index={index} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/iletisim">
                Organizasyon için iletişime geç
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
