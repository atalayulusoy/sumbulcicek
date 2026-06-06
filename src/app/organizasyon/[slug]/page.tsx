import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/metadata";
import {
  getOrganizationService,
  organizationServices,
  productMatchesOrganizationService,
} from "@/lib/organization";
import { getProducts, getSiteSettings } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

interface OrganizationDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: OrganizationDetailPageProps) {
  const service = getOrganizationService(params.slug);

  if (!service) {
    return buildMetadata({
      title: "Organizasyon",
      description: "SÜMBÜL GARDEN organizasyon hizmetleri.",
      pathname: "/organizasyon",
    });
  }

  return buildMetadata({
    title: `${service.title} | Başakşehir Organizasyon`,
    description: `${service.description} Başakşehir, Kayabaşı, Bahçeşehir ve İstanbul çevresi için SÜMBÜL GARDEN ile iletişime geçin.`,
    image: service.image,
    pathname: `/organizasyon/${service.slug}`,
  });
}

export default async function OrganizationDetailPage({ params }: OrganizationDetailPageProps) {
  const service = getOrganizationService(params.slug);
  if (!service) {
    notFound();
  }

  const [products, settings] = await Promise.all([getProducts(), getSiteSettings()]);
  const serviceProducts = products.filter((product) => productMatchesOrganizationService(product, service));
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana sayfa", url: "/" },
    { name: "Organizasyon", url: "/organizasyon" },
    { name: service.title, url: `/organizasyon/${service.slug}` },
  ]);

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-[2.4rem] bg-[#173827] px-6 py-12 text-white shadow-card lg:px-10">
            <p className="text-sm uppercase tracking-[0.26em] text-white/60">Organizasyon</p>
            <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{service.title}</h1>
            <p className="mt-5 text-base leading-8 text-white/74">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/iletisim">
                  Teklif al
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/organizasyon">Tüm organizasyonlar</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2.4rem] bg-[#eef3ea] shadow-card">
            <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Ürünler</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
              {service.shortTitle} seçenekleri
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {organizationServices.map((item) => (
              <Link
                key={item.slug}
                href={`/organizasyon/${item.slug}`}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  item.slug === service.slug
                    ? "border-brand bg-brand text-white"
                    : "border-surface-outline bg-white/78 text-foreground/68 hover:bg-brand-muted hover:text-brand"
                }`}
              >
                {item.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        {serviceProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {serviceProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} settings={settings} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.8rem] border border-white/60 bg-white/78 p-8 shadow-card backdrop-blur-xl">
            <p className="text-base leading-8 text-foreground/70">
              Bu konsept için ürünler hazırlanıyor. WhatsApp veya iletişim sayfası üzerinden detay
              paylaşabilirsiniz.
            </p>
          </div>
        )}
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
