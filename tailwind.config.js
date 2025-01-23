/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#2C5291',
        secondaryColor:'#FDBA2D',
      },
    },
  },
  plugins: [],
}

