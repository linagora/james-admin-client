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

  function getMail(repositoryId, mailKey, options = {}) {
    const request = {
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails/${mailKey}`
    };

    if (options.additionalFields) {
      request.params = {
        additionalFields: options.additionalFields.join(',')
      };
    }

    return client.api(request);
  }
}

module.exports = mixin;
