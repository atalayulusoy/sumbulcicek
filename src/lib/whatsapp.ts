import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants";

interface WhatsappOrderPayload {
  phone?: string | null;
  title: string;
  price: number;
  link: string;
}

export function normalizeWhatsappNumber(value?: string | null) {
  return (value || DEFAULT_WHATSAPP_NUMBER).replace(/[^\d]/g, "");
}

export function buildWhatsappMessage({ title, price, link }: Omit<WhatsappOrderPayload, "phone">) {
  return [
    "Merhaba, şu ürün veya hizmet için bilgi almak istiyorum:",
    "",
    `Ürün: ${title}`,
    `Fiyat: ${price.toLocaleString("tr-TR")} TL`,
    `Link: ${link}`,
  ].join("\n");
}

export function buildWhatsappUrl({ phone, title, price, link }: WhatsappOrderPayload) {
  const normalizedPhone = normalizeWhatsappNumber(phone);
  const message = buildWhatsappMessage({ title, price, link });
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
