const BASE_PATH = '/mailRepositories';

function mixin(client) {
  client.mailRepositories = {
    list,
    get,
    getMails,
    getMail
  };

  function list() {
    return client.api({
      url: BASE_PATH
    });
  }

  function get(repositoryId) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}`
    });
  }

  function getMails(repositoryId, { limit, offset } = {}) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails`,
      params: { limit, offset }
    });
  }

  function getMail(repositoryId, mailKey) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails/${mailKey}`
    });
  }
}

module.exports = mixin;
