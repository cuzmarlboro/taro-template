/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-10-10 14:50:15
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-13 02:15:38
 * @FilePath: /taro-template/script/deploy.prod.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { DEPLOY_CONFIG, PROD } = require('../src/constants/DepolyConfig');

const deploy = require('./deploy');

deploy('h5-prod', DEPLOY_CONFIG[PROD].outputRoot);
