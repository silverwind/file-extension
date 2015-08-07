"use strict";

function ext(filename, opts) {
  var ret;

  if (!opts) {
    opts = {};
  }

  if (!filename) {
    return "";
  }

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
}

(function (mod) {
  if (typeof exports === "object") {
    module.exports = mod();
  } else if (typeof define === "function" && define.amd) {
    define([], mod);
  } else {
    this.ext = mod();
  }
}(function () { return ext; }));
