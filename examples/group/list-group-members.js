const api = require('../../src');
const httpClient = require('../request-http-client');

const Client = api.Client;
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiYWRtaW4iOmZhbHNlLCJyZXNvdXJjZVR5cGUiOiJncm91cCIsInJlc291cmNlTmFtZSI6ImphbWVzQGphbWVzLmxpbmFnb3JhLmNvbSIsImFjdGlvbiI6InZpZXdNZW1iZXJzIiwiaWF0IjoxNTA5MDk4NTQ0fQ.MZySeAdhsuFhtlE2e_h2qKhcw4JCz3m-yR9zO8Vgnn_y5Z-YeosNY1xEZJ9trUHGpr7wFPoc7IidV_QMGGf0sYyY3-0ST_FnKL7GbWA4lMsXYduam96AHCbk0SEbnIG4dr4OrRi63I0TS5r1naQ3t0pxoOvRu_PYyTd7rlMv83Y0OWFqmfpCebnehG-buCOZifqw4fIvPwxnVZgWm1DGeigoo1GtKC7bM2ms6pAflZHexvsqkmPag52ZfGMn0VCKeZrm-oYAWgQ2D-X39yrVIeU8ylr1Fo660ma2plux_11AksvbWn1IK4dE7UM9YU0g6xVf41-x63k-KpyQ-XFnYw';

function test() {
  const options = {
    httpClient,
    promiseProvider: null,
    token,
    apiUrl: 'http://192.168.0.101:8000'
  };
  const client = new Client(options);

  client.listGroupMembers('james@james.linagora.com').then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
}

test();

