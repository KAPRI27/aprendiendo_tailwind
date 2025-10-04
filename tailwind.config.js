 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens:{
          'tablet': '900px'
        },
        colors: {
          'azul-claro': '#243cff',
          'azul-oscuro': '#0d1b3e',
        },
        width:{
          '42' : '270px',
        },
        
      },
    },
    plugins: [],
  }