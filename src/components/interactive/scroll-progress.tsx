"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  return <motion.div className="fixed left-0 top-0 z-[80] h-1 origin-left bg-brand" style={{ scaleX }} />;
}
