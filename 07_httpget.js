// perform an HTTP GET request to a URL provided as process.argv[2]
// console.log each string line of "data"

// use the http core module
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html
var http = require('http');
var URL = process.argv[2];

http.get(URL, function(res) {
    res.setEncoding("utf8");
    res.on("data", console.log);
    res.on('error', console.error);
});
