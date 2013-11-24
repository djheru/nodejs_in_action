var fs = require('fs');
/*
var stream = fs.createReadStream('./resource/sample.json');
stream.on('data', function(chunk){
	console.log(chunk);
});
stream.on('end', function(){
	console.log('finished');
});*/
//pipe stream
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('./resource/image.png').pipe(res);
}).listen(3000);
console.log('Server running on http://localhost:3000');
