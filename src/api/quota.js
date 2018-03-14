const BASE_PATH = '/quota';
const USERS_CONTEXT = 'users';

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
}

module.exports = mixin;
