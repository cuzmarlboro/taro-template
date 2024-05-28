/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-05-28 17:25:54
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-05-28 17:41:39
 * @FilePath: /taro-template/babel.config.js
 * @Description: 
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }]
  ]
}
