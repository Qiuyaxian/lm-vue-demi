const path = require('path')
const resolve = (dir) => {
	return path.resolve(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  baseUrl: './',
  outputDir: resolve('../../dist/pc'),
  assetsDir: 'static',
  productionSourceMap: false,
  // chainWebpack: (config) => {
  //   config.resolve.symlinks(false)
  //   config.devtool('source-map')
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('vue', resolve('./node_modules/vue/dist/vue.runtime.esm.js'))
  //   return config
  // },
};