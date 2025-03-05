import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blackOverlay: 'linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
      },
      boxShadow: {
        'custom-shadow': '0px 0px 8px -2px rgba(0,0,0,0.66)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
