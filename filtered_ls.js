// create a ls filtered by file extension.
var fs          = require('fs'),
    path        = require('path'),
    pathToDir   = process.argv[2],
    extWanted   = "." + process.argv[3];
 //debug: console.log(pathToDir);
 //debug: console.log(extWanted);

// print the list of file w/ext to console, one per line, async
fs.readdir(pathToDir, function(err, list){
    if(err){ throw err; }
    // do something with list, an array of filename str's
     //debug: console.log(list);
    for( var i=0, len=list.length; i<len; i++ ){
        // get the ext name of the item in the list
        // does that === extWanted?
        if( extWanted === path.extname(list[i]) ){
            // we have a match, log it
            console.log(list[i]);
        }
    }
});

// node's path module, extname method.
// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

// OFFICIAL SOLN //
// var fs = require('fs');
// var path = require('path');
// 
// fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//          if (path.extname(file) === '.' + process.argv[3]){
//              console.log(file);
//          }
//      })
// });


