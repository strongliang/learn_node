var net = require('net')
var server = net.createServer(function (socket) {
    var res = ''
    var date = new Date()
    res += date.getFullYear() + '-'
    var month = date.getMonth()+1
    if (month < 10) {
        res += '0' + month + '-'
    } else {
        res += month + '-'
    }
    res += date.getDate() + ' '
    res += date.getHours() + ':'
    res += date.getMinutes()
    socket.end(res + '\r\n')
    // socket.pipe(socket);
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