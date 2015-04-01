var ls_dir = require('./ls_dir');

// ls_dir.ls('.', 'js', console.log);

// not handling the error case
// ls_dir(process.argv[2], process.argv[3], console.log);

ls_dir(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        return console.error(err);
    }
    data.forEach(function (elem) {
        console.log(elem);
    });
});
