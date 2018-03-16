'use strict';

module.exports = app => {
  class WechatController extends app.Controller {
    async getSign() {
      const { wechatApi } = this.app;
      try {
        const sign = await wechatApi.getJsConfig({
          url: 'codish.io',
        });
        this.success(sign);
      } catch (error) {
        this.fail({
          code: 500,
          msg: error,
        });
      }
    }
  }
  return WechatController;
};
