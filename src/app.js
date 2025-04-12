/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-04-13 00:32:00
 * @LastEditTime: 2025-04-13 02:05:05
 * @FilePath: /taro-template/src/app.js
 * @Description: 入口
 */
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { tokenStorageAtom } from '@/model/user';
import { ConfigProvider } from '@nutui/nutui-react-taro';
import useThemeNutui from '@/hooks/useThemeNutui';
import useUserInfo from '@/hooks/useUserInfo';
import useLogin from '@/hooks/useLogin';
import { getUrlParams } from '@/utils/url';
import { IOS_ENVS } from '@/constants/Platform';
import '@nutui/nutui-react-taro/dist/style.css';
import './app.scss';

function App({ children }) {
  const [tokenStorage, setTokenStorage] = useAtom(tokenStorageAtom);

  // nutui 主题
  const themeNutui = useThemeNutui();

  // 获取用户个人信息
  const { getUserInfo } = useUserInfo();

  // 登录
  const login = useLogin();

  const token = getUrlParams('token');

  console.log('url 参数中的 token', token);
  console.log('本地缓存的token', tokenStorage);
  console.log('当前环境', process.env.TARO_APP_ENV);
  console.log('window.location.href', window.location.href);

  /**
   * 隐藏 ios 加载动画
   * @return {*}
   */
  const hideIosLoading = () => {
    if (window?.webkit?.messageHandlers) {
      window.webkit.messageHandlers.JumpToPage.postMessage({
        page: 'hideLoading'
      });
    }
  };

  if (token !== tokenStorage && token) {
    if (IOS_ENVS.includes(process.env.TARO_APP_ENV)) hideIosLoading();
    setTokenStorage(token);
  }

  useEffect(() => {
    // 获取个人信息
    if (tokenStorage) getUserInfo();

    if (process.env.TARO_APP_ENV === 'development') {
      setTokenStorage(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJleHAiOjE3NjAxMTE5NDUsImlzcyI6IlNuOWU3IUAjXigqXHUwMDI2JCVtYnRpIiwibmJmIjoxNzI4NTc0OTQ1fQ.SlN5MCjPbGaIZJsNEfD4JO5bgNamXk-ujxrcCjEQPp8'
      );
    } else {
      // 登录;
      login();
    }
  }, [tokenStorage]);

  return <ConfigProvider theme={themeNutui}>{children}</ConfigProvider>;
}

export default App;
