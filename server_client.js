var http = require('http');

var server  = http.createServer(function(req,res){
    console.log('request was made : ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Kya bolti Public');
});

server.listen(3000,'127.0.0.1');
console.log('Bahut hard!!');