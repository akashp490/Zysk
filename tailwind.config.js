/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // Defined custom colors here
        customPurple: '#7F56D9',   // Custom purple
        customBlack: '101828',
        
      },
    },
  },
  plugins: [],
}

