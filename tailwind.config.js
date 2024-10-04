/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
      ],
  theme: {
    inset: {
      '3px': '3px',
    }
  },
  plugins: [],
})

