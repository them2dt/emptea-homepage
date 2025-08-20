const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
      },
      colors: {
        accent: {
          50: '#f7ffd9',
          100: '#efff99',
          200: '#e7ff66',
          300: '#dfff33',
          400: '#d7ff00',
          500: '#ddff00',
          600: '#c7e600',
          700: '#b1cc00',
          800: '#9bb300',
          900: '#859900',
        },
        obsidian: '#212121',
      },
    },
  },
  plugins: [],
}; 