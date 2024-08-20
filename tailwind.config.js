/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-primary': '#e7ddff',
        'violet-secondary': '#b8b5f4',
        'blue-primary': '#d8e1e8'
      },
      height:{
        '100': '30rem'
      },
      fontFamily:{
        'qwitcher-grypen': ["Qwitcher Grypen", "cursive"],
        'jost': ["Jost", "sans-serif"]
      },
      boxShadow:{
        'thick': '0 15px 0 #304674'
      }
    },
  },
  plugins: [],
}

