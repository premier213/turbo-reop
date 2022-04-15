module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
