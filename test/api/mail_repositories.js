const expect = require('chai').expect;

describe('mail_repositories.js', function() {
  describe('#list()', function() {
    it('should send GET request to get repository list', function() {
      const response = [{
        repository: 'file://var/mail/error/',
        id: 'file%3A%2F%2Fvar%2Fmail%2Ferror%2F'
      }, {
        repository: 'file://var/mail/relay-denied/',
        id: 'file%3A%2F%2Fvar%2Fmail%2Frelay-denied%2F'
      }, {
        repository: 'file://var/mail/spam/',
        id: 'file%3A%2F%2Fvar%2Fmail%2Fspam%2F'
      }, {
        repository: 'file://var/mail/address-error/',
        id: 'file%3A%2F%2Fvar%2Fmail%2Faddress-error%2F'
      }];

      this.mock.onGet('/mailRepositories').reply(200, response);

      return expect(this.client.mailRepositories.list()).to.eventually.deep.equal(response);
    });
  });

  describe('#get()', function() {
    it('should send GET request to get a single repository detail', function() {
      const response = {
        repository: 'file://var/mail/error/',
        id: 'file%3A%2F%2Fvar%2Fmail%2Ferror%2F',
        size: 243
      };

      this.mock.onGet('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F').reply(200, response);

      return expect(this.client.mailRepositories.get('file://var/mail/error/')).to.eventually.deep.equal(response);
    });
  });

  describe('#getMails()', function() {
    it('should send GET request to get mail keys from a repository', function() {
      const response = [
        'mail-key-1',
        'mail-key-2',
        'mail-key-3'
      ];

      this.mock.onGet('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails', {
        params: { limit: 10, offset: 20 }
      }).reply(200, response);

      return expect(this.client.mailRepositories.getMails('file://var/mail/error/', { limit: 10, offset: 20 }))
        .to.eventually.deep.equal(response);
    });
  });

  describe('#getMail()', function() {
    it('should send GET request to get a single mail detail', function() {
      const response = {
        name: 'mail-key-1',
        sender: 'sender@domain.com',
        recipients: ['recipient1@domain.com', 'recipient2@domain.com'],
        state: 'address-error',
        error: 'A small message explaining what happened to that mail...'
      };

      this.mock.onGet('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails/mail-key-1').reply(200, response);

      return expect(this.client.mailRepositories.getMail('file://var/mail/error/', 'mail-key-1')).to.eventually.deep.equal(response);
    });

    it('should send GET request to get a single mail detail with correct additionalFields params', function() {
      const response = {
        name: 'mail-key-1',
        sender: 'sender@domain.com',
        recipients: ['recipient1@domain.com', 'recipient2@domain.com'],
        state: 'address-error',
        error: 'A small message explaining what happened to that mail...'
      };

      this.mock.onGet('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails/mail-key-1', {
        params: { additionalFields: 'headers,htmlBody' }
      }).reply(200, response);

      return expect(this.client.mailRepositories.getMail('file://var/mail/error/', 'mail-key-1', {
        additionalFields: ['headers', 'htmlBody']
      })).to.eventually.deep.equal(response);
    });
  });
});
