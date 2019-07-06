'use strict';

const {Controller} = require('egg');

/**
 * BaseController
 * @class
 * @author ruiyong-lee
 */
class BaseController extends Controller {
    get user() {
        return this.ctx.session.user;
    }

    success(data, status) {
        this.ctx.body = {
            "code": 0,//响应码，更多响应码见响应码表
            "subCode": 0,//子响应码 ，网关自行定义，用于问题排查
            "msg": null,//响应说明，网关自行定义，用于问题排查
            "data": data//响应数据，具体定义见接口列表
        };
        this.ctx.status = status || 200;
    }

    fail(code, message) {
        this.ctx.body = {code, message, data: {}};
        this.ctx.status = 200;
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}

module.exports = BaseController;
