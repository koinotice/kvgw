'use strict';

const nats = require('./lib/nats');

module.exports = app => {
  if (app.config.nats.app) nats(app);
};
