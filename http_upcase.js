var port = process.argv[2]
var http = require('http')
var map = require('through2-map')

var serv = http.createServer(function (req, rsp) {
    if (req.method == 'POST') {
        // rsp.end('foobar\n')
        // console.log(req.body)
        req.pipe(map(function (chunk) {
          return chunk.toString().split('').reverse().join('')
        })).pipe(rsp)
    }

    if (req.method == 'GET') {
        rsp.writeHead(200, {'Content-Type': 'test/html'})
        rsp.end('blah\n')
    }
})

serv.listen(port)
