// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    extend: {
      boxShadow: {
        darken: 'inset 0 0 0 150vw rgba(0,0,0,0.4)'
      },
      colors: {
        'black-300t': 'rgba(0,0,0,0.3)',
        'black-500t': 'rgba(0,0,0,0.5)',
        'black-700t': 'rgba(0,0,0,0.7)'
      },
      margin: {
        '14': '3.5rem'
      },
      minHeight: {
        'screen-1/4': '24vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '67vh'
      },
      spacing: {
        '18': '4.5rem',
        'screen-1/4': '25vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '67vh',
        'screen-3/4': '75vh',
        '30p': '30%',
        main: '1rem',
        'rhythm1/2x': '2rem',
        rhythm: '4rem',
        rhythm2x: '8rem'
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
        default: '85%'
      },
      //   '1/3': '33.33333%',
      //   '1/2': '50%',
      //   '2/3': '66.66666%',
      //   '3/4': '75%'
      // },
      colors: {
        default: [`rgba(0,0,0,0.6)`, `rgba(0,0,0,0.1)`]
      }
    })
  ]
}
