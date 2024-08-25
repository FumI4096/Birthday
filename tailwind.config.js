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
        'blue-primary': '#d8e1e8',
        'pink-primary': '#ffd1dc',
        'green-primary': '#cdeac7'
      },
      height:{
        '100': '30rem',
        '110': '40rem'
      },
      width:{
        '130': '60rem',
      },
      fontFamily:{
        'qwitcher-grypen': ["Qwitcher Grypen", "cursive"],
        'jost': ["Jost", "sans-serif"]
      },
      boxShadow:{
        'thick': '0 15px 0 #304674'
      },
      keyframes:{
        sliding: {
          '0%': {top: '-20rem'},
          '50%': {top: '1.5rem'},
          '100%': {top: '0'}
        },
        reverseSliding: {
          '0%': {top: '20rem'},
          '50%': {top: '-1.5rem'},
          '100%': {top: '0'}
        }
      },
      animation:{
        sliding: 'sliding 1s ease',
        reversesliding: 'reverseSliding 1s ease'
      }
    },
  },
  plugins: [],
}

