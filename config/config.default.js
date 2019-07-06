'use strict';

module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_padipata';

    // 部署环境
    config.domain = 'http://127.0.0.1:7001';

    // -------------------------微信相关---------------------------
    config.xcx_appId = '';
    config.xcx_appSecret = '';
    // -----------------------------------------------------------

    // ------------------------七牛云相关---------------------------
    config.accessKey = '';
    config.secretKey = '';
    config.bucket_name = '';
    config.bucket_domain = '';
    // -----------------------------------------------------------

    // token凭证
    config.jwtSecret = 'padipata';

    // 使用koa的中间件
    config.middleware = ['errorHandler'];

    config.auth = {
        test: 'tst',
    };

    // PostgresSQL
    config.sequelize = {
        dialect: 'postgres',//db类型
        database: 'pmker',//数据库名
        host: 'localhost',//主机
        port: '5432',//端口
        username: 'pmker',
        password: 'Zheli123',
        define:{
            "paranoid":false,
            "timestamps":true,
            "freezeTableName": true,
            "underscored": false
        }
    };
    // redis
    config.redis = {
        clients: {
            default: {
                host: 'localhost',
                port: '6379',
                password: '',
                db: '0',
            },
            subscribe: {
                host: 'localhost',
                port: '6379',
                password: '',
                db: '1',
            },
            session: {
                host: 'localhost',
                port: '6379',
                password: '',
                db: '2',
            },
        },
        agent: true,
    };
    //异常捕获路由
    config.errorHandler = {
        match: ['/api/v2', '/api/v1','/']
    };

    // 关闭安全威胁csrf的防范
    config.security = {
        csrf: {
            enable: false,
        },
    };

    // 解决跨域
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    // 阿里云监控
    config.alinode = {
        enable: true,
        appid: '68663',
        secret: '327fbbf38c7f56fdbf2269eb57c88460c410ae00',
    };

    return config;
};
