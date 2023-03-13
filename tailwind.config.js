/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'globalteal': '#00CED1',
      'globalgold': '#E3D54A',
      'globalpink': '#F6D8CE',
    },
    
    extend: {},
  },
  plugins: [],
}
