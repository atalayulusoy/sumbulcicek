import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "var(--brand-primary)",
          muted: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          ink: "var(--brand-ink)",
          rose: "var(--brand-rose)",
          mist: "var(--brand-mist)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          glass: "var(--surface-glass)",
          outline: "var(--surface-outline)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        glow: "0 18px 50px rgba(55, 112, 86, 0.15)",
        card: "0 24px 64px rgba(27, 44, 37, 0.14)",
        float: "0 22px 55px rgba(255, 120, 171, 0.18)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(197, 255, 224, 0.45), transparent 34%), radial-gradient(circle at 80% 20%, rgba(255, 205, 226, 0.55), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(251,249,244,0.92))",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
export default config;
