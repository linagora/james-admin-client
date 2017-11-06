const axios = require('axios');

function post(url, headers, data) {
  return axios({
    method: 'POST',
    url,
    headers,
    data
  }).then(response => response.data);
}

function put(url, headers, data) {
  return axios({
    method: 'PUT',
    url,
    headers,
    data
  }).then(response => response.data);
}

function get(url, headers) {
  return axios({
    method: 'GET',
    url,
    headers
  }).then(response => response.data);
}

function remove(url, headers) {
  return axios({
    method: 'DELETE',
    url,
    headers
  }).then(response => response.data);
}

module.exports = {
  put,
  get,
  post,
  remove
};
