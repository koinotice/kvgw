'use strict';

const jwt = require('jsonwebtoken');

module.exports = app => {
    class Meta extends app.Service {



        async tokenInfo(tokenId) {
            const user = await this.ctx.model.Token.findOne(
                {
                    where: {tokenId: tokenId}
                }
            );
            if (!user) {
                throw this.ctx.app.error(1002,"tokenid 不存在");

                // const error = new Error("tokenid 不存在");
                // error.status = 1002;
                // throw error;

            }
            return user;
        }
        async tokenList() {
            let order_by = 'id', order = 'DESC';
            const stores = await this.ctx.model.Token.findAll();
            if (!stores || stores.length === 0) {
                this.ctx.throw(404, '暂无商家');
            }
            return stores;
        }


    }

    return Meta;
};
