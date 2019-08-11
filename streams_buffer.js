var fs = require('fs');
var http = require('http');

var read = fs.createReadStream(__dirname + '/read.txt','utf8');
var write = fs.createWriteStream(__dirname + '/write.txt');

read.on('data',function(_data){
    console.log('new data recieved');
    write.write(_data);
});