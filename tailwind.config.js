/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#954CE9',
        'primary-dark': '#6E3CBC',
        'secondary': '#3B1C75',
        'background': '#0B0014',
        'surface': '#1A0B2E',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(149, 76, 233, 0.3)',
        'neon-lg': '0 0 30px rgba(149, 76, 233, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};