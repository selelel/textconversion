/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cos': {
          'white_text' :'#E6EAF3',
          'onHover' : '#007AAA',
          'dark_purple' : '#0087BD',
          'bg' : '#4A4D60'
        }
      }
    },
  },
  plugins: [],
}

