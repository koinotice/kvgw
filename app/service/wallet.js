'use strict';

const jwt = require('jsonwebtoken');
const Leven=require('../lib/leven')
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = app => {
    class Wallet extends app.Service {



        async getAddress(walletAddress) {

            const wallet = await this.ctx.model.Wallet.findOne(
                {
                    where: {vite_address: walletAddress.toLocaleLowerCase()}
                }
               );

            //console.log(app.nats)
            if (wallet){
                return wallet
            }else{
                const wallets = await this.ctx.model.Wallet.findOne(
                    {
                        where: {vite_address: ""}
                    }
                );

                console.log(wallets.dataValues)
                wallets.dataValues.vite_address=walletAddress.toLocaleLowerCase()

                 await this.ctx.model.Wallet.update(wallets.dataValues, {where: {id: wallets.dataValues.id}});

                const obj={
                    Address:wallets.dataValues.eth_address.toLocaleLowerCase(),
                    ViteAddress:wallets.dataValues.vite_address
                }

                app.redis.set("")
                app.nats.publish("vgw.wallet.update",obj)


                return wallets.dataValues;
            }



            return false;
        }

        async create(walletAddress) {

            const leven =new Leven();
            let order_by = 'id', order = 'DESC';
            const wallet = await this.ctx.model.Wallet.findOne({order: [[order_by, order.toUpperCase()]]});
            //console.log(wallet)
            let index=0;
            if(wallet){
                index=parseInt(wallet.index)+parseInt(getRandomInt(100))
            }
            const me="earn intact point modify hidden vendor loud treat grit rotate civil barely"
            const data=await leven.getAddress(me,index)
          //  console.log(data)
            const params={
                vite_address:walletAddress.toUpperCase(),
                eth_address:data.eth_address,
                index:data.index,
                pk:data.pk
            }
            console.log(params)
            //
            const ret=await this.ctx.model.Wallet.create(
                params
             )


            console.log("ret.dataValues",ret.dataValues)
            return params;
        }




    }

    return Wallet;
};
