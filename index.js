'use strict'

const jsx = require('react-tools')

exports.name = 'jsx'
exports.outputFormat = 'js'
exports.render = jsx.transform
