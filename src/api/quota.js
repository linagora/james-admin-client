const BASE_PATH = '/quota';
const USERS_CONTEXT = 'users';
const DOMAIN_CONTEXT = 'domains';

function mixin(client) {
  client.getQuota = () => {
    return client.api(BASE_PATH);
  };

  client.setQuota = (quota) => {
    return client.api(BASE_PATH, 'put', {}, quota);
  };

  client.getUserQuota = (username) => {
    return client.api(`${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}`);
  };

  client.setUserQuota = (username, quota) => {
    return client.api(`${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}`, 'put', {}, quota);
  };

  client.getDomainQuota = (domain) => {
    return client.api(`${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}`);
  };

  client.setDomainQuota = (domain, quota) => {
    return client.api(`${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}`, 'put', {}, quota);
  };
}

module.exports = mixin;
