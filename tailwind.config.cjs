/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'prim-grey' : '#949494',
        'accent-green': '#1BB568',
        'secondary-grey': '#B5A7A7'
      }
    },
  },
  plugins: [],
}
