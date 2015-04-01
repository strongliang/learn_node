var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2, process.argv.length)
// console.log(urls)
var res = {}
var res_count = 0

urls.forEach(function (url) {
    // console.log(url)
    http.get(url, function (response) {
        // console.log('foo')
        var str = ''
        response.on('data', function (data) {
            str += data
        })
        // response.pipe(bl(function (err, data) {
        //     if (err)
        //         return console.error(err)
        //     data = data.toString()
        //     res[urls.indexOf(url)] = data
        // }))
        response.on('end', function () {
            res_count += 1
            res[urls.indexOf(url)] = str
            // console.log(str)
            // console.log('res_count: '+res_count)
            // console.log('urls.length: '+urls.length)
            if (res_count == urls.length) {
                // console.log(res)
                for (var key in res) {
                    console.log(res[key])
                }
            }
        })
    })
})
