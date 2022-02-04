const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'exo': ['IBM Plex Sans','Roboto Condensed','Rubik', 'sans-serif']
    },
  //   extend: {
  //   screens: {
  //     // "3xl": { "max": "975px"},
  //     // "2xl": { "max": "731px"},
  //     // "xl": { "max": "587px"},
  //     // "xs": { "max": "480px"},
  //     "md": { "max": "470px"},
  //     "ms": { "max": "380px"},

  //     // ...defaultTheme.screens,
    
  //   },
   
  // },
  // screens: {
  //   "3xl": { "max": "975px"},
  //   "2xl": { "max": "731px"},
  //   "xl": { "max": "587px"},
  //   "xs": { "max": "480px"},
  // }
    extend: {
      minWidth: {
        '32': '32px',
        '100': '100px',
      }
    },
   
  },
  //  variants: {},
  plugins: [],
}
