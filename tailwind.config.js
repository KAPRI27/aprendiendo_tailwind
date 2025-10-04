 /** @type {import('tailwindcss').Config} */
 export default {
  darkMode: 'class',
   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'azul-claro': '#243cff',
          'azul-oscuro': '#0d1b3e',
        },
        width:{
          '42' : '270px',
        }
      },
    },
    plugins: [],
  }