/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {},
    colors:{
      'primary':'#081c24',
      'secondary':'#181818',
      'blanco-artico': '#F6F6F8',
      'lila': '#B3C3FF',
      'naranja':'#FF956D',
      'gris-interfaz': '#A0ABBC'
    }
  },
  plugins: [],
}
