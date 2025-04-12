/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-04-13 01:55:13
 * @LastEditTime: 2025-04-13 01:55:19
 * @FilePath: /taro-template/src/utils/url.js
 * @Description: url 工具
 */
import Taro from '@tarojs/taro';

/**
 * 通过 key 获取 当前url 参数
 * @param {*} key
 * @return {*}
 */
const getUrlParams = key => {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  let r = window.location.search.slice(1).match(reg);
  if (r != null) return decodeURI(r[2]);

  const { params } = Taro.getCurrentInstance().router;
  if (key in params) return params[key];

  return null;
};

/**
 * 通过 key 获取某个 url 的参数
 * @param {*} key
 * @param {*} url
 * @return {*}
 */
const getUrlParams2 = (url, key) => {
  let urlStr = url.split('?')[1];
  if (url.includes('from')) {
    urlStr = url.split('?')[2];
  }
  console.log('urlStr', urlStr);
  const urlSearchParams = new URLSearchParams(urlStr);
  const result = Object.fromEntries(urlSearchParams.entries());
  return result[key] || null;
};

export { getUrlParams, getUrlParams2 };
