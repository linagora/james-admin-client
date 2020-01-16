const BASE_PATH = '/tasks';

function mixin(client) {
  client.getTask = id => client.api({ url: `${BASE_PATH}/${id}` });
}

module.exports = mixin;
