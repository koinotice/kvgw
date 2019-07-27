'use strict';

const jwt = require('jsonwebtoken');

const Controller = require('../BaseController');

class TxsController extends Controller {
    //获取meta info
    async deposit() {
        const tokenId = this.ctx.request.query.tokenId;
        const walletAddress = this.ctx.request.query.walletAddress;
        if (!tokenId) {
            throw this.ctx.app.error(1001, "tokenid不能为空");
        }
        if (!walletAddress) {
            throw this.ctx.app.error(1001, "walletAddress不能为空");

        }


        const { ctx } = this
        let { page } = ctx
        const { common } = ctx.service
        const search = ctx.request.query
        let where = {}
        where.type=0;
        if(search.hasOwnProperty('tokenId')&& search.tokenId !== '') {
            where.tokenId =  (search.tokenId)
        }
        if(search.hasOwnProperty('walletAddress')&& search.walletAddress !== '') {
            where.walletAddress =  (search.walletAddress)

        }
        page = {
            ...page,
            pageField: 'id',
            pageSort: 'DESC'
        }

        const [totalCount, depositRecords] = await Promise.all([
            common.findCount({ modelName: 'Order' ,where}),
            common.findPage({
                modelName: 'Order',
                page,
                where
            })
        ])
        const res = { totalCount, depositRecords, pageSize: page.pageSize, pageIndex: page.pageIndex }
        ctx.helper.success({ ctx, res: res })
    }

    //deposit info
    async withdraw() {
        const tokenId = this.ctx.request.query.tokenId;
        const walletAddress = this.ctx.request.query.walletAddress;
        if (!tokenId) {
            throw this.ctx.app.error(1001, "tokenid不能为空");
        }
        if (!walletAddress) {
            throw this.ctx.app.error(1001, "walletAddress不能为空");

        }


        const { ctx } = this
        let { page } = ctx
        const { common } = ctx.service
        const search = ctx.request.query
        let where = {}
        where.type=1;
        if(search.hasOwnProperty('tokenId')&& search.tokenId !== '') {
            where.tokenId =  (search.tokenId)
        }
        if(search.hasOwnProperty('walletAddress')&& search.walletAddress !== '') {
            where.walletAddress =  (search.walletAddress)

        }
        page = {
            ...page,
            pageField: 'id',
            pageSort: 'DESC'
        }

        const [totalCount, withdrawRecords] = await Promise.all([
            common.findCount({ modelName: 'Order' ,where}),
            common.findPage({
                modelName: 'Order',
                page,
                where
            })
        ])
        const res = { totalCount, withdrawRecords, pageSize: page.pageSize, pageIndex: page.pageIndex }
        ctx.helper.success({ ctx, res: res })
    }


}

module.exports = TxsController;
