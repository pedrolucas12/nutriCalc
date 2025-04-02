/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_green: {
          DEFAULT: '#12372a',
          100: '#030b08',
          200: '#071610',
          300: '#0a2019',
          400: '#0e2b21',
          500: '#12372a',
          600: '#27785c',
          700: '#3cba8e',
          800: '#7bd4b5',
          900: '#bdeada',
        },
        honeydew: {
          DEFAULT: '#ebf5df',
          100: '#314717',
          200: '#638f2d',
          300: '#93c851',
          400: '#bfdf99',
          500: '#ebf5df',
          600: '#f0f7e6',
          700: '#f3f9ec',
          800: '#f7fbf3',
          900: '#fbfdf9',
        },
        moss_green: {
          DEFAULT: '#768948',
          100: '#181b0e',
          200: '#2f371d',
          300: '#47522b',
          400: '#5e6e3a',
          500: '#768948',
          600: '#96ac61',
          700: '#b0c189',
          800: '#cad5b0',
          900: '#e5ead8',
        },
        dim_gray: {
          DEFAULT: '#6a687a',
          100: '#151518',
          200: '#2a2930',
          300: '#3f3e49',
          400: '#545361',
          500: '#6a687a',
          600: '#868496',
          700: '#a4a2b0',
          800: '#c2c1ca',
          900: '#e1e0e5',
        },
        primary: {
          DEFAULT: '#12372a', // dark_green
          light: '#7bd4b5',   // Variante mais clara de dark_green
          dark: '#030b08',    // Variante mais escura de dark_green
        },
        secondary: {
          DEFAULT: '#ebf5df', // honeydew
          light: '#f7fbf3',   // Variante mais clara de honeydew
          dark: '#314717',    // Variante mais escura de honeydew
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
