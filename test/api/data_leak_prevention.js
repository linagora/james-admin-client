const expect = require('chai').expect;

describe('data_leak_prevention.js', function() {
  describe('The DLP rules', function() {
    describe('#list()', function() {
      it('should send GET request to get the list of rules', function() {
        const rules = [{
          id: '1',
          expression: 'something.malicious',
          explanation: 'Anything contains something malicious',
          targetsSender: false,
          targetsRecipients: false,
          targetsContent: true
        }];

        this.mock.onGet('/dlp/rules/abc.com').reply(200, rules);
        return expect(this.client.dlpRules.list('abc.com')).to.eventually.deep.equal(rules);
      });
    });

    describe('#store()', function() {
      it('should send PUT request to store rules', function() {
        this.mock.onPut('/dlp/rules/abc.com').reply(204);
        return expect(this.client.dlpRules.store('abc.com')).to.be.fulfilled;
      });
    });

    describe('#remove()', function() {
      it('should send DELETE request to remove rules', function() {
        this.mock.onDelete('/dlp/rules/abc.com').reply(204);
        return expect(this.client.dlpRules.remove('abc.com')).to.be.fulfilled;
      });
    });
  });
});
