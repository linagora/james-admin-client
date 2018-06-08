const BASE_PATH = '/address/groups';

function mixin(client) {
  client.listGroups = () => {
    return client.api({
      url: BASE_PATH
    });
  };

  client.listGroupMembers = (group) => {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(group)}`
    });
  };

  client.addGroupMember = (group, member) => {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(group)}/${encodeURIComponent(member)}`,
      method: 'PUT'
    });
  };

  client.removeGroupMember = (group, member) => {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(group)}/${encodeURIComponent(member)}`,
      method: 'DELETE'
    });
  };
}

module.exports = mixin;
