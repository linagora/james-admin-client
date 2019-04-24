const expect = require('chai').expect;

describe('domain_mappings.js', function() {
  describe('#listDomainMappings()', function() {
    it('should send GET request to get all domain mappings', function() {
      this.mock.onGet('/domainMappings').reply(200, {
        'open-paas.org': ['open-paas1.org']
      });
      expect(this.client.listDomainMappings()).to.eventually.deep.equal({
        'open-paas.org': ['open-paas1.org']
      });
    });
  });

  describe('#listDomainAliases()', function() {
    it('should send GET request to get all aliases of a domain', function() {
      this.mock.onGet('/domainMappings/open-paas.org').reply(200, ['open-paas1.org']);
      expect(this.client.listDomainAliases('open-paas.org')).to.eventually.deep.equal(['open-paas1.org']);
    });
  });

  describe('#addDomainAlias()', function(done) {
    it('should send PUT request to add domain alias', function() {
      this.mock.onPut('/domainMappings/abc.com').reply(204);
      this.client.addDomainAlias('abc.com', 'cab.com')
      .then(() => done())
      .catch(done);
    });
  });

  describe('#removeDomainAlias()', function(done) {
    it('should send DELETE request to remove domain alias', function() {
      this.mock.onDelete('/domainMappings/abc.com').reply(204);
      this.client.removeDomainAlias('abc.com', 'cab.com')
        .then(() => done())
        .catch(done);
    });
  });
});
