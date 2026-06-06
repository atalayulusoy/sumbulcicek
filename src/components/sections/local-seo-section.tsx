import Link from "next/link";
import { MapPin, MessageCircleMore, PartyPopper, Sprout } from "lucide-react";

import type { SiteSettings } from "@/lib/types";

const seoCards = [
  {
    icon: MessageCircleMore,
    title: "Başakşehir çiçekçi",
    description:
      "Kayabaşı, Başakşehir, Bahçeşehir ve Bahçekent çevresi için buket, kutu çiçek, orkide ve özel gün çiçekleri WhatsApp üzerinden hazırlanır.",
    href: "/products",
  },
  {
    icon: PartyPopper,
    title: "Organizasyon ve balon süsleme",
    description:
      "Baby shower, kız isteme, nişan, düğün, doğum günü ve parti konseptleri için balon çeşitleri ve süsleme seçeneklerini inceleyin.",
    href: "/organizasyon",
  },
  {
    icon: Sprout,
    title: "Peyzaj ve bahçe düzenleme",
    description:
      "Bahçe tasarımı, rulo çim, bitkilendirme, otomatik sulama ve dış mekan düzenleme işleri için yerinde keşif talebi oluşturun.",
    href: "/peyzaj",
  },
];

export function LocalSeoSection({ settings }: { settings: SiteSettings }) {
  return (
    <section className="container-edge pb-16">
      <div className="rounded-[2rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              <MapPin className="h-4 w-4 text-brand" />
              Başakşehir Kayabaşı
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              SÜMBÜL GARDEN çiçekçilik, peyzaj ve organizasyon hizmetleri
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/68 sm:text-base">
              {settings.address} adresindeki SÜMBÜL GARDEN; çiçek siparişi, Sevgililer Günü
              çiçekleri, kutu çiçekler, salon bitkileri, peyzaj tasarım ve özel gün organizasyonları
              için Başakşehir ve İstanbul çevresinde hizmet verir.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
          >
            İletişim bilgileri
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {seoCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.4rem] border border-surface-outline bg-white/74 p-5 transition hover:-translate-y-0.5 hover:bg-brand-muted"
            >
              <card.icon className="h-5 w-5 text-brand" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/62">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
