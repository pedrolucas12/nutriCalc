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
          '100': '#f3f9ec', // Tom muito claro de honeydew/sage
          '200': '#e5ead8', // Tom claro de moss_green/sage
          '300': '#cad5b0', // Tom médio-claro de moss_green/sage
          '400': '#a3b18a', // sage
          '500': '#588157', // fern-green (DEFAULT)
          '600': '#3a5a40', // hunter-green
          '700': '#344e41', // brunswick-green
          '800': '#2a3f35', // Tom mais escuro de brunswick
          '900': '#1f2f27', // Tom muito escuro de brunswick
          DEFAULT: '#588157',
        },
        // Secondary (Baseado no Cinza/Bege - Timberwolf)
        // DEFAULT: timberwolf (#dad7cd)
        // Escala vai do quase branco ao cinza médio/escuro
        secondary: {
          '100': '#fbfaf8', // Quase branco
          '200': '#f7f6f1', // Off-white levemente bege
          '300': '#eeebe1', // Bege muito claro
          '400': '#e5e3db', // Bege acinzentado claro
          '500': '#dad7cd', // timberwolf (DEFAULT)
          '600': '#c4c1b9', // Cinza/bege um pouco mais escuro
          '700': '#a9a7a0', // Cinza médio
          '800': '#8f8d87', // Cinza mais escuro
          '900': '#75746e', // Cinza bem escuro
          DEFAULT: '#dad7cd',
        },
        // Você pode manter os nomes originais se quiser usá-los diretamente também
        timberwolf: '#dad7cd',
        sage: '#a3b18a',
        fern_green: '#588157', // Usei underscore para consistência
        hunter_green: '#3a5a40',
        brunswick_green: '#344e41',

        // --- CORES BASEADAS EM VARIÁVEIS CSS (Mantidas) ---
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      // --- OUTRAS EXTENSÕES (Mantidas) ---
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        aurora: { /* ... */ },
        pulse: { /* ... */ },
        shine: { /* ... */ },
        ripple: { /* ... */ },
      },
      animation: {
        aurora: 'aurora 8s ease-in-out infinite alternate',
        pulse: 'pulse var(--duration) ease-out infinite',
        shine: 'shine var(--duration) infinite linear',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    heroui()
  ],

  // --- SAFELIST PARA CLASSES DINÂMICAS (Mantida e Essencial) ---
  safelist: [
    'col-span-12',
    'md:col-span-4',
    'md:col-span-5', // Adicionado para o layout 7+5
    'md:col-span-7', // Adicionado para o layout 7+5
    'md:col-span-8',
    // Adicione outros spans se usar (ex: lg:col-span-*)
  ],
};

module.exports = config;
