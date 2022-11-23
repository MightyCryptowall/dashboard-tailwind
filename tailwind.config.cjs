/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html", // ignore
    "./main.js", // ignore
    "./template.js", // ignore
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors:{
      ...colors,
      "smoke": {
        500: "#263238",
      }
    },
    extend: {
    },
  },
  plugins: [],
}
