#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_PULL_REQUEST" == "true" ]
then
  exit 0
fi

rm dist -rf
mkdir dist

gulp js
cp build/james-admin-client.js dist/james-admin-client.js

gulp js --production
cp build/james-admin-client.js dist/james-admin-client.min.js

rev=$(git rev-parse --short HEAD)

git config --global user.name "Sang"
git config --global user.email "heroandtn3@gmail.com"

git add -A dist/
git commit -m "rebuild lib at ${rev}"

git remote add dist https://$GH_TOKEN@github.com/heroandtn3/james-admin-client.git
git push -q dist HEAD:refs/heads/dist

exit 0
