'use strict';

const jwt = require('jsonwebtoken');

const Controller = require('../BaseController');

class WithdrawController extends Controller {
    //获取meta info
    async widthdrawInfo() {
        const tokenId = this.ctx.request.query.tokenId;
        const walletAddress = this.ctx.request.query.walletAddress;
        if (!tokenId) {
            throw this.ctx.app.error(1001, "tokenid不能为空");
        }
        if (!walletAddress) {
            throw this.ctx.app.error(1001, "walletAddress不能为空");

        }
        const tokenInfo = await this.ctx.service.meta.tokenInfo(tokenId);
        const res = {
            "minimumWithdrawAmount": tokenInfo.minimumWithdrawAmount,
            "maximumWithdrawAmount": tokenInfo.maximumWithdrawAmount,
            "gatewayAddress": tokenInfo.gatewayAddress,
            "noticeMsg": tokenInfo.noticeMsg
        }
        console.log(res)
        if (tokenInfo) {
            this.success(res)
        }
    }

    //deposit info
    async verification() {

        const tokenId = this.ctx.request.query.tokenId;
        const withdrawAddress = this.ctx.request.query.withdrawAddress;
        const tokenInfo = await this.ctx.service.meta.tokenInfo(tokenId);

        // depositAddress	转入地址	string	true
        // labelName	标签名，type 为 1 时必传	string	false
        // label	标签值，type 为 1 时必传	string	false
        // minimumDepositAmount	最小转入金额	string	true
        // confirmationCount	对手链入账确认数	int	true
        // noticeMsg	注意
        const res = {
            isValidAddress:true
        }
        // const address=await this.ctx.service.wallet.getAddress(walletAddress.toUpperCase());
        // if(address){
        //     res.depositAddress=address.erc20Address
        // }

        if (tokenInfo) {
            this.success(res)
        }
    }


    // 获取用户打卡记录
    async fee() {

        const tokenId = this.ctx.request.query.tokenId;
        const walletAddress = this.ctx.request.query.walletAddress;
        const tokenInfo = await this.ctx.service.meta.tokenInfo(tokenId);

        // depositAddress	转入地址	string	true
        // labelName	标签名，type 为 1 时必传	string	false
        // label	标签值，type 为 1 时必传	string	false
        // minimumDepositAmount	最小转入金额	string	true
        // confirmationCount	对手链入账确认数	int	true
        // noticeMsg	注意
        const res = {
            fee:10000
        }
        // const address=await this.ctx.service.wallet.getAddress(walletAddress.toUpperCase());
        // if(address){
        //     res.depositAddress=address.erc20Address
        // }

        if (tokenInfo) {
            this.success(res)
        }

     }
}

module.exports = WithdrawController;
