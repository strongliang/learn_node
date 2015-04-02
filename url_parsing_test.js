var url = require('url')

urlstr = url.parse('http://localhost:800/about?name=123', true)
console.log(urlstr);
console.log(urlstr.query.name);
