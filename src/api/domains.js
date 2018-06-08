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
}

module.exports = mixin;
