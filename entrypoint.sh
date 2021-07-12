#!/bin/ash
cd /var/www/front && npm install --verbose && node node_modules/node-sass/scripts/install.js && npm rebuild node-sass && npm run build
exec "$@"