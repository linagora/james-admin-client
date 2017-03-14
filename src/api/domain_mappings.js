const BASE_PATH = '/domain_mappings';

function mixin(client) {
  client.listDomainMappings = () => {
    return client.api(BASE_PATH);
  };

  client.addDomainMapping = (domainMapping) => {
    return client.api(BASE_PATH, 'put', {}, domainMapping);
  };
}

module.exports = mixin;
