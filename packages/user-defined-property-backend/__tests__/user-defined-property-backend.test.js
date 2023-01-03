'use strict';

const userDefinedPropertyBackend = require('..');
const assert = require('assert').strict;

assert.strictEqual(userDefinedPropertyBackend(), 'Hello from userDefinedPropertyBackend');
console.info("userDefinedPropertyBackend tests passed");
