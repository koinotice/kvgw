'use strict';

/**
 * egg-nats default config
 * @member Config#nats
 * @property {String} SOME_KEY - some description
 */
exports.nats = {
    default: {
    },
    app: true,
    agent: false,
    // redis client will try to use TIME command to detect client is ready or not
    // if your redis server not support TIME command, please set this config to false
    // see https://redis.io/commands/time
    supportTimeCommand: true,
};
