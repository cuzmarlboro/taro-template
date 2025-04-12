/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-23 00:06:26
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-25 16:47:00
 * @FilePath: /mbti-match-v2/src/components/ThemedButton/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { ThemedText } from '@/components';
import { Button } from '@nutui/nutui-react-taro';
import useThemeColor from '@/hooks/useThemeColor';
import './index.scss';

const ThemedButton = ({
  type = 'normal',
  text,
  textClassName,
  onClick,
  borderRadius,
  style = {},
  color,
  ...otherProps
}) => {
  const themeColor = useThemeColor('themeColor');

  const borderColor = useThemeColor('borderColor');
  const background1 = useThemeColor('background1');

  const BTN_COLOR_MAP = new Map([
    ['normal', color ? color : background1],
    ['primary', color ? color : themeColor]
  ]);

  return (
    <Button
      onClick={onClick}
      style={{
        borderRadius,
        borderColor: type === 'normal' ? borderColor : '#FFFFFF',
        ...style
      }}
      color={BTN_COLOR_MAP.get(type)}
      {...otherProps}
    >
      <ThemedText className={textClassName} color={type === 'normal' ? themeColor : '#FFFFFF'}>
        {text}
      </ThemedText>
    </Button>
  );
};

export default ThemedButton;
