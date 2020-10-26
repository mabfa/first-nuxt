import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
   
  mode: 'universal',
  // export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'server',


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - myFirstProject',
    title: 'myFirstProject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:process.env.baseUrl
  },
  auth: {
    redirect: false,
    localStorage: {
      prefix: 'auth.'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      }
    },
    token: {
      prefix: 'token_'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/auth',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: false,
          user: {
            url: '/api/v2/users/get_user',
            method: 'post',
            propertyName: ''
          }
        },
        tokenType: 'JWT'
      }
    }
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue,
          accent: colors.shades.black,
          secondary: colors.grey.darken1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ]
  }
}
