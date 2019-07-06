'use strict';

/**
 * Controller 和 Service 抛出异常处理
 * @author ruiyong-lee
 * @return {function} function
 */
module.exports = () => {
    return async function errorHandler(ctx, next) {
        let transaction;
        try {
            await next();

            transaction = await ctx.app.transition();

            // 如果有事务自动提交
            if (transaction) {
                transaction.commit();
                ctx.app.deleteTransition();
            }
        } catch (err) {
            console.log("adf",err.status,err.message)
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', err, ctx);



            const status = err.status || 500;

            console.log("fff",status>1000)

            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error = status === 500 && ctx.app.config.env === 'prod'
                ? '系统内部错误'
                : err.message;

            // // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = {
                code: ctx.ERROR_CODE,
                message: error,
            };
            //
            if (status === 422) {
                ctx.body.detail = err.errors;
            }

            if(status>1000){
                console.log(status,error)
                console.log("操")
                ctx.status = 500;
                ctx.body={
                    "code": 1,//响应码，更多响应码见响应码表
                    "subCode": status,//子响应码 ，网关自行定义，用于问题排查
                    "msg": error,//响应说明，网关自行定义，用于问题排查
                    "data":""//响应数据，具体定义见接口列表
                }

            }else{
                ctx.status = status;
            }


            // console.log(status,error)
            // if(status>1000){
            //     console.log(status,error)
            //     ctx.body={
            //         "code": 1,//响应码，更多响应码见响应码表
            //         "subCode": status,//子响应码 ，网关自行定义，用于问题排查
            //         "msg": error,//响应说明，网关自行定义，用于问题排查
            //         "data":""//响应数据，具体定义见接口列表
            //     }
            // }


            // 如果有事务自动回滚
            if (transaction) {
                transaction.rollback();
                ctx.app.deleteTransition();
            }
        }
    };
};
