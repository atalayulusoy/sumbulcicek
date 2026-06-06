"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Banner, HomeShowcaseSlide, QuickLink } from "@/lib/types";

interface HomeFlowerShowcaseProps {
  banners: Banner[];
  quickLinks: QuickLink[];
  slides: HomeShowcaseSlide[];
}

export function HomeFlowerShowcase({ banners, quickLinks, slides }: HomeFlowerShowcaseProps) {
  const visibleQuickLinks = quickLinks
    .filter((quickLink) => quickLink.isActive)
    .sort((first, second) => first.order - second.order)
    .slice(0, 12);
  const visibleBanners = banners
    .filter((banner) => banner.isActive)
    .sort((first, second) => first.order - second.order);
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

        {visibleBanners.length > 0 ? (
          <div className="py-5">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              loop={visibleBanners.length > 1}
              speed={850}
              autoplay={{ delay: 4600, disableOnInteraction: false }}
              navigation={visibleBanners.length > 1}
              pagination={{ clickable: true }}
              className="home-banner-swiper pb-11"
            >
              {visibleBanners.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <Link
                    href={banner.buttonLink || "/products"}
                    className="group relative block min-h-[230px] overflow-hidden rounded-[1.35rem] bg-[#f6f6f6] shadow-[0_18px_54px_rgba(24,42,32,0.12)] sm:aspect-[16/5] sm:min-h-[260px]"
                  >
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      sizes="(min-width: 1280px) 1216px, calc(100vw - 32px)"
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06130d]/72 via-[#06130d]/28 to-transparent" />
                    <div className="absolute bottom-5 left-5 max-w-[620px] pr-5 text-white sm:bottom-8 sm:left-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/74">
                        {banner.buttonText}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-4xl">
                        {banner.title}
                      </h2>
                      <p className="mt-3 hidden max-w-xl text-sm leading-6 text-white/82 sm:block">
                        {banner.subtitle}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}

        {visibleSlides.length > 0 ? (
          <div className="pb-8 pt-1">
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
              className="home-showcase-swiper pb-10"
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
