/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans - serif'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

