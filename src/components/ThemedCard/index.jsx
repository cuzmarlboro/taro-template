/* eslint-disable react-hooks/exhaustive-deps */
import Taro from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';
import { ThemedView, ThemedText } from '@/components';
import useThemeColor from '@/hooks/useThemeColor';
import './index.scss';

const ThemedCard = ({
  type = 'normal', // 卡片类型
  title, // 标题
  subtitle, // 副标题
  id, // 卡片 id
  children, // 卡片内容
  divider, // 分割线
  animation = false, // 是否动画
  style = {}, // 卡片样式
  titleStyle = {} // 标题样式
}) => {
  // 是否展示
  const [isShow, setIsShow] = useState(false);

  // 观察器列表
  const observer = useRef(null);

  const borderColor = useThemeColor('borderColor');

  /**
   * 初始化观察器
   * @return {*}
   */
  const initObserver = () => {
    observer.current = Taro.createIntersectionObserver() // 创建一个交叉观察器实例
      .relativeToViewport({ bottom: -50 }) // 设置观察器相对于视口的偏移量
      .observe(`#${id}`, res => {
        // 开始观察具有指定 id 的元素，当元素进入视口时，触发回调函数
        if (res.intersectionRatio > 0) {
          // 如果元素在视口内
          setIsShow(true);
        }
      });

    // 初始检查元素是否在视口内
    Taro.createSelectorQuery() // 创建一个选择器查询实例
      .select(`#${id}`) // 选择具有指定 id 的元素
      .boundingClientRect(rect => {
        // 获取该元素的边界矩形信息，检查元素的顶部是否在视口高度内
        if (rect && rect.top < Taro.getSystemInfoSync().windowHeight) {
          setIsShow(true);
        }
      })
      .exec(); // 执行查询，触发上述选择和检查操作
  };

  useEffect(() => {
    initObserver();
    return () => {
      observer.current && observer.current.disconnect();
    };
  }, []);

  return (
    <ThemedView
      type={type}
      className='themeCard'
      id={id}
      style={animation ? { opacity: isShow ? 1 : 0, ...style } : style}
    >
      {/* 标题 */}
      <ThemedText className='mbti24' style={titleStyle}>
        {title}
      </ThemedText>

      {/* 副标题 */}
      {subtitle && (
        <ThemedText className='mbti25' style={{ marginTop: 4 }} color='#999999'>
          {subtitle}
        </ThemedText>
      )}

      {/* 分割线 */}
      {divider && (
        <ThemedView className='themeCard_divider' style={{ border: `1px solid ${borderColor}` }} />
      )}

      {/* 内容 */}
      {children}
    </ThemedView>
  );
};

export default ThemedCard;
