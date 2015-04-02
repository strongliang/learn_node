// collect result, simple client, utf8
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    var str = ''
    // var count = 0
    response.setEncoding('utf8')
    response.on('data', function (chunk) {
        str += chunk;
        // count += str.length  // this didn't work, why?
    })
    response.on('end', function () {
        console.log(str.length)
        console.log(str)
    })
})


/*
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/