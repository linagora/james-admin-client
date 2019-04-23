const BASE_PATH = '/address/aliases';

module.exports = (client) => {
  client.listUsersHavingAliases = () => {
    return client.api({
      url: BASE_PATH
    });
  };

  client.listUserAliases = user => client.api({
    url: `${BASE_PATH}/${encodeURIComponent(user)}`
  });

  client.addUserAlias = (user, alias) => client.api({
    url: `${BASE_PATH}/${encodeURIComponent(user)}/sources/${encodeURIComponent(alias)}`,
    method: 'PUT'
  });

  client.removeUserAlias = (user, alias) => client.api({
    url: `${BASE_PATH}/${encodeURIComponent(user)}/sources/${encodeURIComponent(alias)}`,
    method: 'DELETE'
  });
};
