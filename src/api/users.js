const BASE_PATH = '/users';

function mixin(client) {
  client.users = {
    create,
    getAllowedFromHeaders,
    list,
    remove,
    update
  };

  function create({ username, password } = {}) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(username)}`,
      method: 'PUT',
      data: { password }
    });
  }

  function list() {
    return client.api({
      url: BASE_PATH
    });
  }

  function remove(username) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(username)}`,
      method: 'DELETE'
    });
  }

  function update({ username, password } = {}) {
    // same as create
    return create({ username, password });
  }

  function getAllowedFromHeaders(username) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(username)}/allowedFromHeaders`
    });
  }
}

module.exports = mixin;
