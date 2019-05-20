const httpClient = require('./http-client');

const domainsApi = require('./api/domains');
const quotaApi = require('./api/quota');
const domainMappingsApi = require('./api/domain_mappings');
const groupApi = require('./api/group');
const usersApi = require('./api/users');
const forwardApi = require('./api/forward');
const mailRepositoriesApi = require('./api/mail_repositories');
const dataLeakPreventionApi = require('./api/data_leak_prevention');
const userAliasesApi = require('./api/user_aliases');
const deletedMessages = require('./api/deleted_messages');

class Client {
  constructor(options) {
    this.httpClient = httpClient({
      baseUrl: options.apiUrl,
      auth: {
        type: 'jwt',
        token: options.token
      }
    });

    domainsApi(this);
    quotaApi(this);
    domainMappingsApi(this);
    groupApi(this);
    usersApi(this);
    forwardApi(this);
    mailRepositoriesApi(this);
    dataLeakPreventionApi(this);
    userAliasesApi(this);
    deletedMessages(this);
  }

  api(config) {
    return this.httpClient(config).then(resp => resp.data);
  }
}

module.exports = Client;
