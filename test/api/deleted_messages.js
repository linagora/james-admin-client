const expect = require('chai').expect;

describe('deleted_messages.js', function() {
  describe('#restoreDeletedMessages()', function() {
    it('should send POST request to get store deleted messages of a user', function() {
      this.mock.onPost(`/deletedMessages/users/${encodeURIComponent('a@b.com')}?action=restore`).reply(201);
      expect(this.client.restoreDeletedMessages()).to.be.fulfilled;
    });
  });

  describe('#exportDeletedMessages()', function() {
    it('should send POST request to export deleted messages of a user', function() {
      this.mock.onPost(`/deletedMessages/users/${encodeURIComponent('a@b.com')}?action=restore&exportTo=${encodeURIComponent('c@d.com')}`).reply(201);
      expect(this.client.exportDeletedMessages()).to.be.fulfilled;
    });
  });
});
