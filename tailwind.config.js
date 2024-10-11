/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: '#2F3336',
        primary: '#1D9BF0'
      }
    },
  },
  plugins: [],
}

