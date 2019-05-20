const BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = () => {
    return client.api({
      url: BASE_PATH
    });
  };

  client.createDomain = (domain) => {
    return client.api({
      url: `${BASE_PATH}/${domain}`,
      method: 'PUT'
    });
  };

  client.removeDomain = (domain) => {
    return client.api({
      url: `${BASE_PATH}/${domain}`,
      method: 'DELETE'
    });
  };

  client.listDomainAliases = domain => client.api({
    url: `${BASE_PATH}/${domain}/aliases`
  });

  client.addDomainAlias = (domain, alias) => client.api({
    url: `${BASE_PATH}/${domain}/aliases/${alias}`,
    method: 'PUT'
  });

  client.removeDomainAlias = (domain, alias) => client.api({
    url: `${BASE_PATH}/${domain}/aliases/${alias}`,
    method: 'DELETE'
  });
}

module.exports = mixin;
