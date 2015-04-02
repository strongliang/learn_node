// json, routing, date, url parsing
var port = process.argv[2]
var http = require('http')
var url = require('url')

var serv = http.createServer(function (req, rsp) {
    if (req.method != 'GET') {
        rsp.end('blah\n')
    }
    rsp.writeHead(200, { 'Content-Type': 'application/json' })

    // the 2nd true is important, it parses query string
    urlp = url.parse(req.url, true)
    date = new Date(urlp.query.iso)
    if (urlp.pathname == '/api/parsetime') {
        data = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    } else if (urlp.pathname == '/api/unixtime') {
        data = {
            'unixtime': date.getTime()
        }
    }
    rsp.end(JSON.stringify(data))
})


/* official solution
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
serv.listen(port)
