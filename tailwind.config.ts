import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  theme: {
    extend: {
      colors: {
        destructive: {
          foreground: "hsl(var(--destructive-foreground))",
          DEFAULT: "hsl(var(--destructive))"
        },
        secondary: {
          foreground: "hsl(var(--secondary-foreground))",
          DEFAULT: "hsl(var(--secondary))"
        },
        popover: {
          foreground: "hsl(var(--popover-foreground))",
          DEFAULT: "hsl(var(--popover))"
        },
        primary: {
          foreground: "hsl(var(--primary-foreground))",
          DEFAULT: "hsl(var(--primary))"
        },
        accent: {
          foreground: "hsl(var(--accent-foreground))",
          DEFAULT: "hsl(var(--accent))"
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
          DEFAULT: "hsl(var(--muted))"
        },
        card: {
          foreground: "hsl(var(--card-foreground))",
          DEFAULT: "hsl(var(--card))"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))"
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono]
      },
      borderRadius: {
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        lg: "var(--radius)"
      }
    }
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [tailwindcssAnimate],
  darkMode: ["class"]
};

export default config;
