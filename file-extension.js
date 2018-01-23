/*! file-extension v4.0.2 | (c) silverwind | BSD license */
/* eslint-disable no-var */
"use strict";

(function(m) {
  if (typeof exports === "object") {
    module.exports = m();
  } else if (typeof define === "function" && define.amd) {
    define([], m);
  } else {
    this.fileExtension = m();
  }
})(function() {
  return function fileExtension(filename, opts) {
    if (!opts) opts = {};
    if (!filename) return "";
    var ext = (/[^./\\]*$/.exec(filename) || [""])[0];
    return opts.preserveCase ? ext : ext.toLowerCase();
  };
});
