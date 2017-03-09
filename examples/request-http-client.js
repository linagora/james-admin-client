const q = require('q');
const request = require('request');

const SUCCESS_RESPONSE_CODES = [200, 201];

function post(url, headers, data, raw) {
  return q.Promise(function(resolve, reject) {
    request({
      url,
      headers,
      method: 'POST',
      body: data,
      json: !raw
    }, errorHandle(resolve, reject));
  });
}

function put(url, headers, data, raw) {
  return q.Promise(function(resolve, reject) {
    request({
      url,
      headers,
      method: 'PUT',
      body: data,
      json: !raw
    }, errorHandle(resolve, reject));
  });
}

function get(url, headers) {
  return q.Promise(function(resolve, reject) {
    request({
      url,
      headers,
      method: 'GET'
    }, errorHandle(resolve, reject));
  });
}

function errorHandle(resolve, reject) {
  return (err, res, body) => {
    if (err) {
      return reject(err);
    }

    if (SUCCESS_RESPONSE_CODES.indexOf(res.statusCode) < 0) {
      console.log(body);

      return reject(new Error(`Bad HTTP request ${res.statusCode}`));
    }

    resolve(body);
  };
}

module.exports = {
  put,
  get,
  post
};
