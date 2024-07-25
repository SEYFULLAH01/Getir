module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {

      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'custom-yellow': '#ffd300',
        'custom-gray': '#9ca3af',
        'custom-white-transparent': '#d4d4d4'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
