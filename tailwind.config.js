/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'wedding_bg': "url('../public/background.jpg')",
        'thanks_bg': "url('../public/thanks3.png')"
      }
    },
  },
  plugins: [],
}
