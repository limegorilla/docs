/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./pages/**/*.{js,jsx,ts,tsx,md,mdx}", "./components/**/*.{js,jsx,ts,tsx,md,mdx}", "./theme.config.tsx"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["var(--font-default)", "Inter", "sans-serif"],
   },
  },
 },
 plugins: [],
};
