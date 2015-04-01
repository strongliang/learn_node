var net = require('net')
var zeroFill = require('zerofill');

var server = net.createServer(function (socket) {
    var res = ''
    var date = new Date()
    res += zeroFill(date.getFullYear(), 2) + '-'
    res += zeroFill(date.getMonth() + 1, 2) + '-'
    res += zeroFill(date.getDate(), 2) + ' '
    res += zeroFill(date.getHours(), 2) + ':'
    res += zeroFill(date.getMinutes(), 2)
    socket.end(res + '\r\n')
})

// telnet 127.0.0.1 8000 can be used to do this
server.listen(Number(process.argv[2]))


/*
    var net = require('net')

    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
*/