import axios from 'axios'
import pkg from './package'
const path = require('path')
const glob = require('glob-all')

process.env.DEBUG = 'nuxt:*'

module.exports = {
  mode: 'universal',

  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    // title: pkg.name,
    // title: 'Henry Holmes',
    titleTemplate: titleChunk => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Henry Holmes` : 'Henry Holmes'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href:
          'https://raw.githubusercontent.com/hholmes/henryholmes.design/master/static/admin/config.yml',
        type: 'text/yaml',
        rel: 'cms-config-url'
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      },
      {
        type: 'text/javascript',
        src: '//cdn.jsdelivr.net/npm/velocity-animate@1.5/velocity.min.js'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#dc6017' },

  /* Page Transitions */
  pageTransition: {
    name: 'default',
    mode: 'out-in'
  },
  // layoutTransition: {
  //   name: 'project',
  //   mode: 'out-in'
  // },

  /*
  ** Global CSS
  */
  css: ['~assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue2-filters', '~/plugins/vue-scroll'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-netlify-cms',
    'nuxt-fontawesome',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-33669268-3',
        dev: false
      }
    ],
    'nuxt-purgecss',
    'nuxt-webfontloader'
  ],

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  // https://willbrowning.me/building-a-static-blog-with-nuxt-js-and-cockpit-headless-cms-part-1-setup/
  purgeCSS: {
    paths: glob.sync([
      path.join(__dirname, './pages/**/*.vue'),
      path.join(__dirname, './layouts/**/*.vue'),
      path.join(__dirname, './components/**/*.vue')
    ]),
    whitelist: ['html', 'body', 'ul', 'ol', 'pre', 'code', 'blockquote'],
    whitelistPatterns: [/\bhljs\S*/]
  },

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },

  router: {
    routes: [
      {
        name: 'project',
        path: '/project/:project',
        component: 'project/_project.vue'
      }
    ],
    // middleware: 'pages',
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  generate: {
    routes: [
      '/project/dancemaker',
      '/project/park-mobile',
      '/project/sentinel',
      '/project/smileback',
      '/project/yeltsin'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extractCSS: true,
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.devtool = 'eval-source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
