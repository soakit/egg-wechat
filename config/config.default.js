'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521173773910_7253';

  // add your config here
  config.middleware = [];

  config.wechatApi = {
    appId: 'wx4595df8bd57ba478',
    appSecret: '30ccc972838c6e2faa0de20fd06a320c',
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0',
    },
  };

  config.secUrl = [
    'http://127.0.0.1',
    'http://codish.io',
  ];

  config.cors = {
    origin: ctx => {
      const origin = ctx.request.header.origin;
      if (config.secUrl.includes(origin.split(/:\d+/)[0])) {
        return origin;
      }
      return false;
    },
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return config;
};
