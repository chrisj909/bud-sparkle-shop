import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C5530",
          hover: "#234226",
          light: "#367A3C",
        },
        secondary: {
          DEFAULT: "#8B4513",
          hover: "#6E3710",
        },
        accent: {
          DEFAULT: "#F0E6D9",
          dark: "#E5D5C0",
        },
        card: {
          DEFAULT: "#FFFFFF",
          hover: "#F8F8F8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.6s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
          },
        },
      },
      gridTemplateColumns: {
        'products': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;