/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          passiveGreen: '#40a824',
          backgroundGreen: '#587d39',
          themeOrange: '#f5a336',
          background: '#f0f0f0',
        }
      },
    },
    plugins: [],
  }