'use strict';
var now = require("performance-now");

module.exports = function (func) {
	if( func && typeof func === 'function') {
       var t0 = now();
       func();
       var t1 = now();
       return t1 - t0;
    } else {
        throw new Error("Expecting a function.");
    }
};
