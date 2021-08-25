module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}