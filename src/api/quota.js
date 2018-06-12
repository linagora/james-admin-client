const BASE_PATH = '/quota';
const USERS_CONTEXT = 'users';
const DOMAIN_CONTEXT = 'domains';

function mixin(client) {
  client.getQuota = () => {
    return client.api({
      url: BASE_PATH
    });
  };

  client.setQuota = (quota) => {
    return client.api({
      url: BASE_PATH,
      method: 'PUT',
      data: quota
    });
  };

  client.getUserQuota = (username) => {
    return client.api({
      url: `${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}`
    });
  };

  client.setUserQuota = (username, quota) => {
    return client.api({
      url: `${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}`,
      method: 'PUT',
      data: quota
    });
  };

  client.getDomainQuota = (domain) => {
    return client.api({
      url: `${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}`
    });
  };

  client.setDomainQuota = (domain, quota) => {
    return client.api({
      url: `${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}`,
      method: 'PUT',
      data: quota
    });
  };
}

module.exports = mixin;
