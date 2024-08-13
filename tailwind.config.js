/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens : {
        md: "800px"
      }
    },
  },
  plugins: [],
}

