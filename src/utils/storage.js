import Taro from '@tarojs/taro';

export const getStorage = key =>
  new Promise(resolve => {
    Taro.getStorage({
      key: `${process.env.TARO_APP_STORAGE_PREFIX}${key}`,
      success: res => resolve(res.data),
      fail: () => resolve('')
    });
  });

export const setStorage = (key, value) =>
  new Promise(resolve => {
    Taro.setStorage({
      key: `${process.env.TARO_APP_STORAGE_PREFIX}${key}`,
      data: value,
      success: res => resolve(res.data),
      fail: res => resolve('')
    });
  });

export const getStorageSync = key =>
  Taro.getStorageSync(`${process.env.TARO_APP_STORAGE_PREFIX}${key}`) || '';

export const setStorageSync = (key, value) =>
  Taro.setStorageSync(`${process.env.TARO_APP_STORAGE_PREFIX}${key}`, value);
