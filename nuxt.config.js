const URL = 'https://www.btree.at'

export default {
  target: 'static',
  ssr: true, // similar to mode: 'universal'
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (chunk) => {
      if (chunk) {
        return `${chunk} - Nuxt Content`
      }

      return 'Nuxt Content'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Content' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: URL },
      { hid: 'og:image', property: 'og:image', content: `${URL}/card.png` },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Nuxt Content' },
      { hid: 'twitter:image', name: 'twitter:image', content: `${URL}/card.png` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'The NuxtJS Framework' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  css: [
    '@/assets/css/content.css',
    '@/assets/css/custom.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#48bb78' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/markdown',
    '@/plugins/init',
    '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client'
  ],
  components: true,
  /*
  ** Give routes to static generation
  */
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],
  /*
  ** Modules configuration
  */
  colorMode: {
    preference: 'system'
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  i18n: {
    locales: [{
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    },
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'de',
    parsePages: false,
    lazy: true,
    seo: false,
    langDir: 'i18n/'
  }
}
