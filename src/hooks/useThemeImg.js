/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-23 22:28:46
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-13 01:57:21
 * @FilePath: /taro-template/src/hooks/useThemeImg.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/model/theme';

function useThemeImg(imgName) {
  const theme = useAtomValue(themeAtom);

  return {
    light: {},
    dark: {}
  }[theme][imgName];
}

export default useThemeImg;
