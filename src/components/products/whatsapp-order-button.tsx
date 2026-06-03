import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import { cn } from "@/lib/utils";
import { buildWhatsappUrl } from "@/lib/whatsapp";

interface WhatsappOrderButtonProps {
  productTitle: string;
  price: number;
  productUrl: string;
  whatsappNumber: string;
  className?: string;
}

export function WhatsappOrderButton({
  productTitle,
  price,
  productUrl,
  whatsappNumber,
  className,
}: WhatsappOrderButtonProps) {
  const href = buildWhatsappUrl({
    phone: whatsappNumber,
    title: productTitle,
    price,
    link: productUrl,
  });

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-[#5a9d77] px-5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-card",
        className,
      )}
    >
      <MessageCircleMore className="h-4 w-4" />
      WhatsApp ile Sipariş Ver
    </Link>
  );
}
