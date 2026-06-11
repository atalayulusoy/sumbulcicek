import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  MapPin,
  MessageCircleMore,
  Phone,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { absoluteUrl, buildBreadcrumbSchema, buildLocalBusinessSchema, buildMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/services/storefront";
import {
  buildSeoLandingSections,
  getRelatedSeoLandingPages,
  getSeoLandingPageBySlug,
} from "@/lib/seo-landing-pages";
import { normalizeWhatsappNumber } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

interface SeoLandingRouteProps {
  params: {
    seoSlug: string;
  };
}

function getPhoneHref(phone?: string | null) {
  const normalized = (phone || "+90 530 635 27 19").replace(/[^\d+]/g, "");

  if (normalized.startsWith("+")) {
    return `tel:${normalized}`;
  }

  return `tel:+${normalized}`;
}

export async function generateMetadata({ params }: SeoLandingRouteProps): Promise<Metadata> {
  const page = getSeoLandingPageBySlug(params.seoSlug);

  if (!page) {
    return buildMetadata({
      title: "Sayfa bulunamadı",
      description: "Aradığınız SEO landing page bulunamadı.",
      noIndex: true,
      pathname: `/${params.seoSlug}`,
    });
  }

  return buildMetadata({
    title: page.seoTitle,
    description: page.description,
    image: "/og-sumbul-garden.jpg",
    pathname: `/${page.slug}`,
  });
}

export default async function SeoLandingPage({ params }: SeoLandingRouteProps) {
  const page = getSeoLandingPageBySlug(params.seoSlug);

  if (!page) {
    notFound();
  }

  const settings = await getSiteSettings();
  const sections = buildSeoLandingSections(page);
  const relatedPages = getRelatedSeoLandingPages(page, 9);
  const phoneHref = getPhoneHref(settings.phone);
  const whatsappMessage = [
    `Merhaba, ${page.keyword} için çiçek siparişi vermek istiyorum.`,
    "",
    `Bölge/Hizmet: ${page.name}`,
    `Sayfa: ${absoluteUrl(`/${page.slug}`)}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${normalizeWhatsappNumber(
    settings.whatsappNumber,
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  const structuredData = [
    buildLocalBusinessSchema(settings),
    buildBreadcrumbSchema([
      { name: "Ana sayfa", url: "/" },
      { name: page.name, url: `/${page.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(`/${page.slug}`)}#service`,
      name: page.seoTitle.replace(" | Sümbül Garden", ""),
      description: page.description,
      serviceType: [
        "Çiçekçi",
        "Çiçek siparişi",
        "Aynı gün çiçek gönderimi",
        "Florist",
      ],
      provider: {
        "@type": "Florist",
        name: "SÜMBÜL GARDEN",
        url: absoluteUrl("/"),
        telephone: settings.phone,
      },
      areaServed: {
        "@type": "Place",
        name: page.district,
      },
      url: absoluteUrl(`/${page.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `${page.name} için aynı gün çiçek gönderimi yapılır mı?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Uygun ürün ve teslimat saatlerinde ${page.name} için aynı gün çiçek gönderimi planlanabilir. Sipariş öncesinde adres ve saat bilgisi WhatsApp veya telefonla teyit edilir.`,
          },
        },
        {
          "@type": "Question",
          name: `${page.name} çiçek siparişi nasıl verilir?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünleri inceleyip WhatsApp sipariş butonuyla ürün adı, teslimat adresi, alıcı bilgisi ve kart notunu paylaşabilirsiniz. Acil siparişlerde telefonla arama önerilir.",
          },
        },
      ],
    },
  ];

  return (
    <main>
      <section className="container-edge pt-6">
        <div className="rounded-[2.4rem] border border-white/60 bg-white/80 px-5 py-12 shadow-card backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            <MapPin className="h-4 w-4" />
            İstanbul Avrupa Yakası
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-5xl leading-tight text-foreground sm:text-7xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/68 sm:text-lg">
                {page.description} Öncelikli teslimat bölgeleri arasında Başakşehir, Bahçeşehir,
                Esenkent, Esenyurt, Avcılar, Tahtakale ve Ispartakule bulunur.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappUrl} target="_blank" rel="noreferrer">
                    WhatsApp ile sipariş ver
                    <MessageCircleMore className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href={phoneHref}>
                    Telefonla ara
                    <Phone className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-surface-outline bg-white/76 p-5">
              <p className="text-sm font-semibold text-foreground">Hızlı bağlantılar</p>
              <div className="mt-4 grid gap-2">
                <Link
                  href="/"
                  className="flex items-center justify-between rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
                >
                  <span className="inline-flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Ana sayfa
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-between rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
                >
                  <span className="inline-flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Ürünler ve kategoriler
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/iletisim"
                  className="flex items-center justify-between rounded-[1rem] border border-surface-outline bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-brand-muted hover:text-brand"
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    İletişim ve konum
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Aynı gün çiçek gönderimi",
            "WhatsApp ile hızlı sipariş",
            "Buket, orkide ve özel gün çiçekleri",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] border border-white/60 bg-white/78 p-5 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <p className="mt-3 text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edge section-space pt-0">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-foreground/45">
              Hizmet özeti
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/68">
              <p>
                <strong className="text-foreground">Bölge:</strong> {page.name}
              </p>
              <p>
                <strong className="text-foreground">Yakın bölgeler:</strong>{" "}
                {page.nearby.join(", ")}
              </p>
              <p>
                <strong className="text-foreground">Ürünler:</strong> buket çiçek, saksı
                çiçekleri, orkide, gül buketi, çelenk ve özel gün aranjmanları.
              </p>
              <p>
                <strong className="text-foreground">Sipariş:</strong> WhatsApp veya telefonla hızlı
                bilgi, ürün seçimi ve teslimat teyidi.
              </p>
            </div>
          </aside>

          <div className="space-y-8">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl sm:p-8"
              >
                <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-foreground/68 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edge section-space pt-0">
        <div className="rounded-[1.8rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-foreground/45">
                İç linkleme
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                Benzer çiçekçi aramaları
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-brand">
              Tüm ürünleri incele
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage.slug}
                href={`/${relatedPage.slug}`}
                className="rounded-full border border-surface-outline bg-white px-4 py-2 text-sm text-foreground/68 transition hover:border-brand/30 hover:bg-brand-muted hover:text-brand"
              >
                {relatedPage.keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
