export default {
  target: 'static',
  mode: 'universal',
  generate: {
    fallback: true
  },
  router: {
    base: "/nuxt-content-example/"
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `How to use Nuxt Content and Components in your website` }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'},
      { rel: 'stylesheet', href: "./assets/css/bootstrap-theme.min.css", body: true},
      { rel: 'stylesheet', href: "./assets/css/bootstrap.min.css", body: true},
      { rel: 'stylesheet', href: "./assets/css/jquery.dataTables.min.css", body: true},
      { rel: 'stylesheet', href: "./assets/css/styles.css", body: true},
      { rel: 'icon', href: "./assets/img/cim-color.png", type: "image/png"},
    ],
    css: [
      '~/assets/styles/bootstrap-theme.min.css',
      '~/assets/styles/bootstrap.min.css',
      "~/assets/styles/styles.css"
    ]
  },

  bluid: {},
  buildModules: ["@nuxt/components"],
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources'
    ],

  generate: {
    async routes () {
      // next comment to make VSCode ignore the "error"
      // @ts-ignore
      const { $content } = require('@nuxt/content')
      const pages = await $content().only(['path']).fetch()
      const posts = await $content('posts').only(['path']).fetch()
      
      const files = [...pages,...posts,]

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}