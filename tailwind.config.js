/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        commonYellow: "rgb(255, 187, 0)",
         black:'#000',
         white:'#fff',
         green:'#008000',
         red:'#FF0000',
         
      },
      backgroundColor: {
        'black': '#000',
        'white' :'#fff',
        'commonYellow': "rgb(255, 187, 0)",
      },
    },
  },
  plugins: [],
}

