/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-16 13:00:13
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-17 01:31:26
 * @FilePath: /mbti-ipa/src/components/ThemedView/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { forwardRef } from 'react';
import { View } from '@tarojs/components';
import useThemeColor from '@/hooks/useThemeColor';

const ThemedView = forwardRef(({ type = 'normal', style, children, ...otherProps }, ref) => {
  const background1 = useThemeColor('background1');
  const background2 = useThemeColor('background2');

  return (
    <View
      ref={ref}
      style={{
        backgroundColor: type === 'layout' ? background1 : background2,
        ...style
      }}
      {...otherProps}
    >
      {children}
    </View>
  );
});

export default ThemedView;
