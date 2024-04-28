/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat Variable'],
        jost: ['Jost Variable']
      }
    }
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
