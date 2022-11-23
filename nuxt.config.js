export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'antennafilm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/scss/style.scss',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  components: {
    dirs: [
      '~/components',
      '~/components/partials',
      '~/components/wrappers'
    ]
  },

  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
    '@nuxt/image',
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTrigger: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Simple usage
    // 'wp-nuxt',

    // With options
    ['wp-nuxt', {
      endpoint: 'http://antennafilm.local/wp-json',
      extensions: true // For additional functions of wpapi-extensions
      /* other options of WP-API */,
      customRoutes: [
        // {
        //   extension: 'wp/v2',
        //   route: 'cm-menus',
        //   name: 'menus'
        // },
        // {
        //   extension: 'wp/v2',
        //   route: 'theme-settings',
        //   name: 'settings'
        // },
        {
          extension: 'wp/v2',
          route: 'project',
          name: 'projects'
        },
        // {
        //   extension: 'wp/v2',
        //   route: 'next-project',
        //   name: 'nextProject'
        // },
      ]
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
