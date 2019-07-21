'use strict';

const mock = require('egg-mock');

describe('test/nats.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nats-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nats')
      .expect(200);
  });
});
