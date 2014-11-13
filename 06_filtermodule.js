"use strict";
var fs      = require('fs'),
    path    = require('path');

module.exports = function (dirPath, ext, callback) {     // export just this function
    fs.readdir(dirPath, function (err, list) {     
        if (err) { 
            return callback(err); 
        }   
        var filteredList = [];    
        for (var i=0, len=list.length; i<len; i++) {
            if (("."+ext) === path.extname(list[i])) { // we have a match, add it
                filteredList.push(list[i]);
            }
        }
        return callback(null, filteredList);
    });
};
