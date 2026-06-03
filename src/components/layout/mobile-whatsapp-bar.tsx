import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import type { SiteSettings } from "@/lib/types";

export function MobileWhatsappBar({ settings }: { settings: SiteSettings }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <Link
        href={`https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, "")}`}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-[#5fa47d] px-5 py-4 text-sm font-semibold text-white shadow-card"
      >
        <MessageCircleMore className="h-4 w-4" />
        WhatsApp Sipariş Hattı
      </Link>
    </div>
  );
}
