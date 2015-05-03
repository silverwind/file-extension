"use strict";

module.exports = function (filename, opts) {
    var ret;

    if (!opts) {
        opts = {};
    }

    if (!filename) {
        return "";
    }

    if (/^\..+$/.test(filename) && filename.match(/\./g).length === 1) {
        ret = filename.substring(1);
    }

    var parts = filename.split(".");

    if (parts.length === 1 || (parts[0] === "" && parts.length === 2)) {
        return "";
    } else {
        ret = parts.pop();
    }

    return opts.preserveCase ? ret : ret.toLowerCase();
};
