module.exports = {
  apps: [
    {
      name: 'sky-web-nuxt',
      port: '9527',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
