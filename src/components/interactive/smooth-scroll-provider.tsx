"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
