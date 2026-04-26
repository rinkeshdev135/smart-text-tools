import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "media",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ink: "#101826",
        brand: {
          50: "#eef9ff",
          100: "#d8f1ff",
          200: "#b6e7ff",
          300: "#7cd6ff",
          400: "#39bffd",
          500: "#109fde",
          600: "#0a7fb7",
          700: "#0d6794",
          800: "#12567a",
          900: "#164867"
        },
        accent: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95"
        },
        sand: "#f4efe7"
      },
      boxShadow: {
        panel: "0 18px 50px rgba(16, 24, 38, 0.08)",
        "panel-hover": "0 25px 60px rgba(16, 24, 38, 0.14)",
        glow: "0 0 40px rgba(16, 159, 222, 0.15)",
        "glow-brand": "0 0 60px rgba(16, 159, 222, 0.25)",
        "glow-accent": "0 0 60px rgba(139, 92, 246, 0.2)"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16, 159, 222, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(16, 159, 222, 0.35)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.3s ease-out forwards",
        "slide-out-left": "slideOutLeft 0.3s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "scale-in": "scaleIn 0.4s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
