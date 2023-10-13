/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cos': {
          'blue': '#BEADFA',
          'white_text' :'#E6EAF3',
          'onHover' : '#9E50FF',
          'dark_purple' : '#9172FF',
          'bg' : '#4A4D60'
        }
      }
    },
  },
  plugins: [],
}

