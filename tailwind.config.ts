import type { Config } from "tailwindcss";

const config: Config = {
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
          DEFAULT: "#11110F",
          soft: "#4F4D48",
          mute: "#77736B",
          faint: "#99948A",
        },
        paper: {
          DEFAULT: "#FFFDF8",
          soft: "#E9E5DC",
          deep: "#D8D3C8",
        },
        bg: "#F3F0E9",
        surface: "#FFFDF8",
        surface2: "#E9E5DC",
        surface3: "#DED9CF",
        rule: "#D8D3C8",
        hairline: "#D8D3C8",
        "ink-soft": "#4F4D48",
        "ink-muted": "#77736B",
        "ink-faint": "#99948A",
        blue: "#1479FF",
        pink: "#F2A7BD",
        red: "#E94B35",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 6.5vw, 6rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
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
