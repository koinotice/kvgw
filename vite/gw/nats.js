'use strict';

// const {
//     NAT_URL,
// } = process.env
const NAT_URL="nats://localhost:4222"
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
module.exports = {
    Nats
};
