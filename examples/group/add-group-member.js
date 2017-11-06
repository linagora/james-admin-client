const { Client } = require('../../src');

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiYWRtaW4iOmZhbHNlLCJyZXNvdXJjZVR5cGUiOiJncm91cCIsInJlc291cmNlTmFtZSI6ImphbWVzQGphbWVzLmxpbmFnb3JhLmNvbSIsImFjdGlvbiI6ImFkZE1lbWJlciIsImlhdCI6MTUwOTA5ODQ3M30.PxHUtXkyRHx4yf2UIXPyYZYmH5w9iSDSZ668py-GxGMZm8UEN3gOYL3v3PfApKs8rludHUopGk5_4Xu4LC_5ly11JMKiobTEMjBRmIiTMpcqxUKfCH9um58nPQwP_AINZBvEEeI4aW8kubFR7E51QFZ3ce4H55QrCFijFQCMkbp4Kr7Yt5Jy_hWWvuZ7AKghuJNzXmHzeGRk1JJQvgCHoqxfyP-1UVNS0OziRs94YhAUJDsfHy5O_3ncoo-M567B5ErCktHzgrswMmKEVYpyLLwTxjw_ZBTxHVcwtbvSz2HcRo3iyYoI-8vJWxIKMN3DhM0N_HUFjWX9YaT1ibcNjQ';

function test() {
  const options = {
    token,
    apiUrl: 'http://192.168.0.101:8000'
  };
  const client = new Client(options);

  client.addGroupMember('james@james.linagora.com', 'user1@user.com').then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
}

test();
