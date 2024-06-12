const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{js,html}", "./*.{js,html}"],
  theme: {
    extend: {
      colors: {
        't1-motion-blue': '#A7C4CC',
        't1-motion-dark-blue': '#095E9A',
      },
      fontFamily: {
        sans: ['SF Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

