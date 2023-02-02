/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'yellow': '#FEE17B',
      'black': '#191B2E',
      'pink': '#F099FF',
    },
    fontSize: {
      sm: '1rem',
      base: '1.2rem',
      xl: '1.75rem',
      '2xl': '2.5rem',
    },
    fontFamily: {
      'hk': ['HK Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
      'hk-wide': ['HK Grotesk Wide', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
