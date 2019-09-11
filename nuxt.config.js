// import axios from 'axios'
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
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} - Henry Holmes`
        : 'Henry Holmes is a designer.'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        name: 'msapplication-TitleColor',
        content: '#b91d47'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },

      // Open Graph,
      {
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'ogTitle',
        name: 'og:title',
        content: pkg.siteTitle
      },
      {
        hid: 'ogDescription',
        name: 'og:description',
        content: pkg.description
      },
      {
        hid: 'url',
        name: 'og:url',
        content: 'https://www.henryholmes.design'
      },
      {
        hid: 'ogImage',
        name: 'og:image',
        content:
          'https://res.cloudinary.com/henryholmesdesign/image/upload/w_1200,q_auto/v1568153189/home/og-image.jpg'
      },
      {
        hid: 'ogImageAlt',
        name: 'og:image:alt',
        content:
          'Paper plane illustration with lowercase purple hh in upper left corner'
      },

      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@syntactile'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#303030'
      },
      {
        href:
          'https://raw.githubusercontent.com/hholmes/henryholmes.design/master/static/admin/config.yml',
        type: 'text/yaml',
        rel: 'cms-config-url'
      }
    ],
    scripts: []
  },

  /*
     ** Customize the progress-bar color
     */
  loading: {
    color: '#dc6017'
  },

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
  css: ['~assets/css/a11y-light.css', '~assets/css/tailwind.css'],

  /*
     ** Plugins to load before mounting the App
     */
  plugins: [
    '~/plugins/vue2-filters',
    '~/plugins/vue-scroll',
    '~/plugins/vue-lazyload',
    {
      src: '~/plugins/vendor.js',
      ssr: false
    },
    {
      src: '~/plugins/velocity.js',
      ssr: false
    }
  ],

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
    'nuxt-webfontloader',
    '@nuxtjs/sitemap'
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

  markdownit: {
    preset: 'default',
    html: true,
    injected: true,
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs', 'markdown-it-highlightjs']
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

  generate: {
    routes: [
      '/project/dancemaker',
      '/project/park-mobile'
      // '/project/sentinel',
      // '/project/smileback',
      // '/project/yeltsin'
    ]
  },

  sitemap: {
    gzip: true,
    exclude: ['/admin/**']
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
    xtend(config, { isDev }) {
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
  },

  // https://willbrowning.me/building-a-static-blog-with-nuxt-js-and-cockpit-headless-cms-part-1-setup/
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['html', 'body', 'svg', 'path', 'figure', 'figcaption'],
    whitelistPatterns: [/\S*-*fa-*\S*|\bhljs\S*/]
    // paths: glob.sync([
    //   path.join(__dirname, './pages/**/*.vue'),
    //   path.join(__dirname, './layouts/**/*.vue'),
    //   path.join(__dirname, './components/**/*.vue')
    // ]),
    // whitelist: [
    //   'html',
    //   'body',
    //   'ul',
    //   'ol',
    //   'pre',
    //   'code',
    //   'blockquote',
    //   'figure',
    //   'figcaption',
    //   'img'
    // ],
  }
}
