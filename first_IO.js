// load the fs module from the node core library
// note!  this is also how you load any global module
var fs = require('fs');

// the full path to the file will be the 1st cmd line arg
 // debug: console.log("process.argv:" + process.argv);
var myBuffer = fs.readFileSync(process.argv[2]);
 console.log("myBuffer: " + myBuffer);
// var myString = myBuffer.toString();
//  // debug: console.log("myString: " + myString);

// var myArray = myString.split('\n');
//  // debug: console.log("myArray: "+ myArray);

// //array.length = number of lines
// //that -1 is the number of '/n' char's you had!
// console.log(myArray.length - 1);
