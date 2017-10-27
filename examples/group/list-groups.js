const api = require('../../src');
const httpClient = require('../request-http-client');

const Client = api.Client;
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiYWRtaW4iOmZhbHNlLCJyZXNvdXJjZVR5cGUiOiJncm91cCIsImFjdGlvbiI6Imxpc3RHcm91cHMiLCJpYXQiOjE1MDkwOTg3NTF9.I3_4OO4l75Z7vsGSkhA7jW8AYZ4Mr7j0tBBWliCI5jNB6ybx4dhjOA4MIzYjwQ4p7FdRqNHBkTSFHX-_Akjl8pssxpHKlaKkPDoGUX6AVuq-XKlO-mFHjsx8FSSciij35YWPeqz1hjctjzOp6c0XBBIMu_Ck8ywG-UNwJ9jz_FqpWghcj7t_qv1_Dz6GNu0VFjZpQq-nw-bgnfvA6kHKzfF-1ZfCPVVXHX9Q9YOUIMvr4rO6p8_UDnajjgCoHIo7Wt6NMBXHe2npafRVpV554rpm5WJEnKBlhcqGHXATeO8r7PIB-_NFzNsVKt2TW0q9-oCY1QCypXi13nww57tx9w';

function test() {
  const options = {
    httpClient,
    promiseProvider: null,
    token,
    apiUrl: 'http://192.168.0.101:8000'
  };
  const client = new Client(options);

  client.listGroups().then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
}

test();

