var fs = require('fs');

// callback is passed in from the caller does the 'do stuff' part in forEach
// with single exports, the module name is the exported function name.
module.exports = function (dirname, suffix, callback) {
    var pat = '.*\.' + suffix + '$';
    var regpat = new RegExp(pat);
    fs.readdir(dirname, function (err, list) {
        if (err) {
            return callback(err, list);
        }
        return callback(null, list.filter(function (elem) {
            if (elem.match(regpat)) {
                return true;
            }
        }));
    });

};

// export ls out as ls
// module.exports.ls = ls;
