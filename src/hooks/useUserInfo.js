/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-08-06 18:50:00
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:58:12
 * @FilePath: /mbti-ipa/src/hooks/useUserInfo.js
 * @Description: 获取用户个人信息
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Taro from '@tarojs/taro';
import { getUserInfo as getUserInfoAsync } from '@/service/user';
import { useAtom } from 'jotai';
import { userInfoAtom } from '@/model/user';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  /**
   * 获取人格信息
   * @return {*}
   */
  const getUserInfo = async () => {
    const { data } = await getUserInfoAsync();
    setUserInfo(data);
  };

  return {
    userInfo,
    getUserInfo
  };
};

export default useUserInfo;
