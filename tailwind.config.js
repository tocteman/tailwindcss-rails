const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['SourceSansPro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gold: {
          300: '#FFD700'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
