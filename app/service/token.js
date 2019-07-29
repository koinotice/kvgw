'use strict';

const jwt = require('jsonwebtoken');
const Leven=require('../lib/leven')
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = app => {
    class Token extends app.Service {



        async insert(o) {

            //console.log(vgwOrder)

            // From: '0xC41a4593A284C9E32D1F3e9101FB5067eC0b404d',
            //     To: '0xf07ce7554bd162b1d7ef19aef974bd581c206316',
            //     Amount: 431000000000000000000,
            //     Token: '0xbeaad2b3f074fa6dabcb17ffc6044e1627828637',
            //     blockNumber: 4771496,
            //     TxHash:
            // '0x73c13124411047d7dacba8330a54b7c6c389fc71bc7c5e4ce2e5b44b2524e4ba',
            //     Status: 2,
            //     ViteHash:
            // 'dd2837dc9d323c188362a24348bda8f0dc1d67de0a4a592c0583b3903f5c38e1',
            //     ViteStaus: 1
            //
            // id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            // walletAddress: {type:STRING(255),allowNull: false},
            // tokenId: {type: STRING(250), allowNull: false},//姓名
            // inTxHash: {type: STRING(250), allowNull: true},//姓名
            // outTxHash: {type: STRING(250), allowNull: true},//姓名
            // amount: {type: STRING(250), allowNull: true},//姓名
            // fee: {type: STRING(250), allowNull: true},//姓名
            // state: {type: STRING(250), allowNull: true},//姓名
            // dateTime: {type: STRING(250), allowNull: true},//姓名
            // type: {type: INTEGER, defaultValue: "0"}, //0 充值 1 提现
            //
            // createdAt: DATE,//创建时间
            //     updatedAt: DATE,//更新时间

            // t7 := &pmkoo.Token{
            //     Address:          "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
            //         Symbol:           "LAMB",
            //         Name:             "Lambda",
            //         Decimals:         18,
            //         ViteTokenAddress: "tti_c0bd4e1dc82e7b24429d289f",
            //         Created:          time.Now(),
            // }
            const params={
                tokenId:o.ViteTokenAddress,
                tokenSymbol:o.Symbol,
                type:1
            }


            console.log(params)
            //
            const ret=await this.ctx.model.Token.create(
                params
             )


            console.log("ret.dataValues",ret.dataValues)
            return params;
        }




    }

    return Token;
};


