import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, MessageCircleMore, PartyPopper, Sprout } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getFeaturedIstanbulAreas,
  getIstanbulAreaBySlug,
  type IstanbulAreaPage,
} from "@/lib/istanbul-areas";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/services/storefront";
import { normalizeWhatsappNumber } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

interface AreaPageProps {
  params: {
    slug: string;
  };
}

const serviceCards = [
  {
    icon: MessageCircleMore,
    title: "Çiçek siparişi",
    description:
      "Buket, kutu çiçek, orkide, özel gün çiçekleri ve aynı gün teslimata uygun ürünler için WhatsApp üzerinden hızlı teklif alın.",
    href: "/products",
  },
  {
    icon: Sprout,
    title: "Peyzaj keşfi",
    description:
      "Bahçe tasarımı, rulo çim, bitkilendirme, sulama ve dış mekan düzenleme işleri için yerinde keşif planlanır.",
    href: "/peyzaj",
  },
  {
    icon: PartyPopper,
    title: "Organizasyon",
    description:
      "Balon çeşitleri, parti malzemeleri, baby shower, kız isteme, nişan, düğün ve doğum günü konseptleri hazırlanır.",
    href: "/organizasyon",
  },
];

function getAreaLocation(area: IstanbulAreaPage) {
  if (area.neighborhood && area.type !== "district") {
    return `${area.neighborhood}, ${area.district}, İstanbul`;
  }

  return `${area.district}, İstanbul`;
}

function getAreaKeyword(area: IstanbulAreaPage) {
  return `${area.name} çiçekçi`;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const area = getIstanbulAreaBySlug(params.slug);

  if (!area) {
    return buildMetadata({
      title: "Hizmet Bölgesi Bulunamadı",
      description: "Aradığınız hizmet bölgesi bulunamadı.",
      noIndex: true,
      pathname: `/bolge/${params.slug}`,
    });
  }

  return buildMetadata({
    title: area.title,
    description: area.description,
    image: "/og-sumbul-garden.jpg",
    pathname: `/bolge/${area.slug}`,
  });
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const area = getIstanbulAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  const settings = await getSiteSettings();
  const featuredAreas = getFeaturedIstanbulAreas().filter((item) => item.slug !== area.slug);
  const phone = normalizeWhatsappNumber(settings.whatsappNumber);
  const whatsappMessage = [
    `Merhaba, ${area.name} çiçekçi, peyzaj veya organizasyon hizmetleri hakkında bilgi almak istiyorum.`,
    "",
    `Bölge: ${getAreaLocation(area)}`,
    `Sayfa: ${absoluteUrl(`/bolge/${area.slug}`)}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Ana sayfa", url: "/" },
      { name: "Hizmet Bölgeleri", url: "/bolge" },
      { name: area.name, url: `/bolge/${area.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(`/bolge/${area.slug}`)}#service`,
      name: area.title.replace(" | Sümbül Garden", ""),
      serviceType: ["Çiçekçilik", "Peyzaj", "Organizasyon"],
      provider: {
        "@type": "Florist",
        name: "SÜMBÜL GARDEN",
        url: absoluteUrl("/"),
      },
      areaServed: {
        "@type": "Place",
        name: getAreaLocation(area),
      },
      url: absoluteUrl(`/bolge/${area.slug}`),
    },
  ];

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="rounded-[2.4rem] border border-white/60 bg-white/78 px-6 py-14 shadow-card backdrop-blur-xl lg:px-12">
          <Badge className="gap-2">
            <MapPin className="h-4 w-4" />
            {getAreaLocation(area)}
          </Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-foreground sm:text-7xl">
            {area.name} çiçekçi, peyzaj ve organizasyon
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/68 sm:text-lg">
            SÜMBÜL GARDEN, {getAreaKeyword(area)} arayan müşteriler için {getAreaLocation(area)}
            çevresinde çiçek siparişi, özel gün çiçekleri, peyzaj keşfi, balon süsleme ve
            organizasyon taleplerini WhatsApp üzerinden hızlıca planlar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp ile bilgi al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Çiçekleri incele</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="grid gap-4 md:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.5rem] border border-surface-outline bg-white/78 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-muted"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                <card.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/62">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-edge section-space pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">
              {getAreaKeyword(area)}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {area.name} bölgesi için hızlı sipariş ve keşif akışı
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/66 sm:text-base">
              Çiçek siparişlerinde ürün sayfasından görsel, fiyat ve açıklamayı inceleyebilir;
              peyzaj ve organizasyon taleplerinde konum, tarih ve konsept bilgisini WhatsApp
              üzerinden paylaşabilirsiniz. {area.name} ve çevresi için süreç önce ihtiyaç analizi,
              sonra teklif ve teslimat planı şeklinde ilerler.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Aynı gün iletişim", "WhatsApp sipariş", "Peyzaj keşfi", "Balon süsleme"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-surface-outline bg-white px-4 py-2 text-sm text-foreground/68"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">
              Yakın bağlantılar
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/products?category=sevgililer-gunu-cicekleri"
                className="rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
              >
                Sevgililer Günü çiçekleri
              </Link>
              <Link
                href="/organizasyon"
                className="rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
              >
                Organizasyon ve balon çeşitleri
              </Link>
              <Link
                href="/peyzaj"
                className="rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
              >
                Peyzaj ve bahçe düzenleme
              </Link>
              <Link
                href="/iletisim"
                className="rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
              >
                Konum ve iletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

      {featuredAreas.length > 0 ? (
        <section className="container-edge section-space pt-0">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">
                Diğer bölgeler
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Yakın aramalar
              </h2>
            </div>
            <Link
              href="/bolge"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Tüm bölgeler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {featuredAreas.map((item) => (
              <Link
                key={item.slug}
                href={`/bolge/${item.slug}`}
                className="rounded-full border border-surface-outline bg-white/84 px-4 py-2 text-sm text-foreground/68 transition hover:border-brand/25 hover:bg-brand-muted hover:text-brand"
              >
                {item.name} çiçekçi
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
