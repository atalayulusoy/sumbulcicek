"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import type { Banner, SiteSettings } from "@/lib/types";

interface HeroSliderProps {
  banners: Banner[];
  settings: SiteSettings;
}

export function HeroSlider({ banners, settings }: HeroSliderProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const fallbackTitle = settings.heroTitle || "SÜMBÜL GARDEN";
  const fallbackSubtitle =
    settings.heroSubtitle ||
    "Taze çiçekleri ve SÜMBÜL PEYZAJ dış mekan uygulamalarını aynı zarif vitrinde keşfedin.";

  useEffect(() => {
    if (!backgroundRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(".hero-image", {
        scale: 1.04,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, backgroundRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container-edge pt-6">
      <div
        ref={backgroundRef}
        className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-[#07170f] shadow-card"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          speed={850}
          autoplay={{ delay: 4800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="min-h-[620px]"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative grid min-h-[620px] items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
                <Image
                  src={banner.image}
                  alt=""
                  fill
                  className="hero-image object-cover opacity-35"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06130d]/96 via-[#06130d]/82 to-[#06130d]/36" />
                <motion.div
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 max-w-2xl space-y-6 text-white"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
                    <Sparkles className="h-3.5 w-3.5 text-[#d8b081]" />
                    SÜMBÜL GARDEN x SÜMBÜL PEYZAJ
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-balance max-w-[13ch] font-display text-[2.95rem] leading-[1.14] text-white sm:text-[4rem] sm:leading-[1.1] lg:text-[4.6rem] lg:leading-[1.08]">
                      {banner.title || fallbackTitle}
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                      {banner.subtitle || fallbackSubtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link href={banner.buttonLink}>
                        {banner.buttonText}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/peyzaj">Peyzaj İşlerim</Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 28, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.9 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.1rem] border border-white/25 shadow-float">
                    <Image src={banner.image} alt={banner.title} fill className="object-cover" priority />
                  </div>
                  <motion.div
                    className="absolute -bottom-4 -left-3 hidden rounded-[1.5rem] border border-white/25 bg-white/88 px-5 py-4 shadow-card backdrop-blur-2xl md:block"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                      Sipariş akışı
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground/80">
                      Ürünü seç, fiyatı gör, WhatsApp ile ilet.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
