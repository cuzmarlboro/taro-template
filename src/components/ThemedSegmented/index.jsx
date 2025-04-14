/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-10-23 01:19:18
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-14 11:04:55
 * @FilePath: /mbti-appHome/src/components/ThemedSegmented/index.jsx
 * @Description: 分段选择器
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useMemo } from 'react';
import { ThemedView, ThemedText } from '@/components';
import useThemeColor from '@/hooks/useThemeColor';
import './index.scss';

const ThemedSegmented = ({ options, onChange, value, width }) => {
  const segmentedSliderStyle = useMemo(
    () => ({
      width: `${(width - 8) / options.length}px`,
      left: 4 + options.findIndex(item => item.value === value) * ((width - 8) / options.length)
    }),
    [value, width, options]
  );

  const borderColor = useThemeColor('borderColor');

  return (
    <ThemedView className='segmented' style={{ width, background: borderColor }} type='layout'>
      {options.map(item => (
        <ThemedView
          className='segmented_item'
          key={item.value}
          onClick={() => {
            onChange(item.value);
          }}
        >
          <ThemedText className={item.value === value ? 'mbti66' : 'mbti67'}>
            {item.label}
          </ThemedText>
        </ThemedView>
      ))}

      <ThemedView className='segmented_slider' style={segmentedSliderStyle} />
    </ThemedView>
  );
};

export default ThemedSegmented;
