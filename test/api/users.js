const expect = require('chai').expect;

describe('users.js', function() {
  describe('#getAllowedFromHeaders()', function() {
    it('should send GET request to get a list of allowed from headers', function() {
      this.mock.onGet(`users/${encodeURIComponent('foo@bar')}/allowedFromHeaders`).reply(200, ['foo@bar']);

      expect(this.client.users.getAllowedFromHeaders('foo@bar')).to.eventually.deep.equal(['foo@bar']);
    });
  });
});
