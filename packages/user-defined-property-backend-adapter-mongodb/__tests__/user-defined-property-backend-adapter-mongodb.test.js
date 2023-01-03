'use strict';

const userDefinedPropertyBackendAdapterMongodb = require('..');
const assert = require('assert').strict;

assert.strictEqual(userDefinedPropertyBackendAdapterMongodb(), 'Hello from userDefinedPropertyBackendAdapterMongodb');
console.info("userDefinedPropertyBackendAdapterMongodb tests passed");
