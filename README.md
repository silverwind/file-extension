# file-extension [![NPM version](https://img.shields.io/npm/v/file-extension.svg?style=flat)](https://www.npmjs.org/package/file-extension) [![Dependency Status](http://img.shields.io/david/silverwind/file-extension.svg?style=flat)](https://david-dm.org/silverwind/file-extension)
> Get the extension of a given filename or path

Differences to `path.extname`:

* Treats dotfiles as extension.
* Doesn't include the dot in the extension.
* Returns lowercase extensions by default.

## Installation
#### Node.js
```
$ npm install --save file-extension
```
#### Browser
```html
<script src="file-extension.js"></script>
<!-- Available as `ext` -->
```
## Example
```js
var ext = require('file-extension'); // Skip this in the browser

// Case insensitive
ext('file.zip');          //=> 'zip'
ext('.Dockerfile');       //=> 'dockerfile'
ext('file');              //=> ''
ext('.file.tar');         //=> 'tar'

// Or with case preserved
ext('.Vagrantfile', {preserveCase: true}); //=> 'Vagrantfile'
ext('INDEX.HTML', {preserveCase: true});   //=> 'HTML'
```

## API
### ext(filename, [options])
- `filename` {String} The file name. Required.
- `options` {Object} Options object.

#### Options
- `preserveCase` {Boolean} Whether case should be preserved. Default: false.

© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence
