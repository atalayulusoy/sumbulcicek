import Image from "next/image";
import Link from "next/link";

import type { QuickLink } from "@/lib/types";

interface HomeFlowerShowcaseProps {
  quickLinks: QuickLink[];
}

const showcaseTiles = [
  {
    title: "Çiçek Aranjmanları",
    href: "/products?category=kutu-cicekler",
    image: "/home/flowers/arrangements.jpg",
    className: "md:col-span-6 min-h-[240px] md:min-h-[300px]",
  },
  {
    title: "Kutlama Çiçekleri",
    href: "/products?category=dogum-gunu",
    image: "/home/flowers/celebration.jpg",
    className: "md:col-span-6 min-h-[240px] md:min-h-[300px]",
  },
  {
    title: "Çok Satanlar",
    href: "/products",
    image: "/home/flowers/best-sellers.jpg",
    className: "md:col-span-4 min-h-[200px] md:min-h-[230px]",
  },
  {
    title: "Çiçek Buketleri",
    href: "/products?category=sevgililer-gunu-cicekleri",
    image: "/home/flowers/bouquets.jpg",
    className: "md:col-span-4 min-h-[200px] md:min-h-[230px]",
  },
  {
    title: "Orkideler",
    href: "/products?category=salon-bitkileri",
    image: "/home/flowers/orchids.jpg",
    className: "md:col-span-4 min-h-[200px] md:min-h-[230px]",
  },
];

export function HomeFlowerShowcase({ quickLinks }: HomeFlowerShowcaseProps) {
  const visibleQuickLinks = quickLinks
    .filter((quickLink) => quickLink.isActive)
    .sort((first, second) => first.order - second.order)
    .slice(0, 12);

  return (
    <section className="bg-white">
      <div className="container-edge py-5">
        <div className="relative border-b border-[#ededed] pb-5">
          <div className="grid grid-cols-3 gap-x-4 gap-y-5 px-1 sm:grid-cols-5 lg:grid-cols-9">
            {visibleQuickLinks.map((quickLink) => (
              <Link
                key={quickLink.id}
                href={quickLink.href}
                className="min-w-0 text-center"
              >
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

        <div className="grid grid-cols-1 gap-5 pb-8 md:grid-cols-12">
          {showcaseTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className={`${tile.className} group relative overflow-hidden rounded-lg bg-[#f6f6f6]`}
            >
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/65" />
              <h2 className="absolute bottom-5 right-5 max-w-[220px] rounded-md bg-white/75 px-4 py-3 text-right text-2xl font-medium leading-tight text-[#1e1e1e] shadow-sm backdrop-blur-sm md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:text-3xl">
                {tile.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
