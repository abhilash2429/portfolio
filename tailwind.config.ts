import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "42 28% 93%",
        "--foreground": "45 8% 10%",
        "--card": "48 38% 97%",
        "--card-foreground": "45 8% 10%",
        "--popover": "48 38% 97%",
        "--popover-foreground": "45 8% 10%",
        "--primary": "45 8% 10%",
        "--primary-foreground": "42 28% 93%",
        "--secondary": "43 23% 88%",
        "--secondary-foreground": "45 8% 10%",
        "--muted": "43 23% 88%",
        "--muted-foreground": "40 7% 32%",
        "--subtle": "41 6% 51%",
        "--accent": "43 23% 88%",
        "--accent-foreground": "45 8% 10%",
        "--destructive": "4 63% 44%",
        "--destructive-foreground": "48 38% 97%",
        "--border": "41 19% 83%",
        "--input": "41 19% 83%",
        "--ring": "45 8% 10%",
        "--pen": "4 63% 44%",
        "--sheet": "48 38% 97%",
        "--sheet-2": "43 50% 93%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "45 11% 7%",
        "--foreground": "41 30% 89%",
        "--card": "40 9% 13%",
        "--card-foreground": "41 30% 89%",
        "--popover": "40 9% 13%",
        "--popover-foreground": "41 30% 89%",
        "--primary": "41 30% 89%",
        "--primary-foreground": "45 11% 7%",
        "--secondary": "40 9% 13%",
        "--secondary-foreground": "41 30% 89%",
        "--muted": "40 9% 13%",
        "--muted-foreground": "39 9% 62%",
        "--subtle": "40 7% 43%",
        "--accent": "40 9% 13%",
        "--accent-foreground": "41 30% 89%",
        "--destructive": "6 68% 62%",
        "--destructive-foreground": "45 11% 7%",
        "--border": "38 10% 16%",
        "--input": "38 10% 16%",
        "--ring": "41 30% 89%",
        "--pen": "6 68% 62%",
        "--sheet": "43 29% 88%",
        "--sheet-2": "43 33% 83%",
      },
    });
    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },

  {
    theme: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1440px",
        },
      },
      extend: {
        typography: {
          DEFAULT: {
            css: {
              maxWidth: "100ch",
            },
          },
        },
        fontFamily: {
          sans: ["var(--font-inter-tight)", ...fontFamily.sans],
          serif: ["var(--font-instrument-serif)", ...fontFamily.serif],
          heading: ["var(--font-instrument-serif)", ...fontFamily.serif],
          mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
          hand: ["var(--font-caveat)", "cursive"],
        },
        screens: {
          xs: "380px",
          sm: "500px",
        },
        colors: {
          border: "hsl(var(--border))",
          subtle: "hsl(var(--subtle))",
          pen: "hsl(var(--pen))",
          sheet: {
            DEFAULT: "hsl(var(--sheet))",
            2: "hsl(var(--sheet-2))",
          },
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
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
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);

const shadcnPreset = {
  prefix: "",
  darkMode: ["selector"],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;

const config = {
  presets: [shadcnPreset],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./src/content/**/*.mdx"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            a: {
              color: "hsl(var(--foreground))",
              "&:hover": {
                color: "hsl(var(--muted-foreground))",
              },
            },
            blockquote: {
              borderLeftColor: "hsl(var(--foreground))",
              color: "hsl(var(--muted-foreground))",
            },
            "h1,h2,h3,h4,h5,h6": {
              color: "hsl(var(--foreground))",
              fontFamily: "var(--font-instrument-serif)",
            },
            hr: {
              borderColor: "hsl(var(--border))",
            },
            code: {
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--muted))",
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
