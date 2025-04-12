/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-04-13 00:32:00
 * @LastEditTime: 2025-04-13 00:36:19
 * @FilePath: /taro-template/config/dev.js
 * @Description: 本地开发环境配置
 */
// export default {
module.exports = {
  logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    // 代理配置
    devServer: {
      port: 10099, // 代理端口
      proxy: {
        '/api': {
          target: 'https://api.wikimbti.com/', // 代理目标地址
          changeOrigin: true
        },
        '/testApi': {
          target: 'http://139.196.238.69:8081/api/',
          pathRewrite: { '/testApi': '' }, // 后台在转接的时候url中是没有 /testApi 的
          changeOrigin: true
        }
      }
    }
  }
};
