/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      bebasNeue: ["Bebas Neue"],
      sourceSerif: ["Source Serif 4"]
    },
    extend: {
      colors: {
        primary: '#364935',
        gray: "#707070",
        dark: "#1C1D1D",
        military: "#5C7962"
      },
      borderRadius: {
        '100': '100px',
      },
    },
  },
  plugins: [],
}

