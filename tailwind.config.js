// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    minHeight: {
      'screen-1/4': '24vh',
      'screen-1/3': '33vh',
      'screen-1/2': '50vh',
      'screen-2/3': '67vh'
    },
    extend: {
      spacing: {
        '18': '4.5rem',
        'screen-1/4': '25vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '67vh',
        'screen-3/4': '75vh',
        '30p': '30%',
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
      distances: {
        default: '75%'
      },
      //   '1/3': '33.33333%',
      //   '1/2': '50%',
      //   '2/3': '66.66666%',
      //   '3/4': '75%'
      // },
      colors: {
        default: [`rgba(0,0,0,0.6)`, `rgba(0,0,0,0.0)`]
      }
    })
  ]
}
