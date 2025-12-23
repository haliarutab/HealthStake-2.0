import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --------------------------
        // BRAND COLORS (Navbar + UI)
        // --------------------------
        brand: {
          blue: "#007BFF",        // Navbar blue
          blueHover: "#0046CC",   // Hover blue
          grayText: "#6B7280",    // Navigation text
          border: "#E5E7EB",      // Navbar border
        },

        // --------------------------
        // PRIMARY SET (ORIGINAL)
        // --------------------------
        primary: "#21c6ba",            // Primary teal
        primaryLight: "#2b89f5",       // Primary blue
        primaryDark: "#24d9c7",        // Gradient teal
        primaryDarker: "#36b7ff",      // Gradient blue

        // --------------------------
        // EXTENDED GRADIENT COLORS
        // --------------------------
        gradient: {
          teal: "#24d9c7",
          blue: "#36b7ff",
          blueDark: "#4c86f9",
        },

        // --------------------------
        // BACKGROUND COLORS (APP)
        // --------------------------
        bg: {
          main: "#08121d",        // Main dark background
          card: "#122131",        // Dashboard card
          chart: "#0b1724",       // Chart container
          stat: "#182c3f",        // Stat cards
          badge: "#112a35",       // Small badge bg
        },

        // --------------------------
        // ATMOSPHERIC GLOWS
        // --------------------------
        glow: {
          primary: "#122c44",
          secondary: "#0f3443",
        },

        // --------------------------
        // STATUS / HEALTH STATES
        // --------------------------
        status: {
          success: "#34d399",
          cyan: "#22d3ee",
        },

        // --------------------------
        // NEUTRAL / TEXT COLORS
        // --------------------------
        heading: "#1A1A1A",
        paragraph: "#4A4A4A",
        muted: "#6B7280",
        lightGray: "#F5F7FA",
        border: "#E5E7EB",

        // --------------------------
        // ACCENTS
        // --------------------------
        accentBlue: "#0056D6",
        accentSky: "#00A7FF",
        accentGreen: "#16A34A",

        // --------------------------
        // BACKGROUND (LIGHT SECTIONS)
        // --------------------------
        background: "#FFFFFF",
        sectionBg: "#F0F7FF",
        softBlue: "#EAF3FF",

        // --------------------------
        // STATS COLOR SET
        // --------------------------
        statBlue: "#1E90FF",
        statPurple: "#6A5ACD",
        statGreen: "#3CB371",
      },
      animation: {
        'slow-bounce': 'bounce 5s infinite',
        'scroll-dot': 'scroll-dot 5s ease-in-out infinite',
      },
      keyframes: {
        'scroll-dot': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.2' },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
