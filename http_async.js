var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2, process.argv.length)
// console.log(urls)
var res = []
var res_count = 0

// this is wrong. loop(code) doesn't equal loop(function(code))
// for (idx=0; idx<urls.length; idx++) {
//     var url = urls[idx]
//     console.log(url)
//     http.get(url, function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err)
//                 return console.error(err)
//             // console.log(data)
//             res[idx] = data.toString()
//             res_count++
//             // console.log('res_count: '+res_count)
//             // console.log('urls.length: '+urls.length)
//             if (res_count == urls.length) {
//                 console.log(res)
//                 // for (var idx in res) {
//                 //     console.log(res[idx])
//                 // }
//             }
//         }))
//     })
// }
function printResult() {
    for (var idx in res) {
        console.log(res[idx])
    }
}
function getOne(idx) {
    var url = urls[idx]
    // console.log(url)
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
            // console.log(data)
            res[idx] = data.toString()
            res_count++
            // console.log('res_count: '+res_count)
            // console.log('urls.length: '+urls.length)
            if (res_count == urls.length) {
                // console.log(res)
                printResult(res)
            }
        }))
    })
}

for (var i=0; i<urls.length; i++) {
    getOne(i)
}
