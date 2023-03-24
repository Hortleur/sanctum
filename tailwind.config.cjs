/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'prim-grey' : '#DBDBDB',
        'accent-green': '#1BB568',
        'secondary-grey': '#B5A7A7'
      },
      fontFamily:{
        "chivo": "Chivo, sans-serif;"
      }
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/line-clamp'),],
}
