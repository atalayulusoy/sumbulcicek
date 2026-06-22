"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { organizationCategorySlugs } from "@/lib/organization";
import { cn } from "@/lib/utils";
import type { Category, SiteSettings } from "@/lib/types";

interface NavbarProps {
  categories: Category[];
  settings: SiteSettings;
}

const defaultLandscapeSlugs = new Set([
  "peyzaj-tasarim",
  "bahce-uygulama",
  "peyzaj-bitkileri",
  "rulo-cim",
  "otomatik-sulama",
  "dikey-bahce",
]);

const organizationSlugs = new Set(organizationCategorySlugs);

function isLandscapeCategory(category: Category) {
  const searchable = `${category.slug} ${category.name}`.toLocaleLowerCase("tr-TR");

  return (
    defaultLandscapeSlugs.has(category.slug) ||
    searchable.includes("peyzaj") ||
    searchable.includes("bahçe") ||
    searchable.includes("bahce") ||
    searchable.includes("çim") ||
    searchable.includes("cim") ||
    searchable.includes("sulama") ||
    searchable.includes("dikey")
  );
}

function DesktopDropdown({
  active,
  href,
  label,
  items,
}: {
  active: boolean;
  href: string;
  label: string;
  items: Category[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={cn(
          "inline-flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-colors xl:px-3",
          active ? "bg-brand-muted text-brand" : "text-white/80 hover:bg-white/10 hover:text-white",
        )}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
        <div className="mx-auto h-3 w-3 rotate-45 border-l border-t border-surface-outline bg-white" />
        <div className="-mt-1 max-h-[72vh] overflow-y-auto rounded-md border border-surface-outline bg-white py-3 shadow-float">
          {items.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="block px-5 py-2.5 text-sm font-medium text-[#101b14] transition hover:bg-[#eef3ea] hover:text-brand"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar({ categories, settings }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"flowers" | "landscape" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { flowerCategories, landscapeCategories } = useMemo(() => {
    const landscape = categories.filter(isLandscapeCategory);
    const flowers = categories.filter(
      (category) =>
        !isLandscapeCategory(category) &&
        !organizationSlugs.has(category.slug),
    );

    return {
      flowerCategories: flowers,
      landscapeCategories: landscape,
    };
  }, [categories]);

  const pageNavItems = [
    { label: "Organizasyon", href: "/organizasyon" },
    { label: "Referanslarımız", href: "/referanslar" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "container-edge max-w-[1280px] rounded-[2rem] border text-white transition-all duration-300",
          scrolled
            ? "border-[#1e372d] bg-[#19392b]/95 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
            : "border-[#2b4e3f] bg-[#1f3c2f]/95 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl",
        )}
      >
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-3xl border border-white/15 bg-[#f5f1e8] shadow-glow xl:h-16 xl:w-16">
                <Image src="/sumbul-logo.png" alt="SÜMBÜL GARDEN logo" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-2xl font-semibold tracking-wide text-white xl:text-3xl">
                  SÜMBÜL GARDEN
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-white/70 xl:text-sm">
                  çiçekçilik & peyzaj
                </p>
              </div>
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white xl:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label="Menüyü aç"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-between gap-4 xl:flex">
            <nav className="flex flex-nowrap items-center gap-2 whitespace-nowrap">
              <DesktopDropdown
                active={pathname === "/peyzaj"}
                href="/peyzaj"
                label="Peyzaj"
                items={landscapeCategories}
              />
              <DesktopDropdown
                active={pathname === "/products"}
                href="/products"
                label="Çiçeklerimiz"
                items={flowerCategories}
              />
              {pageNavItems.map((item) => {
                const active =
                  item.href === "/organizasyon" ? pathname.startsWith("/organizasyon") : pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      active ? "bg-white text-brand" : "text-white/80 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <form action="/products" className="relative w-[12rem]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/60" />
                <input
                  type="search"
                  name="query"
                  placeholder="Ara"
                  className="h-10 w-full rounded-full border border-white/15 bg-white/10 px-10 pr-3 text-sm text-white outline-none ring-0 transition placeholder:text-white/60 focus:border-brand/30 focus:ring-4 focus:ring-brand/15"
                />
              </form>

            </div>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden xl:hidden"
            >
              <form action="/products" className="relative mt-4">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                <input
                  type="search"
                  name="query"
                  placeholder="Çiçek ara"
                  className="h-12 w-full rounded-full border border-surface-outline bg-white/90 pl-11 pr-4 text-sm text-foreground outline-none"
                />
              </form>

              <nav className="mt-4 grid gap-2">
                <button
                  type="button"
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium text-foreground"
                  onClick={() =>
                    setMobileExpanded((current) => (current === "landscape" ? null : "landscape"))
                  }
                >
                  Peyzaj
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition",
                      mobileExpanded === "landscape" && "rotate-180",
                    )}
                  />
                </button>
                {mobileExpanded === "landscape" ? (
                  <div className="grid gap-1 rounded-2xl bg-white/70 p-2">
                    <Link
                      href="/peyzaj"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-brand"
                      onClick={() => setOpen(false)}
                    >
                      Peyzaj İşlerim
                    </Link>
                    {landscapeCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/products?category=${category.slug}`}
                        className="rounded-xl px-3 py-2 text-sm text-foreground/70"
                        onClick={() => setOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                ) : null}

                <button
                  type="button"
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium text-foreground"
                  onClick={() =>
                    setMobileExpanded((current) => (current === "flowers" ? null : "flowers"))
                  }
                >
                  Çiçeklerimiz
                  <ChevronDown
                    className={cn("h-4 w-4 transition", mobileExpanded === "flowers" && "rotate-180")}
                  />
                </button>
                {mobileExpanded === "flowers" ? (
                  <div className="grid grid-cols-2 gap-1 rounded-2xl bg-white/70 p-2">
                    <Link
                      href="/products"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-brand"
                      onClick={() => setOpen(false)}
                    >
                      Tüm Çiçekler
                    </Link>
                    {flowerCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/products?category=${category.slug}`}
                        className="rounded-xl px-3 py-2 text-sm text-foreground/70"
                        onClick={() => setOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                ) : null}

                {pageNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-sm font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Button asChild className="mt-4 w-full" variant="secondary">
                <Link href={`https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, "")}`}>
                  WhatsApp ile İletişime Geç
                </Link>
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
