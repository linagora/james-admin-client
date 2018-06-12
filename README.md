# james-admin-client

> JS library to help configuring James through [web administration APIs](https://github.com/linagora/james-project/blob/master/src/site/markdown/server/manage-webadmin.md)

[![Build Status](https://travis-ci.org/linagora/james-admin-client.svg?branch=master)](https://travis-ci.org/linagora/james-admin-client)

## Installation

Bower:

`bower install james-admin-client`

NPM and Yarn:

`npm install @linagora/james-admin-client`

`yarn add https://github.com/linagora/james-admin-client.git`

## Usage

```javascript
const { Client } = require('@linagora/james-admin-client');

const options = {
  token: '...',
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

## Test & linting

Tests in `test` dir are provided by [mocha](https://mochajs.org) framework with [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) and [chai-as-promised](https://github.com/domenic/chai-as-promised) plugins.

To run execute all test cases:

```
npm run unit-test
```

To lint the code:

```
npm run lint
```

## Release

Assume that you are in `master` branch and you have write access to the `origin`
remote, type the following command to release a new version:

`./scripts/release.sh x.y.z`

In case your Git remote is NOT `origin`:

`./scripts/release.sh x.y.z my-remote`

## Licence

[Affero GPL v3](http://www.gnu.org/licenses/agpl-3.0.html)
