/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-18 15:03:20
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:56:06
 * @FilePath: /mbti-ipa/src/service/user.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import request from '@/service';

// 登录
const login = (data = {}) => request('/wechat/code', 'POST', data);

// 静默登录
const snsapiBaseLogin = () => {
  const redirect_uri = encodeURIComponent(process.env.TARO_APP_REDIRECT_URL);
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.TARO_APP_APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=#wechat_redirect`;
};

// 获取用户个人信息
const getUserInfo = () => request('/user/info', 'GET', {});

// 用户分数上传
const uploadUserScore = (data = {}) => request('/emo/test', 'POST', data);

export { login, snsapiBaseLogin, getUserInfo, uploadUserScore };
