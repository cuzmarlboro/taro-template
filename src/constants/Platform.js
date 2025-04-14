/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-04-13 02:31:47
 * @LastEditTime: 2025-04-14 11:50:46
 * @FilePath: /taro-template/src/constants/Platform.js
 * @Description: 环境变量
 */
const PROJECT_NAME = 'appHome';
const IOS = 'ios';
const IOS_TEST = 'ios-test';
const ANDROID = 'android';
const ANDROID_TEST = 'android-test';
const WEB = 'web';
const IOS_ENVS = [IOS, IOS_TEST];
const ANDROID_ENVS = [ANDROID, ANDROID_TEST];
const APP_ENVS = [...IOS_ENVS, ...ANDROID_ENVS];
const TEST = 'test';
const PROD = 'prod';
const DEVELOPMENT = 'development';
const ENV = process.env.TARO_APP_ENV;

// 是否是 ios 环境
const isIOS = IOS_ENVS.includes(ENV);

// 是否是 android 环境
const isAndroid = ANDROID_ENVS.includes(ENV);

// 是否是开发环境
const isDevelopment = DEVELOPMENT === ENV;

export {
  PROJECT_NAME,
  IOS,
  IOS_TEST,
  ANDROID,
  ANDROID_TEST,
  WEB,
  IOS_ENVS,
  ANDROID_ENVS,
  APP_ENVS,
  TEST,
  PROD,
  DEVELOPMENT,
  ENV,
  isIOS,
  isAndroid,
  isDevelopment
};
