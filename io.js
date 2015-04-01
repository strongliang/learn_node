/*
wc -l <one-liner> return 0!
*/
var fs = require('fs');

var filename = process.argv[2];

// buffer is a buffer object
var buffer = fs.readFileSync(filename);

// it has a toString method
content = buffer.toString()
console.log((content.match(/\n/g) || []).length);

// another solution
// console.log(buffer.toString().split('\n').length - 1);
