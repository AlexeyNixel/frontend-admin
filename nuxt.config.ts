// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  alias: { '@': '../src' },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@pinia/nuxt', 'dayjs-nuxt'],
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
  },
  css: ['~/src/app/main.css', '~/src/app/styles/datepicker.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
