// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '67vh',
        main: '1rem',
        rhythm: '4rem'
      },
      margin: {
        '14': '3.5rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-scrims')({
      // directions: {
      //   t: 'to bottom',
      //   b: 'to top',
      //   r: 'to left',
      //   l: 'to right'
      // },
      // distances: {
      //   '1/4': '25%',
      //   '1/3': '33.33333%',
      //   '1/2': '50%',
      //   '2/3': '66.66666%',
      //   '3/4': '75%'
      // },
      colors: {
        default: [`rgba(0,0,0,0.5)`, `rgba(0,0,0,0)`]
      }
    })
  ]
}
