const expect = require('chai').expect;

describe('quota.js', function() {
  describe('#deleteQuotaCount()', function() {
    it('should send DELETE request to delete global quota count', function() {
      this.mock.onDelete('/quota/count').reply(204);
      return expect(this.client.deleteQuotaCount()).to.be.fulfilled;
    });
  });

  describe('#deleteQuotaSize()', function() {
    it('should send DELETE request to delete global quota size', function() {
      this.mock.onDelete('/quota/size').reply(204);
      return expect(this.client.deleteQuotaSize()).to.be.fulfilled;
    });
  });

  describe('#deleteUserQuotaCount()', function() {
    it('should send DELETE request to delete user quota count', function() {
      this.mock.onDelete(`/quota/users/${encodeURIComponent('abc@open-paas.org')}/count`).reply(204);
      return expect(this.client.deleteUserQuotaCount('abc@open-paas.org')).to.be.fulfilled;
    });
  });

  describe('#deleteUserQuotaSize()', function() {
    it('should send DELETE request to delete user quota size', function() {
      this.mock.onDelete(`/quota/users/${encodeURIComponent('abc@open-paas.org')}/size`).reply(204);
      return expect(this.client.deleteUserQuotaSize('abc@open-paas.org')).to.be.fulfilled;
    });
  });

  describe('#deleteDomainQuotaCount()', function() {
    it('should send DELETE request to delete user quota count', function() {
      this.mock.onDelete('/quota/domains/open-paas.org/count').reply(204);
      return expect(this.client.deleteDomainQuotaCount('open-paas.org')).to.be.fulfilled;
    });
  });

  describe('#deleteDomainQuotaSize()', function() {
    it('should send DELETE request to delete domain quota size', function() {
      this.mock.onDelete('/quota/domains/open-paas.org/size').reply(204);
      return expect(this.client.deleteDomainQuotaSize('open-paas.org')).to.be.fulfilled;
    });
  });
});
