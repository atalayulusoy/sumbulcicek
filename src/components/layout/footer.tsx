import Link from "next/link";
import { AtSign, MapPin, PackageCheck, Phone, Send } from "lucide-react";

import { workingHours } from "@/lib/constants";
import { buildOrderTrackingUrl } from "@/lib/whatsapp";
import type { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const orderTrackingUrl = buildOrderTrackingUrl(settings.whatsappNumber);

  return (
    <footer id="iletisim" className="container-edge pb-10 pt-16">
      <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-3xl">SÜMBÜL GARDEN</p>
            <p className="max-w-xl text-sm leading-7 text-foreground/70">{settings.footerText}</p>
            <p className="text-sm text-foreground/55">{settings.deliveryInfo}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">
              İletişim
            </p>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brand" />
                <span>{settings.phone ?? "+90 530 635 27 19"}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                <span>{settings.address ?? "Nisantasi, Istanbul"}</span>
              </div>
              <div className="flex items-start gap-3">
                <Send className="mt-0.5 h-4 w-4 text-brand" />
                <Link href={`https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, "")}`}>
                  WhatsApp Sipariş Hattı
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-0.5 h-4 w-4 text-brand" />
                <Link href={orderTrackingUrl} target="_blank" rel="noreferrer">
                  Sipariş Takibi
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">
              Sosyal ve Saatler
            </p>
            <div className="space-y-3 text-sm text-foreground/70">
              <Link href={settings.instagram ?? "#"} className="flex items-center gap-3">
                <AtSign className="h-4 w-4 text-brand" />
                Instagram
              </Link>
              {workingHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
