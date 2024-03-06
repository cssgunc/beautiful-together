/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#47AA2C',
          orange: {
            200: '#F4A23C',
            400: '#F78E1F',
          },
        },
      },
    },
  },
  plugins: [],
}

