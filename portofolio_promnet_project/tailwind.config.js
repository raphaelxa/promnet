/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a09dc5",
          dark: "#74719f"
        },
        secondary: {
          DEFAULT: "#bdd3d7",
          dark: "#6e7d77"
        }
      },
      fontFamily: {
        laila: ['Laila'],
        lalezar: ['Lalezar'],
      },
    },
  },
  plugins: [],
}