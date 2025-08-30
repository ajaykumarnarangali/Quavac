/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headColor: '#047979',
        subHeadColor: '#424242',
        headerLogo: '#d3e5e4',
        subHeadLogo: '#d9d9d9'
      }
    },
  },
  plugins: [],
}