// use http.get() like before, but you'll have 3 URLs
// collect the complete content, and output to console,
// in the same order as the URLs were provided, expect servers
// to complete out of order, so you must wait for them all to complete.

// recursive solution !
// https://github.com/jdan/nodeschool/blob/master/learnyounode/09-juggling-async.js
// var http = require('http');
// var urls = process.argv.slice(2);

// function get(urls) {
//   if (!urls.length) return;     // zero case, if don't have any, return

//   http.get(urls[0], function (response) {   // start with the first url
//     var data = '';

//     response.on('data', function (chunk) {
//       data += chunk.toString();     // when we get some data, += it
//     });

//     response.on('end', function () {
//       console.log(data);        // log it
//       get(urls.slice(1));       // when done, goto next step via urls.slice(1) !
//       // maybe populate an array for better async goodies
//     });
//   });
// }

// get(urls);      // kickoff the recursive function get()


// 
// https://github.com/randallagordon/nodeschool-learnyounode/blob/master/09-jugglingasync.js
// "use strict";

// var http = require("http");

// var responses = [],         // holds all the answers in one array
//     responsesReturned = 0,      // count of how many are done
//     requests = process.argv.slice(2);   // the URL requests

// requests.forEach(function (url, index) {    // arr.forEach()
//   http.get(url, function (res) {
//     var body = "";
//     res.setEncoding("utf8");
//     res.on("data", function (data) { body += data; });
//     res.on("end", function () {
//       responsesReturned += 1;
//       responses[index] = body;

//       if (responsesReturned === requests.length) {
//         responses.forEach(function (r) {
//           console.log(r);
//         });
//       }
//     });
//   });
// });
"use strict";

var http = require('http'),
    //URLs = process.argv.slice(2),
    URLs = process.argv[2],
    countURLs = 0,
    allDataArr= [];

URLs.forEach(function (url, index) {
    http.get(url, function (res) {
        var allData = "";
        res.setEncoding('utf8');
        res.on('data', function (data) { allData += data; });
        res.on('end', function () { 
            countURLs += 1;
            allDataArr[index] = allData; 

            if (countURLs === URLs.length) {  // all done
                allDataArr.forEach(function (str) { console.log(str); })
            }
        });
    });
})




