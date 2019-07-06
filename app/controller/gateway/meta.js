'use strict';

const jwt = require('jsonwebtoken');

const Controller = require('../BaseController');

class MetaController extends Controller {
    //获取meta info
    async metaInfo() {
        const tokenId = this.ctx.request.query.tokenId;

        if (!tokenId) {
            // const error = new Error();
            // error.status = 1001;
            throw this.ctx.app.error(1001, "tokenid不能为空");
            //this.ctx.throw(1001, 'tokenid不能为空');
        }
        const tokenInfo = await this.ctx.service.meta.tokenInfo(tokenId);
        const res = {
            "type": tokenInfo.type,
            "depositState": tokenInfo.depositState,
            "withdrawState": tokenInfo.withdrawState
        }
        if (tokenInfo) {
            this.success(res)
        }
    }

    //deposit info
    async depositInfo() {
        const tokenId = this.ctx.request.query.tokenId;
        const walletAddress = this.ctx.request.query.walletAddress;
        if (!tokenId) {
            throw this.ctx.app.error(1001, "tokenid不能为空");
        }
        if (!walletAddress) {
            throw this.ctx.app.error(1001, "walletAddress不能为空");

        }

        const tokenInfo = await this.ctx.service.meta.tokenInfo(tokenId);

        // depositAddress	转入地址	string	true
        // labelName	标签名，type 为 1 时必传	string	false
        // label	标签值，type 为 1 时必传	string	false
        // minimumDepositAmount	最小转入金额	string	true
        // confirmationCount	对手链入账确认数	int	true
        // noticeMsg	注意
        const res = {
            "depositAddress": "",
            "labelName": tokenInfo.labelName,
            "label": tokenInfo.label,
            "minimumDepositAmount":tokenInfo.minimumDepositAmount,
            "confirmationCount":tokenInfo.confirmationCount,
            "noticeMsg":tokenInfo.noticeMsg,
        }
        const address=await this.ctx.service.wallet.getAddress(walletAddress.toUpperCase());
        if(address){
            res.depositAddress=address.erc20Address
        }

        if (tokenInfo) {
            this.success(res)
        }
    }


    // 获取用户打卡记录
    async metaList() {
        this.ctx.body = await this.ctx.service.meta.tokenList();
    }
}

module.exports = MetaController;
