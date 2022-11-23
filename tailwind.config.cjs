/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial'],
      },
      fontSize: {
        '8px': '8px',
        'very-small': '12px',
        'small': '14px'
      },
      lineHeight: {
        '8px': '8px',
        'very-small': '10px',
        'small': '10px'
      },
    },
  },
  plugins: [],
}
