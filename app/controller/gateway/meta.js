'use strict';

const jwt = require('jsonwebtoken');

const Controller = require('../BaseController');

class MetaController extends Controller {
    //获取meta info
    async metaInfo() {
        const tokenId = this.ctx.request.query.tokenId;

        if (!tokenId  ) {
            // const error = new Error();
            // error.status = 1001;
            throw this.ctx.app.error(1001,"tokenid不能为空");
            //this.ctx.throw(1001, 'tokenid不能为空');
        }
        const tokenInfo=await this.ctx.service.meta.tokenInfo(tokenId);
        const res={
            "type": tokenInfo.type,
            "depositState": tokenInfo.depositState,
            "withdrawState": tokenInfo.withdrawState
        }
        if(tokenInfo){
            this.success(res)
        }
        // this.ctx.status = 200;
        // this.ctx.body = {"msg": "打卡成功"}
    }

    // 获取用户打卡记录
    async metaList() {
          this.ctx.body = await this.ctx.service.meta.tokenList();
    }
}

module.exports = MetaController;
