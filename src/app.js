/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-05-28 17:25:54
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-05-28 19:29:50
 * @FilePath: /taro-template/src/app.js
 * @Description: 
 */

import { useLaunch } from '@tarojs/taro'
import '@nutui/nutui-react-taro/dist/style.css'
import './app.scss'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
