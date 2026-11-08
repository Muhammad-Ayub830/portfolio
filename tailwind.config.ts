import type { Config } from "tailwindcss";

// Design tokens come from the approved Figma design (Part 9 of the project doc).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#4B5563",
        accent: "#4F46E5",
        "accent-soft": "#EEF2FF",
        surface: "#F9FAFB",
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
