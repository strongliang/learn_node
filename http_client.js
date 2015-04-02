// simple client, handle response
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', function (chunk) {
        console.log(chunk.toString())
    })

    response.on('end', function () {
        // console.log(str)
    })
})

/** official answer

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})

*/