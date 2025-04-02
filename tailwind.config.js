const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|code|input|kbd|link|listbox|navbar|snippet|toggle|divider|ripple|spinner|form|popover).js"
  ],
  theme: {
  	extend: {
  		colors: {
  			dark_green: {
  				'100': '#030b08',
  				'200': '#071610',
  				'300': '#0a2019',
  				'400': '#0e2b21',
  				'500': '#12372a',
  				'600': '#27785c',
  				'700': '#3cba8e',
  				'800': '#7bd4b5',
  				'900': '#bdeada',
  				DEFAULT: '#12372a'
  			},
  			honeydew: {
  				'100': '#314717',
  				'200': '#638f2d',
  				'300': '#93c851',
  				'400': '#bfdf99',
  				'500': '#ebf5df',
  				'600': '#f0f7e6',
  				'700': '#f3f9ec',
  				'800': '#f7fbf3',
  				'900': '#fbfdf9',
  				DEFAULT: '#ebf5df'
  			},
  			moss_green: {
  				'100': '#181b0e',
  				'200': '#2f371d',
  				'300': '#47522b',
  				'400': '#5e6e3a',
  				'500': '#768948',
  				'600': '#96ac61',
  				'700': '#b0c189',
  				'800': '#cad5b0',
  				'900': '#e5ead8',
  				DEFAULT: '#768948'
  			},
  			dim_gray: {
  				'100': '#151518',
  				'200': '#2a2930',
  				'300': '#3f3e49',
  				'400': '#545361',
  				'500': '#6a687a',
  				'600': '#868496',
  				'700': '#a4a2b0',
  				'800': '#c2c1ca',
  				'900': '#e1e0e5',
  				DEFAULT: '#6a687a'
  			},
  			primary: {
  				DEFAULT: '#12372a',
  				light: '#7bd4b5',
  				dark: '#030b08',
  				foreground: '#ebf5df'
  			},
  			secondary: {
  				DEFAULT: '#ebf5df',
  				light: '#f7fbf3',
  				dark: '#314717',
  				foreground: '#12372a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			aurora: {
  				'0%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				},
  				'25%': {
  					backgroundPosition: '50% 100%',
  					transform: 'rotate(5deg) scale(1.1)'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%',
  					transform: 'rotate(-3deg) scale(0.95)'
  				},
  				'75%': {
  					backgroundPosition: '50% 0%',
  					transform: 'rotate(3deg) scale(1.05)'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			}
  		},
  		animation: {
  			aurora: 'aurora 8s ease-in-out infinite alternate',
  			pulse: 'pulse var(--duration) ease-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),heroui()],
};

module.exports = config;
