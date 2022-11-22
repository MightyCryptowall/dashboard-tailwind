/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html", // ignore
    "./main.js", // ignore
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
      fontFamily: {

        sans: ['Inter var', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),

  ]
}
