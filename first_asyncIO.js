// do cat file | wc -l but now asynchronously
// var fs = require('fs');

// var filePath = process.argv[2],
//     myString;

// // doNewlineCounter(filePath, console.log);
// function doNewlineCounter(filePath, callbackFunction) {
//   fs.readFile(filePath, "utf8", function(err, data){  
//   // 'utf8' means data is a String.
//      if (err) { throw err; }
//      // console.log(                          );
//      callbackFunction(data.split("\n").length-1);
//   });
// }

// doNewlineCounter(filePath, console.log);


// official solution // 
var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function(err, data){
    if(err){ throw err; }
    var numLines = data.toString().split('\n').length - 1;
    console.log(numLines);
});
