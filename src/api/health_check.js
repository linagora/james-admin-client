const BASE_PATH = '/healthcheck';

module.exports = (client) => {
  client.healthCheck = {
    get,
    getOneComponent,
    listAllHealthChecks
  };

  function get() {
    return client.api({
      url: BASE_PATH,
      method: 'GET'
    });
  }

  function getOneComponent(name) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(name)}`,
      method: 'GET'
    });
  }

  function listAllHealthChecks() {
    return client.api({
      url: `${BASE_PATH}/checks`,
      method: 'GET'
    });
  }
};
