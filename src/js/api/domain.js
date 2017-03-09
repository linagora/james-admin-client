const BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = () => {
    return client.api(BASE_PATH);
  };
}

module.exports = mixin;
