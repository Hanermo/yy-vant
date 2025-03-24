const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'static',
  publicPath: './',
  outputDir: './dist',
  indexPath: 'index.html',
  productionSourceMap: false,
  lintOnSave: false,
  filenameHashing: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {  //基于vue-cli@5.x版本，plugins外套一层postcssOptions
          plugins: [
            require('postcss-px2rem-exclude')({
              remUnit: 32,
              exclude: /node_modules/i  //这是为了不影响第三库的样式，如果入写，会导致vant的样式会变小
            })
          ]
        }
      },
      sass: {
        prependData: `@import "@/assets/scss/variables.scss";`  //全局使用sass变量
      }
    }
  },
  devServer: {
    hot: true,
    port: 8080,
    open: false
  }
})
