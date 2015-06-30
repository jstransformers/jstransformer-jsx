# jstransformer-jsx

[JSX](https://www.npmjs.com/package/react-tools#jsx) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jsx/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jsx)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jsx/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jsx?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jsx/master.svg)](http://david-dm.org/jstransformers/jstransformer-jsx)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jsx.svg)](https://www.npmjs.org/package/jstransformer-jsx)


## Installation

    npm install jstransformer-jsx

## API

```js
var jsx = require('jstransformer')(require('jstransformer-jsx'))

jsx.renderFile('example.jsx').body
//=> Compiled JSX as JavaScript
```

## License

  MIT
