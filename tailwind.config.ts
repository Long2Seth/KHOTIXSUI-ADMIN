import type { Config } from "tailwindcss";

const config: {
	darkMode: string[];
	content: string[];
	theme: {
		extend: {
			colors: {
				background: string;
				foreground: string;
				card: { DEFAULT: string; foreground: string };
				popover: { DEFAULT: string; foreground: string };
				primary: { DEFAULT: string; foreground: string };
				secondary: { DEFAULT: string; foreground: string };
				muted: { DEFAULT: string; foreground: string };
				accent: { DEFAULT: string; foreground: string };
				destructive: { DEFAULT: string; foreground: string };
				border: string;
				input: string;
				ring: string;
				chart: { "1": string; "2": string; "3": string; "4": string; "5": string };
				"khotixs-background-white": string;
				"khotixs-background-dark": string;
				"primary-color": string;
				"secondary-color": string;
				"primary-color-text": string;
				"secondary-color-text": string;
				"title-color": string;
				"description-color": string;
				"label-vip": string;
				"label-premium": string;
				"label-regular": string;
				"label-free": string;
				"label-paid": string;
				"label-text-secondary": string;
				"label-text-primary": string
			};
			borderRadius: { lg: string; md: string; sm: string }
		}
	};
	plugins: { handler: () => void }[]
} = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
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
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
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
			},

			// For Background
			'khotixs-background-white': '#f5f5f5',
			'khotixs-background-dark': 'rgb(32 0 46)',

			'primary-color': '#AC1ED2',
			'secondary-color': '#480028',

			// For Text
			'primary-color-text': '#000000',
			'secondary-color-text': '#ffffff',
			"title-color": "#1e1e1e",
			"description-color": "#374151",

			// For Label Card
			'label-vip': '#D8AC0E',
			'label-premium': '#5521B5',
			'label-regular': '#FFA500',
			'label-free': '#0EB638',
			'label-paid': '#B3261E',

			// For Label Text Of Card
			'label-text-secondary': '#000000',
			'label-text-primary': '#ffffff',

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
export default config;
