/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-07 12:50:12
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-13 02:15:42
 * @FilePath: /taro-template/script/deploy.test.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { DEPLOY_CONFIG, TEST } = require('../src/constants/DepolyConfig');

const deploy = require('./deploy');

deploy('h5-test', DEPLOY_CONFIG[TEST].outputRoot);
