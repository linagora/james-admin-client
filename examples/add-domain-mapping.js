const api = require('../src');
const httpClient = require('./request-http-client');

const Client = api.Client;

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuL' +
        'XBhYXMub3JnIiwiYWRtaW4iOnRydWUsImlhdCI6MTQ4OTAzODQzOH0.rgxCkdWEa-92a4R-72a9Z49k4LRvQDShgci5Y7qWRUP9IGJCK-lMkrHF' +
        '4H0a6L87BYppxVW701zaZ6dNxRMvHnjLBBWnPsC2B0rkkr2hEL2zfz7sb-iNGV-J4ICx97t8-TfQ5rz3VOX0FwdusPL_rJtmlGEGRivPkR6_aBe1' +
        'kQnvMlwpqF_3ox58EUqYJk6lK_6rjKEV3Xfre31IMpuQUy6c7TKc95sL2-13cknelTierBEmZ00RzTtv9SHIEfzZTfaUK2Wm0PvnQjmU2nIdEvU' +
        'EqE-jrM3yYXcQzoO-YTQnEhdl-iqbCfmEpYkl2Bx3eIq7gRxxnr7BPsX6HrCB0w';

function test() {
  const options = {
    httpClient,
    promiseProvider: null,
    token,
    apiUrl: 'http://192.168.1.165:8000'
  };
  const client = new Client(options);
  const mapping = {
    realDomain: 'email.com',
    aliases: ['linagora.com', 'linagora1.com']
  };

  client.addDomainMapping(mapping).then(
    () => console.log('Added a domain mapping'),
    err => console.log(err)
  );
}

test();
