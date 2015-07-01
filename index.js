'use strict';

var jsx = require('react-tools');

exports.name = 'jsx';
exports.outputFormat = 'js';
exports.render = jsx.transform;
