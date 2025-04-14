/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-10-10 14:54:06
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-04-14 13:30:40
 * @FilePath: /taro-template/script/deploy.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs');
const path = require('path');
const SFTP = require('ssh2-sftp-client');
const { spawnSync } = require('child_process');
const ora = require('ora');
const chalk = require('chalk');

// 密钥文件
const PEM = fs.readFileSync(path.join(path.resolve(), './script/yinian.pem'));

// 服务器信息
const SERVER_OPTION = {
  host: '139.196.238.69',
  port: 22,
  username: 'root',
  privateKey: PEM
};

const deploy = async (env, outputRoot) => {
  // 打包命令
  const BUILD_CMD = `npm run build:${env}`;

  // 本地打包产物目录
  const LOCAL_DIST_FOLDER = path.join(path.resolve(), outputRoot);

  // 服务器产物目录
  const SERVER_DIST_FOLDER = `/opt/deploy/${outputRoot}`;

  // 本地打包
  spawnSync(BUILD_CMD, {
    stdio: 'inherit', // 继承当前父进程的输入输出流
    shell: true // 允许使用 bash 语法,比如 sudo 命令 | 管道
  });

  console.log(chalk.green('✓ 打包成功！'));

  // 生成 SFTP 实例
  const sftp = new SFTP();

  // 链接服务器
  await sftp.connect(SERVER_OPTION);

  console.log(chalk.green('✓ sftp链接成功!'));

  // 加入 loading
  const spinner = ora('正在部署...').start();

  // 上传打包产物到服务器覆盖
  await sftp.uploadDir(LOCAL_DIST_FOLDER, SERVER_DIST_FOLDER);

  // 关闭loading
  spinner.stop();

  // 关闭连接
  sftp.end();

  console.log(chalk.green(`✨ 部署成功！`));

  // 删除本地打包产物目录
  try {
    // 检查本地打包产物目录是否存在
    if (fs.existsSync(LOCAL_DIST_FOLDER)) {
      // 递归删除目录及其所有内容，force 参数确保即使只读文件也能被删除
      fs.rmSync(LOCAL_DIST_FOLDER, { recursive: true, force: true });
      // 打印删除成功的消息
      console.log(chalk.green(`✓ 本地打包产物 ${LOCAL_DIST_FOLDER} 已删除！`));
    }
  } catch (error) {
    // 捕获并打印删除过程中可能发生的错误
    console.error(chalk.red(`删除本地打包产物失败: ${error.message}`));
  }

  // 退出进程
  process.exit(0);
};

module.exports = deploy;
