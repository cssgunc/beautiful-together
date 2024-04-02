/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            500: '#23600f',
            300: '#3fa822'
          },
          
          orange: {
            200: '#ef9e41',
            400: '#f68020',
          },
        },
      },
    },
  },
  plugins: [],
}

