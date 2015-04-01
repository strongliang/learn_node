var port = process.argv[2]
var http = require('http')
var map = require('through2-map')

var serv = http.createServer(function (req, rsp) {
    if (req.method == 'POST') {
        // rsp.end('foobar\n')
        // console.log(req.body)
        req.pipe(map(function (chunk) {
          return chunk.toString().toUpperCase()
        })).pipe(rsp)
    }

    if (req.method == 'GET') {
        rsp.writeHead(200, {'Content-Type': 'test/html'})
        rsp.end('blah\n')
    }
})

serv.listen(port)

/* official solution

    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
