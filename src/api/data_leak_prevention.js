const BASE_PATH = '/dlp/rules';

module.exports = (client) => {
  client.dlpRules = {
    list,
    remove,
    store
  };

  function list(domain) {
    return client.api({
      url: `${BASE_PATH}/${domain}`
    });
  }

  function store(domain, rules) {
    return client.api({
      url: `${BASE_PATH}/${domain}`,
      method: 'PUT',
      data: rules
    });
  }

  function remove(domain) {
    return client.api({
      url: `${BASE_PATH}/${domain}`,
      method: 'DELETE'
    });
  }
};
