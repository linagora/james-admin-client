const BASE_PATH = '/quota';

function mixin(client) {
  client.getQuota = () => {
    return client.api(BASE_PATH);
  };

  client.setQuota = (quota) => {
    return client.api(BASE_PATH, 'put', {}, quota);
  };
}

module.exports = mixin;
