var http = require('http');
var URL = process.argv[2];

http.get(URL, function(res){
    var allData = "";

    res.setEncoding('utf8');
    
    res.on('data', function(data){
        allData += data;
    });
    
    res.on('end', function(){
        console.log(allData.length);
        console.log(allData);
    });

});
