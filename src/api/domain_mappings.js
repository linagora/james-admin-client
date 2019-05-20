const BASE_PATH = '/domainMappings';

function mixin(client) {
  client.listDomainMappings = () => client.api({
    url: BASE_PATH
  });
}

module.exports = mixin;
