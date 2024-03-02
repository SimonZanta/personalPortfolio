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
        'link': '#F7D3EE',
      },
      keyframes:{
        underline:{
          '0%': {transform: 'translate(-100%)', opacity: '0'},
          '100': {transform: 'translate(0%)', opacity: '1'}
        },
        shake:{
          '0%': {transform: 'rotate(-12deg) scale(1.05)'},
          '25%': {transform: 'rotate(0deg) scale(1.05)'},
          '50%': {transform: 'rotate(12deg) scale(1.05)'},
          '75%': {transform: 'rotate(0deg) scale(1.05)'},
          '100%': {transform: 'rotate(-12deg) scale(1.05)'},
        }
      },
      animation: {
        underline: 'underline 1s ease-in-out',
        shake: 'shake 1s ease-in-out infinite',
      }
    },
    fontSize: {
      sm: '20px',
      base: '30px',
      lg: '50px',
      xl: '90px',
    }
  },
  plugins: [require("tailwind-gradient-mask-image")]
}
