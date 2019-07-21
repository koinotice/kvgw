'use strict';

const nats=function(config){

    const NAT_URL=config.nats.url
    const Nats = require('nats').connect({
        url: NAT_URL,
        json: true,
        maxReconnectAttempts: -1,
        reconnectTimeWait: 250
    })
    Nats.on('error', function (err) {
        console.log(err);
    });

    Nats.on('connect', function (nc) {
        console.log('connected');
    });

    Nats.on('disconnect', function () {
        console.log('disconnect');
    });

    Nats.on('reconnecting', function () {
        console.log('reconnecting');
    });

    Nats.on('reconnect', function (nc) {
        console.log('reconnect');
    });

    Nats.on('close', function () {
        console.log('close');
    });
    return Nats
}

module.exports = {
    Nats:nats
};
