// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

// For example:
//   /api/parsetime?iso=2013-08-10T12:10:15.474Z
//   

'use strict';

var http = require('http'),
    url = require('url');   // url parsing, returns an object with url pieces inside
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/url.html

// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

// https://github.com/randallagordon/nodeschool-learnyounode/blob/master/13-httpjsonapiserver.js

function parsetime (time) {     // returns obj w p's hour: min: & sec:
    return {
        hour:       time.getHours(),
        minute:     time.getMinutes(),
        second:     time.getSeconds(),
    };
}

function unixtime (time) {
    return {
        unixtime:   time.getTime(),
    };
}

var server = http.createServer(function (req, res) {
    if (req.method !== "GET" ) { return res.end(); }

    var parsedUrl = url.parse(req.url, true);   // called parse method, true means also parse the query string.
    var time = new Date(parsedUrl.query.iso);  // make a Date from the called time in the parsedUrl, the value that goes with the iso key.
    var timeResult = undefined;
 
    if (parsedUrl.pathname === "/api/parsetime") {
    timeResult = parsetime(time);     // parse the req'd time via parsetime
    } 
    else if (parsedUrl.pathname === "/api/unixtime") {
    timeResult = unixtime(time);      // parse the req'd time via unixtime
    }

    if (timeResult) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(timeResult))
    } else {        // timeResult is still undefined
        res.writeHead(404)
        res.end()
    }
    //res.writeHead(200, { "Content-Type": "application/json" });
    //res.end(JSON.stringify(time));
});

server.listen(process.argv[2]);


// OFFICIAL SOLN 
    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime : time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url))        // regex .text matching
    //     result = parsetime(time)                // do parsetime
    //   else if (/^\/api\/unixtime/.test(req.url))    // regex .text matching
    //     result = unixtime(time)                 // do unixtime
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))
