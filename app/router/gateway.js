/*            _
       __  __(_)___  ____ _____ ____
      / / / / / __ \/ __ `/ __ `/ _ \
     / /_/ / / /_/ / /_/ / /_/ /  __/
     \__, /_/ .___/\__,_/\__, /\___/
    /____/ /_/          /____/

*/
'use strict';

module.exports = app => {
    const apiV2Router = app.router.namespace('');
    const {controller, middleware} = app;
    const {meta,withdraw,txs} = controller.gateway;

    apiV2Router.get('/meta-info', meta.metaInfo);
    apiV2Router.get('/deposit-info', meta.depositInfo);


    apiV2Router.get('/withdraw-info', withdraw.widthdrawInfo);
    apiV2Router.get('/withdraw-address/verification', withdraw.verification);
    apiV2Router.get('/withdraw-fee', withdraw.fee);



    apiV2Router.get('/deposit-records',middleware.pagination, txs.deposit);
    apiV2Router.get('/withdraw-records',middleware.pagination, txs.withdraw);
   // apiV2Router.get('/meta-list', meta.metaList);//七牛云信息

};
