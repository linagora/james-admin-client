const BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = () => {
    return client.api(BASE_PATH);
  };

  client.createDomain = (domain) => {
    return client.api(`${BASE_PATH}/${domain}`, 'put');
  };

  client.removeDomain = (domain) => {
    return client.api(`${BASE_PATH}/${domain}`, 'remove');
  };
}

module.exports = mixin;
