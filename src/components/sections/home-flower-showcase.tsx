"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { HomeShowcaseSlide, QuickLink } from "@/lib/types";

interface HomeFlowerShowcaseProps {
  quickLinks: QuickLink[];
  slides: HomeShowcaseSlide[];
}

export function HomeFlowerShowcase({ quickLinks, slides }: HomeFlowerShowcaseProps) {
  const visibleQuickLinks = quickLinks
    .filter((quickLink) => quickLink.isActive)
    .sort((first, second) => first.order - second.order)
    .slice(0, 12);
  const visibleSlides = slides
    .filter((slide) => slide.isActive)
    .sort((first, second) => first.order - second.order);

  return (
    <section className="bg-white">
      <div className="container-edge py-5">
        <div className="relative border-b border-[#ededed] pb-5">
          <div className="grid grid-cols-3 gap-x-4 gap-y-5 px-1 sm:grid-cols-5 lg:grid-cols-9">
            {visibleQuickLinks.map((quickLink) => (
              <Link key={quickLink.id} href={quickLink.href} className="min-w-0 text-center">
                <span className="relative mx-auto block h-20 w-20 overflow-hidden rounded-full border-[3px] border-white bg-[#fbfaf6] outline outline-1 outline-[#222]">
                  <Image
                    src={quickLink.image}
                    alt={quickLink.title}
                    fill
                    className="object-contain p-1.5"
                  />
                </span>
                <span className="mt-2 block text-sm leading-tight text-[#575757]">{quickLink.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {visibleSlides.length > 0 ? (
          <div className="pb-8 pt-5">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1.1}
              spaceBetween={16}
              loop={visibleSlides.length > 3}
              speed={750}
              autoplay={{ delay: 3600, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                1180: { slidesPerView: 3, spaceBetween: 22 },
              }}
              className="pb-10"
            >
              {visibleSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Link
                    href={slide.href}
                    className="group relative block aspect-[16/9] overflow-hidden rounded-lg bg-[#f6f6f6]"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/8 to-white/55" />
                    <h2 className="absolute bottom-5 right-5 max-w-[220px] text-right text-2xl font-semibold leading-tight text-[#1e1e1e] drop-shadow-[0_2px_10px_rgba(255,255,255,0.92)]">
                      {slide.title}
                    </h2>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}
      </div>
    </section>
  );
}
