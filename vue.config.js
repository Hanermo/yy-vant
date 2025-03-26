const { defineConfig } = require('@vue/cli-service')
const loader = require('sass-loader')
const resolve = (dir) => path.join(__dirname,'.',dir)
const path = require('path')
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
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [{
          name: 'removeAttrs',
          params: { attrs: 'fill' }
        }]
      })
      .end()
  },
  devServer: {
    open:false,
    host:'0.0.0.0',
    port:8080,
    https:false,
  }
})
