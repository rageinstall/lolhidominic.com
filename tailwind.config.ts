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
          DEFAULT: "#F2F6FF",
          soft: "#B4C3DE",
          mute: "#8FA1C2",
          faint: "#6D7AA0",
        },
        paper: {
          DEFAULT: "#F4F2ED",
          soft: "#E9E5DB",
          deep: "#D5CFC0",
        },
        matcha: {
          DEFAULT: "#4CFF8D",
          soft: "#9AFFBD",
        },
        cyber: {
          DEFAULT: "#8C4DFF",
          soft: "#C89CFF",
        },
        amber: {
          DEFAULT: "#FFB25C",
          soft: "#FFD59C",
        },
        flame: {
          DEFAULT: "#FF4A1C",
          deep: "#D63A12",
        },
        taupe: "#9B8B7A",
        fog: "#C9C1B4",
        night: {
          DEFAULT: "#07090D",
          soft: "#0F1015",
          line: "#1A1F2A",
        },
        bg: "#05060a",
        surface: "#0b0f17",
        surface2: "#111827",
        surface3: "#151c2b",
        rule: "#15213c",
        hairline: "#0e1220",
        "ink-soft": "#b4c3de",
        "ink-muted": "#8fa1c2",
        "ink-faint": "#6d7aa0",
        blue: "#5BCEFA",
        pink: "#F5A9B8",
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["Satoshi", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
