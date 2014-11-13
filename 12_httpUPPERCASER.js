// an HTTP server that receives POST req's, toUpperCase(), and returns.
// listen on process.argv[2]
// use through2-map package to stream transform

// var map = require('through2-map')
// inStream.pipe(map(function (chunk) {
//   return chunk.toString().split('').reverse().join('')
// })).pipe(outStream)

'use strict';

var http = require('http'),
    tmap = require('through2-map');

var server = http.createServer(function (req, res) {
    // only res to POST
    if(req.method !== 'POST'){ return res.end("Only POST req's please.\n")}
    // take in a post 
    // use through2-map to stream transform toUpperCase and return
    req.pipe(tmap(function (chunk) { 
        return chunk.toString().toUpperCase(); 
    })).pipe(res);
});
server.listen(+process.argv[2]);


// OFFICIAL SOLN 
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
