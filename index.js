'use strict';
var now = require("performance-now");

module.exports = function (func) {
	if( func && {}.toString.call(func) === '[object Function]') {
       var t0 = now();
       func();
       var t1 = now();
       return t1 - t0;
    }
};
