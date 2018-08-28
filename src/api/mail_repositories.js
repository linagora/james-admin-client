const BASE_PATH = '/mailRepositories';

function mixin(client) {
  client.mailRepositories = {
    list,
    downloadEmlFile,
    get,
    getMails,
    getMail,
    removeMail,
    removeAllMails
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

  function downloadEmlFile(repositoryId, mailKey) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails/${mailKey}`,
      method: 'GET',
      headers: { accept: 'message/rfc822' },
      responseType: 'blob'
    });
  }

  function removeMail(repositoryId, mailKey) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails/${mailKey}`,
      method: 'DELETE'
    });
  }

  function removeAllMails(repositoryId) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails`,
      method: 'DELETE'
    });
  }
}

module.exports = mixin;
