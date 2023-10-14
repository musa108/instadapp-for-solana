/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kaushan:[ 'Kaushan Script', 'cursive'],
        nunito: ['Nunito', "sans-serif"],
        oswald: ['Oswald', "sans-serif"],
        lora:['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}


