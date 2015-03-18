'use strict';
var assert = require('assert');
var timeTaken = require('./');
var fun = function() {
    console.log('meow');
};

it('should ', function () {
	assert.strictEqual(timeTaken(fun) > 0, true);
});
