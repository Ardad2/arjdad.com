module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'f5f5f5' : '#f5f5f5',
        '23272f' : '#23272f',
        '16181d' : '#16181d'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}