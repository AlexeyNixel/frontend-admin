// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  alias: { '@': '../src' },
  devServer: {
    port: 3010,
  },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@samk-dev/nuxt-vcalendar',
    'nuxt-swiper',
  ],
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
    server: {
      proxy: {
        '/site': {
          target: 'http://static.infomania.ru/',
          changeOrigin: true,
        },
        '/media': {
          target: 'http://static.infomania.ru/site',
          changeOrigin: true,
        },
      },
    },
  },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
    middleware: './src/app/middleware',
    plugins: './src/app/plugins',
    public: './src/app/public',
  },
  css: [
    '~/src/app/main.css',
    '~/src/app/styles/datepicker.css',
    '@vuepic/vue-datepicker/dist/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
});
