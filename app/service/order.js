'use strict';

const jwt = require('jsonwebtoken');
const Leven=require('../lib/leven')
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = app => {
    class Order extends app.Service {


        //插入充值记录
        async insertOrder(vgwOrder) {


            const params={
                walletAddress:vgwOrder.ViteWalletAddress.toLocaleString(),
                tokenId:vgwOrder.ViteToken.toLocaleString(),
                inTxHash:vgwOrder.TxHash,
                outTxHash:vgwOrder.ViteHash,
                amount:vgwOrder.ViteAmout,
                fee:0,
                state:vgwOrder.ViteStaus,
            }
            console.log(params)
            //
            const ret=await this.ctx.model.Order.create(
                params
             )


            console.log("ret.dataValues",ret.dataValues)
            return params;
        }

        //插入提现记录
        async insertOrderWithdraw(vgwOrder) {


            const params={
                walletAddress:vgwOrder.ViteWalletAddress.toLocaleString(),
                tokenId:vgwOrder.ViteTokenID.toLocaleString(),
                inTxHash:vgwOrder.Hash.String,
                outTxHash:vgwOrder.ViteHash,
                amount:vgwOrder.Amount,
                fee:0,
                state:1,
                type:1
            }

            console.log(params)
            //
            const ret=await this.ctx.model.Order.create(
                params
             )


            console.log("ret.dataValues",ret.dataValues)
            return params;
        }




    }

    return Order;
};
