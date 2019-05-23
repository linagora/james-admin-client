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
});
