"use strict";
var filtermodule = require("./06_filtermodule");
    
//         function (path,             ext,             callback)
filtermodule(process.argv[2], process.argv[3], function (err, files) {
    if (err) { 
        return console.log(err); 
    }
    files.forEach(function (f) { 
        console.log(f); 
    });
});
