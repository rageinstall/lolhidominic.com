import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14110F",
          soft: "#2A2522",
          mute: "#5C544D",
          faint: "#525f7d",
        },
        paper: {
          DEFAULT: "#F4F0E9",
          soft: "#EBE5DA",
          deep: "#E1D9CB",
        },
        flame: {
          DEFAULT: "#FF4A1C",
          deep: "#D63A12",
        },
        taupe: "#9B8B7A",
        fog: "#C9C1B4",
        night: {
          DEFAULT: "#0E0D0C",
          soft: "#1A1817",
          line: "#2C2926",
        },
        bg: "#080c14",
        surface: "#0f1623",
        surface2: "#141d2e",
        surface3: "#1a2436",
        rule: "#1e2d45",
        hairline: "#172033",
        "ink-soft": "#c2cce0",
        "ink-muted": "#8896b3",
        "ink-faint": "#525f7d",
        blue: "#5BCEFA",
        pink: "#F5A9B8",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        label: "0.14em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
