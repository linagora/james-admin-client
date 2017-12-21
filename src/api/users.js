const BASE_PATH = '/users';

function mixin(client) {
  client.users = {
    create,
    list,
    remove,
    update
  };

  function create({ username, password } = {}) {
    return client.api(`${BASE_PATH}/${encodeURIComponent(username)}`, 'put', {}, { password });
  }

  function list() {
    return client.api(BASE_PATH);
  }

  function remove(username) {
    return client.api(`${BASE_PATH}/${encodeURIComponent(username)}`, 'remove');
  }

  function update({ username, password } = {}) {
    // same as create
    return create({ username, password });
  }
}

module.exports = mixin;
