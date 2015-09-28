/*! uppie | (c) 2015 silverwind | BSD license */
/* eslint-env commonjs, amd */
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
  return function ext(filename, opts) {
    var ret;
    if (!opts) opts = {};
    if (!filename) return "";

    if (/^\..+$/.test(filename) && filename.match(/\./g).length === 1) {
      ret = filename.substring(1);
    } else {
      var parts = filename.split(".");

      if (parts.length === 1 || (parts[0] === "" && parts.length === 2)) {
        return "";
      } else {
        ret = parts.pop();
      }
    }
    return opts.preserveCase ? ret : ret.toLowerCase();
  };
});
