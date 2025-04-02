/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
  				DEFAULT: '#12372a',   // dark_green-500
  				light: '#7bd4b5',    // dark_green-800
  				dark: '#030b08',     // dark_green-100
  				foreground: '#ebf5df'  // honeydew-500
  			},
  			secondary: {
  				DEFAULT: '#ebf5df', // honeydew-500
  				light: '#f7fbf3',   // honeydew-800
  				dark: '#314717',    // honeydew-100
  				foreground: '#12372a'  // dark_green-500
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = config;
