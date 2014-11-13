// http://momentjs.com/
// moment().format('MMMM Do YYYY, h:mm:ss a'); // October 21st 2014, 1:21:38 pm
// moment().format('dddd');                    // Tuesday
// moment().format("MMM Do YY");               // Oct 21st 14
// moment().format('YYYY [escaped] YYYY');     // 2014 escaped 2014

// https://github.com/rodrigo-medeiros/node-school-lessons/blob/master/learn-you-the-nodejs-for-much-win/time-server.js
// 

// INSTRUCTIONS
// listen to TCP on port provided as process.argv[2]
// "YYYY-MM-DD hh:mm\n"
// "2014-10-21 13:25\n"

var net = require('net'),
    moment = require('moment');

var server = net.createServer(function (socket) { 
    // socket handling logic goes in here
    // the socket obj contains meta data about conn, but is also a Node duplex stream.  
    // we need to write data and close the socket.
    socket.write(moment().format('YYYY-MM-DD HH:mm') + '\n');
    socket.end();   // closes the socket.
});
server.listen(process.argv[2]);


// OFFICIAL VERSION, wo momentjs
    // var net = require('net')
    
    // function zeroFill(i) {
    //   return (i < 10 ? '0' : '') + i
    // }
    
    // function now () {
    //   var d = new Date()
    //   return d.getFullYear() + '-'
    //     + zeroFill(d.getMonth() + 1) + '-'
    //     + zeroFill(d.getDate()) + ' '
    //     + zeroFill(d.getHours()) + ':'
    //     + zeroFill(d.getMinutes())
    // }
    
    // var server = net.createServer(function (socket) {
    //   socket.end(now() + '\n')
    // })
    
    // server.listen(Number(process.argv[2]))
