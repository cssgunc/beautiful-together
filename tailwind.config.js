/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          300: '#3fa822',
          500: '#23600f',
        },
        orange: {
          200: '#ef9e41',
          400: '#f68020',
        },
        passiveGreen: '#40a824',
        backgroundGreen: '#587d39',
        themeOrange: '#f5a336',
        background: '#f0f0f0',
      }
    },
  },
  plugins: [],
}