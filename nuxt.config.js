import path from 'path';
import glob from 'glob';

const URL = 'https://info.btree.at'

export default {
  target: 'static',
  router: {
    //base: process.env.NODE_ENV === 'production' ? '/info/' : '/',
  },
  build: {
    //publicPath: '/info/',
  },
  mode: "universal", // similar to mode: 'universal'
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (chunk) => {
      if (chunk) {
        return `${chunk} - b.tree`
      }

      return 'b.tree'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'b.tree Beekeeping' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: URL },
      { hid: 'og:image', property: 'og:image', content: `${URL}/card.png` },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@btree_hannes' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'b.tree' },
      { hid: 'twitter:image', name: 'twitter:image', content: `${URL}/card.png` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'b.tree Beekeeping' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${URL}/favicon.ico` }
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
    fallback: true,
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
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Modules configuration
  */
  colorMode: {
    preference: 'system'
  },
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: false
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
  },
  sitemap: {
    hostname: URL,
    path: 'sitemap.xml',
    routes: () => {
      const files = glob.sync(path.join(__dirname, '/dist/**/*.html'));
      return files.map((file) => ({ 
        url: path.relative(
          path.join(
            __dirname, '/dist/'), 
            file
          ), 
          lastmodfile: file 
      }));
    },
    i18n: true,
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true
  }
}
