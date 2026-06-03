"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { getBlurDataURL } from "@/lib/utils";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_120px]">
      <motion.div
        layout
        className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-card"
      >
        <Image
          src={activeImage}
          alt={title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          placeholder="blur"
          blurDataURL={getBlurDataURL()}
        />
      </motion.div>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/60"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={getBlurDataURL()}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
