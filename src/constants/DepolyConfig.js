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

// 部署配置
const DEPLOY_CONFIG = {
  [ANDROID]: {
    publicPath: `/${PROJECT_NAME}Android`,
    outputRoot: `mbti_${PROJECT_NAME}_android`
  },
  [ANDROID_TEST]: {
    publicPath: `/${PROJECT_NAME}AndroidTest`,
    outputRoot: `mbti_${PROJECT_NAME}_android_test`
  },
  [IOS_TEST]: {
    publicPath: `/${PROJECT_NAME}IosTest`,
    outputRoot: `mbti_${PROJECT_NAME}_ios_test`
  },
  [IOS]: {
    publicPath: `/${PROJECT_NAME}Ios`,
    outputRoot: `mbti_${PROJECT_NAME}_ios`
  },
  [TEST]: {
    publicPath: `/${PROJECT_NAME}Test`,
    outputRoot: `mbti_${PROJECT_NAME}_test`
  },
  [PROD]: {
    publicPath: `/${PROJECT_NAME}Prod`,
    outputRoot: `mbti_${PROJECT_NAME}_prod`
  }
};

// 使用CommonJS模块导出
module.exports = {
  IOS,
  IOS_TEST,
  ANDROID,
  ANDROID_TEST,
  WEB,
  IOS_ENVS,
  ANDROID_ENVS,
  APP_ENVS,
  DEPLOY_CONFIG,
  TEST,
  PROD
};
