const api = require('../../src');
const httpClient = require('../request-http-client');

const Client = api.Client;
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiYWRtaW4iOmZhbHNlLCJyZXNvdXJjZVR5cGUiOiJncm91cCIsInJlc291cmNlTmFtZSI6ImphbWVzQGphbWVzLmxpbmFnb3JhLmNvbSIsImFjdGlvbiI6InJlbW92ZU1lbWJlciIsImlhdCI6MTUwOTA5ODQwOH0.GLz7hAUVJ8WJ8xym0mYhN-BFWKsK4bk6t7clnxMx5tPrwFVeySBG24wtdJZrJAEtYFHwjffDaLbD-TO6ujN7e2DGKV9aN7gQH6wW0Jg3dNKUNpGmmSwOQpH9RH1rMbPQzwXbFrvs3V1i_S_IHP7hHLU48Td57PwAoK__EJrjE_pvlyYJVZlWt_MxN0eO6IbY8IH0fFr4VJlqxiICgl1nI-tk7SI8ZJzm9Q5HHw7YItIIKcDpeYFNjSpZfXVJFBqvetaoOrcnNNnP05uIz6glLg8C8_VYInXTVFBj50pzfjYo30_fCWZMrOR3dqEye1qTQt07buaCLoPiTbbQXIUovg';

function test() {
  const options = {
    httpClient,
    promiseProvider: null,
    token,
    apiUrl: 'http://192.168.0.101:8000'
  };
  const client = new Client(options);

  client.removeGroupMember('james@james.linagora.com', 'user@user.com').then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
}

test();

