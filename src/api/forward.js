const BASE_PATH = '/address/forwards';
const DESTINATION_CONTEXT = 'targets';

module.exports = (client) => {
  client.forward = {
    addDestination,
    list,
    listDestinationsOfForward,
    removeDestination
  };

  function addDestination(forward, destination) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(forward)}/${DESTINATION_CONTEXT}/${encodeURIComponent(destination)}`,
      method: 'PUT'
    });
  }

  function list() {
    return client.api({
      url: BASE_PATH
    });
  }

  function listDestinationsOfForward(forward) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(forward)}`
    });
  }

  function removeDestination(forward, destination) {
    return client.api({
      url: `${BASE_PATH}/${encodeURIComponent(forward)}/${DESTINATION_CONTEXT}/${encodeURIComponent(destination)}`,
      method: 'DELETE'
    });
  }
};
