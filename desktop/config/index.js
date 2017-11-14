'use strict'

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.DEV_PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    proxyTable: {
        '/MODApis': {
            target: 'http://dev.markitondemand.com',
            changeOrigin: true
        }
    },
    cssSourceMap: false
  }
}
