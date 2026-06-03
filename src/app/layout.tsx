import { Suspense, type CSSProperties, type ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { MobileWhatsappBar } from "@/components/layout/mobile-whatsapp-bar";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/components/providers/app-providers";
import { buildMetadata } from "@/lib/metadata";
import { getCategories, getSiteSettings } from "@/lib/services/storefront";

const sans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
});

const display = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-display",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return buildMetadata({
    title: settings.metaTitle,
    description: settings.metaDescription,
    pathname: "/",
  });
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [categories, settings] = await Promise.all([getCategories(), getSiteSettings()]);

  const themeStyles = {
    "--brand-primary": settings.primaryColor ?? "#3d7a59",
    "--brand-secondary": settings.secondaryColor ?? "#eef3ea",
    "--brand-accent": settings.accentColor ?? "#f7c7d7",
  } as CSSProperties;

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} antialiased`} style={themeStyles}>
        <AppProviders>
          <div className="relative min-h-screen">
            <Suspense fallback={<div className="px-4 pt-4" />}>
              <Navbar categories={categories} settings={settings} />
            </Suspense>
            <main className="pb-24 md:pb-0">{children}</main>
            <Footer settings={settings} />
            <MobileWhatsappBar settings={settings} />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
