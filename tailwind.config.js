// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4C29',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
