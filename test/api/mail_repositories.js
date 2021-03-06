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

  describe('#downloadEmlFile()', function() {
    it('should send GET request to get a single mail details in Eml format with correct headers', function() {
      const response = 'mail-detail';

      this.mock.onGet('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails/mail-key-1', {
        headers: { accept: 'message/rfc822' }
      }).reply(200, response);

      return expect(this.client.mailRepositories.downloadEmlFile('file://var/mail/error/', 'mail-key-1')).to.eventually.deep.equal(response);
    });
  });

  describe('#removeMail()', function() {
    it('should send DELETE request to delete a single mail in mail repository', function() {
      this.mock.onDelete('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails/mail-key-1').reply(204);

      return expect(this.client.mailRepositories.removeMail('file://var/mail/error/', 'mail-key-1')).to.be.fulfilled;
    });
  });

  describe('#removeAllMails()', function() {
    it('should send DELETE request to delete all mails in mail repository', function() {
      this.mock.onDelete('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails').reply(201);

      return expect(this.client.mailRepositories.removeAllMails('file://var/mail/error/')).to.be.fulfilled;
    });
  });

  describe('#reprocessAllMails()', function() {
    it('should send PATCH request to reprocess all mails from a mail repository', function() {
      this.mock.onPatch('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails').reply(201);

      return expect(this.client.mailRepositories.reprocessAllMails('file://var/mail/error/')).to.be.fulfilled;
    });
  });

  describe('#reprocessMail()', function() {
    it('should send PATCH request to reprocess a specific mail from a mail repository', function() {
      this.mock.onPatch('/mailRepositories/file%3A%2F%2Fvar%2Fmail%2Ferror%2F/mails/mail-key').reply(201);

      return expect(this.client.mailRepositories.reprocessMail('file://var/mail/error/', 'mail-key')).to.be.fulfilled;
    });
  });
});
