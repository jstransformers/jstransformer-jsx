'use strict';

var jsx = require('react-tools');

exports.name = 'jsx';
exports.outputFormat = 'js';
exports.render = function(str, options, locals) {
  return jsx.transform(str, options);
};
