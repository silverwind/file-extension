# file-extension [![NPM version](https://img.shields.io/npm/v/file-extension.svg?style=flat)](https://www.npmjs.org/package/file-extension) [![Dependency Status](http://img.shields.io/david/silverwind/file-extension.svg?style=flat)](https://david-dm.org/silverwind/file-extension)
> Get the extension of a given filename

Differences to `path.extname`:

* Returns lowercase extensions by default
* Treats dotfiles as extension
* Doesn't include a '.' in the extension

## Installation
```
$ npm install --save file-extension
```
## Example
```js
var ext = require('file-extension');

// Case insensitive
ext('file.zip')           //=> 'zip'
ext('.Dockerfile')        //=> 'dockerfile'
ext('file')               //=> ''
ext('.file.tar')          //=> 'tar'

// Or with case preserved
ext('.Vagrantfile', true) //=> 'Vagrantfile'
ext('INDEX.HTML', true)   //=> 'HTML'
```

## API
### ext(filename, options)
- `filename` {String} The file name. Required.
- `options` {Object} Optional options object.

#### Options
- `preserveCase` {Boolean} Whether case should be preserved. Default: false.

© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence
