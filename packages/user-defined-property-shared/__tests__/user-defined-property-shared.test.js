'use strict';

const userDefinedPropertyShared = require('..');
const assert = require('assert').strict;

assert.strictEqual(userDefinedPropertyShared(), 'Hello from userDefinedPropertyShared');
console.info("userDefinedPropertyShared tests passed");
