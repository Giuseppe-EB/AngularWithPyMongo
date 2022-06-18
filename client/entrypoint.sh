#!/bin/bash

printf "\xF0\x9F\x9A\x80 Container Start...\n"


[ -d "/app/node_modules" ] && printf "\xE2\x9C\x85 Node modules directory found! Skip npm install...\n"
[ ! -d "/app/node_modules" ] && printf "\xE2\x9A\xA0 No node modules directory found! Run npm install...\n" && npm install


printf "\xE2\x9C\x85 Run npm start..."

npm start

printf  "\xE2\x9D\x8C npm start exit! run loop for debug"

tail -f /dev/null

