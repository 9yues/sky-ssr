export default defineNuxtConfig({
    devServer: {
        port: 9527,
    },
    // 全局模块引入
    modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode', '@element-plus/nuxt'],
    experimental: {
        reactivityTransform: true,
        inlineSSRStyles: false,
    },
    // 全局css引入
    css: ['@unocss/reset/tailwind.css', '@/assets/scss/index.scss', '@/styles/index.scss', '@/styles/anime.css'],
    colorMode: {
        classSuffix: '',
    },
    nitro: {
        devProxy: {
            '/api': {
                target: 'http://121.196.208.253:8081/', // 这里是接口地址
                changeOrigin: true,
                prependPath: true,
                rewrite: (path: string) => path.replace('/api', ''),
            },
        },
        output: {
            publicDir: '../docker/dist/public',
            serverDir: '../docker/dist/server',
            dir: '../docker/dist',
        },
    },
})
