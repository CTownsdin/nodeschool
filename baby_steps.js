// a program that accepts one+ comd line args and prints the sum

// args via global process.argv array 
// console.log(process.argv);

var numSum=0;
for (var i=2, len=process.argv.length; i<len; i++){
    numSum += +process.argv[i];     // when + num'ifies it.
}
console.log(numSum);
