import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getFeaturedIstanbulAreas,
  getIstanbulDistrictGroups,
  istanbulAreaPages,
} from "@/lib/istanbul-areas";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "İstanbul Hizmet Bölgeleri",
  description:
    "SÜMBÜL GARDEN İstanbul ilçe ve mahallelerinde çiçekçi, peyzaj ve organizasyon hizmet bölgeleri.",
  image: "/og-sumbul-garden.jpg",
  pathname: "/bolge",
});

export default function AreaIndexPage() {
  const featuredAreas = getFeaturedIstanbulAreas();
  const districtGroups = getIstanbulDistrictGroups();
  const districtNames = Object.keys(districtGroups).sort((first, second) =>
    first.localeCompare(second, "tr-TR"),
  );
  const neighborhoodCount = istanbulAreaPages.filter((area) => area.type === "neighborhood").length;

  const structuredData = buildBreadcrumbSchema([
    { name: "Ana sayfa", url: "/" },
    { name: "Hizmet Bölgeleri", url: "/bolge" },
  ]);

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="rounded-[2.4rem] border border-white/60 bg-white/78 px-6 py-14 shadow-card backdrop-blur-xl lg:px-12">
          <Badge className="gap-2">
            <MapPin className="h-4 w-4" />
            İstanbul hizmet bölgeleri
          </Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-foreground sm:text-7xl">
            İstanbul çiçekçi, peyzaj ve organizasyon bölgeleri
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/68 sm:text-lg">
            SÜMBÜL GARDEN; Başakşehir, Bahçeşehir, Kayabaşı, Ispartakule, Esenyurt ve
            İstanbul genelinde çiçek siparişi, peyzaj keşfi, balon süsleme ve özel gün
            organizasyonu talepleri için bölge bazlı iletişim sağlar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/products">
                Çiçekleri incele
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/iletisim">İletişim bilgileri</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">
              Öne çıkan aramalar
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Yakın bölgeler
            </h2>
          </div>
          <p className="text-sm text-foreground/58">
            {districtNames.length} ilçe, {neighborhoodCount} mahalle
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/bolge/${area.slug}`}
              className="rounded-[1.4rem] border border-surface-outline bg-white/76 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-muted"
            >
              <p className="text-sm font-semibold text-brand">{area.district}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{area.name}</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/62">
                Çiçekçilik, peyzaj ve organizasyon hizmetleri için bölge sayfası.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-edge section-space pt-0">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">
            Tüm İstanbul
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            İlçe ve mahalle sayfaları
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {districtNames.map((district) => {
            const areas = districtGroups[district];
            const districtArea = areas.find((area) => area.type === "district");
            const neighborhoods = areas.filter((area) => area.type === "neighborhood");

            return (
              <details
                key={district}
                className="group rounded-[1.4rem] border border-surface-outline bg-white/76 p-5 shadow-sm open:bg-white/88"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    <span className="block text-lg font-semibold text-foreground">{district}</span>
                    <span className="text-sm text-foreground/55">
                      {neighborhoods.length} mahalle sayfası
                    </span>
                  </span>
                  <span className="rounded-full border border-surface-outline px-3 py-1 text-xs font-semibold text-brand">
                    Aç
                  </span>
                </summary>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-surface-outline pt-4">
                  {districtArea ? (
                    <Link
                      href={`/bolge/${districtArea.slug}`}
                      className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white"
                    >
                      {district} çiçekçi
                    </Link>
                  ) : null}
                  {neighborhoods.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/bolge/${area.slug}`}
                      className="rounded-full border border-surface-outline bg-white px-4 py-2 text-sm text-foreground/68 transition hover:border-brand/30 hover:bg-brand-muted hover:text-brand"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
