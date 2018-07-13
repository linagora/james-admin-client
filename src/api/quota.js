const BASE_PATH = '/quota';
const USERS_CONTEXT = 'users';
const DOMAIN_CONTEXT = 'domains';
const QUOTA_SIZE_PATH = 'size';
const QUOTA_COUNT_PATH = 'count';

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

  client.deleteQuotaCount = () => {
    return client.api({
      url: `${BASE_PATH}/${QUOTA_COUNT_PATH}`,
      method: 'DELETE'
    });
  };

  client.deleteQuotaSize = () => {
    return client.api({
      url: `${BASE_PATH}/${QUOTA_SIZE_PATH}`,
      method: 'DELETE'
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

  client.deleteUserQuotaCount = (username) => {
    return client.api({
      url: `${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}/${QUOTA_COUNT_PATH}`,
      method: 'DELETE'
    });
  };

  client.deleteUserQuotaSize = (username) => {
    return client.api({
      url: `${BASE_PATH}/${USERS_CONTEXT}/${encodeURIComponent(username)}/${QUOTA_SIZE_PATH}`,
      method: 'DELETE'
    });
  };

  client.deleteDomainQuotaCount = (domain) => {
    return client.api({
      url: `${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}/${QUOTA_COUNT_PATH}`,
      method: 'DELETE'
    });
  };

  client.deleteDomainQuotaSize = (domain) => {
    return client.api({
      url: `${BASE_PATH}/${DOMAIN_CONTEXT}/${encodeURIComponent(domain)}/${QUOTA_SIZE_PATH}`,
      method: 'DELETE'
    });
  };
}

module.exports = mixin;
