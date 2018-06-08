const BASE_PATH = '/domain_mappings';

function mixin(client) {
  client.listDomainMappings = () => {
    return client.api({
      url: BASE_PATH
    });
  };

  client.addDomainMapping = (domainMapping) => {
    return client.api({
      url: BASE_PATH,
      method: 'PUT',
      data: domainMapping
    });
  };
}

module.exports = mixin;
