'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/service/user.test.js', () => {
    let app;
    before(() => {
        // 创建当前应用的 app 实例
        app = mock.app();

        console.log(44444)
        // 等待 app 启动成功，才能执行测试用例
        return app.ready();
    });
    afterEach(mock.restore);

    describe('get()', () => {
        it('should get exists user', async () => {
            // 创建 ctx

            console.log(333)
            const ctx = app.mockContext();
            // 通过 ctx 访问到 service.user
            const user = await ctx.service.wallet.get();

            console.log(user)
            // assert(user);
            // assert(user.name === 'fengmk2');
        });

        // it('should get null when user not exists', async () => {
        //     const ctx = app.mockContext();
        //     const user = await ctx.service.user.get('fengmk1');
        //     assert(!user);
        // });
    });
}

