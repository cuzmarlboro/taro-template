/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-16 13:01:28
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:49:05
 * @FilePath: /mbti-ipa/src/hooks/useThemeColor.js
 * @Description: 项目主题
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { useLayoutEffect } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from '@/model/theme';
import { Colors } from '@/constants/Colors';

function useThemeColor(colorName) {
  const [theme, setTheme] = useAtom(themeAtom);

  /**
   * 系统主题修改
   * @param {*} e
   * @return {*}
   */
  const themeChange = e => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  useLayoutEffect(() => {
    // 设置初始皮肤
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // 监听系统颜色切换
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChange);

    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', themeChange);
  }, []);

  return Colors[theme][colorName];
}

export default useThemeColor;
