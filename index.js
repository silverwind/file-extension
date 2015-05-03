"use strict";

module.exports = function (filename, preserveCase) {
    var ret;

    if (!filename) {
        ret = "";
    } else if (/^\..+$/.test(filename) && filename.match(/\./g).length === 1) {
        ret = filename.substring(1);
    } else {
        var parts = filename.split(".");
        if (parts.length === 1 || (parts[0] === "" && parts.length === 2)) {
            ret = "";
        } else {
            ret = parts.pop();
        }
    }

    return preserveCase ? ret : ret.toLowerCase();
};
