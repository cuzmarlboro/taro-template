/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-10-10 15:11:46
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-13 02:11:30
 * @FilePath: /taro-template/config/android.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

const { DEPLOY_CONFIG, ANDROID } = require('../src/constants/DepolyConfig');
const { VersionPlugin } = require('../plugin/version-webpack-plugin.js');
const CompressionPlugin = require('compression-webpack-plugin');

export default {
  mini: {},
  h5: {
    publicPath: DEPLOY_CONFIG[ANDROID].publicPath, // 项目产出路径
    outputRoot: DEPLOY_CONFIG[ANDROID].outputRoot, // 项目产出目录
    webpackChain(chain) {
      chain.plugin('VersionPlugin').use(new VersionPlugin());

      chain.plugin('CompressionPlugin').use(
        new CompressionPlugin({
          filename: '[path].gz[query]', //  使得多个.gz文件合并成一个文件，这种方式压缩后的文件少，建议使用
          test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/, // 使用正则给匹配到的文件做压缩，这里是给html、css、js以及字体（.ttf和.woff和.eot）做压缩
          threshold: 100, //文件大小大于这个值时启用压缩
          deleteOriginalAssets: false, //压缩后保留原文件
          minRatio: 0.8 // 最小压缩比率，官方默认0.8
        })
      );

      return chain;
    }
  }
};
