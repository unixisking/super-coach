const colors = require('tailwindcss/colors');
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: false, // because I am using gatsby-plugin-purgecss
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      colors: {
        primary: '#FF4C29',
        'warm-gray': colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
