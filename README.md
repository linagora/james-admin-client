# james-admin-client

> JS library to help configuring James through web administration APIs

[![Build Status](https://travis-ci.org/linagora/james-admin-client.svg?branch=master)](https://travis-ci.org/linagora/james-admin-client)

## Installation

Bower:

`bower install james-admin-client`

NPM and Yarn:

`npm install https://github.com/linagora/james-admin-client.git`

`yarn add https://github.com/linagora/james-admin-client.git`

## Usage

```javascript
const { Client } = require('james-admin-client');


const token = '...';
const httpClient = {
  get(url, headers) {
    // ...
  },
  post(url, headers, data, raw) {
    // ...
  },
  put(url, headers, data, raw) {
    // ...
  }
}

const options = {
  httpClient,
  token,
  apiUrl: 'http://james.yourserver.com'
};
const client = new Client(options);

client.getQuota().then((response) => {
  console.log(response);
}, (err) => {
  console.log(err);
});
```

On browser:

```javascript
const james = window.james;
const Client = james.Client;

...
```

## Release

To release new patch version, run this command on `master` branch:

`gulp release`

New minor version:

`gulp release --minor`

New major version:

`gulp release --major`

## Licence

[Affero GPL v3](http://www.gnu.org/licenses/agpl-3.0.html)
