/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans Variable"],
        montserrat: ["Montserrat Variable"],
        ubuntu: ["'Ubuntu Mono', monospace;"]
      }
    }
  },
  plugins: [],
}
