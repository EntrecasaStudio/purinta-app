// ═══════════════════════════════════════════════════════════
// PURINTA — Tailwind Config Extension
// Palette from Figma Landing Page (node 841:2028)
// Green: #083C20→#FBFFEA | Pastels: peach, lime, salmon, mint
// Neutrals: #0F2419→#FAF8F5
// ═══════════════════════════════════════════════════════════

import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      // ── TYPOGRAPHY ──
      fontFamily: {
        display: [
          "ohno-softie-variable",
          "Fredoka",
          "Nunito",
          "sans-serif",
        ],
        sans: ["Rubik", "sans-serif"],
      },

      // ── COLORS — from Figma landing page (841:2028) ──
      colors: {
        purinta: {
          // Green Scale (from Figma landing)
          green: {
            50: "#FBFFEA",   // Lime-tinted pale
            100: "#E4FECD",  // Pastel green (feature cards)
            200: "#DDFAAF",  // Light lime green
            300: "#9DD081",  // Soft green
            400: "#70AD75",  // Medium green
            500: "#318159",  // Primary green (CTAs)
            600: "#215E39",  // Dark green (buttons)
            700: "#185229",  // Heading green
            800: "#083C20",  // Deepest green
          },
          // Pastel card backgrounds (from Figma feature cards)
          pastel: {
            green: "#E4FECD",
            lime: "#F7FAD8",
            peach: "#FFD9C4",
            salmon: "#FFE6E3",
            yellow: "#FDF8DB",
            mint: "#FBFFEA",
          },
          // Pink / Blush Scale (kawaii accents)
          blush: {
            50: "#FFE6E3",   // Salmon pale
            100: "#FFD9C4",  // Peach
            200: "#F2C4C4",  // Blush
            300: "#EDB1B1",  // Soft pink
            400: "#E8A0A0",  // Pink accent
            500: "#DA7C7C",  // Deep pink
          },
          // Neutral Scale (from Figma)
          neutral: {
            50: "#FAF8F5",   // Warm white (background)
            100: "#F3F1ED",  // Light warm gray
            200: "#E5E1DA",  // Border gray
            300: "#D4D0C8",  // Mid border
            400: "#B0B0B0",  // Muted (decorative only)
            500: "#6B7380",  // Secondary text (Raven, AA-safe)
            600: "#333333",  // Primary body text
            700: "#1D212B",  // Dark text
            800: "#185229",  // Heading green
            900: "#0F2419",  // Deepest dark
          },
          // Yellow Scale
          yellow: {
            50: "#FFFBF2",
            100: "#FDF8DB",
            200: "#FDF0D5",
            300: "#F7DFAA",
          },
          // Lavender Scale (accent)
          lavender: {
            50: "#F5F3FA",
            100: "#ECE8F4",
            200: "#E1DBEE",
            300: "#D8CFE8",
            400: "#BCADD7",
            500: "#A08CC5",
          },
        },
        // Semantic aliases
        forest: "#185229",
        cream: "#FAF8F5",
        sand: "#F3F1ED",
      },

      // ── BORDER RADIUS ──
      borderRadius: {
        cute: "16px",
        "cute-xl": "24px",
        pill: "9999px",
      },

      // ── BOX SHADOW ──
      boxShadow: {
        cute: "0 4px 16px rgba(232, 160, 160, 0.15)",
        "green-sm": "0 1px 3px rgba(26, 58, 42, 0.06)",
        "green-md": "0 4px 12px rgba(26, 58, 42, 0.08)",
        "green-lg": "0 8px 24px rgba(26, 58, 42, 0.1)",
        card: "0 2px 8px rgba(26, 58, 42, 0.04), 0 8px 24px rgba(26, 58, 42, 0.06)",
      },

      // ── KEYFRAMES ──
      keyframes: {
        "bounce-cute": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "bounce-cute": "bounce-cute 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
};

export default config;
