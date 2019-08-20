module.exports = {
  configureWebpack: {
      reslove: {
        alias: {
          //默认@等于src
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views'
        }
      }
  }
}