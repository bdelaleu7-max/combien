import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        ink2: "var(--ink-2)",
        ink3: "var(--ink-3)",
        line: "var(--line)",
        line2: "var(--line-2)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-news)", "Georgia", "serif"],
      },
      borderRadius: { sm: "8px", DEFAULT: "12px", lg: "16px" },
      boxShadow: {
        "e-1": "0 1px 2px rgba(20,22,28,.04)",
        "e-2": "0 4px 16px -4px rgba(20,22,28,.10)",
      },
    },
  },
  plugins: [],
};
export default config;
