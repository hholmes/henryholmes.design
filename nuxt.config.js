import pkg from './package'
const path = require('path')
// const glob = require('glob-all')

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
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#dc6017' },

  /*
  ** Global CSS
  */
  css: ['~assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue2-filters'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-netlify-cms',
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

  purgeCSS: {},

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
