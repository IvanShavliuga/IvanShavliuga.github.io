const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      less:  {
            test: /\.less$/,
            use: ['vue-style-loader', 'css-loader', 'less-loader']
        }
      }
    },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  }

}
function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
    patterns: [
      path.resolve(__dirname, './src/assets/css/style.less'),
    ],
  })
}
