const BASE_PATH = '/deletedMessages/users';

module.exports = (client) => {
  client.restoreDeletedMessages = (user, criterials) => client.api({
    url: `${BASE_PATH}/${encodeURIComponent(user)}?action=restore`,
    method: 'POST',
    data: criterials
  });

  client.exportDeletedMessages = (user, receiveUser, criterials) => client.api({
    url: `${BASE_PATH}/${encodeURIComponent(user)}?action=export&exportTo=${encodeURIComponent(receiveUser)}`,
    method: 'POST',
    data: criterials
  });
};
