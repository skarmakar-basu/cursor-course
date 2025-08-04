/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			// Linear-inspired design system colors
  			background: '#0E0E10',
  			foreground: '#FFFFFF',
  			card: {
  				DEFAULT: '#1C1C1E',
  				foreground: '#FFFFFF'
  			},
  			popover: {
  				DEFAULT: '#1C1C1E',
  				foreground: '#FFFFFF'
  			},
  			primary: {
  				DEFAULT: '#3B82F6',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#1C1C1E',
  				foreground: '#FFFFFF'
  			},
  			muted: {
  				DEFAULT: '#2A2A2D',
  				foreground: '#A1A1AA'
  			},
  			accent: {
  				DEFAULT: '#6366F1',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF'
  			},
  			border: '#2A2A2D',
  			input: '#0E0E10',
  			ring: '#6366F1',
  			chart: {
  				'1': 'hsl(12 76% 61%)',
  				'2': 'hsl(173 58% 39%)',
  				'3': 'hsl(197 37% 24%)',
  				'4': 'hsl(43 74% 66%)',
  				'5': 'hsl(27 87% 67%)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
