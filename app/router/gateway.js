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
    const {meta} = controller.gateway;

    apiV2Router.get('/meta-info', meta.metaInfo);//七牛云信息
    apiV2Router.get('/meta-list', meta.metaList);//七牛云信息

};
