/* eslint valid-jsdoc: "off" */

'use strict';

const { gzip } = require("zlib");
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599701967277_7859';

  // add your middleware config here
  config.middleware = ['gzip'];

  config.gzip = {
    threshold: 1024
  }

  // add your user config here
  // const userConfig = {
  //   // myAppName: 'egg',
  // };
  config.cluster = {
    listen: {
      port: 3333,
      hostname: '0.0.0.0'
    }
  }

  //关闭csrf  https://www.jianshu.com/p/4f6a27cb693c
  config.security = {
    csrf: {
      enable: false
    }
  }

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'yue825822',
      database: 'eggtest'
    },
    app: true,
    agent: false,
  }

  config.view = {
    root: [
      path.join(appInfo.baseDir,'app/view'),
      path.join(appInfo.baseDir,'path/to/another'),
    ].join(',')
  };

  return {
    ...config
  };
};
