import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Desktop con alto suficiente: cada sección ocupa exactamente una pantalla.
      screens: {
        desk: { raw: "(min-width: 1024px) and (min-height: 600px)" },
      },
      // Tamaños que escalan con el alto de la ventana (para el modo "desk").
      fontSize: {
        "fit-h1": ["clamp(4rem, 11svh, 10rem)", { lineHeight: "1.02" }],
        "fit-h2": ["clamp(2.75rem, 7svh, 6.5rem)", { lineHeight: "1.05" }],
        "fit-h3": ["clamp(1.25rem, 3svh, 2.5rem)", { lineHeight: "1.15" }],
        "fit-lead": ["clamp(1.125rem, 2.4svh, 2rem)", { lineHeight: "1.5" }],
        "fit-body": ["clamp(1rem, 2svh, 1.625rem)", { lineHeight: "1.45" }],
        "fit-num": ["clamp(2.5rem, 6svh, 5.5rem)", { lineHeight: "1" }],
        "fit-nav": ["clamp(1.125rem, 2.25svh, 2rem)", { lineHeight: "1.4" }],
      },
      colors: {
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5B",
        },
        brand: {
          blue: "#1F6FE5",
          "blue-dark": "#1557C0",
          "blue-light": "#5FA6FF",
          dark: "#0E1A33",
          darker: "#061A45",
          ink: "#040F2B",
          light: "#F2F4F8",
          gray: "#566075",
          "gray-light": "#DDE2EA",
          steel: "#B9C3D1",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        card: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
