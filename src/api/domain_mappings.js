const BASE_PATH = '/domainMappings';

function mixin(client) {
  client.listDomainMappings = () => client.api({
    url: BASE_PATH
  });

  client.listDomainAliases = sourceDomain => client.api({
    url: `${BASE_PATH}/${sourceDomain}`
  });

  client.addDomainAlias = (sourceDomain, alias) => client.api({
    url: `${BASE_PATH}/${sourceDomain}`,
    method: 'PUT',
    data: alias
  });

  client.removeDomainAlias = (sourceDomain, alias) => client.api({
    url: `${BASE_PATH}/${sourceDomain}`,
    method: 'DELETE',
    data: alias
  });
}

module.exports = mixin;
