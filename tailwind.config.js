import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "sans-serif"], // Poppins
        subtitle: ["var(--font-subtitle)", "sans-serif"], // Signika
        text: ["var(--font-text)", "sans-serif"], // Overpass
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;