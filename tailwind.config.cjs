/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    colors:{
      ...colors,
      "smoke": {
        500: "#263238",
      }
    },
    extend: {},
  },
  plugins: [],
}
