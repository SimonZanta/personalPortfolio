/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mainText' : '#FCFCFC',
        'mainBackground': '#141414',
        'mainBackgroundDark': '#111111',
        'secondary': '#8616B7',
        'tertiary': '#F3CBF3',
        'link': '#EE9CF3',
      },
      keyframes:{
        underline:{
          '0%': {transform: 'translate(-100%)', opacity: '0'},
          '100': {transform: 'translate(0%)', opacity: '1'}
        }
      },
      animation: {
        underline: 'underline 1s ease-in-out',
      }
    },
    fontSize: {
      sm: '20px',
      base: '30px',
      lg: '50px',
      xl: '130px',
    }
  },
  plugins: [require("tailwind-gradient-mask-image")]
}
