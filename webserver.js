var http = require('http');

var serv = http.createServer(function(req, rsp) {
    rsp.end('hey there');
});

serv.listen(8080);

