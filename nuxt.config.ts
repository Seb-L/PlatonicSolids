import glob from 'glob'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src/',
  head: {
    title: 'Sébastien Lombard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lead Front-End Developer',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    // 'dracula-prism/css/dracula-prism.css',
    'simplemde/dist/simplemde.min.css',
    '@/assets/scss/index.scss',
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content()
        .only(['path'])
        .fetch()

      return files.map((file: any) =>
        file.path === '/index' ? '/' : file.path,
      )
    },
  },
  plugins: [],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-composition-api',
    '@nuxt/components',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
    '@nuxtjs/apollo',
    '@nuxt/content',
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.readingTime = require('reading-time')(document.text)
      }
    },
  },
  axios: {},
  build: {
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  auth: {
    redirect: {
      login: '/admin/login',
      logout: '/',
      callback: '/admin/login',
      home: '/admin',
    },
    strategies: {
      github: {
        client_id: '3157718254e5f9d0d279',
        client_secret: 'bbf3f13b9ddec315bb95e7a6620478c0a36df267',
      },
    },
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faAngleDown',
        'faArchive',
        'faBars',
        'faEye',
        'faFilter',
        'faPencilAlt',
        'faSave',
        'faSignOutAlt',
        'faTimes',
        'faTrashAlt',
        'faUpload',
        'faStopwatch',
        'faCalendarAlt',
        'faGlobe',
      ],
      brands: ['faTwitter', 'faGithub', 'faInstagram', 'faLinkedin', 'faMedium'],
    },
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.github.com/graphql',
        getAuth: () =>
          document.cookie
            .split('; ')
            .find(cookie => /^auth\._token\.github=/.test(cookie))
            ?.replace('auth._token.github=', ''),
        // persisting: false,
      },
    },
  },
  content: {
    markdown: {
      plugins: ['remark-container', 'remark-toc', 'remark-emoji'],
      prism: {
        theme: 'dracula-prism/css/dracula-prism.css',
      },
    },
  },
}

export default config
