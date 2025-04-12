/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-08-06 18:55:51
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-22 13:43:54
 * @FilePath: /mbti-octuple-animation/src/hooks/useLogin.js
 * @Description: 登录
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useSetAtom } from 'jotai';
import { snsapiBaseLogin, login as loginAsync } from '@/service/user';
import { tokenStorageAtom } from '@/model/user';
import { getUrlParams } from '@/utils/url';
import { APP_ENVS } from '@/constants/Platform';

const useLogin = () => {
  const setTokenStorage = useSetAtom(tokenStorageAtom);

  return async () => {
    // 令牌
    const token = getUrlParams('token');

    // 登录凭证
    const code = getUrlParams('code');

    // web
    if (!APP_ENVS.includes(process.env.TARO_APP_ENV)) {
        // 判断是否有登录凭证，有 token 就立刻登录，没有则走静默登录
        if (code) {
            const { data } = await loginAsync({ code });
            setTokenStorage(data.token);
        } else {
            snsapiBaseLogin();
        }
    }

    if (APP_ENVS.includes(process.env.TARO_APP_ENV)) {
      // 判断是否携带 token ，携带则保存
      if (token) setTokenStorage(token);
    }
  };
};

export default useLogin;
