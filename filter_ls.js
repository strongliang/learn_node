// filesystem, buffer, directory, regex, filter
var fs = require('fs');

var dirname = process.argv[2];
var suffix = process.argv[3];

// buffer is a buffer object
fs.readdir(dirname, function(err, list) {
    list.filter(function(elem) {
        var pat = '.*\.' + suffix + '$';
        if (elem.match(new RegExp(pat))) {
            return true;
        }
    }).forEach(function(elem, idx, array) {
        console.log(elem);
    });
});


/* official solution

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

*/
