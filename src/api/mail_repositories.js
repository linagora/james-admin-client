const BASE_PATH = '/mailRepositories';

function mixin(client) {
  client.mailRepositories = {
    list,
    downloadEmlFile,
    get,
    getMails,
    getMail,
    removeMail,
    removeAllMails,
    reprocessAllMails,
    reprocessMail
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

  function reprocessAllMails(repositoryId, { processor, queue } = {}) {
    const action = 'reprocess';

    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails`,
      method: 'PATCH',
      params: { action, processor, queue }
    });
  }

  function reprocessMail(repositoryId, mailKey, { processor, queue } = {}) {
    const action = 'reprocess';

    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(repositoryId)}/mails/${mailKey}`,
      method: 'PATCH',
      params: { action, processor, queue }
    });
  }
}

module.exports = mixin;
