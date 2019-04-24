const expect = require('chai').expect;

describe('user_aliases.js', function() {
  describe('#listUsersHavingAliases()', function() {
    it('should send GET request to get all users having aliases', function() {
      this.mock.onGet('/address/aliases').reply(200, ['a@b.com', 'b@b.com']);
      expect(this.client.listUsersHavingAliases()).to.eventually.deep.equal(['a@b.com', 'b@b.com']);
    });
  });

  describe('#listUserAliases()', function() {
    it('should send GET request to get all aliases of a user', function() {
      this.mock.onGet(`/address/aliases/${encodeURIComponent('a@b.com')}`).reply(200, [{ source: 'a@a.com' }]);
      expect(this.client.listUserAliases('a@b.com')).to.eventually.deep.equal([{ source: 'a@a.com' }]);
    });
  });

  describe('#addUserAlias()', function() {
    it('should send PUT request to add user alias', function(done) {
      this.mock.onPut(`/address/aliases/${encodeURIComponent('a@b.com')}/sources/${encodeURIComponent('a@a.com')}`).reply(204);
      this.client.addUserAlias('a@b.com', 'a@a.com')
      .then(() => done())
      .catch(done);
    });
  });

  describe('#removeUserAlias()', function() {
    it('should send DELETE request to remove user alias', function(done) {
      this.mock.onDelete(`/address/aliases/${encodeURIComponent('a@b.com')}/sources/${encodeURIComponent('a@a.com')}`).reply(204);
      this.client.removeUserAlias('a@b.com', 'a@a.com')
        .then(() => done())
        .catch(done);
    });
  });
});
