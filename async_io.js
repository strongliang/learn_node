/*
wc -l <one-liner> returns 0!
*/
var fs = require('fs');

var filename = process.argv[2];

// buffer is a buffer object
fs.readFile(filename, function(err, buffer) {
    content = buffer.toString()
    console.log((content.match(/\n/g) || []).length);
});
