/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-12 17:46:21
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-23 12:36:51
 * @FilePath: /mbti-octuple-animation/src/hooks/useThemeNutui.js
 * @Description: nutui 主题
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/model/theme';
import { Colors } from '@/constants/Colors';

function useThemeNutui() {
  const theme = useAtomValue(themeAtom);

  return {
      light: {
          nutuiColorPrimary: Colors.light.themeColor,
          nutuiColorPrimaryStop1: Colors.light.themeColor,
          nutuiColorPrimaryStop2: Colors.light.themeColor,
          nutuiGray1: Colors.light.background1,
          nutuiInputBackgroundColor: Colors.light.background1,
          nutuiInputColor: Colors.light.color,
          nutuiProgressColor: Colors.light.themeColor,
          nutuiProgressBackground: Colors.light.background2,
          nutuiCountupColor: Colors.light.color,
          nutuiLoadingIconSize: '28px',
          nutuiLoadingIconColor: Colors.light.themeColor,
          nutuiButtonDefaultBorderColor: '#EDEDED',
          nutuiProgressBackground: '#EAEAEA',
          nutuiTabsTitlesBackgroundColor: Colors.light.background2,
          nutuiTextareaTextColor: Colors.light.color,
          nutuiGray7: Colors.light.color,
          nutuiTextareaPadding: '10px 16px',
          nutuiInputBorderBottom: '#DDDDDD'
      },
      dark: {
          nutuiColorPrimary: Colors.dark.themeColor,
          nutuiColorPrimaryStop1: Colors.dark.themeColor,
          nutuiColorPrimaryStop2: Colors.dark.themeColor,
          nutuiGray1: Colors.dark.background1,
          nutuiInputBackgroundColor: Colors.dark.background1,
          nutuiInputColor: Colors.dark.color,
          nutuiProgressColor: Colors.dark.themeColor,
          nutuiProgressBackground: Colors.dark.background2,
          nutuiCountupColor: Colors.dark.color,
          nutuiLoadingIconSize: '28px',
          nutuiLoadingIconColor: Colors.dark.themeColor,
          nutuiButtonDefaultBorderColor: '#2B2B2B',
          nutuiProgressBackground: '#2B2B2B',
          nutuiTabsTitlesBackgroundColor: Colors.dark.background2,
          nutuiTextareaTextColor: Colors.dark.color,
          nutuiGray7: Colors.dark.color,
          nutuiTextareaPadding: '10px 16px',
          nutuiInputBorderBottom: '#DDDDDD'
      }
  }[theme];
}

export default useThemeNutui;
