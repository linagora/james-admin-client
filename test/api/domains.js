const expect = require('chai').expect;

describe('domains.js', function() {
  describe('#listDomains()', function() {
    it('should send GET request to get domains', function() {
      this.mock.onGet('/domains').reply(200, ['domain1', 'domain2']);
      return expect(this.client.listDomains()).to.eventually.deep.equal(['domain1', 'domain2']);
    });
  });

  describe('#createDomain()', function() {
    it('should send PUT request to create domain', function() {
      this.mock.onPut('/domains/abc.com').reply(201);
      return expect(this.client.createDomain('abc.com')).to.be.fulfilled;
    });
  });

  describe('#removeDomain()', function() {
    it('should send DELETE request to remove domain', function() {
      this.mock.onDelete('/domains/abc.com').reply(200);
      return expect(this.client.removeDomain('abc.com')).to.be.fulfilled;
    });
  });
});
