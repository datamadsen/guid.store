#!/bin/bash
# Pahts are relative to "root", where we would normally run `yarn run deploy`.
yarn
rm -rf dist
yarn run build
sudo -u www-data rm -rf /var/www/guid.store/*
sudo -u www-data cp dist/* /var/www/guid.store
