import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: [
	"./pages/**/*.{js,jsx}",
	"./components/**/*.{js,jsx}",
	"./app/**/*.{js,jsx}",
	"./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
	container: {
	  center: true,
	  padding: "2rem",
	  screens: {
		"2xl": "1400px",
	  },
	},
	extend: {
	  colors: {
		border: "hsl(var(--border))",
		input: "hsl(var(--input))",
		ring: "hsl(var(--ring))",
		background: "hsl(var(--background))",
		foreground: "hsl(var(--foreground))",
		primary: {
		  DEFAULT: "hsl(var(--primary))",
		  foreground: "hsl(var(--primary-foreground))",
		},
		secondary: {
		  DEFAULT: "hsl(var(--secondary))",
		  foreground: "hsl(var(--secondary-foreground))",
		},
		destructive: {
		  DEFAULT: "hsl(var(--destructive))",
		  foreground: "hsl(var(--destructive-foreground))",
		},
		muted: {
		  DEFAULT: "hsl(var(--muted))",
		  foreground: "hsl(var(--muted-foreground))",
		},
		accent: {
		  DEFAULT: "hsl(var(--accent))",
		  foreground: "hsl(var(--accent-foreground))",
		},
		popover: {
		  DEFAULT: "hsl(var(--popover))",
		  foreground: "hsl(var(--popover-foreground))",
		},
		card: {
		  DEFAULT: "hsl(var(--card))",
		  foreground: "hsl(var(--card-foreground))",
		},
	  },
	  backgroundImage: {
		"podcast-bg": "url('https://media.istockphoto.com/id/1657153873/photo/background-with-a-professional-microphone.webp?b=1&s=170667a&w=0&k=20&c=UYAwE0CwcAp4dYom58AkVISNavXjf_3DNgwHuL71Nxs=')",
		"academy-bg": "url('https://utfs.io/f/877dcd68-6d55-4388-80d3-e028d63855f2-gu8pw0.jpg')",
		academy: "url('https://utfs.io/f/8aebb468-7659-49b9-88a9-006b903a7566-n1gzrv.png')",
	  },
	  borderRadius: {
		lg: "var(--radius)",
		md: "calc(var(--radius) - 2px)",
		sm: "calc(var(--radius) - 4px)",
	  },
	  keyframes: {
		"accordion-down": {
		  from: { height: "0" },
		  to: { height: "var(--radix-accordion-content-height)" },
		},
		"accordion-up": {
		  from: { height: "var(--radix-accordion-content-height)" },
		  to: { height: "0" },
		},
	  },
	  animation: {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up": "accordion-up 0.2s ease-out",
	  },
	},
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
});