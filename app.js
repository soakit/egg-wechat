'use strict';

const path = require('path');
const fs = require('fs');

module.exports = app => {
  class BaseController extends app.Controller {
    success(data) {
      this.ctx.body = {
        code: 200,
        data,
      };
    }
    fail({ code, msg }) {
      this.ctx.body = {
        code,
        msg,
      };
    }
    file(fileName) {
      const filePath = path.resolve(this.app.config.static.dir, fileName);
      this.ctx.attachment(fileName);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.ctx.body = fs.createReadStream(filePath);
    }
    notFound(msg) {
      msg = msg || 'page not found';
      this.ctx.throw(404, msg);
    }
  }
  app.Controller = BaseController;
};
