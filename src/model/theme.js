/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-03 15:47:03
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:28:26
 * @FilePath: /mbti-ipa/src/model/theme.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { atom } from 'jotai';

// 主题 'light' | 'dark'
const themeAtom = atom('light');

export { themeAtom };
