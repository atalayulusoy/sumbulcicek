import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

export function stringifyDate(value: Date | string) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

export function parseImages(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item)).filter(Boolean);
  }

  if (typeof value === "string" && value.length > 0) {
    return [value];
  }

  return [];
}

function toBase64(value: string) {
  if (typeof window === "undefined") {
    return Buffer.from(value).toString("base64");
  }

  return window.btoa(value);
}

export function getBlurDataURL(seed = "#eef8f0") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${seed}" offset="20%" />
          <stop stop-color="#f7d3de" offset="80%" />
        </linearGradient>
      </defs>
      <rect width="40" height="24" fill="url(#g)" />
    </svg>
  `;

  return `data:image/svg+xml;base64,${toBase64(svg)}`;
}

export function pick<T>(items: T[], count: number) {
  return items.slice(0, count);
}
