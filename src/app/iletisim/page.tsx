import Link from "next/link";
import { AtSign, Clock3, ExternalLink, MapPin, MessageCircleMore, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { workingHours } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  return buildMetadata({
    title: "İletişim",
    description: "SÜMBÜL GARDEN adres, telefon, WhatsApp, Instagram ve harita bilgileri.",
    image: "/og-sumbul-garden.jpg",
    pathname: "/iletisim",
  });
}

const fallbackAddress =
  "Kayabaşı Mh. Gazi Yaşargil Cd. Park Mavera 1 Sitesi T8/14 Blok Dükkan No 15 AO Başakşehir/İstanbul";

function normalizeInstagramUrl(value: string | null) {
  if (!value) return "https://www.instagram.com/sumbulgarden";

  const trimmed = value.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  const handle = trimmed.replace(/^@/, "").replace(/^instagram\.com\//, "");
  return `https://www.instagram.com/${handle}`;
}

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const address = settings.address || fallbackAddress;
  const phone = settings.phone || "+90 530 635 27 19";
  const whatsappDigits = settings.whatsappNumber.replace(/[^\d]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappDigits}`;
  const instagramUrl = normalizeInstagramUrl(settings.instagram);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div>
      <section className="container-edge pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-[2.4rem] bg-[#173827] px-6 py-12 text-white shadow-card lg:px-10">
            <p className="text-sm uppercase tracking-[0.26em] text-white/60">İletişim</p>
            <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">
              SÜMBÜL GARDEN ile iletişime geçin.
            </h1>
            <p className="mt-5 text-base leading-8 text-white/74">
              Çiçek siparişi, peyzaj keşfi, organizasyon ve mağaza ziyareti için telefon, WhatsApp
              veya Instagram üzerinden bize ulaşabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={instagramUrl} target="_blank" rel="noreferrer">
                  <AtSign className="h-4 w-4" />
                  Instagram
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/78 shadow-card backdrop-blur-xl">
            <iframe
              src={mapSrc}
              title="SÜMBÜL GARDEN konum haritası"
              className="h-[420px] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="container-edge section-space">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
            <Phone className="h-6 w-6 text-brand" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Telefon
            </p>
            <Link href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-2 block text-lg font-semibold">
              {phone}
            </Link>
          </div>

          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
            <Send className="h-6 w-6 text-brand" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              WhatsApp
            </p>
            <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold">
              Sipariş ve keşif hattı
            </Link>
          </div>

          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
            <AtSign className="h-6 w-6 text-brand" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Instagram
            </p>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-lg font-semibold"
            >
              Profili aç
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[1.6rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
            <Clock3 className="h-6 w-6 text-brand" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Çalışma Saatleri
            </p>
            <div className="mt-2 space-y-1 text-sm leading-7 text-foreground/68">
              {workingHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.8rem] border border-white/60 bg-white/78 p-6 shadow-card backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
                <MapPin className="h-5 w-5 text-brand" />
                Konum
              </div>
              <p className="mt-3 text-lg leading-8 text-foreground/74">{address}</p>
            </div>
            <Button asChild variant="secondary">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
              >
                Haritada aç
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
