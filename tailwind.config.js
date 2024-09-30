/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:"black",
        secondrycolor:"orange",
        thrid:"white"
      }
    },
  },
  plugins: [],
}

