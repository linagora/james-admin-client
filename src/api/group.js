const BASE_PATH = '/address/groups';

function mixin(client) {
  client.listGroups = () => {
    return client.api(BASE_PATH);
  };

  client.listGroupMembers = (group) => {
    return client.api(`${BASE_PATH}/${encodeURIComponent(group)}`, 'get');
  };

  client.addGroupMember = (group, member) => {
    return client.api(`${BASE_PATH}/${encodeURIComponent(group)}/${encodeURIComponent(member)}`, 'put');
  };

  client.removeGroupMember = (group, member) => {
    return client.api(`${BASE_PATH}/${encodeURIComponent(group)}/${encodeURIComponent(member)}`, 'remove');
  };
}

module.exports = mixin;
