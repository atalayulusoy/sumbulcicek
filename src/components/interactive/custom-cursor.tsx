"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setEnabled(mediaQuery.matches);

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-7 w-7 rounded-full border border-brand/35 bg-white/20 backdrop-blur-md md:block"
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        scale: active ? 1 : 0.9,
        opacity: active ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
    />
  );
}
