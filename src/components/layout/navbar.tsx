"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, PackageCheck, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildOrderTrackingUrl } from "@/lib/whatsapp";
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

const balloonSlugs = new Set([
  "balon-folyo-balon",
  "ucan-balon-demetleri",
  "kisiye-ozel-balon-buket-aranjmanlari",
  "zincir-balon-setleri",
  "rakam-folyo-balon",
  "dogum-gunu-balonlari",
  "karakter-temali-dogum-gunu-balonlari",
  "harf-folyo-balon",
  "duz-renkli-balonlar",
  "krom-balon",
  "konfetili-balon",
  "ayakli-balon-standi",
  "toptan-balon",
]);

const partySlugs = new Set([
  "parti-gozlugu",
  "parti-sapkalari",
  "konusma-balonlari",
  "parti-taclari",
  "konfetiler",
  "dogum-gunu-mumlari",
  "parti-kostumu",
  "pinyatalar",
  "hediyelik-canta",
  "parti-maskeleri",
  "dogum-gunu-afisleri",
]);

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
          active ? "bg-brand-muted text-brand" : "text-foreground/70 hover:bg-brand-muted/70 hover:text-brand",
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
  const [mobileExpanded, setMobileExpanded] = useState<
    "flowers" | "landscape" | "balloons" | "party" | null
  >(null);
  const [scrolled, setScrolled] = useState(false);
  const orderTrackingUrl = buildOrderTrackingUrl(settings.whatsappNumber);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { flowerCategories, landscapeCategories, balloonCategories, partyCategories } = useMemo(() => {
    const landscape = categories.filter(isLandscapeCategory);
    const balloons = categories.filter((category) => balloonSlugs.has(category.slug));
    const party = categories.filter((category) => partySlugs.has(category.slug));
    const flowers = categories.filter(
      (category) =>
        !isLandscapeCategory(category) &&
        !balloonSlugs.has(category.slug) &&
        !partySlugs.has(category.slug),
    );

    return {
      flowerCategories: flowers,
      landscapeCategories: landscape,
      balloonCategories: balloons,
      partyCategories: party,
    };
  }, [categories]);

  const normalNavItems = [
    { label: "Kutu Çiçekler", href: "/products?category=kutu-cicekler" },
    { label: "Salon Bitkileri", href: "/products?category=salon-bitkileri" },
    { label: "Vazolar ve Saksılar", href: "/products?category=vazolar-ve-saksilar" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "container-edge max-w-[1280px] rounded-[2rem] border transition-all duration-300",
          scrolled
            ? "border-white/55 bg-white/84 py-3 shadow-card backdrop-blur-2xl dark:border-white/10 dark:bg-[#12211acc]"
            : "border-white/35 bg-white/64 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#12211aa8]",
        )}
      >
        <div className="flex flex-wrap items-center gap-2 xl:gap-3">
          <Link href="/" className="flex min-w-fit items-center gap-2 xl:gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-brand/10 bg-[#f5f1e8] shadow-glow xl:h-12 xl:w-12">
              <Image src="/sumbul-logo.png" alt="SÜMBÜL GARDEN logo" fill className="object-cover" />
            </div>
            <div>
              <p className="font-display text-xl leading-none tracking-wide xl:text-2xl">SÜMBÜL GARDEN</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/45 xl:text-xs xl:tracking-[0.28em]">
                çiçekçilik & peyzaj
              </p>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center gap-2 lg:flex xl:gap-3">
            <nav className="flex min-w-0 flex-1 items-center justify-end gap-0.5 xl:gap-1">
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
              {normalNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-2 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-brand-muted/70 hover:text-brand xl:px-3"
                >
                  {item.label}
                </Link>
              ))}
              <DesktopDropdown
                active={pathname === "/products"}
                href="/products?category=balon-folyo-balon"
                label="Balon Çeşitleri"
                items={balloonCategories}
              />
              <DesktopDropdown
                active={pathname === "/products"}
                href="/products?category=parti-gozlugu"
                label="Parti Malzemeleri"
                items={partyCategories}
              />
            </nav>

            <Button asChild size="sm" variant="secondary" className="shrink-0 px-3 text-xs xl:px-4">
              <Link href={orderTrackingUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap">
                <PackageCheck className="h-4 w-4" />
                Sipariş Takibi
              </Link>
            </Button>
          </div>

          <div className="hidden w-full justify-end 2xl:flex mt-2">
            <form action="/products" className="relative min-w-[6.5rem] w-[72px] shrink-0">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-foreground/40" />
              <input
                type="search"
                name="query"
                placeholder="Ara"
                className="h-9 w-full rounded-full border border-surface-outline bg-white/80 pl-8 pr-2 text-[11px] outline-none ring-0 transition focus:border-brand/30 focus:ring-4 focus:ring-brand/10"
              />
            </form>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-outline bg-white/80 lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Menüyü aç"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <form action="/products" className="relative mt-4">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                <input
                  type="search"
                  name="query"
                  placeholder="Çiçek ara"
                  className="h-12 w-full rounded-full border border-surface-outline bg-white/90 pl-11 pr-4 text-sm outline-none"
                />
              </form>

              <nav className="mt-4 grid gap-2">
                <button
                  type="button"
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium"
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
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium"
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

                {normalNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium"
                  onClick={() =>
                    setMobileExpanded((current) => (current === "balloons" ? null : "balloons"))
                  }
                >
                  Balon Çeşitleri
                  <ChevronDown className={cn("h-4 w-4 transition", mobileExpanded === "balloons" && "rotate-180")} />
                </button>
                {mobileExpanded === "balloons" ? (
                  <div className="grid gap-1 rounded-2xl bg-white/70 p-2">
                    {balloonCategories.map((category) => (
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
                  className="flex items-center justify-between rounded-2xl border border-surface-outline bg-white/75 px-4 py-3 text-left text-sm font-medium"
                  onClick={() =>
                    setMobileExpanded((current) => (current === "party" ? null : "party"))
                  }
                >
                  Parti Malzemeleri
                  <ChevronDown className={cn("h-4 w-4 transition", mobileExpanded === "party" && "rotate-180")} />
                </button>
                {mobileExpanded === "party" ? (
                  <div className="grid gap-1 rounded-2xl bg-white/70 p-2">
                    {partyCategories.map((category) => (
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
              </nav>

              <Button asChild className="mt-4 w-full">
                <Link href={orderTrackingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  Sipariş Takibi
                </Link>
              </Button>

              <Button asChild className="mt-3 w-full" variant="secondary">
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
