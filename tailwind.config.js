const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|card|code|image|input|kbd|link|listbox|navbar|snippet|toggle|divider|ripple|spinner|form|popover).js",
  ],
  theme: {
    extend: {
      // --- NOVA PALETA DE CORES ---
      colors: {
        // Primary (Baseado nos Verdes)
        // DEFAULT: fern-green (#588157) - Um verde médio e natural
        // Escala vai do mais claro (quase branco/verde) ao mais escuro (brunswick)
        primary: {
          50: "#f0f4f2", // Muito claro, quase branco-verde
          100: "#d9e3df", // Muito claro
          200: "#c0d0cc", // Claro
          300: "#a5bdb8", // Claro-médio, pastel
          400: "#8da6a1", // Médio, ligeiramente mais escuro pastel
          500: "#779988", // Cor base: Verde pastel mais escuro
          600: "#648073", // Médio-escuro
          700: "#53695f", // Escuro
          800: "#43554c", // Muito escuro
          900: "#34433c", // Quase preto-verde
          950: "#252f2b", // Mais próximo do preto
          DEFAULT: "#779988", // Definir o padrão
        },

        // Secondary (Baseado no Cinza/Bege - Timberwolf)
        // DEFAULT: timberwolf (#dad7cd)
        // Escala vai do quase branco ao cinza médio/escuro
        secondary: {
          50: "#ffffff", // Branco
          100: "#f5f5f5", // Off-white
          200: "#e0e0e0", // Cinza muito claro
          300: "#c2c2c2", // Cinza claro
          400: "#a4a4a4", // Cinza médio claro
          500: "#8b8b8b", // Cinza médio
          600: "#616161", // Cinza médio escuro
          700: "#424242", // Cinza escuro
          800: "#212121", // Cinza muito escuro
          900: "#101010", // Quase preto (fundo para alguns elementos)
          950: "#000000", // Preto (para texto em fundos claros)
          DEFAULT: "#dad7cd", // Manter um default
        },
        // Você pode manter os nomes originais se quiser usá-los diretamente também
        timberwolf: "#dad7cd",
        sage: "#a3b18a",
        fern_green: "#588157",
        hunter_green: "#3a5a40",
        brunswick_green: "#344e41", // Manter se ainda usar diretamente

        // --- CORES BASEADAS EM VARIÁVEIS CSS (Mantidas) ---
        background: "hsl(var(--background))",
        backgroundBase: "#18181B", // O fundo predominante do Raycast
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      // --- OUTRAS EXTENSÕES (Mantidas) ---
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        aurora: {
          /* ... */
        },
        pulse: {
          /* ... */
        },
        shine: {
          /* ... */
        },
        ripple: {
          /* ... */
        },
      },
      animation: {
        aurora: "aurora 8s ease-in-out infinite alternate",
        pulse: "pulse var(--duration) ease-out infinite",
        shine: "shine var(--duration) infinite linear",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), heroui()],

  // --- SAFELIST PARA CLASSES DINÂMICAS (Mantida e Essencial) ---
  safelist: [
    "col-span-12",
    "md:col-span-4",
    "md:col-span-5", // Adicionado para o layout 75
    "md:col-span-7", // Adicionado para o layout 75
    "md:col-span-8",
    // Adicione outros spans se usar (ex: lg:col-span-*)
  ],
};

module.exports = config;
