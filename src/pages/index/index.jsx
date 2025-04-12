/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-04-13 00:32:00
 * @LastEditTime: 2025-04-13 02:25:06
 * @FilePath: /taro-template/src/pages/index/index.jsx
 * @Description:
 */
import { ThemedView, ThemedText, ThemedButton } from '@/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <ThemedView type='layout'>
      <ThemedText>Hello world!</ThemedText>

      <ThemedButton
        type='primary'
        className='mbti12'
        text='确定'
        borderRadius={4}
        style={{
          width: 128,
          height: 52
        }}
      />
    </ThemedView>
  );
}
