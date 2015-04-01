var port = process.argv[2]
var http = require('http')
var url = require('url')

var serv = http.createServer(function (req, rsp) {
    if (req.method != 'GET') {
        rsp.end('blah\n')
    }
    rsp.writeHead(200, { 'Content-Type': 'application/json' })

    urlp = url.parse(req.url)
    if (urlp.pathname == '/api/parsetime') {
        date = new Date()
        sdate = urlp.query.split('=')[1]
        data = {
            'hour': date.getHours(sdate),
            'minute': date.getMinutes(sdate),
            'second': date.getSeconds(sdate)
        }
    } else if (urlp.pathname == '/api/unixtime') {
        data = {
            'unixtime': new Date().getTime(urlp.query.split('=')[1]).toString()
        }
    }
    rsp.end(JSON.stringify(data))
})

serv.listen(port)
