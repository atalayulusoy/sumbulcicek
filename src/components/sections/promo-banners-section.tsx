import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import type { Banner } from "@/lib/types";

export function PromoBannersSection({ banners }: { banners: Banner[] }) {
  return (
    <section className="container-edge section-space pt-2">
      <Reveal className="mb-8">
        <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Kampanyalar</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Story hissi veren kampanya alanlari</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {banners.map((banner, index) => (
          <Reveal key={banner.id} delay={index * 0.08}>
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/60 shadow-card">
              <div className="absolute inset-0">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#112017]/70" />
              <div className="relative flex min-h-[330px] flex-col justify-end gap-4 p-6 text-white">
                <h3 className="max-w-sm text-2xl font-semibold">{banner.title}</h3>
                <p className="max-w-sm text-sm leading-7 text-white/82">{banner.subtitle}</p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-fit bg-white/18 text-white hover:bg-white/25"
                >
                  <Link href={banner.buttonLink}>
                    {banner.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
