/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-05-27 11:50:57
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-05-28 17:50:08
 * @FilePath: /taro-template/src/service/index.js
 * @Description:请求封装
 */
/* eslint-disable no-shadow */
import Taro from '@tarojs/taro'

const APIHOST_MAP = new Map([
  ['develop', ''], // 开发版
  ['trial', ''], // 体验版
  ['release', ''] // 正式版
])

// 当前环境（开发版、体验版、正式版）
const { envVersion } = Taro.getAccountInfoSync().miniProgram

const request = async (url, method, data, header = {}) => {


  const option = {
    url: `${APIHOST_MAP.get(envVersion)}${url}`,
    method,
    data,
    header: {  ...header }
  }

  const res = await Taro.request(option)
  console.log('res', res.data)

  const { code } = res.data

//   switch (code) {
//     case 402:
     
//       break
//     default:
//       break
//   }

  return res.data
}

export default request
