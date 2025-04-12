/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-08-15 10:39:39
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-13 02:13:02
 * @FilePath: /taro-template/src/constants/Platform.js
 * @Description:所属平台类型
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const PROJECT_NAME = 'job';
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
  PROD
};
