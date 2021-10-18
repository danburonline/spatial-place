module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#2EC4B6'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
