/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/css/index.html', './src/css/tailwind.css'],
  theme: {
    colors: {
      'primary':"hsl(158, 36%, 37%)",
      'primaryDark':"hsl(158, 36%, 20%)",
      'secondary':"hsl(30, 38%, 92%)",
      'neutralDark':"hsl(212, 21%, 14%)",
      'neutralGrayish':"hsl(228, 12%, 48%)",
      'neutralGrayishL':"hsl(228, 12%, 70%)",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
      Fraunces: ["Fraunces", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'productMobile': "url('../../images/image-product-mobile.jpg')",
        'productDesktop': "url('../../images/image-product-desktop.jpg')",
        'cart': "url('../../images/icon-cart.svg')"
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        widestx: '.50em', 
      },
      display: {
        'flex': 'flex',
      },
      screens: {
        'sn': '280px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'sx': '710px',
        // => @media (min-width: 710px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};

