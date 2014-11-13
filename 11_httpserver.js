'use strict';

var http = require('http');
var fs   = require('fs');

var server = http.createServer(function (req, res) {  // called once per conn
    // req handling logic
    // fs.createReadStream(process.argv[3])  //will stream file contents to response.
    res.writeHead(200, { 'content-type' : 'text/plain' });

    fs.createReadStream(process.argv[3]).pipe(res);
    // fs.cRS(file).pipe(to the response)  !  simple. :) nice.
});
server.listen(+process.argv[2]);

// loc file to serve:  process.argv[3] 


// // OFFICIAL SOLN 
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
