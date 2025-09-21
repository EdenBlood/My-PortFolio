/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // desactiva totalmente el modo oscuro
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}', // ajustá según la estructura de tu proyecto
    './public/**/*.html'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
