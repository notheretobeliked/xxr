/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'yellow': 'rgb(255, 255, 0)',
      'black': 'rgb(54, 41, 36)',
      'pink': 'rgb(250, 96, 214)',
    },
    fontSize: {
      sm: '1rem',
      base: '1.5rem',
      xl: '1.75rem',
      '2xl': '2.5rem',
    },
    extend: {},
  },
  plugins: [],
}
