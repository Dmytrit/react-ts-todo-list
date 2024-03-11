/** @type {import('tailwindcss').Config} */
module.exports = {
  'content': ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  'theme': {
    'extend': {
      'colors': {
        'theme': {
          'primary': '#02a660',
          'accent': '#fc8700',
          'smoke': '#f8f9fb',
        },
      },
    },
  },
  'plugins': [],
}
