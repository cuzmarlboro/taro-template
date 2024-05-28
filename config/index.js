/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-05-28 17:25:54
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-05-28 17:46:14
 * @FilePath: /taro-template/config/index.js
 * @Description: 
 */
import { defineConfig } from '@tarojs/cli'
import path from 'path';
import devConfig from './dev'
import testConfig from './test'
import prodConfig from './prod'

export default defineConfig(async (merge, { command, mode }) => {
  console.log('🚀 ~ 当前环境:', mode)
  
  const baseConfig = {
    projectName: 'taro-template',
    date: '2024-5-28',
    // designWidth: 750,
    designWidth: 375, // 设计稿宽度为375
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    alias: { // 设置文件别名
      '@': path.resolve(__dirname, '..', 'src') 
    },
    plugins: ['@tarojs/plugin-html'],
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    env: {
      NODE_ENV: JSON.stringify(mode) // 设置环境变量
    },
    defineConstants: {
    },
    copy: {
      patterns: [
      ],
      options: {
      }
    },
    framework: 'react',
    // compiler: 'webpack5',
    compiler: { 
      type: 'webpack5',
      prebundle: { enable: false }  // 解决webpack5 编译后不识别 .wxss 后缀的文件
    },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    sass: {
      resource: [path.resolve(__dirname, '..', 'src/global.scss')] // 引入 scss 全局变量
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    }
  }

  // 本地开发构建配置（不混淆压缩）
  if (mode === 'development') {
    return merge({}, baseConfig, devConfig)
  }

  //  测试环境构建配置（不混淆压缩）
  if (mode === 'test') {
    return merge({}, baseConfig, testConfig)
  }

  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})



