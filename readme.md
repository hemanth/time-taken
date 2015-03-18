# time-taken [![Build Status](https://travis-ci.org/hemanth/time-taken.svg?branch=master)](https://travis-ci.org/hemanth/time-taken)

> Get the execution time of a (sync) function. [Mainly for DOM manipulation functions for now.]


## Install

```
$ npm install --save time-taken
```


## Usage

```js
var timeTaken = require('time-taken');

var meow = function() {
  console.log("meow");
};

console.log( timeTaken(meow) );
//=> 3951.710999943316
```


## API

### timeTaken(func)

#### func 
*Required* 
Type: `function`

`meow`

Returns a `Number` representing the time taken to execute the given function in miliseconds.

## TODO 

* Support Async functions.

* Support Promises.

* Support Generators.

## License

MIT © [hemanth](http://h3manth.com)
