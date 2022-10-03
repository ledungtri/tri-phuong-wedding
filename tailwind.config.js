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
        'thanks_bg': "url('../public/thanks3.png')",
        'thanks_bg_desk': "url('../public/thanks3.JPG')",
        'wedding_bg_desk': "url('../public/decor1.JPG')"
      },
      colors: {
        'beige': '#FFE5B4',
        'navy': '#3A5BA0'
      },
    },
  },
  plugins: [],
}
