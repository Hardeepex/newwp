/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
      },
      fontFamily: {
        'custom-font': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
