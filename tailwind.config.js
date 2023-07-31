/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", ...defaultTheme.fontFamily.sans],
        lato: ["var(--font-lato)", ...defaultTheme.fontFamily.serif],
        kalam: ["var(--font-kalam)", ...defaultTheme.fontFamily.cursive],
      },
    },
  },
  plugins: [],
};
