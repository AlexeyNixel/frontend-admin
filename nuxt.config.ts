// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    alias: {"@": '../src'},
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxt/ui", '@vueuse/nuxt',],
    dir: {
        pages: './src/app/routes',
        layouts: './src/app/layouts'
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})