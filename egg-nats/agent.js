'use strict';

const nats = require('./lib/nats');

module.exports = agent => {
  if (agent.config.nats.agent) nats(agent);
};
