/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-03 15:40:01
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-10-10 18:28:01
 * @FilePath: /mbti-ipa/src/model/user.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { atom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { getStorageSync, setStorageSync } from '@/utils/storage';

// token
const tokenAtom = atom(getStorageSync('token') || '');

// token 持久化
const tokenStorageAtom = atom(
  get => get(tokenAtom),
  (get, set, value) => {
    set(tokenAtom, value);
    setStorageSync('token', value);
  }
);

// 用户个人信息
const userInfoAtom = atomWithImmer(null);

export { tokenStorageAtom, userInfoAtom };
