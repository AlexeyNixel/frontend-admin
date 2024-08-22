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
  },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
  },
  css: ['~/src/app/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
