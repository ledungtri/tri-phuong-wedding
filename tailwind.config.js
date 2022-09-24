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
        'wedding_bg_phone': "url('../public/background-small.jpg')",
      }
    },
  },
  plugins: [],
}
