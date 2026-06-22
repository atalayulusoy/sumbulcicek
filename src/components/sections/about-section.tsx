import { Leaf, MessageCircleMore, Truck } from "lucide-react";

import { Reveal } from "@/components/interactive/reveal";
import { Card, CardContent } from "@/components/ui/card";
import type { SiteSettings } from "@/lib/types";

const perks = [
  {
    icon: Leaf,
    title: "SÜMBÜL PEYZAJ planlama",
    description: "Bahçe ve dış mekanlar için bitkilendirme, alan kullanım senaryosu ve uygulama planları SÜMBÜL PEYZAJ ekibi tarafından hazırlanıyor.",
  },
  {
    icon: Truck,
    title: "Yerinde keşif",
    description: "Bahçeşehir, Bahçekent, Başakşehir ve Esenyurt çevresinde peyzaj işleri için yerinde keşif ve planlama akışı sunulur.",
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp talep akışı",
    description: "Sipariş veya keşif talebi tek tıkla hazır WhatsApp mesajına dönüşür.",
  },
];

export function AboutSection({ settings }: { settings: SiteSettings }) {
  return (
    <section id="hakkimizda" className="container-edge section-space">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="rounded-[2.2rem] border border-white/60 bg-white/75 p-8 shadow-card backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Hakkımızda</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {settings.aboutTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/68">
              {settings.aboutText}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.6rem] bg-brand-muted/80 p-5">
                <p className="text-3xl font-semibold text-brand">60 sn</p>
                <p className="mt-2 text-sm text-foreground/65">WhatsApp sipariş akışı</p>
              </div>
              <div className="rounded-[1.6rem] bg-brand-rose/75 p-5">
                <p className="text-3xl font-semibold text-brand">7/24</p>
                <p className="mt-2 text-sm text-foreground/65">Sipariş ve keşif hattı</p>
              </div>
              <div className="rounded-[1.6rem] bg-[#eff6fb] p-5">
                <p className="text-3xl font-semibold text-brand">100%</p>
                <p className="mt-2 text-sm text-foreground/65">2010&apos;dan beri deneyim</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {perks.map((perk, index) => (
            <Reveal key={perk.title} delay={index * 0.08}>
              <Card className="h-full">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                    <perk.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{perk.title}</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/65">{perk.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
