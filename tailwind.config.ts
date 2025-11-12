import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
      height: {
        "screen-minus-135": "calc(100vh - 135px)",
        "screen-minus-74": "calc(100vh - 74px)",
      },
      lineHeight: {
        "70p4": "70.4px",
        "28p": "28px",
        "23p4": "23.4px",
        "20p8": "20.8px", // line height for subtitle
        "26p4": "26.4px",
        "title-line": "1.2", // Custom line height for title
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xl2: "3rem",
        title: ["4rem", { lineHeight: "1.2" }],
        desc1: "1.25rem",
        desc2: "1.125rem",
        subtitle: "4rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 24px)",
      },
      letterSpacing: {
        tightest: "-0.125rem",
        tighter: "-0.063rem",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addComponents }: any) {
      addComponents({
        ".btn": {
          "@apply bg-accent-foreground text-accent rounded-md inline-flex items-center justify-center px-4 py-2 font-normal leading-5 transition-colors duration-150 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary":
            {},
        },
        ".btn-primary": {
          "@apply bg-primary text-white hover:bg-opacity-90": {},
        },
        ".btn-secondary": {
          "@apply bg-secondary text-white hover:bg-opacity-90": {},
        },
        ".btn-outlined": {
          "@apply border-primary text-primary bg-transparent hover:bg-primary hover:text-white":
            {},
        },
        ".btn-disabled": {
          "@apply opacity-50 cursor-not-allowed": {},
        },
        ".btn-sm": {
          "@apply px-3 py-1.5 text-sm": {},
        },
        ".btn-md": {
          "@apply px-4 py-2 text-base": {},
        },
        ".btn-lg": {
          "@apply px-2 py-2 text-desc2": {},
          "@screen md": {
            "@apply tracking-wide px-6 py-3.5 text-xl text-desc1": {}, // для экранов от md размер остаётся 4xl
          },
        },
        ".title": {
          "@apply tracking-tight text-xl font-semibold": {}, // Base styles
          "@screen sm": {
            "@apply text-xl2 leading-tight": {}, // Adjusts for smaller screens
          },
          "@screen md": {
            "@apply text-title tracking-tighter font-semibold": {}, // Styles for medium screens and above
          },
        },

        ".desc1": {
          "@apply text-desc1 font-normal leading-28p": {},
          "@screen sm": {
            "@apply text-desc1": {}, // уменьшаем размер и интерлинейку для экранов sm
          },
        },
        ".desc2": {
          "@apply text-desc2 font-normal tracking-tighter leading-23p4": {},
        },
      });
    },
  ],
} satisfies Config;
