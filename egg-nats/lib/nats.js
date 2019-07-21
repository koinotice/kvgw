'use strict';

const assert = require('assert');
const awaitFirst = require('await-first');

module.exports = app => {
    app.addSingleton('nats', createClient);
};

let count = 0;

function createClient(config, app) {
    const Nats = require('nats');
    let client;


    // assert(config.url ,
    //     `[egg-nats] 'url: ${config.url}'`);
    // app.coreLogger.info('[egg-nats] server connecting nats://:***@%s',
    //     config.url);


    client = Nats.connect({
        url: config.url,
        json: true,
        maxReconnectAttempts: -1,
        reconnectTimeWait: 250
    })


    client.on('connect', () => {
        app.coreLogger.info('[egg-nats] client connect success');
    });
    client.on('error', err => {
        app.coreLogger.error('[egg-nats] client error: %s', err);
        app.coreLogger.error(err);
    });

    app.beforeStart(async () => {
        const index = count++;

        await awaitFirst(client, ['connect', 'error']);
        app.coreLogger.info(`[egg-nats] instance[${index}] status OK, client ready`);
    });

    return client;
}

// //
// // const nats=function(config){
// //
// //     const NAT_URL=config.nats
// //     const Nats = require('nats').connect({
// //         url: NAT_URL,
// //         json: true,
// //         maxReconnectAttempts: -1,
// //         reconnectTimeWait: 250
// //     })
// //     Nats.on('error', function (err) {
// //         console.log(err);
// //     });
// //
// //     Nats.on('connect', function (nc) {
// //         console.log('connected');
// //     });
// //
// //     Nats.on('disconnect', function () {
// //         console.log('disconnect');
// //     });
// //
// //     Nats.on('reconnecting', function () {
// //         console.log('reconnecting');
// //     });
// //
// //     Nats.on('reconnect', function (nc) {
// //         console.log('reconnect');
// //     });
// //
// //     Nats.on('close', function () {
// //         console.log('close');
// //     });
// //     return Nats
// // }
//
// module.exports = {
//     Nats:nats()
// };
