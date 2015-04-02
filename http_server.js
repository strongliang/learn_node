var fs = require('fs')

var port = process.argv[2]
var filename = process.argv[3]

var http = require('http')

var serv = http.createServer(function (req, rsp) {
    var readStream = fs.createReadStream(filename)

    readStream.on('open', function () {
        readStream.pipe(rsp)
    })

    readStream.on('error', function (err) {
        console.error(err)
        rsp.end(err)
    })
})

serv.listen(port)


/* official solution

    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/