const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.pug', './index.pug', './views/**/*.pug'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1400px',
      '2xl': '1820px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      h: {
        100: '#FFFFFF',
        200: '#C0CFFA',
        300: '#9DADDF',
        400: '#7D8EC4',
        500: '#6171A9',
        600: '#48578E',
        700: '#334173',
        800: '#212C58',
        900: '#000028',
        blue: '#5db0d7',
        orange: '#ff5544'
      },
      b: {
        100: '#FFFFFF',
        200: '#BBBBBB',
        800: '#111111',
        900: '#000000',
        green: '#00FF57'
      }
    },
    extend: {
      width: {
        idx: '1100px',
        pem: 'var(--h-width)',
        s: '16rem', // sidebar
        c: 'calc(100% - 16rem)' // 100% - width.sidebar
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        loading: 'loading 1s linear infinite'
      },
      fontFamily: {
        sans: [
          'Noto Sans KR',
          ...defaultTheme.fontFamily.sans
        ],
        mono: [
          'D2Coding',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  }
}
