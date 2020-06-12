module.exports = {
  mode: 'spa',
  head: {
    title: 'OrangeLauncher Experimental ' + require('./package.json').version
  },
  //srcDir: './src/renderer',
  dev: process.env.NODE_ENV === 'development',
  modules: ['@nuxtjs/vuetify'],
  //plugins: [{ ssr: true, src: './src/renderer/plugins/icons' }],
  build: {
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {
      config.output.publicPath = './_nuxt/'
      config.target = 'electron-renderer'
    }
  }
}
