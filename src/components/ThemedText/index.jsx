/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-11 13:18:08
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2025-01-26 20:11:23
 * @FilePath: /mbti-job/src/components/ThemedText/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Text } from '@tarojs/components';
import useThemeColor from '@/hooks/useThemeColor';
import './index.scss';

export default function ThemedText({ style, color, children, ...otherProps }) {
  const themecolor = useThemeColor('color');

  return (
    <Text style={{ color: color || themecolor, ...style }} {...otherProps}>
      {children}
    </Text>
  );
}