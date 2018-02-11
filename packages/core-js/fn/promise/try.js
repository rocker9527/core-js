'use strict';
require('../../modules/es.promise');
require('../../modules/esnext.promise.try');
var $Promise = require('../../internals/path').Promise;
var $try = $Promise['try'];

module.exports = { 'try': function (callbackfn) {
  return $try.call(typeof this === 'function' ? this : $Promise, callbackfn);
} }['try'];
