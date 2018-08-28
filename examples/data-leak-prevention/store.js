const { Client } = require('../../src');

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBvcGVuLXBhYXMub3JnIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxMzg0Mjk1MX0.dUcz6m_bPAGFIRq849PpH4cstgyEPLw_xYSFo40bgncP2gsS0OzybSV5xqZdU12zOPv0bzpMKiNhZLR0liUYOo6KxGZTVQKJHrzcxqFuXNlPcPa7nwxBmvYD-L-FpyHnKWkRHDRTEjHWqA3pkMVFygzHLIHNLmHOE_765HnhqXo_EMERpWxi4qMaF-IXdzD9y-v0wRSgfVZV-CuSnjuBYyZIraUiWJgdscCn3-kPTzQq3eGDNkj9uhyTxjbcxSQjDcJt9vpQTdb9wClLBMjKMEfCVR79373O5eMm2Tbl4eOsEysCiVl2a-hXQ0QAU3zZHPB12FUn5v6yKKPGouphog';

function test() {
  const options = {
    token,
    apiUrl: 'http://localhost:8000'
  };
  const client = new Client(options);

  client.dlpRules.store('open-paas.org', {
    rules: [
      {
        id: '1',
        expression: 'something.malicious',
        explanation: 'Anything contains something malicious',
        targetsSender: false,
        targetsRecipients: false,
        targetsContent: true
      }
    ]
  }).then(() => {
    console.log('Success to store DLP rules');
  }, (err) => {
    console.log(err);
  });
}

test();
